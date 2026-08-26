# publicação

Runbook para colocar o site no ar em `soulletsgo.com`, cumprindo a seção 12 do briefing.

Estado em 26 de agosto de 2026: **o repositório está pronto e auditado.** O que falta são
os dois passos que exigem credencial e painel, que eu não tenho como executar daqui.

---

## Antes de tudo: o que já está conferido

| item da seção 13 | estado |
| --- | --- |
| nenhum número sem fonte | ok, nada de `128000`, `2400000`, `41000` nem os percentuais |
| sem indexação | ok, `robots.txt` com `Disallow: /`, `noindex` nas 3 páginas e `X-Robots-Tag` no `_headers` |
| e mail funcionando | ok, MX, SPF e DKIM do Google conferidos e intocados |
| `FOTOS_PENDENTES.md` gerado | ok |
| peso dentro do teto do Pages | ok, 3,8 MB no total, maior arquivo 533 KB, teto é 25 MiB por arquivo |
| três páginas respondendo | ok, testado em servidor local, sem referência quebrada |
| HTTPS em `soulletsgo.com` | **pendente**, depende do passo 2 |
| alteração publicada pela Thainá | **pendente**, é o passo 3 |

---

## O que está no ar hoje no domínio

`https://soulletsgo.com` responde 200 e serve uma página **"Em breve" do Squarespace**, em modo
de site particular. Não é site publicado, é placeholder. Apontar o domínio para o Pages substitui
essa página, e não derruba conteúdo real nenhum.

---

## Passo 1 · GitHub

**Bloqueio atual:** o `origin` está com o placeholder literal `SEU-USUARIO`, que veio do exemplo
que eu dei na sessão passada e foi colado sem substituir. E não existe credencial nesta máquina:
sem `gh`, sem chave SSH em `~/.ssh`, sem credential helper, sem token no ambiente.

```bash
cd /Users/soulletsgo/Documents/SOUL/SITE-SOUL

# 1. apontar para o repositorio de verdade, trocando o dono
git remote set-url origin git@github.com:DONO-DE-VERDADE/soul-site.git
git remote -v      # conferir antes de empurrar

# 2. empurrar
git push -u origin main
```

Se der `Permission denied (publickey)`, é porque falta chave SSH. Duas saídas:

**a) criar uma chave** (roda no terminal, a chave privada nunca sai da máquina):

```bash
ssh-keygen -t ed25519 -C "contato@soulletsgo.com" -f ~/.ssh/id_ed25519 -N ""
cat ~/.ssh/id_ed25519.pub
```

Colar o conteúdo em github.com → Settings → SSH and GPG keys → New SSH key. Depois repetir o push.

**b) usar HTTPS com token**, criando um fine-grained token com acesso de escrita só ao `soul-site`:

```bash
git remote set-url origin https://github.com/DONO-DE-VERDADE/soul-site.git
git push -u origin main    # usuario = seu login, senha = o token
```

O repositório tem 4 commits e o `.gitignore` já mantém fora `FOTOS `, `REFERENCIAS-IMAGENS/`
e `_arquivo-local/`. Nada pesado sobe.

---

## Passo 2 · Cloudflare Pages e domínio

O conector da Cloudflare nesta sessão só expõe Workers, D1, KV, R2, Hyperdrive e a busca na
documentação. **Não expõe Pages nem DNS**, então este passo é no painel.

### 2.1 criar o projeto

Cloudflare → Workers & Pages → Create → Pages → Connect to Git → repositório `soul-site`.

| campo | valor |
| --- | --- |
| branch de produção | `main` |
| framework preset | None |
| build command | *deixar vazio* |
| build output directory | `public` |

Não existe build. O Pages só serve `public/` como está.

Ao terminar sai uma URL `*.pages.dev`. **Abrir e conferir antes de mexer no domínio.**

### 2.2 ligar o domínio

Pages → o projeto → Custom domains → Set up a custom domain → `soulletsgo.com`.
Repetir para `www.soulletsgo.com`.

Antes disso é preciso liberar os registros que hoje apontam para o Squarespace, em
DNS → Records:

| tipo | nome | valor atual | o que fazer |
| --- | --- | --- | --- |
| A | `soulletsgo.com` | `198.49.23.144` | apagar |
| A | `soulletsgo.com` | `198.49.23.145` | apagar se existir |
| A | `soulletsgo.com` | `198.185.159.144` | apagar se existir |
| A | `soulletsgo.com` | `198.185.159.145` | apagar se existir |
| CNAME | `www` | `ext-sq.squarespace.com` | apagar |

Depois de apagar, o Pages cria sozinho os registros certos ao adicionar o domínio.

> ### NÃO APAGAR, em hipótese nenhuma
>
> | tipo | nome | valor |
> | --- | --- | --- |
> | MX | `soulletsgo.com` | `1 smtp.google.com` |
> | TXT | `soulletsgo.com` | `v=spf1 include:_spf.google.com ~all` |
> | TXT | `google._domainkey` | `v=DKIM1; k=rsa; p=MIIBIjANBg...` |
>
> Esses três são o e mail do Google Workspace. Apagar qualquer um derruba o
> `contato@soulletsgo.com`. A seção 10 do briefing é explícita: não mexer.

### 2.3 conferir HTTPS

O certificado leva de alguns minutos a algumas horas. Conferir com:

```bash
curl -sS -o /dev/null -w "%{http_code} %{ssl_verify_result}\n" https://soulletsgo.com
curl -sS https://soulletsgo.com/robots.txt | head -3
```

Esperado: `200 0`, e o `robots.txt` começando com `# SITE EM OBRA`. Se vier a página
"Em breve" do Squarespace, o DNS ainda não propagou.

---

## Passo 3 · o commit da Thainá

Fecha a seção 13 do briefing: uma alteração publicada pela mão dela.

Sugestão de alteração pequena e útil, que já está pendente: atualizar a cidade atual, ou
corrigir o preço do pacote cinematográfico se os `US$ 3.000` foram engano. Ver `COPY_PENDENTE.md`.

```bash
cd /Users/soulletsgo/Documents/SOUL/SITE-SOUL
# editar o arquivo
git add -A
git commit -m "primeira alteracao publicada pela thaina"
git push
```

O Pages faz o deploy sozinho em cerca de um minuto.

---

## Fallback, se o GitHub travar

O Pages aceita **Direct Upload**, sem repositório: Workers & Pages → Create → Pages →
Upload assets → arrastar a pasta `public/`. Sobe o site na hora.

É um plano B legítimo para não travar a sessão, mas perde o deploy automático a cada commit,
que é o que a seção 10 do briefing pede. Se usar, vale voltar para o git depois.

---

## Depois que estiver no ar

O site sobe **com indexação bloqueada e sem ser divulgado**. Isso é estado intermediário
aceito pelo briefing. O critério para divulgar o link é outro e mais duro, e está no
checklist do `README.md`.
