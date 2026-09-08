# Síntese de design — uma linguagem da Pôr do Sol

Proposta para aprovação. Nenhuma tela do novo site foi implementada.

## Conceito

**Sabor que faz parte.** Uma indústria próxima da mesa e do trabalho de quem prepara alimentos. Fotografia apetitosa, embalagens reconhecíveis e presença regional concreta. A tradição aparece na narrativa; o cuidado aparece na composição.

## Matriz de tradução

As colunas Maxi e Nita registram observações do benchmark. A coluna final é uma proposta original. Referências detalhadas e limites estão em [BENCHMARK_ANALYSIS.md](BENCHMARK_ANALYSIS.md).

| Elemento | Maxi Massas | Nita | Catálogo Pôr do Sol | Solução final proposta Pôr do Sol |
| --- | --- | --- | --- | --- |
| Header | Integrado à foto; compacto e escuro no scroll; ação comercial persistente | Linhas prioritárias; mega menu visual branco | Logo vermelho/amarelo em campo verde ou branco | Logo real em área limpa; Produtos, Nossa história, Da cozinha; Pedir cotação com contador. Menu visual com cinco linhas; compacto branco no scroll |
| Hero | Fotografia gastronômica total; slides com benefícios e ações | Mensagem curta, fotografia e complemento em movimento | Diagonal forte na capa, verde dominante, assinatura vermelha e sol | Composição assimétrica: prato real em grande escala, faixa verde diagonal, logo legível e uma embalagem inteira; frase curta e uma ação principal |
| Produto | Packshot com nome, apresentação e detalhe; filtro útil | Embalagens em superfície comum na home; ficha organizada | Sete famílias/apresentações distribuídas nas páginas 3–9 | Uma família por vez na home; catálogo próprio; embalagem em contain e uso culinário ao lado; dados só da página correspondente |
| Categorias | Filtro simples por grupo | Separação por linhas e aplicações, com imagens | Massas, discos, pizzas, pães árabes, canudinhos | Navegação editorial por cinco linhas e descoberta por preparo, sem duplicar a vitrine |
| Motion | Slides, revelações, contadores, carrossel, realce de galeria | Sequência horizontal, títulos e fotos em camadas | Curvas e faixas sugerem direção | Revelações discretas de 450–650 ms, troca de categoria em 250–350 ms; uma narrativa curta; sem contadores decorativos |
| Scroll | Seções alternadas com cabeçalho persistente | Campo contínuo que muda de composição com a rolagem | Alternância entre branco técnico e verde institucional | Percurso livre; produto acessível cedo; um bloco com texto estável e duas imagens; mobile linear |
| Fotografia | Textura e porção criam apetite | Uso culinário + embalagem + ofício | Embalagens e fotos de preparo reais no material; qualidade desigual | Fotos próprias em luz natural lateral, dourado real da fritura, fundo limpo; sem substituir ausência por imagens de fábrica inventadas |
| Storytelling | Origem regional e trajetória | Ofício, conhecimento e história institucional | Mais de 30 anos; Limoeiro do Norte; Vale do Jaguaribe | Narrativa curta sobre origem e continuidade, apoiada por selo original e produtos; retrato real só quando disponível |
| Conversão | WhatsApp disponível, unidades e franquia | Descoberta por linha e encaminhamento de atendimento | Produtos para pequenos empreendedores, mercados e mercearias | Adicionar produto → quantidade → dados básicos → revisar no WhatsApp; sem promessa de preço ou pedido confirmado |
| Conteúdo | Preparo em passos e galeria culinária | Experts, receitas, técnicas e aplicações | Praticidade e fácil manuseio por produto | “Da cozinha Pôr do Sol”: seleção pequena de preparo, conservação e recheios; cada dica ligada à massa adequada |
| Contato | Telefone, WhatsApp, e-mail, busca de unidades | Formulário, assunto, representantes por região | Endereço e três telefones na página 10 | Vendas em destaque; contato alternativo; cidade para consulta de atendimento; mapa de origem sem simular abrangência |
| Footer | Reúne marca, navegação, linhas e contatos | Fechamento institucional e utilitário | Grande assinatura de marca e contatos | Verde institucional, logo com respiro, linhas, catálogo e dados reais; política e créditos discretos |

## Interatividade recomendada antes de implementar

### 1. “O que você quer preparar?” — recomendação principal

Pastel → massas retangulares e discos. Pizza → mini e micro pizzas. Beirute → pão árabe. Salgados → massas e canudinhos. As relações são sugestões de navegação, não receitas técnicas.

Ao selecionar, muda a composição central com alimento/embalagem, aparece uma frase curta e surgem apenas os produtos pertinentes. Cada produto leva à ficha ou entra na cotação. Um comando “Ver todas as linhas” devolve a visão ampla. O controle deve funcionar por toque, clique e teclado; hover apenas antecipa o destaque.

**Por que escolher:** parte da intenção de preparo e reduz a procura sem pedir cadastro. Usa o mesmo conjunto de produtos da seleção por linha; não cria um segundo catálogo.

### 2. “Para minha casa / Para meu negócio” — no momento comercial

Para casa: perguntar onde encontrar na cidade. Para negócio: abrir cotação com os itens já escolhidos. Mercado, lanchonete ou pastelaria entram como perfil opcional dentro da cotação.

**Por que não usar como primeira tela:** obrigar essa escolha cedo esconde marca e produto, justamente os elementos que precisam vender a nova experiência nos primeiros segundos.

### 3. Comparar formatos — somente na categoria de massas

Mostrar medidas e peso confirmado lado a lado, com embalagens inteiras. Não calcular rendimento, lucro ou quantidade de pastéis sem dados de fabricação validados. O produto 15 × 30 deve ter sua própria imagem, sem reutilizar o 26 × 32.

## Decisões que tornam o resultado específico

- A diagonal nasce da capa; a curva nasce da faixa da marca. Não haverá coleção de formas abstratas aleatórias.
- Vermelho concentra assinatura e ação; amarelo aparece como detalhe ligado ao sol. Verde e branco sustentam a página.
- O catálogo usa Open Sans; esse vínculo tipográfico será preservado com uma hierarquia nova e muito mais concisa.
- A linha Preciosa dos discos mantém a embalagem observada, sem trocar o rótulo por Pôr do Sol.
- O mapa distingue origem de área de atendimento. O fato confirmado é a sede em Limoeiro do Norte e atuação regional.
- “Mais de 30 anos” será texto de história, não contador. O selo existente diz 1995; não será redesenhado como um selo oficial diferente.

## Aprovação necessária nesta etapa

Aprovar o conceito, a composição principal, a navegação por preparo e o nível de produção fotográfica descrito em [ART_DIRECTION.md](ART_DIRECTION.md). A aprovação não resolve automaticamente as lacunas de assets: elas estão individualizadas em [ASSET_AUDIT.md](ASSET_AUDIT.md).
