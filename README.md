# Pôr do Sol Alimentos — Site B2B

Website institucional e comercial estático da **Pôr do Sol Alimentos**, preparado para Cloudflare Pages sem backend e sem custo recorrente de servidor.

## Rodar o build

```bash
npm run check
npm run build
```

O build gera a pasta `dist/`.

### Cloudflare Pages

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/`
- **Node:** 18 ou superior

O projeto não possui dependências NPM de runtime/build. O Tailwind usado pela interface é carregado via CDN no navegador, então o build é deliberadamente simples e previsível.

## Funcionalidades

- catálogo B2B com filtros dinâmicos;
- fichas técnicas por produto;
- carrinho/cotação persistido em `localStorage`;
- cotação formatada enviada ao WhatsApp comercial;
- calculadora interativa para pastelarias;
- formulário de distribuidores enviado ao WhatsApp;
- receitas e dicas em modais;
- mapa e rota para a fábrica;
- SEO local, Open Graph, sitemap e dados estruturados.

## Dados ainda pendentes

O PDF oficial, fotos reais e tabelas nutricionais não foram fornecidos como arquivos nesta entrega. Para não inventar dados regulatórios, o site direciona a solicitação do catálogo para o WhatsApp e mantém as informações nutricionais sinalizadas como pendentes.
