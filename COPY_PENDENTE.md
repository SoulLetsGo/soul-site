# copy pendente

Decisões de texto que dependem da Thainá. Nada aqui foi escrito ou alterado sem ela. Atualizado em 30 de agosto de 2026, rodada 02.

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

## 4. Cidade atual e coordenadas · resolvido pelo próprio design

O `Soul Light.dc.html` **removeu a barra da abertura** que mostrava cidade e coordenadas fixas.
Com ela some o texto que envelhecia sozinho, que era o problema apontado na seção 8 do briefing.

Por isso o bloco `current` que eu tinha criado no `soul-data.json` saiu junto: não sobrou nada
na página que o renderizasse, e campo não usado com data velha é pior que campo nenhum.

O que sobrou de campo que envelhece está todo em `soul-data.json`, e agora é o próprio site que
calcula: `closes_on` da região `andean-patagonia` está em 2026-11-15, e a contagem regressiva
vem daí. `updated_at` está em 2026-08-21, a data do projeto de design.

Campos `slots` e `season_note_*` continuam nulos, como o briefing mandou. Não foram preenchidos.

---

## 5. Imagens de referência da rota · decisão pendente

O painel da rota agora mostra 45 fotos que **não são da Soul**. São referências de locação do
Wikimedia Commons, sob licença livre, creditadas na seção de créditos no rodapé.

Isso é ótimo para apresentar a rota antes da captação, e é exatamente para o que o banco foi
montado. Mas é uma escolha, não um default: o site passa a exibir foto de terceiro com o nome
do autor no rodapé.

**Duas saídas, as duas legítimas:**

1. manter, tratando o painel como mapa ilustrado da rota, e deixar os créditos onde estão;
2. trocar por foto própria conforme a rota for sendo rodada, e aí os créditos somem sozinhos.

O que **não** dá é manter sem crédito. Quase tudo ali é CC BY-SA, que exige atribuição.

---

## 6. Preço do pacote cinematográfico mudou

O `Soul Light.dc.html` traz `US$ 3.000 / mês`, contra `US$ 3.500 / mês` do protótipo anterior.
Foi mantido o valor novo, nas três línguas, por ser o do arquivo mais recente. Se foi engano,
é uma linha por língua em `public/index.html`.

Junto veio uma nota nova no mesmo pacote, que antes era vazia:
`A solução para a sobrecarga do seu time de conteúdo`.


---

## 7. Case knafs · buffalo e knafs agora no mesmo ponto do mapa

A seção 3.4 do briefing 02 mandou corrigir a localização do knafs para **Parque Nacional Torres
del Paine**. O protótipo trazia Bariloche, que estava errado. Corrigido em `place`, `coords`,
`coordsLabel`, `kicker`, `mapTitle` e `mapNote`, mais a etiqueta do cartão nas três línguas da home.

Dentro do corpo do texto, a única alteração foi trocar o nome do lugar errado pelo certo. **A
narrativa não foi reescrita**, conforme as seções 5 e 7 do briefing.

Consequência, que é observação para a Thainá e não coisa para resolver aqui: **buffalo e knafs
passam a marcar o mesmo ponto no mapa**, os dois em Torres del Paine. Se foram produções
separadas, o texto de cada case precisa deixar isso claro. Hoje não deixa.

O corpo do case knafs também **continua curto de propósito**, por falta de fonte, como na rodada
anterior. Segue aguardando.
