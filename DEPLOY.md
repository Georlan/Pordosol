# Publicação

Endereço atual: https://pordosol.pages.dev/
Repositório: https://github.com/Georlan/Pordosol
Branch de produção: `main`. Projeto Cloudflare Pages: `pordosol`.

1. Faça a alteração e execute `npm run build` e `npm run check`.
2. Confira a versão local por HTTP, incluindo a cotação.
3. Envie a alteração para `main`. A integração existente do Cloudflare Pages publica automaticamente.
4. Aguarde o check **Cloudflare Pages** concluir com sucesso no GitHub.
5. Confira home, um produto, `/sitemap.xml` e `/robots.txt` no endereço público.

Configuração do Pages: comando `npm run build`; diretório de saída `dist`; Node.js 20 ou superior. Não é necessário banco, função, Worker, token no código ou biblioteca de servidor.

A pasta `dist` é gerada, não editada. Estilos, imagens, fontes e módulos recebem uma identificação baseada no conteúdo em `/releases/`. Isso evita misturar arquivos de versões diferentes no cache. Não remova essa lógica nem aplique cache longo ao HTML.

## Domínio no futuro

Foi decidido manter `pages.dev`. Se o cliente posteriormente fornecer um domínio, adicione-o ao projeto existente em **Custom domains**, siga a validação DNS e defina a variável de build `SITE_URL` como a origem HTTPS escolhida, sem caminho. Atualize também os destinos dos QR Codes. Não compre domínio sem autorização.

## Search Console

Opcionalmente defina a variável de build `GOOGLE_SITE_VERIFICATION` com o valor fornecido pelo Google e publique novamente. O build gera a meta tag. O código de verificação não é senha; senhas e tokens de serviços nunca devem entrar no repositório.

## Recuperação

Em caso de regressão, use o rollback para uma publicação anterior bem-sucedida no Cloudflare Pages. Depois corrija o código e publique novamente. Não altere a política de cache como tentativa de corrigir o layout.

## Prévia antiga

`.openai/hosting.json` pertence à prévia privada do Sites, criada antes da publicação oficial. Não participa do deploy Cloudflare. O endereço de referência para o cliente e para SEO é `pordosol.pages.dev`.
