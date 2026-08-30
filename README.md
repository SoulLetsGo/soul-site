# soul-site

Site da Soul. Três páginas estáticas, publicadas no Cloudflare Pages a partir deste repositório.

**O site está em obra e não pode ser indexado.** Ver o checklist de lançamento no fim.

Todas as páginas seguem o export do Claude Design de 30 de agosto de 2026
(`Recriação de site com placeholders.zip`). **O site inteiro está no tema claro**: a rodada
anterior tinha só a home, agora case e parada também vieram claras no design.

---

## Identidade da home

| papel | cor |
| --- | --- |
| fundo | `#F2E8D8` |
| texto | `#2B1D08` |
| destaque, títulos e badge | `#A9482B` |
| fundo de imagem e caixas | `#E3D5BC` |
| texto sobre foto | `#FFF6E5` |

Títulos em Libre Baskerville, com o trecho entre asteriscos virando itálico
(`heroTitle: '*já* estamos lá.'`). Títulos de cartão, faixa rolante e painel da rota em Poppins.

---

## Estrutura

```
public/                       diretorio de saida do Cloudflare Pages
  index.html                  home, tema claro, vinda do Soul Light
  case.html                   molde de case, ?c=buffalo|knafs|salta
  stop.html                   molde de parada da rota, ?s=<id>
  minidocs.html               social minidocs, ?d=<id>
  credits.html                autores e licencas das fotos de referencia da rota
  soul-data.json              18 regioes, janelas, 45 fotos de referencia com credito
  route-data.js               20 paradas e 70 pontos filmaveis
  support.js                  runtime do prototipo, carrega React e Babel
  favicon.svg                 "s" terracota sobre creme
  robots.txt                  bloqueio total de indexacao enquanto em obra
  sitemap.xml                 so passa a valer no lancamento
  _headers  _redirects
  assets/
    logo-soul-terracota.svg   logo da home
    logo-soul-dark.svg
    logo-soul.svg             versao clara, usada nas paginas de tema escuro
    *.webp                    7 fotos da soul
    map/*.jpg                 45 referencias de locacao, 640px

FOTOS /                       originais em alta, fora do git
REFERENCIAS-IMAGENS/          banco de 70 imagens do Commons, fora do git
_arquivo-local/               o que saiu desta publicacao, fora do git
BRIEFING_COWORK.md            handoff da Thaina
FOTOS_PENDENTES.md            checklist de captacao
COPY_PENDENTE.md              decisoes de texto que dependem da Thaina
```

## Configuração do Cloudflare Pages

| campo | valor |
| --- | --- |
| repositório | `soul-site`, privado |
| branch de produção | `main` |
| comando de build | *deixar vazio* |
| diretório de saída | `public` |
| domínio | `soulletsgo.com` |

Não existe build. O Pages só serve o conteúdo de `public/` como está.

**Não mexer em nenhum registro de DNS de e mail.** MX, SPF e DKIM do Google Workspace já estão replicados e conferidos.

## Rodar localmente

```bash
python3 -m http.server 8788 --directory public
```

Depois abrir `http://localhost:8788`. Precisa de servidor, porque as páginas fazem `fetch` de `soul-data.json` e `import` de `route-data.js`.

## Onde mexer em cada coisa

| o que | onde |
| --- | --- |
| texto das três línguas da home | objeto `COPY` em `public/index.html` |
| texto do bloco quem somos | objeto `ABOUT` em `public/index.html` |
| capas da home | `CASE_COVERS` e `PKG_COVERS` em `public/index.html` |
| conteúdo dos cases | objeto `CASES` em `public/case.html` |
| paradas e pontos filmáveis | `public/route-data.js` |
| regiões, janelas e fotos da rota | `public/soul-data.json` |

Slot de foto ainda vazio mostra a etiqueta `photo pending` na própria página, e some sozinha
quando o campo é preenchido. A lista completa está em `FOTOS_PENDENTES.md`.

## Licença das imagens da rota

As 45 fotos do painel da rota **não são da Soul.** São referências de locação baixadas do
Wikimedia Commons, quase todas sob **CC BY-SA**, que exige crédito ao autor, menção à licença
e, para obra derivada, a mesma licença.

Por isso cada foto carrega `author`, `license` e `source` no `soul-data.json`. O crédito aparece
em três lugares: no `title` da miniatura da tira, sob a foto ampliada no cartão do mapa, e na
página `credits.html`, que lista as 45 agrupadas por região com link para a origem no Commons.

A home traz só uma linha no rodapé apontando para lá. A página é gerada a partir do
`soul-data.json`, então quando uma referência é trocada por foto própria e os campos `author`,
`license` e `source` saem da entrada, a linha some de `credits.html` sozinha.

**Se essas imagens forem trocadas por foto própria, apagar também `author`, `license` e `source`
da entrada.** A linha some da lista de créditos sozinha.

Licenças em uso hoje: CC BY-SA 4.0 (21), CC BY-SA 2.0 (11), CC BY-SA 3.0 (4), CC BY 2.0 (4),
CC0 (2), domínio público (1), CC BY 3.0 (1), CC BY 4.0 (1).

## Imagens

Tudo em **WebP**, gerado com Pillow a partir dos originais em alta, nunca reencodando um WebP
em cima de outro.

| conjunto | onde | tamanho | quantidade | peso |
| --- | --- | --- | --- | --- |
| fotos da Soul | `assets/*.webp` | 2000px no lado maior | 7 | 1,6 MB |
| referências da rota | `assets/map/*.webp` | 640px no lado maior | 45 | 1,9 MB |

O site inteiro tem **3,8 MB**. O maior arquivo é `fundo-abertura.webp`, com 533 KB, bem abaixo
do teto de 25 MiB por arquivo do Cloudflare Pages.

### Como regerar

Esta máquina não tem `cwebp`, `ffmpeg`, imagemagick, Node nem Homebrew, e o `sips` do sistema
lê WebP mas não escreve. O encoder veio do Pillow, num venv isolado, sem sudo e sem tocar no
sistema:

```bash
python3 -m venv .venv && .venv/bin/pip install Pillow
```

Depois, para qualquer foto nova:

```python
from PIL import Image
im = Image.open('origem.jpg').convert('RGB')
im.thumbnail((2000, 2000), Image.LANCZOS)   # 640 para as referencias da rota
im.save('public/assets/destino.webp', 'WEBP', quality=82, method=6)
```

`quality=82` e `method=6` são o par usado em tudo que está no ar. `thumbnail` preserva a
proporção, então nada é cortado na conversão: o corte fica por conta do CSS de cada slot.

## Checklist do dia do lançamento

O site pode subir com placeholder. **Divulgar o link exige outra régua**, mais dura:

- [ ] zero etiqueta `photo pending` no site
- [ ] painel da rota com foto própria, ou decisão consciente de manter referência creditada
- [ ] faixa rolante reescrita, ver `COPY_PENDENTE.md`
- [ ] case knafs confirmado pela Thainá, ver `COPY_PENDENTE.md`
- [ ] case e parada portados para o tema claro, ou decisão de manter os dois temas
- [ ] trocar `public/robots.txt` pelo bloco de lançamento já comentado dentro dele
- [ ] remover `<meta name="robots" content="noindex, nofollow">` de `index.html`, `case.html` e `stop.html`
- [ ] remover `X-Robots-Tag: noindex, nofollow` de `public/_headers`
- [ ] conferir HTTPS em `https://soulletsgo.com`
- [ ] `credits.html` continua linkada no rodapé e atualizada

## Pendências técnicas conhecidas

- ~~Case e parada no tema escuro.~~ **Resolvido pelo design novo.** As cinco páginas estão claras.
- **Rótulos em caixa alta por CSS.** O design novo usa `text-transform:uppercase` em rótulos de
  seção: 1 ocorrência na home, 3 no case, 7 nos minidocs. Isso contraria a regra de caixa do
  briefing, que pede caixa baixa em rótulos. Como é escolha de design nova, e não regressão de
  uma correção minha, deixei como veio. Decisão da Thainá: manter ou remover o `text-transform`.
- ~~Peso das imagens.~~ **Resolvido.** Site inteiro em 3,8 MB, tudo WebP dentro da regra de
  2000px. Ver a seção de imagens abaixo.
- **React e Babel vindos da unpkg a cada visita.** Deixa a primeira tela lenta. O briefing
  classifica como melhoria desejável, não bloqueio.
- **Alternador de idioma por JavaScript.** O Google só enxerga o inglês. Decisão de arquitetura
  pendente, registrada no briefing.
- **`cwebp` não instalado.** A conversão continua saindo pelo Pillow num venv, receita acima.
  Não bloqueia: não há nenhum JPEG em `public/`.
- **Favicon só em SVG.** Falta um PNG para `apple-touch-icon`, que não dá para gerar aqui sem
  rasterizador.
- **Créditos do mapa.** A tarja `© CARTO, © OpenStreetMap contributors` é exigência de licença
  dos dois. Não remover. Pode ter o estilo ajustado.
