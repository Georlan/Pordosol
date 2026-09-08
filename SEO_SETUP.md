# Google e presença local

Endereço canônico atual: https://pordosol.pages.dev/
Sitemap: https://pordosol.pages.dev/sitemap.xml

## O que o site já entrega

Páginas estáticas indexáveis, títulos e descrições individuais, canonical, sitemap gerado, robots.txt, Open Graph, Twitter cards, imagens com descrição e dimensões, página 404 e JSON-LD com Organization, WebSite, Product e BreadcrumbList. Contato inclui PostalAddress e ContactPoint. Não há avaliações, ofertas, estoques ou preços inventados.

A marcação Product descreve os produtos, mas sem preço/oferta/avaliação real ela não cumpre todos os requisitos para resultados enriquecidos de produto do Google. Isso não impede a indexação normal. Não invente ofertas para eliminar avisos do teste. Não há FAQPage porque não foi criada uma seção de perguntas frequentes.

## Search Console — configuração única pelo responsável

1. Acesse https://search.google.com/search-console com a conta que deve pertencer ao cliente.
2. Adicione uma propriedade de **prefixo de URL**: `https://pordosol.pages.dev/`.
3. Escolha a verificação por tag HTML. Copie o valor `content` informado pelo Google para a variável de build `GOOGLE_SITE_VERIFICATION` no Cloudflare Pages. Publique e volte ao Google para verificar.
4. Envie `sitemap.xml` no relatório Sitemaps.
5. Use Inspeção de URL para home e dois produtos. Confira canonical e possibilidade de indexação.
6. Acompanhe páginas indexadas e consultas quando os dados ficarem disponíveis. Não é necessário operar isso diariamente para o site funcionar.

Não foi criado nem verificado acesso a uma conta Google nesta entrega. Não há garantia de posição ou prazo de indexação.

Guia oficial: https://support.google.com/webmasters/answer/34592?hl=pt-BR
Sitemaps: https://support.google.com/webmasters/answer/7451001?hl=pt-BR

## Perfil da Empresa no Google

Pesquise o nome e o endereço no Google Maps antes de criar um perfil. Há referências públicas à empresa, mas isso não comprova que um perfil oficial existe ou quem o administra. Evite duplicatas. Se já existir, solicite acesso ao responsável; se não existir e a empresa for elegível, adicione-a e siga a verificação proposta pelo Google.

Utilize os dados consistentes do catálogo: Pôr do Sol Alimentos; Rua Augusto Fidélis, 2443; Limoeiro do Norte, CE; WhatsApp (88) 99900-5560; pordosolalimentos@hotmail.com. Confirme esses dados com a fábrica antes de enviá-los ao Google. Não invente horários, atendimento presencial ou área de cobertura.

Guia oficial: https://support.google.com/business/answer/2911778?hl=pt-BR

## Divulgação sem assinatura

O cliente pode adicionar o link ao Instagram, WhatsApp Business e materiais comerciais. Os QR Codes prontos estão em `assets/qr/`: site, catálogo e cotação. Os códigos não expiram por conta de um serviço; dependem apenas de manter os respectivos endereços ativos. Antes de imprimir em grande escala, leia cada código com um celular e confirme o destino.

## Domínio e custos

Por decisão do usuário, permanece `pages.dev`. Domínio próprio é opcional e tem renovação externa; não foi adquirido. O site não inclui serviços pagos, analytics, CMS, formulários SaaS, banco de dados ou servidor obrigatório. Planos gratuitos de terceiros seguem suas próprias condições, que podem mudar.

## Referências de dados estruturados

https://developers.google.com/search/docs/appearance/structured-data/product-snippet?hl=pt-br
https://developers.google.com/search/docs/appearance/structured-data/organization
