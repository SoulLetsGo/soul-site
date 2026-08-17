# soul · briefing de execução para a sessão de cowork

Documento de handoff. Tudo aqui já foi decidido pela Thainá. Não reabrir.
Gerado em 14 de agosto de 2026.

---

## 0. Quem decide

Thainá. Todas as decisões de copy, identidade visual e escopo são dela.
Marcelo não participa deste processo.

---

## 1. Escopo de publicação

**Vão ao ar três páginas:**

| arquivo original | vira | conteúdo |
| --- | --- | --- |
| `Soul.dc.html` | `index.html` | principal: abertura, faixa, trabalhos, mapa, pacotes, agenda |
| `Stop.dc.html` | `stop.html` | molde de parada da rota |
| `Case.dc.html` | `case.html` | molde de case |

**Ficam de fora desta publicação:**

- `Soul Lets Go.dc.html` — a página do canal. Sai até existir export real do Instagram Insights.
- `Soul Lets Go.html` — bundle standalone duplicado.
- `soul-letsgo-standalone-src.html` — duplicado.
- `Studio Site.dc.html` — direção visual antiga, vermelho e preto, Helvetica. Contraria a paleta travada. Não está ligado a nenhuma página.
- pasta `uploads/` — 36 MB de prints de trabalho.
- pasta `scraps/` — 14 MB de rascunhos (`route.json`, `soul-src.html`, `soul-template.html`).
- `.thumbnail`

Corrigir todos os links internos entre as três páginas depois do rename.

---

## 2. Cartão do soul let's go na home

O quarto cartão de "trabalhos selecionados" **permanece na página**, mas o link passa a apontar para `https://instagram.com/soulletsgo` em vez da página interna.

Abrir em nova aba.

---

## 3. Regra de caixa (decisão da Thainá, substitui a regra antiga de caixa baixa estrita)

| elemento | caixa |
| --- | --- |
| títulos e headlines | baixa |
| rótulos de seção | baixa |
| menu e botões | baixa |
| nomes de pacote e preços | baixa |
| legendas de imagem e etiquetas | baixa |
| itens de lista dos pacotes | baixa |
| parágrafos e texto corrido | normal |
| notas de rodapé dos pacotes | normal |
| nomes de lugar dentro de texto corrido | normal |

**Aplicar nas três línguas.** O inglês e o espanhol estão hoje com menus e nomes de pacote em caixa alta inicial e precisam ser corrigidos. O português está quase correto.

Exemplos do que precisa baixar em EN: `All work`, `Where we shot it`, `Book a call`, `Media kit`, `Hire`, `The route`, `Packages`, `Content bank`, `Cinematic`, `Hero film`, `Best option`, `I want content there`, `All stops on the route`, `Book a window`, `Loading the location`.

---

## 4. Remoções obrigatórias

**Números sem fonte.** No arquivo da página principal existem os arrays `kit` e `audience` com `128000`, `2400000`, `41000`, `9`, e a divisão `46% / 31% / 23%`. Não estão sendo exibidos, mas continuam no código. **Apagar os arrays inteiros**, não comentar. Nenhum desses números tem fonte rastreável.

**Case knafs.** O produto já foi lançado e as fotos são da Soul. O case entra completo. Reescrever as oito ocorrências de "held until release is authorised", que hoje se repetem inclusive nas cinco legendas de imagem.

---

## 5. Copy pendente, não resolver sozinho

A faixa rolante da home diz hoje:

- EN: `now in the american continent · content shot like film ·`
- PT: `agora no continente americano · conteúdo gravado como cinema ·`
- ES: equivalente

Isso carrega o eixo antigo, que opõe conteúdo a cinema. O posicionamento atual da Soul é conteúdo de marca com padrão de execução de estúdio, sem a comparação.

**Não reescrever sem a Thainá.** Sinalizar e aguardar.

---

## 6. Integrações

**Agenda.** Google Calendar, código de incorporação:

```
https://calendar.google.com/calendar/appointments/schedules/AcZssZ187ykTo-q7t92TqibKpUH_Zt2Q6hLMiFXpiGoQqgp3CaM2C7ogJ9Xd5wlQlYIUt-K5bMzq5xN7?gv=true
```

Trocar a altura fixa de 600px por altura proporcional, para não quebrar no celular.

**Mapa.** CARTO com OpenStreetMap. Sem chave, sem login.
A tarja de créditos "© CARTO, © OpenStreetMap contributors" é exigência de licença dos dois. **Não remover.** Pode ser ajustada de estilo para não brigar com a identidade.

---

## 7. Imagens

A Thainá entrega uma pasta `fotos` com os originais em alta. **A pasta está incompleta de propósito.** Novas fotos serão feitas na semana de 14 a 21 de agosto de 2026 e entram numa rodada posterior.

**Regra de entrega parcial:**

- Onde existir foto real, substituir o placeholder.
- Onde não existir, **manter o placeholder atual do protótipo**. Não travar a publicação e não improvisar com foto de outro slot.
- Ao final da sessão, gerar `FOTOS_PENDENTES.md` na raiz do projeto, listando slot por slot o que ainda falta, com página, seção e proporção exigida. Esse arquivo é a lista de captação da próxima leva e vira o checklist da rodada seguinte.
- Placeholder é aceitável porque o site sobe com indexação bloqueada e sem ser compartilhado. **Nenhuma imagem placeholder pode continuar no ar no dia em que o link for divulgado.**

Converter para WebP, largura máxima em torno de 2000px, e conferir que nenhum arquivo passa de 25 MiB, que é o teto por arquivo do Cloudflare Pages.

Vídeo não sobe para o Pages. Vai para Vimeo ou YouTube não listado, embutido por iframe.

**Proporções por slot, conferidas no CSS do arquivo novo:**

Página principal

| onde | proporção | quantas |
| --- | --- | --- |
| fundo da abertura (showreel) | 16:9, tela cheia | 1 |
| capas dos trabalhos selecionados | 16:7 | 3 |
| capa do cartão soul let's go | 16:7 | 1 |
| imagem do bloco "sobre" | 4:5 | 1 |
| capas dos pacotes | 16:6 | 3 |

Página de case, por case (buffalo, knafs, salta)

| onde | proporção |
| --- | --- |
| imagem principal | 16:9 |
| filme vertical 01 | 9:16 |
| filme vertical 02 | 9:16 |
| produto | 4:5 |
| paisagem | 3:2 |

Página de parada da rota

| onde | proporção | quantas |
| --- | --- | --- |
| pontos filmáveis | 4:3 | até 4 por parada, 70 no total |

Mínimo para o site parecer pronto: 9 da principal mais 15 dos cases, ou seja 24. As das paradas entram aos poucos e o próprio site mostra aviso de foto pendente onde faltar.

---

## 8. soul-data.json

Já existe no projeto, com treze regiões e schema definido. Manter e usar.

Campos hoje nulos, intencionalmente: `slots` e `season_note_*` em todas as regiões. **Não preencher com valor plausível.** Ficam nulos até a Thainá informar. Inventar vaga ou nota de temporada cria promessa falsa no site.

Campo `updated_at` hoje em `2026-08-09`.

Consolidar neste arquivo, se ainda não estiverem, todos os campos que envelhecem: cidade atual, coordenadas, estado das regiões, janela de fechamento.

**Atenção:** a abertura da home traz `reported 3 hours ago` como texto fixo. Não é relógio. Envelhece sozinho e vira afirmação falsa. Resolver: ou vira campo com data no `soul-data.json`, ou sai.

---

## 9. Camada técnica

- `robots.txt` com bloqueio de indexação **enquanto o site estiver em obra**. Sai no dia do lançamento. O site vai ficar online antes de estar pronto e não pode ser indexado nesse estado.
- `sitemap.xml`
- meta tags de título e descrição por página
- favicon a partir de `assets/logo-soul.svg`
- `_headers` e `_redirects`
- avaliar o carregamento: as páginas hoje buscam React e Babel na internet a cada visita e compilam no navegador do visitante. Deixa a primeira tela lenta. Melhoria desejável, não bloqueio.

**Idioma e busca:** o alternador de idioma é por JavaScript, então o Google só vai enxergar o inglês. Fica registrado como decisão de arquitetura pendente, não resolver nesta sessão.

---

## 10. Repositório e publicação

- Repositório privado `soul-site` no GitHub, já criado.
- Cloudflare Pages, plano gratuito, conectado ao repositório.
- Domínio `soulletsgo.com`, registrado no Squarespace, DNS na Cloudflare.
- MX, SPF e DKIM do Google Workspace já replicados e conferidos. **Não mexer em nenhum registro de DNS de e mail.**

---

## 11. O que não fazer

- Não criar conta, não digitar senha, não inserir cartão, não aceitar termos de serviço.
- Não publicar nada em canal público sem a Thainá pedir.
- Não inventar número, estatística, resultado de campanha ou tamanho de audiência.
- Não preencher campo nulo do `soul-data.json` com valor plausível.
- Não reescrever a faixa rolante sem a Thainá.
- Não usar travessão em texto de resposta.

---

## 12. Ordem sugerida da sessão

1. Conectar a Cloudflare (skills e MCP), com aprovação da Thainá.
2. Limpar o projeto: remover pastas e arquivos da seção 1.
3. Renomear as três páginas e corrigir os links internos.
4. Apagar os arrays `kit` e `audience`.
5. Aplicar a regra de caixa nas três línguas.
6. Reescrever o case knafs.
7. Trocar o link do cartão do soul let's go para o Instagram.
8. Inserir o código da agenda com altura proporcional.
9. Converter as imagens disponíveis e substituir os placeholders correspondentes. Manter placeholder onde faltar foto e gerar `FOTOS_PENDENTES.md`.
10. Camada técnica, com `robots.txt` bloqueando indexação.
11. Subir para o GitHub.
12. Conectar o Pages, ligar o domínio, conferir HTTPS.
13. Segundo commit de teste, feito pela Thainá.

---

## 13. Métrica de sucesso da sessão

Site no ar em `soulletsgo.com` com HTTPS, sem nenhum número sem fonte, sem indexação, com e mail funcionando, com `FOTOS_PENDENTES.md` gerado, e uma alteração publicada pela mão da Thainá.

Publicação com placeholder é estado intermediário aceito nesta rodada. O critério para divulgar o link é outro e mais duro: zero placeholder, zero número sem fonte, faixa rolante reescrita, e `robots.txt` liberado.
