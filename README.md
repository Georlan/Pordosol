# Pôr do Sol Alimentos

Website institucional estático da Pôr do Sol Alimentos, desenvolvido em HTML5, CSS3 e JavaScript puro.

## Fonte de verdade

O conteúdo institucional e os produtos são baseados no catálogo oficial fornecido para o projeto. O site utiliza apenas informações sustentadas por esse material: marca em Limoeiro do Norte - CE, fundação em 1995, mais de 30 anos de história, campo fabril informado de 250 m², contatos oficiais e a linha de produtos apresentada no catálogo.

As imagens de logo, linha e produtos usadas no site foram extraídas do catálogo oficial e otimizadas localmente para WebP. Não são utilizadas fotografias genéricas de terceiros como representação da empresa ou dos produtos.

## Estrutura

- `index.html` — estrutura e conteúdo semântico
- `styles.css` — identidade visual, layout e responsividade
- `app.js` — menu mobile, links do WhatsApp e animações leves
- `assets/` — logo, linha e imagens reais dos produtos extraídas do catálogo
- `build.mjs` — build estático para Cloudflare Pages

## Build

```bash
npm run build
```

O comando gera `dist/`, diretório esperado pelo Cloudflare Pages.
