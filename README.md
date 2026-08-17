# soul-site

Site da Soul. Três páginas estáticas, publicadas no Cloudflare Pages a partir deste repositório.

**O site está em obra e não pode ser indexado.** Ver a seção de lançamento no fim deste arquivo.

---

## Estrutura

```
public/                    diretorio de saida do Cloudflare Pages
  index.html               principal: abertura, faixa, trabalhos, mapa, pacotes, agenda
  case.html                molde de case, escolhe pelo ?c=buffalo|knafs|salta
  stop.html                molde de parada da rota, escolhe pelo ?s=<id>
  soul-data.json           cidade atual, coordenadas, 13 regioes, janelas de fechamento
  route-data.js            20 paradas e 70 pontos filmaveis
  support.js               runtime do prototipo, carrega React e Babel
  favicon.svg              derivado de assets/logo-soul.svg
  robots.txt               bloqueio total de indexacao enquanto em obra
  sitemap.xml              so passa a valer no lancamento
  _headers  _redirects     cabecalhos e redirecionamentos do Pages
  assets/logo-soul.svg
  fotos/                   fotos convertidas, 2000px no lado maior

FOTOS /                    originais em alta, fora do git
_arquivo-local/            o que saiu desta publicacao, fora do git
BRIEFING_COWORK.md         handoff da Thaina
FOTOS_PENDENTES.md         checklist de captacao da proxima leva
COPY_PENDENTE.md           decisoes de texto que dependem da Thaina
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

Depois abrir `http://localhost:8788`. Precisa de servidor, porque as páginas fazem `fetch` de `soul-data.json` e `import` de `route-data.js`, e isso não funciona abrindo o arquivo direto.

## Onde mexer em cada coisa

| o que | onde |
| --- | --- |
| texto das três línguas da home | objeto `COPY` em `public/index.html` |
| texto do bloco quem somos | objeto `ABOUT` em `public/index.html` |
| capas da home | constantes `CASE_COVERS` e `PKG_COVERS` em `public/index.html` |
| conteúdo dos cases | objeto `CASES` em `public/case.html` |
| paradas e pontos filmáveis | `public/route-data.js` |
| cidade atual, regiões, janelas | `public/soul-data.json` |

Slot de foto ainda vazio mostra a etiqueta `photo pending` na própria página. A etiqueta some sozinha quando o campo da foto é preenchido. A lista completa está em `FOTOS_PENDENTES.md`.

## Checklist do dia do lançamento

O site pode subir com placeholder. **Divulgar o link exige outra régua**, mais dura:

- [ ] zero placeholder de foto, ou seja zero etiqueta `photo pending` no site
- [ ] faixa rolante reescrita, ver `COPY_PENDENTE.md`
- [ ] case knafs confirmado pela Thainá, ver `COPY_PENDENTE.md`
- [ ] `current` em `soul-data.json` atualizado com a cidade de verdade
- [ ] trocar `public/robots.txt` pelo bloco de lançamento que já está comentado dentro dele
- [ ] remover a linha `<meta name="robots" content="noindex, nofollow">` de `index.html`, `case.html` e `stop.html`
- [ ] remover a linha `X-Robots-Tag: noindex, nofollow` de `public/_headers`
- [ ] conferir HTTPS em `https://soulletsgo.com`

## Pendências técnicas conhecidas

- **WebP.** O briefing pede WebP. As fotos foram convertidas em JPEG de qualidade 80 porque esta máquina não tem nenhum codificador WebP: não há `cwebp`, `ffmpeg`, `imagemagick`, Node, Homebrew, e o ImageIO do sistema não escreve WebP. O ganho de peso já foi grande mesmo assim: 86 MB de originais viraram 3,7 MB. Para converter em WebP depois, instalar `libwebp` e rodar `cwebp -q 82` sobre `public/fotos/`.
- **React e Babel vindos da unpkg a cada visita.** As páginas baixam React, ReactDOM e Babel standalone e compilam no navegador do visitante. Deixa a primeira tela lenta. O briefing classifica como melhoria desejável, não bloqueio.
- **Alternador de idioma por JavaScript.** O Google só enxerga o inglês. Registrado no briefing como decisão de arquitetura pendente, não resolvida nesta sessão.
- **Favicon só em SVG.** Falta um PNG para `apple-touch-icon`, que não dá para gerar aqui sem rasterizador.
- **Créditos do mapa.** A tarja `© CARTO, © OpenStreetMap contributors` é exigência de licença dos dois. Não remover. Pode ter o estilo ajustado.
