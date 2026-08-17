# copy pendente

Decisões de texto que dependem da Thainá. Nada aqui foi escrito ou alterado sem ela. Gerado em 16 de agosto de 2026.

---

## 1. Faixa rolante da home · bloqueado por decisão do briefing

Seção 5 do briefing: **não reescrever sem a Thainá.** Ficou exatamente como estava.

Texto no ar hoje, em `public/index.html`, chave `marquee`:

| língua | texto atual |
| --- | --- |
| EN | `now in the american continent  ·  content shot like film  ·  ` |
| PT | `agora no continente americano  ·  conteúdo gravado como cinema  ·  ` |
| ES | `ahora en el continente americano  ·  contenido filmado como cine  ·  ` |

O problema apontado no briefing: essa frase carrega o eixo antigo, que opõe conteúdo a cinema. O posicionamento atual é conteúdo de marca com padrão de execução de estúdio, sem a comparação.

**Critério de divulgação do link exige que isso seja reescrito.**

---

## 2. Case knafs · escrito, mas precisa de confirmação

O briefing mandou tirar as oito ocorrências de `held until release is authorised`. Todas saíram. O case foi reescrito só com o que dá para rastrear:

- o produto, que aparece na foto entregue e é um canivete da knafs;
- a localização, que estava nas coordenadas do próprio protótipo, `-71.31, -41.133`, ou seja Bariloche, Argentina, o mesmo ponto da parada `bariloche` em `route-data.js`.

O que **não** foi inventado e por isso está curto ou ausente:

| campo | estado | o que falta |
| --- | --- | --- |
| `kicker` | `product · bariloche, argentina` | confirmar se a categoria é essa |
| `lede` | escrito | confirmar |
| `body` | dois parágrafos curtos | a narrativa do briefing real, como existe no case buffalo |
| `delivered` | dois itens | a lista real de entregáveis |
| `format` | **vazio de propósito** | qual pacote foi, se foi algum |
| `turnaround` | **vazio de propósito** | prazo real de briefing até entrega |
| `mapNote` | escrito | confirmar |

Arquivo: `public/case.html`, objeto `CASES.knafs`.

**Nota sobre a ficha técnica.** No protótipo, os campos `Format` e `Turnaround` vinham preenchidos por padrão em **todos** os cases, com `cinematic package` e `briefing to delivery in 30 days`, inclusive nos cases onde ninguém tinha confirmado isso. Isso é número e afirmação sem fonte, pela mesma régua da seção 4 do briefing. Agora a ficha só mostra o campo que tem valor conhecido:

- buffalo: `format` e `turnaround` preenchidos, porque a própria lista de entregáveis do case diz `briefing to delivery in 30 days`;
- salta: `format` virou `hero film`, porque o próprio texto do case diz que é o case âncora de hero film;
- knafs: os dois campos ficam de fora até a Thainá informar.

---

## 3. Legenda da abertura da home

Era `showreel placeholder · the soul bronco on a coastal track, cl`, e descrevia uma foto que não é mais a que está no ar.

Agora está neutra, sem afirmar lugar:

| língua | texto |
| --- | --- |
| EN | `still from the route` |
| PT | `still da rota` |
| ES | `still de la ruta` |

Se a Thainá quiser nomear o lugar da foto de abertura, é só dizer qual é.

---

## 4. Cidade atual e coordenadas

Saíram do HTML e viraram campo em `public/soul-data.json`, bloco `current`, junto com a data `as_of`. A abertura agora mostra a data ao lado da cidade, para a informação não envelhecer virando afirmação falsa.

Valor no ar: `puerto natales, magallanes, cl`, `51°44′S 72°30′W`, `as_of 2026-08-09`.

**Isso provavelmente já está vencido.** A janela de Puerto Natales em `route-data.js` ia até 15 de agosto de 2026, e a região `southern-patagonia` em `soul-data.json` fechava em 15 de agosto de 2026. Hoje é 16 de agosto. O site já reclassificou a região sozinho, mas a cidade atual é campo manual. Atualizar `current.place_*`, `current.coords`, `current.coords_label` e `current.as_of` quando puder.

Campos `slots` e `season_note_*` continuam nulos em todas as regiões, como o briefing mandou. Não foram preenchidos.
