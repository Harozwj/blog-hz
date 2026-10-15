# Blog do Haroldo · blog.hrzmentoria.com.br

Blog próprio da HRZ, hospedado de graça no GitHub Pages. Não depende de agência.

## Colocar no ar (uma vez só, ~15 minutos)

1. Em github.com, crie um repositório público chamado `blog-hrz`.
2. Envie estes arquivos para o repositório (botão *Add file → Upload files*).
3. No repositório: *Settings → Pages → Build and deployment → Deploy from a branch → main / (root)*. Salve.
4. No painel do domínio hrzmentoria.com.br (onde o domínio está registrado), crie um registro DNS:
   - Tipo `CNAME` · Nome `blog` · Valor `SEU-USUARIO.github.io`
5. Volte em *Settings → Pages*, confirme o domínio `blog.hrzmentoria.com.br` e marque *Enforce HTTPS* quando liberar.

## O que já está pronto

- Home com foto real, artigos e chamada para os cursos em hrzmentoria.com.br.
- Página de artigo com caixa de produto (com UTM) no fim de cada texto.
- Formulário da Carta de Quadra em todas as páginas, ligado ao workflow do n8n **HRZ · Captura de leads**: o lead entra no Brevo e recebe o e-mail de boas-vindas na hora.
- Evento `Lead` do Pixel do Meta no envio do formulário (preencha `meta_pixel_id` em `_config.yml`).
- SEO, sitemap e feed RSS automáticos.

## Publicar um artigo

Crie um arquivo em `_posts/` com o nome `AAAA-MM-DD-titulo-do-artigo.md`, copiando o cabeçalho do primeiro artigo (título, descrição, categoria, imagem e produto). O workflow semanal do n8n vai fazer isso por você depois da sua aprovação.
