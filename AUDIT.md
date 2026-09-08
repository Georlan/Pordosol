# Auditoria e entrega — Pôr do Sol Alimentos

Data: 8 de setembro de 2026. Endereço de referência: https://pordosol.pages.dev/

A auditoria preservou o design aprovado. O roteiro foi conciliado com o que já existia, sem refazer pesquisa concluída nem acrescentar dependências mensais. A publicação segue pelo GitHub e Cloudflare Pages.

## Estado inicial verificado — fase 0

- `main` local e `origin/main` estavam no commit `e9a06c5`, sem alterações pendentes.
- O check Cloudflare Pages da versão anterior havia concluído com sucesso. A home pública já usava arquivos identificados por versão após a correção de cache.
- Projeto HTML/CSS/JavaScript estático, sem dependências em `package.json`, sem banco ou servidor de aplicação.
- Build e verificações passaram. As imagens oficiais estão no Git; a extração bruta não é necessária para construir o site.
- Lacunas encontradas: sitemap antigo da home não era copiado; descrições repetidas; ausência de canonical e dados estruturados; ausência de impressão e compartilhamento; fontes TrueType com extensão WOFF2; documentação fragmentada; 33 arquivos legados ou redundantes, além da cópia duplicada da foto dos discos.
- Foram removidos esses 33 arquivos e a foto duplicada de discos: imagens e sprites da direção descartada, capturas antigas e robots/sitemap manuais obsoletos. O histórico Git os preserva. O PDF de aproximadamente 19,8 MB foi mantido por ser a fonte oficial e o download do catálogo, não um temporário.

## Fontes oficiais — fases 1, 4 e 10

Revisadas visualmente as páginas do catálogo e o texto extraído.

- **1995 confirmado:** aparece no selo da capa, página 1. A página 2 também sustenta “mais de 30 anos”.
- **Local e canais confirmados no material:** Limoeiro do Norte, Vale do Jaguaribe, Ceará; endereço, telefones e e-mail na página 10. Isso não substitui confirmação comercial atual com a fábrica.
- **Massas:** 26 × 32 cm (p. 3) e 15 × 30 cm (p. 4). Os três selos de ausência de ovos, lactose e proteína animal aparecem nessas páginas.
- **Discos:** 15 cm / 500 g e 10 cm / 200 g (p. 5). A fotografia disponível mostra 500 g nas duas reproduções. A página traz selos de ausência, mas a embalagem fotografada menciona leite e soja. Os selos foram retirados das fichas de discos; a fotografia é identificada como 500 g.
- **Micro pizzas:** 24 unidades (p. 6); selo de ausência de ovos.
- **Mini pizzas:** 5 unidades (p. 7); selo de ausência de ovos.
- **Pães árabes:** 5 unidades no texto (p. 8); selo de ausência de proteína animal. O rótulo fotografado não permite uma leitura independente confiável de todos os detalhes; quantidade segue o texto explícito do catálogo, a confirmar com embalagem atual antes de mudanças.
- **Canudinhos:** 50 unidades (p. 9); três selos de ausência no catálogo.

### Tabelas nutricionais: pendência da fonte, não preencher por inferência

- Páginas 3–5: cabeçalho informa “porções por embalagem: cerca de 66g”, com unidade inadequada para contagem; a fração da porção muda entre 3/50 e 1/50. A página 3 deixa incompleto o valor de gorduras trans por porção; páginas 4–5 exibem outros valores nessa coluna.
- Páginas 6–7: a tabela declara porção de 50 g, mas 39 g de carboidratos + 13 g de proteínas + 8 g de gorduras já totalizam 60 g. Não é adequado reproduzir esses números como ficha validada.
- Página 8: 43 g de carboidratos + 13 g de proteínas + 5 g de gorduras excedem a porção declarada de 50 g. Há campos em branco.
- Página 9: tabela legível; campos com traço não foram convertidos em zero. Foi mantida a política de consultar rótulos atuais para a linha inteira.

**Decisão:** cada ficha aponta para a página correta do PDF e orienta a consulta ao rótulo atualizado. Não foi publicada uma nova tabela numérica em HTML. ASSET NECESSÁRIO: tabelas e rótulos aprovados pela fábrica. Também não foram inventadas temperaturas, tempos ou receitas completas a partir de fontes inseguras.

## Design e pesquisa — fases 2–7 e 17

- Direção aprovada preservada: verde, branco, vermelho e amarelo, composição com produtos reais, história e mapa correto.
- Pesquisa Maxi Massas e Nita já realizada: 49 capturas no pacote de pesquisa, com documentação de análise, síntese e arquitetura. As três sínteses estão agora também em `research/` no repositório.
- Header sticky, menu mobile, menu visual de produtos, comparação de massas, descoberta por preparo, transições e preferência por movimento reduzido permanecem funcionais.
- “Beirute” continua substituído por **Pães** na seleção. Não foi reintroduzido o design antigo, calculadora, mapa inteiro verde ou linguagem técnica comercial.
- A animação de entrada do alimento agora mantém a imagem visível desde o início, sem aguardar uma transição de opacidade.
- As fotos atuais têm limitações de resolução. Nenhuma delas foi substituída por embalagem ou fábrica fictícia.

## Utilidade comercial — fases 8–10, 19–21 e 24

- Oito apresentações reais com páginas próprias; discos agrupados na vitrine e selecionáveis na ficha.
- Filtros instantâneos no catálogo, preservando links navegáveis sem JavaScript.
- Cotação com adição, quantidade, remoção, persistência local, dados básicos, revisão e WhatsApp oficial. Não há pedido automático, preço inventado ou envio ao comercial durante os testes.
- Nova página **Seu negócio**: mercado, mercearia, pastelaria, lanchonete e distribuição. Seleção local de produtos e mensagem contextual, sem cadastro de distribuidores fictícios.
- Impressão das fichas e compartilhamento com opção nativa/fallback de cópia.
- PDF oficial local; mapa abre rota no Google Maps, sem API paga.
- Três QR Codes estáticos em `assets/qr/`: site, catálogo e cotação.
- Dicas existentes preservadas. Fichas permanecem em páginas acessíveis e compartilháveis; não foi acrescentado um modal redundante só para marcar uma caixa do roteiro.

## SEO e Google — fases 11–15, 23, 24 e 26

- 24 páginas geradas; 23 URLs no sitemap, excluindo a 404.
- Títulos e descrições individuais, canonical, robots com sitemap, Open Graph, Twitter cards, JSON-LD e navegação de localização nas fichas.
- Organization, WebSite, Product, BreadcrumbList, ContactPoint e PostalAddress usam dados disponíveis. Não foram inventados preços, avaliações, estoques ou perfis sociais.
- Product sem ofertas/avaliações reais não garante elegibilidade a resultados enriquecidos. O objetivo imediato é descrição e indexação normais; não eliminar avisos com dados falsos.
- Mantido `pages.dev` por escolha expressa do usuário. Domínio próprio não foi adquirido ou conectado.
- Search Console **preparado, não configurado na conta**. Há suporte à meta tag de verificação e guia para enviar o sitemap.
- Perfil da Empresa **orientado, não reivindicado/criado**. A pesquisa encontrou referências públicas, mas não comprovou titularidade de um perfil oficial. Não foi criada duplicata nem enviado contato a terceiros.
- Analytics e PWA permanecem opcionais e não foram instalados. Um service worker não agrega prioridade suficiente para reintroduzir outra camada de cache logo após a correção desse problema.

## Desempenho, acessibilidade e testes — fases 16, 18, 27 e 28

- Fontes locais: 611.108 → 95.168 bytes, redução de aproximadamente 84%. WOFF2 real, sem requisição ao Google Fonts.
- Dimensões das imagens declaradas para reservar espaço; correção de proporção do logo no rodapé; contraste reforçado no comparador; modal de menu nomeado.
- O conteúdo permanece em HTML; módulos JavaScript são carregados como módulos, sem framework ou biblioteca de animação.
- Build e testes de integridade: produtos, links locais, quantidades inválidas, mensagem, versões dos arquivos, metadados únicos, sitemap e dados estruturados.
- Brave: home sem overflow em 1920, 1440, 1280, 1024, 768, 430 e 375 px. Menu mobile e filtros exercitados. Cotação com disco 10 cm / 200 g × 3, persistência após recarregar e remoção confirmadas. Link de WhatsApp inspecionado sem envio. Compartilhamento copiou o link correto. Seleção para pastelaria conferida.
- Chrome: Lighthouse em emulação mobile local; impressão da ficha dos discos de 200 g em uma página A4, renderizada e inspecionada.
- Firefox: inspeção visual da home em 375 px com preferência por movimento reduzido. Não foi executada uma suíte funcional completa nesse navegador.
- Safari/iOS: indisponível neste ambiente; não declarar teste concluído.
- As notas do Lighthouse são medições de laboratório, não dados de campo do Search Console nem garantia de ranking. Os números finais estão no registro de validação que acompanha esta entrega.

## Operação e entrega — fases 22, 25, 29 e 30

- Sem dependência mensal, banco, CMS, API paga ou operador diário.
- GitHub e Cloudflare Pages mantidos; build reproduzível sem instalar dependências de aplicação.
- Documentos entregues: README, DEPLOY, CONTENT_GUIDE, ASSETS, SEO_SETUP e esta auditoria.
- PWA, analytics e novo ensaio fotográfico são melhorias opcionais; não pré-requisitos para a operação atual.
- **Não marcar todo o roteiro como integralmente encerrado:** faltam confirmações da fábrica para tabelas nutricionais/foto de 200 g, configuração nas contas Google e teste em Safari/iOS. O site funcional e as correções de código podem ser entregues e publicados sem inventar essas conclusões.

## Medição local final

Lighthouse mobile, Chrome headless, emulação e rede simuladas, origem local: desempenho 93/100; acessibilidade 100/100; boas práticas 100/100; SEO 100/100. LCP 3,1 s; CLS 0,002; TBT 0 ms. O LCP ainda admite evolução com fotos responsivas e medição em condições reais; não é marcado como excelente apenas porque a pontuação agregada passou de 90.
