# fotos pendentes

Lista de captação. Atualizado em 26 de agosto de 2026, depois de importar o `Soul Light.dc.html` do projeto de design.

Todo slot ainda em placeholder mostra a etiqueta `photo pending` na própria página. **Nenhum desses slots pode continuar assim no dia em que o link for divulgado.**

---

## Resumo

| página | slots | com foto da soul | pendentes |
| --- | --- | --- | --- |
| principal, cartões e capas | 9 | 7 | 2 |
| principal, painel da rota | 45 | 0 | 45 (hoje com referência do Commons) |
| cases | 15 | 0 | 15 |
| paradas da rota, `stop.html` | 71 | 0 | 71 (hoje puxando da Wikipedia) |

Mínimo para o site parecer pronto, conforme o briefing: 9 da principal mais 15 dos cases, ou seja 24. **Faltam 17 desses 24.**

---

## 1. Página principal, cartões e capas

| slot | seção | proporção | arquivo | estado |
| --- | --- | --- | --- | --- |
| fundo da abertura | abertura, tela cheia | 16:9 | `assets/fundo-abertura.webp` | pronto |
| capa trabalho 01 buffalo | trabalhos | 16:7 | `assets/capa-buffalo.webp` | pronto |
| capa trabalho 02 knafs | trabalhos | 16:7 | `assets/capa-knafs.webp` | pronto |
| capa trabalho 03 salta | trabalhos | 16:7 | — | **pendente** |
| capa cartão soul let's go | cartão 04, link para o Instagram | 16:7 | — | **pendente** |
| imagem do bloco sobre | quem somos | 4:5 | `assets/sobre.webp` | pronto |
| capa pacote 1 banco de conteúdo | pacotes | 16:6 | `assets/capa-pacote-1.webp` | pronto |
| capa pacote 2 cinematográfico | pacotes | 16:6 | `assets/capa-pacote-2.webp` | pronto |
| capa pacote 3 filme hero | pacotes | 16:6 | `assets/capa-pacote-3.webp` | pronto |

Onde mexer: constantes `CASE_COVERS` e `PKG_COVERS`, no topo do script de `public/index.html`.

**Enquadramento.** Quatro originais são verticais e estão em slots horizontais. O CSS corta pelo centro, então só a faixa central aparece. Vale conferir no navegador e, se o corte matar o assunto, entregar versão horizontal: `capa-knafs`, `capa-pacote-1`, `capa-pacote-2`, `capa-pacote-3`.

---

## 2. Página principal, painel da rota

45 fotos em 15 regiões. **Nenhuma é foto da Soul.** São referências de locação do Wikimedia Commons, sob licença livre, com autor e licença creditados na seção de créditos no rodapé do site.

Elas cumprem duas funções, e só a primeira é definitiva:

1. apresentar a rota antes da captação, que é para o que o banco foi montado;
2. ocupar o slot até existir foto própria.

| região | nome | estado da janela | fotos | lugares |
| --- | --- | --- | --- | --- |
| `ushuaia` | Ushuaia | filmed | 5 | Canal Beagle · Faro Les Éclaireurs · Glaciar Martial · Parque Tierra del Fuego · Laguna Esmeralda |
| `magallanes` | Magallanes y la Antártica Chilena | filmed | 5 | Cabo de Hornos · Antártica Chilena · Estrecho de Magallanes · Isla Magdalena · Puerto Natales |
| `patagonia-chilena` | Patagonia Chilena | filmed | 5 | Torres del Paine · Cuernos del Paine · Glaciar Grey · Capillas de Mármol · Ventisquero Queulat |
| `andean-patagonia` | Patagonia Argentina | closing | 5 | Cerro Fitz Roy · Laguna de los Tres · Perito Moreno · Cueva de las Manos · Siete Lagos |
| `maule` | Maule Region | open | 5 | Constitución · Radal Siete Tazas · Altos de Lircay · Laguna del Maule · Descabezado Grande |
| `central-andes` | Central Andes | open | 5 | Aconcagua · Puente del Inca · Cajón del Maipo · Embalse El Yeso · Laguna del Inca |
| `catamarca-puna` | Catamarca y La Puna Argentina | route | 3 | Antofagasta de la Sierra · Campo de Piedra Pómez · Cono de Arita |
| `atacama-altiplano` | Atacama & Altiplano | route | 3 | Valle de la Luna · El Tatio · Salinas Grandes |
| `laguna-colorada` | Laguna Colorada | route | 1 | Laguna Colorada |
| `salar-de-uyuni` | Salar de Uyuni | route | 2 | Salar de Uyuni · Isla Incahuasi |
| `lago-titicaca` | Lake Titicaca | route | 1 | Isla del Sol |
| `cusco` | Cusco | route | 2 | Sacsayhuamán · Salineras de Maras |
| `machu-picchu` | Machu Picchu | route | 1 | Machu Picchu |
| `peruvian-andes` | Peruvian Andes | route | 1 | Laguna 69 |
| `ecuador-colombia` | Ecuador & Colombia | route | 1 | Cotopaxi |

Onde mexer: campo `photos` de cada região em `public/soul-data.json`. Trocar `img` pelo arquivo próprio e apagar `author`, `license` e `source`, que aí deixam de ser necessários e a entrada some da lista de créditos sozinha.

---

## 3. Página de case `case.html`

Cinco slots por case mais a imagem de topo, três cases. **Nenhum preenchido.** Todos com placeholder e etiqueta na página.

Por case (buffalo, knafs, salta): imagem principal do topo 16:9, key still 16:9, filme vertical 01 em 9:16, filme vertical 02 em 9:16, produto 4:5, paisagem 3:2.

Existe material do knafs na mão (`assets/capa-knafs.webp`), mas ele está na capa do cartão da home. Não foi reaproveitado no case de propósito: o briefing proíbe improvisar com foto de outro slot.

Onde mexer: campo `heroPhoto` do case e campo `photo` de cada item de `media`, em `public/case.html`.

---

## 4. Página de parada `stop.html`

Uma imagem de topo por parada mais até quatro pontos filmáveis, 20 paradas, 70 pontos. **Nenhuma foto da Soul.** Hoje esses slots buscam imagem da Wikipedia em tempo de carregamento.

Proporção dos pontos filmáveis: 4:3.

Onde mexer: campo `photo` de cada `poi` em `public/route-data.js`.

Essa página ainda está no tema escuro antigo. Ver `README.md`.

---

## Regras técnicas

- Largura máxima em torno de **2000px** no lado maior.
- Nenhum arquivo acima de **25 MiB**, teto por arquivo do Cloudflare Pages.
- **Vídeo não sobe para o Pages.** Vai para Vimeo ou YouTube não listado, por iframe.
- As sete fotos da Soul estão em **WebP**, como o briefing pede, vindas do projeto de design. Estão em resolução cheia, até 4096px, acima da regra de 2000px. Ver a pendência no `README.md`.
- As 45 referências da rota estão em **JPEG de 640px**, geradas aqui a partir de `REFERENCIAS-IMAGENS/`. São exibidas no máximo a 206x104, então 640px já é folga.
