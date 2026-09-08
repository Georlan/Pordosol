# Pôr do Sol Alimentos — site e catálogo

Site estático, sem assinatura de software obrigatória, sem banco de dados e sem processamento de pagamentos. Catálogo com 8 produtos, 5 categorias, páginas editoriais e cotação pelo WhatsApp. Todo o atendimento acontece diretamente nos canais da fábrica.

## Editar e publicar

Requer Node.js 20 ou mais recente. Não há dependências para instalar.

- `npm run build`: gera as páginas e os arquivos prontos em `dist/`.
- `npm run check`: verifica integridade de páginas, imagens e lógica da mensagem de cotação.
- Publique **o conteúdo** de `dist/` na raiz do domínio, em hospedagem para arquivos estáticos. As pastas devem abrir seus `index.html`; configure `404.html` como erro 404. Não configure reescrita de todas as páginas para a home.
- Para prévia local: após gerar, sirva `dist/` com um servidor HTTP. Não abrir os arquivos com duplo clique, pois os módulos JavaScript e caminhos absolutos precisam de HTTP.

## Onde manter as informações

- `content.js`: contatos, produtos, formatos, alegações do catálogo e três artigos.
- `scripts/render.mjs`: conteúdo e estrutura das páginas.
- `styles.css`: identidade visual, responsividade e movimentos.
- `app.js` e `quote.js`: cotação, navegação e descoberta por preparo.
- `assets/official/`: fotografias, embalagens e logo recuperados do catálogo, mapa e fontes locais.
- `Catálogo.Pôr.do.Sol.pdf`: catálogo oficial que acompanha o site.

Após qualquer alteração, gere e verifique novamente antes de substituir os arquivos publicados.

## Funcionamento comercial

Cada quantidade corresponde a **pacotes**, não fardos. Sem preços ou fatores de caixa inventados. Cliente escolhe produtos, informa nome/cidade e opcionalmente estabelecimento, revisa mensagem e abre o WhatsApp. O envio final é feito pela pessoa no WhatsApp. Não existe registro automático de pedidos, estoque, pagamento ou integração com sistema comercial.

A seleção de produtos fica no navegador. Nome e cidade não são persistidos pelo site. Fontes são servidas localmente; não há analytics, pixel ou rastreamento publicitário adicionado.

## Fontes dos materiais

Fotografias e embalagens: catálogo fornecido pelo cliente. Elementos foram extraídos com suas máscaras originais e convertidos para WebP, sem inventar produtos ou rótulos. As informações de ausência de ingredientes reproduzem o catálogo; o rótulo atualizado prevalece.
Mapa: malhas simplificadas oficiais do IBGE, API v3. Brasil com UFs; destaque no Ceará (23) e marcador aproximado calculado sobre a área do município de Limoeiro do Norte (2307601). https://servicodados.ibge.gov.br/api/docs/malhas?versao=3
Tipografia: Open Sans, SIL Open Font License 1.1, distribuída localmente; licença em assets/official/OFL.txt.

## Entrega e manutenção

Venda do desenvolvimento em pagamento único é compatível com este projeto. Domínio, eventual hospedagem e alterações futuras devem ter responsabilidade e custos definidos separadamente com o cliente. Não prometa que serviços de terceiros serão gratuitos para sempre.

ASSET NECESSÁRIO para evolução fotográfica: ensaio em alta resolução de pastel preparado com a massa da marca, embalagens atuais e retratos autorizados da fábrica/equipe. O site usa o material real disponível; não inclui imagens falsas para simular esse ensaio.

Antes de colocar no domínio oficial, confirmar com a fábrica: telefone de vendas, endereço, atualização das embalagens e disponibilidade das apresentações do catálogo. A revisão feita aqui validou os dados contra o material fornecido, não por contato externo com a empresa.

## Revisão de imagens e movimento

A arte técnica com cotas foi retirada da apresentação comercial. A massa 26 × 32 usa a fotografia da massa contida no PDF original; a abertura usa a composição real da massa 15 × 30.

Discos aparecem como uma família com dois formatos selecionáveis, sem repetir a mesma foto como se fossem duas embalagens diferentes. A única fotografia disponível é identificada como 15 cm / 500 g. ASSET NECESSÁRIO: fotografia atual da apresentação 10 cm / 200 g. Não alterar digitalmente o peso impresso na embalagem. Alegações de ausência de ingredientes dos discos foram removidas porque o rótulo fotografado menciona leite e soja e exige confirmação da fábrica.

`presentation.js` centraliza os cartões usados nas páginas e nas trocas de categoria. Movimento respeita a preferência por redução de animações; as interações não bloqueiam o scroll.

## Cache e consistência de publicação

O build identifica o conjunto de estilos, módulos, imagens e fontes pelo conteúdo e gera `/releases/<hash>/`. O HTML aponta sempre para um único conjunto; imports dos módulos permanecem relativos dentro da mesma versão. URLs antigas continuam disponíveis para compatibilidade. As páginas são revalidadas e apenas os arquivos identificados por conteúdo podem ter cache longo. Isso evita reutilizar o CSS do design anterior com o HTML novo.

## Documentação de entrega

- `AUDIT.md`: estado real, correções, verificações e pendências que dependem do cliente.
- `DEPLOY.md`: publicação, variáveis opcionais, cache e recuperação.
- `CONTENT_GUIDE.md`: contatos, textos, produtos, imagens e catálogo.
- `ASSETS.md`: origem dos materiais e imagens que ainda faltam.
- `SEO_SETUP.md`: Search Console, Perfil da Empresa, domínio e divulgação.

O sitemap é gerado automaticamente com as páginas atuais. As fichas têm impressão e compartilhamento. A página `/para-seu-negocio/` adapta a descoberta e o contato ao tipo de comprador. Nenhuma dessas funções requer banco ou serviço mensal.
