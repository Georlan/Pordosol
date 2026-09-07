# Pôr do Sol Alimentos

Website institucional estático da Pôr do Sol Alimentos, desenvolvido em HTML5, CSS3 e JavaScript puro.

## Estrutura

- `index.html` - conteúdo e semântica da página
- `styles.css` - identidade visual, layout e responsividade
- `app.js` - menu mobile, links do WhatsApp, animações e contadores
- `assets/` - logotipo e imagens extraídas do catálogo institucional fornecido pela marca

## Rodar localmente

Abra `index.html` diretamente no navegador ou use um servidor HTTP simples:

```bash
python -m http.server 8080
```

Depois acesse `http://localhost:8080`.

## Fonte institucional

Os dados de endereço, telefones, história, campo fabril e características dos produtos foram baseados no catálogo oficial fornecido para a construção do site.

O catálogo informa a empresa em **Limoeiro do Norte - CE**, na **Rua Augusto Fidélis, 2443**, com contato comercial **(88) 9 9900-5560** e e-mail **pordosolalimentos@hotmail.com**.

## Crédito da fotografia externa do hero

A fotografia de fundo do hero é carregada do Wikimedia Commons:

- “Chef woriking with pastry dough”, Shixart1985 / Nenad Stojković, CC BY 2.0
- https://commons.wikimedia.org/wiki/File:Chef_woriking_with_pastry_dough.jpg

Se for desejado eliminar qualquer dependência externa de imagem, substitua a URL em `.hero-media` no `styles.css` por uma fotografia própria da fábrica.
