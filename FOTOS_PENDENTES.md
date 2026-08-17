# fotos pendentes

Lista de captação da próxima leva. Gerado em 16 de agosto de 2026, ao fim da sessão de cowork.

Este arquivo é o checklist da rodada seguinte. Todo slot marcado como pendente está no ar hoje com placeholder do protótipo e mostra a etiqueta `photo pending` na própria página. **Nenhum desses slots pode continuar assim no dia em que o link for divulgado.**

---

## Resumo

| página | slots totais | preenchidos | pendentes |
| --- | --- | --- | --- |
| principal | 9 | 7 | 2 |
| cases | 15 | 0 | 15 |
| paradas da rota | 71 | 0 | 71 |
| **total** | **95** | **7** | **88** |

Mínimo para o site parecer pronto, conforme o briefing: 9 da principal mais 15 dos cases, ou seja 24. Faltam 17 desses 24.

---

## 1. Página principal `index.html`

| slot | seção | proporção | arquivo | estado |
| --- | --- | --- | --- | --- |
| fundo da abertura | abertura, tela cheia | 16:9 | `fotos/fundodaabertura.jpg` | pronto |
| capa trabalho 01 buffalo | trabalhos selecionados | 16:7 | `fotos/capa-buffalo.jpg` | pronto |
| capa trabalho 02 knafs | trabalhos selecionados | 16:7 | `fotos/capa-knafs.jpg` | pronto |
| capa trabalho 03 salta | trabalhos selecionados | 16:7 | — | **pendente** |
| capa cartão soul let's go | cartão 04, link para o Instagram | 16:7 | — | **pendente** |
| imagem do bloco sobre | quem somos | 4:5 | `fotos/sobre.jpg` | pronto |
| capa pacote 1 banco de conteúdo | pacotes | 16:6 | `fotos/capa-pacote-1.jpg` | pronto |
| capa pacote 2 cinematográfico | pacotes | 16:6 | `fotos/capa-pacote-2.jpg` | pronto |
| capa pacote 3 filme hero | pacotes | 16:6 | `fotos/capa-pacote-3.jpg` | pronto |

**Atenção de enquadramento.** Quatro dos originais entregues são verticais (4000x6000 ou 3794x4742) e estão sendo usados em slots horizontais de 16:7 e 16:6. O CSS corta pelo centro, então só uma faixa central da foto aparece. Vale conferir cada card no navegador e, se o corte matar o assunto, entregar uma versão horizontal na próxima leva:

- `capa-knafs.jpg` (vertical, usada em 16:7)
- `capa-pacote-1.jpg` (vertical, usada em 16:6)
- `capa-pacote-2.jpg` (vertical, usada em 16:6)
- `capa-pacote-3.jpg` (vertical, usada em 16:6)

---

## 2. Página de case `case.html`

Cinco slots por case, três cases, quinze slots. **Nenhum preenchido.** Todos com placeholder e etiqueta na página.

### buffalo · `case.html?c=buffalo`

| slot | proporção | estado |
| --- | --- | --- |
| imagem principal do topo | 16:9 | **pendente** |
| key still | 16:9 | **pendente** |
| filme vertical 01 | 9:16 | **pendente** |
| filme vertical 02 | 9:16 | **pendente** |
| produto | 4:5 | **pendente** |
| paisagem | 3:2 | **pendente** |

### knafs · `case.html?c=knafs`

| slot | proporção | estado |
| --- | --- | --- |
| imagem principal do topo | 16:9 | **pendente** |
| key still | 16:9 | **pendente** |
| filme vertical 01 | 9:16 | **pendente** |
| filme vertical 02 | 9:16 | **pendente** |
| produto | 4:5 | **pendente** |
| paisagem | 3:2 | **pendente** |

Existe material do knafs já na mão (`fotos/capa-knafs.jpg`), mas ele foi usado na capa do cartão da home. Não foi reaproveitado aqui de propósito: o briefing proíbe improvisar com foto de outro slot.

### salta · `case.html?c=salta`

| slot | proporção | estado |
| --- | --- | --- |
| imagem principal do topo | 16:9 | **pendente** |
| interview frame | 16:9 | **pendente** |
| venue interior | 4:5 | **pendente** |
| retrato | 4:5 | **pendente** |
| corte do filme | 9:16 | **pendente** |
| detalhe | 3:2 | **pendente** |

---

## 3. Página de parada da rota `stop.html`

Uma imagem de topo por parada mais até quatro pontos filmáveis. **Nenhuma foto da Soul ainda.** Hoje esses slots puxam imagem da Wikipedia em tempo de carregamento, que é o placeholder do protótipo, e cada card mostra a etiqueta na página.

Proporção dos pontos filmáveis: **4:3**. Imagem de topo da parada: a primeira foto da parada, usada em corte largo.

| parada | nome | pontos | slots 4:3 pendentes |
| --- | --- | --- | --- |
| `ushuaia` | Ushuaia | 3 | Tierra del Fuego National Park · Beagle Channel · Glaciar Martial |
| `puerto-natales` | Puerto Natales, CL | 3 | Torres del Paine National Park · Bernardo O'Higgins National Park · Cueva del Milodón |
| `el-calafate` | El Calafate, AR | 3 | Perito Moreno Glacier · Lago Argentino · Laguna Nimez Reserve |
| `el-chalten` | El Chaltén, AR | 4 | Monte Fitz Roy · Laguna de los Tres · Cerro Torre · Lago San Martín |
| `los-antiguos` | Los Antiguos, AR | 4 | Lago Buenos Aires · Cueva de las Manos · Monte Zeballos · Chile Chico |
| `bariloche` | Bariloche, AR | 4 | Cerro Catedral · Circuito Chico · Cerro Tronador · Puerto Blest |
| `san-martin` | San Martín de los Andes | 3 | Lanín National Park · Lago Lácar · Ruta de los Siete Lagos |
| `melipeuco` | Melipeuco, CL | 3 | Conguillío National Park · Volcán Llaima · Salto Truful-truful |
| `caviahue` | Caviahue, AR | 3 | Volcán Copahue · Termas de Copahue · Salto del Agrio |
| `talca` | Talca, CL | 3 | Radal Siete Tazas · Altos de Lircay · Maule Wine Valley |
| `santiago` | Santiago, CL | 3 | Cerro San Cristóbal · Valparaíso · Cajón del Maipo |
| `mendoza` | Mendoza, AR | 3 | Aconcagua Provincial Park · Valle de Uco · Puente del Inca |
| `villa-union` | Villa Unión, AR | 4 | Talampaya National Park · Ischigualasto, Valle de la Luna · Laguna Brava · Cuesta de Miranda |
| `tinogasta` | Tinogasta, AR | 4 | Duna Mágica, Fiambalá · Termas de Fiambalá · Ruta de los Seismiles · Ruta del Adobe |
| `cafayate` | Cafayate, AR | 3 | Quebrada de las Conchas · Valles Calchaquíes · Ruta 40 to Cachi |
| `tolar-grande` | Tolar Grande, AR | 4 | Ojos del Mar · Desierto del Diablo · Salar de Arizaro · Cono de Arita |
| `purmamarca` | Purmamarca, AR | 4 | Cerro de los Siete Colores · Salinas Grandes · Cuesta de Lipán · Quebrada de Humahuaca |
| `atacama` | San Pedro de Atacama, CL | 4 | Valle de la Luna · Géiseres del Tatio · Laguna Cejar · Piedras Rojas |
| `uyuni` | Uyuni, BO | 4 | Salar de Uyuni · Isla Incahuasi · Cementerio de Trenes · Laguna Colorada |
| `la-paz` | La Paz, BO | 4 | Valle de la Luna, La Paz · Chacaltaya · Camino de los Yungas · Lago Titicaca |

Total: **70 pontos filmáveis** mais **1 topo por parada**, que reaproveita a primeira foto da parada.

Como muitas dessas paradas ainda não aconteceram, elas entram aos poucos. Nada aqui bloqueia a divulgação da home e dos cases, mas nenhuma página de parada deve ser divulgada enquanto estiver puxando foto da Wikipedia.

---

## Como entregar a próxima leva

1. Colocar os originais em alta na pasta `FOTOS ` na raiz do projeto, com o nome do slot. Exemplos: `capa-salta.jpg`, `capa-soulletsgo.jpg`, `case-knafs-01.jpg`, `stop-bariloche-catedral.jpg`.
2. Converter para no máximo 2000px no lado maior e salvar em `public/fotos/`.
3. Apontar o slot para o arquivo novo:
   - home: constantes `CASE_COVERS` e `PKG_COVERS` no topo do script de `public/index.html`.
   - case: campos `heroPhoto` do case e `photo` de cada item de `media` em `public/case.html`.
   - parada: campo `photo` de cada `poi` em `public/route-data.js`.
4. Assim que o campo é preenchido, a etiqueta `photo pending` some sozinha naquele slot.
5. Riscar a linha aqui.

## Regras técnicas que valem para toda foto

- Largura máxima em torno de **2000px** no lado maior.
- Nenhum arquivo acima de **25 MiB**, que é o teto por arquivo do Cloudflare Pages.
- **Vídeo não sobe para o Pages.** Vai para Vimeo ou YouTube não listado e entra por iframe.
- Conversão desta rodada foi feita em **JPEG de qualidade 80**, e não em WebP, porque a máquina não tem nenhum codificador WebP instalado. Ver `README.md`, seção de pendências.
