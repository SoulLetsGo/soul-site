# soul · briefing de execução 02 · aplicar o design novo

Segunda rodada. O site já está no ar em `soul-site.pages.dev`, publicado pelo Cloudflare Pages a partir de `github.com/SoulLetsGo/soul-site`, branch `main`, output `public`.

Decisões desta rodada tomadas pela Thainá. Não reabrir.

---

## 0. Quem decide

Thainá. Marcelo não participa deste processo.

---

## 1. O que esta rodada é

A Thainá entrega um export novo do Claude Design com as páginas redesenhadas. **O design novo entra por cima. O trabalho da rodada anterior precisa sobreviver.**

O export do Claude Design não contém nenhuma das correções feitas na sessão 01. Substituir arquivo por arquivo apaga tudo. A tarefa é migrar o design novo preservando as correções listadas na seção 2.

Método sugerido: comparar cada página nova com a versão publicada, aplicar o design, e depois rodar a checagem da seção 2 item por item antes de commitar.

---

## 2. Correções que precisam sobreviver ao design novo

Esta é lista de **conferência**, não de correção. O design novo provavelmente já não traz esses problemas. O risco que ela cobre é a migração reintroduzir algum sem querer. Checar uma a uma depois da migração e corrigir só o que tiver voltado.

| # | correção | como verificar |
| --- | --- | --- |
| 1 | arrays `kit` e `audience` apagados | zero ocorrência de `128000`, `2400000`, `41000`, `46%`, `31%`, `23%` no código |
| 2 | regra de caixa aplicada em EN, PT e ES | menus, botões, títulos, rótulos, nomes de pacote e legendas em caixa baixa; parágrafos em caixa normal |
| 3 | case knafs sem as oito repetições de "held until release is authorised" | zero ocorrência na página renderizada |
| 4 | cartão soul let's go aponta para `https://instagram.com/soulletsgo` | com `target="_blank"` e `rel="noopener noreferrer"` |
| 5 | etiquetas `photo pending` nos slots sem imagem | visíveis nas três páginas |
| 6 | ficha técnica dos cases só com campo de valor conhecido | sem `format` e `turnaround` preenchidos por padrão |
| 7 | bloqueio de indexação em três camadas | `robots.txt`, meta robots nas páginas, `X-Robots-Tag` no `_headers` |
| 8 | `_redirects` com os 301 dos nomes antigos | `Soul.dc.html`, `Case.dc.html`, `Stop.dc.html` |
| 9 | `soul-data.json` como fonte dos campos que envelhecem | localização atual, coordenadas, estado das regiões |
| 10 | sitemap, meta tags, og e favicon | por página |
| 11 | página do soul let's go continua fora da publicação | não subir |

**Regra de caixa, referência completa:** caixa baixa em títulos, headlines, rótulos de seção, menus, botões, nomes de pacote, preços, legendas de imagem, etiquetas e itens de lista dos pacotes. Caixa normal em parágrafos, notas de rodapé dos pacotes e nomes de lugar dentro de texto corrido.

---

## 3. Ajustes novos desta rodada

### 3.1 Créditos das fotos de referência

O design novo já removeu do rodapé a lista de cerca de 40 linhas de autor e licença. Isso resolveu o problema visual e criou outro: **as fotos do Wikimedia continuam no painel da rota, agora sem crédito nenhum.**

As licenças CC BY e CC BY-SA exigem o nome do autor. Sem crédito em lugar nenhum, o uso fica fora da licença. As fotos ficam, o crédito precisa voltar, fora da home.

Fazer:

1. Criar `credits.html` com a lista completa de autores e licenças, cada uma linkada à origem no Wikimedia Commons. Mesma identidade visual, sem menu comercial e sem CTA. A lista está preservada no histórico do repositório, no commit anterior ao design novo.
2. No rodapé da home, apenas esta linha, no mesmo tamanho e cor do restante:

   `The photographs in the route panel are location references from Wikimedia Commons, not work by Soul. Full credits.`

   Com `Full credits` linkando para `credits.html`.
3. Incluir `credits.html` no sitemap e no bloqueio de indexação, junto com as demais.
4. Em cada foto de referência do painel da rota, exibir autor e licença em texto pequeno, `#FFF6E5` a 45% de opacidade, apenas quando a foto estiver ampliada ou em foco. Fora desse estado, nada aparece.

### 3.2 Botão de agendamento

O design novo já removeu o quadro do Google Calendar embutido. Falta ligar o botão.

Verificar que existe um botão `agendar call` nas páginas onde havia o calendário, e que ele abre em nova aba:

```
https://calendar.app.google/VUfRpbG8s4hUhwDP9
```

Abaixo do botão, uma linha discreta: `opens in google calendar · 30 min`.

Conferir também que não sobrou o rótulo `available times` nem texto provisório de calendário pendente.

### 3.3 Fotos da rota

A Thainá tem fotos próprias em WebP em pastas locais.

Atenção: `FOTOS/` e `REFERENCIAS-IMAGENS/` estão no `.gitignore` e não vão para o site. **Copiar os arquivos usados para dentro de `public/`** e só então apontar as referências. Sem isso o site continua mostrando a imagem antiga mesmo com o arquivo existindo na máquina.

Regra por slot:

- foto própria disponível → substitui a referência do Wikimedia, e o crédito daquele ponto deixa de existir
- sem foto própria → mantém a referência atual com seu crédito
- sem nenhuma imagem → etiqueta `photo pending`

Atualizar `credits.html` e `FOTOS_PENDENTES.md` conforme os slots forem preenchidos.

### 3.4 Coordenadas do case knafs

Corrigir para **Parque Nacional Torres del Paine**. O protótipo trazia Bariloche, que estava errado.

Observação para a Thainá, não para resolver aqui: com isso, buffalo e knafs passam a mostrar o mesmo ponto no mapa. Se foram produções separadas, o texto de cada case precisa deixar isso claro.

### 3.5 Conversão WebP

Se `cwebp` estiver disponível na máquina, converter para WebP as imagens que hoje estão em JPEG. A Thainá recebeu instrução para instalar via Homebrew. Se não estiver instalado, manter JPEG e registrar a pendência.

---

## 4. Verificações depois de subir

O deploy é automático a cada commit em `main`. Depois que o Cloudflare publicar:

1. As três páginas mais `credits.html` respondem 200.
2. Certificado válido.
3. `robots.txt` bloqueando, e meta robots presente em todas as páginas.
4. Todos os links internos funcionam, incluindo os das paradas e dos cases.
5. Nenhuma ocorrência dos números removidos.
6. Atribuição do CARTO e do OpenStreetMap presente no mapa.
7. Botão de agendamento abre a página correta em nova aba.
8. **Scroll no celular:** o design novo deve ter desligado o comportamento de seção fixa do mapa em telas de até 900px. Verificar em viewport estreito que a página rola normalmente na altura do mapa, sem precisar de rolagem extra.

O Claude sem acesso à máquina não consegue auditar o site remotamente, porque o `robots.txt` bloqueia acesso automatizado. Essa verificação só existe aqui.

---

## 5. Continua pendente com a Thainá, não resolver sozinho

1. **Corpo do texto do case knafs.** Ficou curto de propósito na rodada anterior por falta de fonte. Sinalizar e aguardar.

A faixa rolante com `content shot like film` e o `reported 3 hours ago` deixaram de existir no design novo. Confirmar na migração que nenhum dos dois voltou, e não recriar.

---

## 6. Ligar o domínio, se a Thainá pedir

Ainda não foi feito. O site roda em `soul-site.pages.dev`.

Passo dela, no painel, não automatizar:

Em DNS, Records, apagar **apenas**:

| tipo | nome | valor |
| --- | --- | --- |
| A | soulletsgo.com | `198.49.23.144` |
| CNAME | www | `ext-sq.squarespace.com` |

> **Não apagar em hipótese nenhuma:**
> `MX → 1 smtp.google.com` · `TXT → v=spf1 include:_spf.google.com ~all` · `TXT google._domainkey → v=DKIM1...`

Depois, Pages → Custom domains → adicionar `soulletsgo.com` e `www.soulletsgo.com`.

Confirmar MX, SPF e DKIM por `dig` depois da mudança.

---

## 7. O que não fazer

- Não criar conta, não digitar senha, não inserir cartão, não aceitar termos.
- Não remover a atribuição do CARTO e do OpenStreetMap. É exigência de licença.
- Não remover os créditos de autoria das fotos do Wikimedia. Podem sair da home, não do site.
- Não inventar número, estatística, resultado ou tamanho de audiência.
- Não preencher campo nulo do `soul-data.json` com valor plausível.
- Não reescrever a faixa rolante nem o corpo do case knafs.
- Não publicar a página do soul let's go.
- Não liberar a indexação. O site segue em obra.
- Não usar travessão.

---

## 8. Métrica de sucesso

Design novo no ar, os onze itens da seção 2 verificados um a um, `credits.html` criada e linkada, botão de agendamento ligado, scroll do celular normal na altura do mapa, e `FOTOS_PENDENTES.md` atualizado.
