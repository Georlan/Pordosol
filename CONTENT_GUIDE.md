# Como manter o conteúdo

O site funciona sem atualizações frequentes. Alterações são necessárias quando a própria fábrica muda contatos, produtos ou embalagens.

## Telefone, e-mail e endereço

Edite o objeto `business` em `content.js`. O telefone do WhatsApp usa país e DDD, apenas números: `5588999005560`. Atualize o número legível correspondente. A cotação, contato, rodapé e dados estruturados utilizam esses dados.

## Textos e produtos

`content.js` reúne os produtos, categorias e dicas. Preserve o `id` de um produto existente para não quebrar links compartilhados e seleções salvas. Confira nome, `format`, `image`, `page` do catálogo e alegações em `badges`. Não acrescente preços, disponibilidade, regiões atendidas ou benefícios não confirmados.

`presentation.js` agrupa os dois discos em uma única entrada, para não apresentar a foto de 500 g como se fosse a embalagem de 200 g. As páginas dos dois formatos continuam separadas e a mensagem registra a escolha correta.

Os textos fixos das páginas ficam em `scripts/render.mjs`. Metadados e dados estruturados ficam em `seo.js`. `image-info.js` contém medidas originais das imagens.

## Imagens

Use arquivos reais autorizados em `assets/official/`, preferencialmente WebP. Preserve a proporção; não escreva ou altere digitalmente rótulos. Se trocar as dimensões de uma imagem, atualize também sua entrada em `image-info.js`. O build inclui essas dimensões no HTML para reservar espaço durante o carregamento.

A foto dos discos é de 15 cm / 500 g, conforme a legenda. Para a variante de 200 g falta uma foto confirmada. Não use o antigo arquivo com cotas da gráfica.

## Catálogo

Substitua `Catálogo.Pôr.do.Sol.pdf` apenas por versão aprovada. O build o publica em `/catalogo-pordosol.pdf`. Revise os números `page` nos produtos quando a ordem das páginas mudar. Reconfira alegações e quantidades: o PDF atual tem inconsistências nutricionais registradas em `AUDIT.md`.

## Fichas e compartilhamento

As páginas de produto oferecem impressão e compartilhamento. A impressão usa o navegador e pode ser salva como PDF. A Web Share API abre a opção nativa quando disponível; nos demais casos, o site copia o link. Não é preciso pagar por ferramentas de PDF ou encurtadores de URL.

## Publicar mudanças

Execute `npm run build` e `npm run check`, confira a página e envie a alteração ao repositório. Nunca edite manualmente os arquivos de `dist/`.
