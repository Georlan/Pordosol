# Assets de produção e fontes

## Organização real

- `assets/official/`: marca, fotografias, composições, mapa e fontes utilizadas pela direção aprovada. Mantida como coleção única para facilitar rastreabilidade com o catálogo.
- `assets/qr/`: três QR Codes estáticos para site, catálogo e cotação; sem serviço intermediário.
- `Catálogo.Pôr.do.Sol.pdf`: fonte oficial fornecida pelo usuário (aproximadamente 19,8 MB). Mantida deliberadamente no Git porque também é o download público.
- `image-info.js`: dimensões das imagens para o build e os cartões dinâmicos.
- `research/`: síntese da pesquisa aprovada. As capturas originais foram entregues no pacote de pesquisa; não fazem parte do site nem precisam ser publicadas.

Os arquivos brutos `extracted_raw` e o texto extraído são materiais de trabalho fora do repositório. `extracted_assets/` não existe neste checkout. Não há dependência desses diretórios para build ou deploy: todos os arquivos usados em produção estão no Git.

## Proveniência

Logo e fotos foram extraídos do catálogo, com as máscaras de transparência originais. Não foram gerados funcionários, fábricas, pratos ou embalagens fictícios. A imagem da massa 26 × 32 é a foto da massa na página 3. A abertura usa a composição da massa 15 × 30 da página 4.

Discos: página 5, ambas as fotos disponíveis mostram 500 g. Os formatos anunciados no texto são 15 cm / 500 g e 10 cm / 200 g. A vitrine agrupa a família e indica a embalagem fotografada nas fichas.

Mapa: malhas do IBGE, Brasil com UFs; Ceará em destaque e marcador aproximado dentro de Limoeiro do Norte. Fonte: https://servicodados.ibge.gov.br/api/docs/malhas?versao=3

Fontes: Open Sans, SIL Open Font License; licença local em `assets/official/OFL.txt`. Os cinco arquivos foram convertidos de TrueType para WOFF2 real e reduzidos aos caracteres latinos necessários. Peso total: 95.168 bytes, anteriormente 611.108 bytes.

Favicon e imagens Open Graph usam material real da marca/catálogo. Não foi criada uma campanha fictícia para compartilhamento. O logo é utilizado sem o minúsculo selo de ano.

## Assets necessários, sem bloquear o site atual

- Foto atual da embalagem de discos 10 cm / 200 g.
- Fotos em alta resolução das massas e do pastel preparado, mantendo a identidade real.
- Rótulos e tabelas nutricionais atuais, aprovados pela fábrica, para publicação em HTML.
- Fotos institucionais autorizadas, caso o cliente queira ampliar a história da empresa.

As imagens oficiais ainda não utilizadas foram mantidas como acervo real. As composições, sprites, mapas e capturas da direção visual descartada foram retirados do checkout; continuam recuperáveis no histórico Git.
