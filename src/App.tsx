import { useEffect, useMemo, useState } from 'react'
import type { KeyboardEvent, SyntheticEvent } from 'react'
import { products, families, companyData } from './data/products'
import type { Product, Family } from './data/products'
import { recipes } from './data/recipes'
import type { Recipe } from './data/recipes'

const fallbackImage = '/images/massa-26x32.webp'

const familyId = (family: Family) =>
  family.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-')

export function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState<Product | null>(null)
  const [activeRecipe, setActiveRecipe] = useState<Recipe | null>(null)
  const [activeFamily, setActiveFamily] = useState<Family>('Massas para pastel')
  const [modalTab, setModalTab] = useState<'geral' | 'preparo' | 'nutricao'>('geral')

  useEffect(() => {
    document.body.style.overflow = (activeProduct || activeRecipe) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeProduct, activeRecipe])

  useEffect(() => {
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setActiveProduct(null)
      setActiveRecipe(null)
      setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const activeProducts = useMemo(
    () => products.filter((product) => product.family === activeFamily),
    [activeFamily],
  )

  const useFallback = (event: SyntheticEvent<HTMLImageElement>) => {
    if (!event.currentTarget.src.endsWith(fallbackImage)) {
      event.currentTarget.src = fallbackImage
    }
  }

  const selectFamily = (family: Family) => {
    setActiveFamily(family)
  }

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let targetIndex = index
    if (event.key === 'ArrowRight') targetIndex = (index + 1) % families.length
    else if (event.key === 'ArrowLeft') targetIndex = (index - 1 + families.length) % families.length
    else if (event.key === 'Home') targetIndex = 0
    else if (event.key === 'End') targetIndex = families.length - 1
    else return

    event.preventDefault()
    const targetFamily = families[targetIndex]
    selectFamily(targetFamily)
    requestAnimationFrame(() => {
      const el = document.getElementById('tab-' + familyId(targetFamily))
      el?.focus()
    })
  }

  const getWhatsAppLink = (messageText: string) => {
    const encoded = encodeURIComponent(messageText)
    return 'https://wa.me/' + companyData.phones[0].raw + '?text=' + encoded
  }

  return (
    <div className="app-container">
      {/* HEADER MODERNO ESTILO NITA COM VIDRO E NAVEGAÇÃO FLUIDA */}
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#inicio" aria-label="Pôr do Sol Alimentos — Início">
            <div className="brand-icon-wrapper">
              <svg viewBox="0 0 40 40" fill="none" className="brand-svg" aria-hidden="true">
                <circle cx="20" cy="20" r="18" fill="#e5b719" fillOpacity="0.2" />
                <path d="M8 26C11 20 15 16 20 16C25 16 29 20 32 26" stroke="#b61f24" strokeWidth="3" strokeLinecap="round" />
                <path d="M20 6V11" stroke="#e5b719" strokeWidth="3" strokeLinecap="round" />
                <path d="M10 10L13.5 13.5" stroke="#e5b719" strokeWidth="3" strokeLinecap="round" />
                <path d="M30 10L26.5 13.5" stroke="#e5b719" strokeWidth="3" strokeLinecap="round" />
                <path d="M5 28H35" stroke="#0f542d" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <div className="brand-text">
              <span className="brand-main">PÔR DO SOL</span>
              <span className="brand-sub">ALIMENTOS</span>
            </div>
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#produtos" className="nav-link">Produtos</a>
            <a href="#receitas" className="nav-link">Receitas & Dicas</a>
            <a href="#negocio" className="nav-link">Para seu Negócio</a>
            <a href="#sobre" className="nav-link">Sobre a Fábrica</a>
            <a href="#contato" className="nav-link">Contato</a>
          </nav>

          <div className="header-actions">
            <a
              className="whatsapp-header-btn"
              href={getWhatsAppLink('Olá! Gostaria de falar com o comercial da Pôr do Sol Alimentos.')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Atendimento rápido pelo WhatsApp"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.75 7.85 19L7.55 18.82L4.43 19.64L5.26 16.6L5.06 16.29C4.24 14.98 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.05 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.05 20.15ZM16.57 14.04C16.32 13.91 15.1 13.31 14.88 13.23C14.65 13.15 14.49 13.11 14.32 13.36C14.16 13.61 13.69 14.16 13.54 14.32C13.4 14.49 13.25 14.51 13 14.39C12.75 14.26 11.7 13.92 10.45 12.81C9.48 11.95 8.83 10.88 8.7 10.64C8.58 10.39 8.69 10.26 8.81 10.13C8.92 10.02 9.06 9.85 9.18 9.71C9.31 9.57 9.35 9.47 9.43 9.3C9.51 9.14 9.47 8.99 9.41 8.87C9.35 8.75 8.86 7.55 8.66 7.05C8.46 6.57 8.26 6.63 8.11 6.63C7.97 6.63 7.81 6.62 7.64 6.62C7.48 6.62 7.21 6.68 6.98 6.93C6.76 7.18 6.13 7.76 6.13 8.95C6.13 10.14 7 11.28 7.12 11.45C7.25 11.61 8.83 14.05 11.25 15.09C11.83 15.34 12.28 15.49 12.63 15.6C13.21 15.79 13.74 15.76 14.16 15.7C14.63 15.63 15.6 15.11 15.8 14.54C16.01 13.97 16.01 13.48 15.95 13.38C15.88 13.27 15.74 13.21 15.49 13.08L16.57 14.04Z" />
              </svg>
              <span>Fale no WhatsApp</span>
            </a>
            <button
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Alternar navegação mobile"
            >
              <span className={"menu-icon " + (menuOpen ? "open" : "")}></span>
            </button>
          </div>
        </div>

        {/* DRAWER MOBILE */}
        <nav id="mobile-menu" className={"mobile-nav " + (menuOpen ? "open" : "")} aria-label="Navegação mobile">
          <a href="#produtos" onClick={() => setMenuOpen(false)}>Catálogo de Produtos</a>
          <a href="#receitas" onClick={() => setMenuOpen(false)}>Receitas & Dicas</a>
          <a href="#negocio" onClick={() => setMenuOpen(false)}>Para seu Negócio</a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre a Pôr do Sol</a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>Atendimento & Contato</a>
          <div className="mobile-nav-footer">
            <a
              className="primary-action full"
              href={getWhatsAppLink('Olá! Gostaria de mais informações sobre os produtos Pôr do Sol.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir pelo WhatsApp
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* HERO SECTION DE ALTO IMPACTO ESTILO NITA */}
        <section id="inicio" className="hero-section">
          <div className="hero-overlay"></div>
          <div className="hero-content-wrapper">
            <div className="hero-copy">
              <div className="hero-badge-pill">
                <span className="pill-dot"></span>
                <span>Tradição do Vale do Jaguaribe • +30 Anos</span>
              </div>
              <h1 className="hero-title">
                Feita para quem <br />
                <span className="highlight-text">produz, vende e serve.</span>
              </h1>
              <p className="hero-subtitle">
                Massas para pastéis, lasanhas, canudinhos, pizzas e pães com nível elevado de crocância,
                folhas com separação plástica inteligente e alto rendimento comercial.
              </p>
              <div className="hero-actions-row">
                <a className="primary-action with-arrow" href="#produtos">
                  <span>Conheça a Linha</span>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a className="secondary-action" href="#negocio">
                  <span>Para seu Negócio</span>
                </a>
              </div>
              <div className="hero-specs-strip">
                <div className="spec-chip">
                  <strong>+30 Anos</strong>
                  <span>História & Tradição</span>
                </div>
                <div className="spec-divider"></div>
                <div className="spec-chip">
                  <strong>66 Porções</strong>
                  <span>Por pacote de 2 kg</span>
                </div>
                <div className="spec-divider"></div>
                <div className="spec-chip">
                  <strong>100% Vegetal</strong>
                  <span>Sem ovos ou lactose</span>
                </div>
              </div>
            </div>

            <div className="hero-visual-card">
              <div className="hero-image-frame">
                <img
                  src="/images/massa-26x32.webp"
                  alt="Embalagem oficial e massa fresca em camadas Pôr do Sol Alimentos"
                  fetchPriority="high"
                  onError={useFallback}
                  className="hero-main-img"
                />
                <div className="hero-floating-tag tag-top">
                  <span className="tag-icon">✨</span>
                  <div>
                    <strong>Crocância Máxima</strong>
                    <small>Frita sequinho sem estourar</small>
                  </div>
                </div>
                <div className="hero-floating-tag tag-bottom">
                  <span className="tag-icon">📦</span>
                  <div>
                    <strong>Massa 26 × 32 cm • 2 kg</strong>
                    <small>Uso profissional e doméstico</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST TICKER / PILARES */}
        <section className="trust-ticker" aria-label="Diferenciais da marca">
          <div className="ticker-item">
            <span className="ticker-icon">🌾</span>
            <div>
              <strong>+30 Anos de Mercado</strong>
              <p>Presença consolidada em Limoeiro do Norte e no Ceará</p>
            </div>
          </div>
          <div className="ticker-item">
            <span className="ticker-icon">🔍</span>
            <div>
              <strong>Rotulagem Conforme Anvisa</strong>
              <p>Tabela nutricional clara com selo frontal oficial</p>
            </div>
          </div>
          <div className="ticker-item">
            <span className="ticker-icon">⚡</span>
            <div>
              <strong>3 em 1: Pastel, Canudo e Lasanha</strong>
              <p>Versatilidade testada e aprovada para múltiplos pratos</p>
            </div>
          </div>
          <div className="ticker-item">
            <span className="ticker-icon">🏭</span>
            <div>
              <strong>Parque Fabril com 250 m²</strong>
              <p>Capacidade produtiva com padrão higiênico rigoroso</p>
            </div>
          </div>
        </section>

        {/* CATÁLOGO INTERATIVO DE PRODUTOS */}
        <section id="produtos" className="catalog-section">
          <div className="section-header-centered">
            <span className="section-tag">Linha Oficial de Produtos</span>
            <h2>Qualidade profissional em cada formato.</h2>
            <p>
              Escolha a família de produtos para conferir os detalhes técnicos, rendimentos e formas de preparo.
            </p>
          </div>

          {/* ABAS CATEGORIAS ESTILO NITA */}
          <div className="family-nav-wrapper">
            <div className="family-tabs" role="tablist" aria-label="Famílias de produtos">
              {families.map((family, index) => {
                const id = familyId(family)
                const count = products.filter((p) => p.family === family).length
                const isActive = activeFamily === family
                return (
                  <button
                    key={family}
                    id={'tab-' + id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={'panel-' + id}
                    tabIndex={isActive ? 0 : -1}
                    className={'family-tab-btn ' + (isActive ? 'active' : '')}
                    onClick={() => selectFamily(family)}
                    onKeyDown={(event) => handleTabKeyDown(event, index)}
                  >
                    <span className="tab-number">0{index + 1}</span>
                    <span className="tab-label">{family}</span>
                    <span className="tab-badge">{count}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* GRID DE PRODUTOS COM CARDS MODERNOS ELEVADOS */}
          <div
            id={'panel-' + familyId(activeFamily)}
            className="catalog-grid-panel"
            role="tabpanel"
            aria-labelledby={'tab-' + familyId(activeFamily)}
          >
            <div className="category-headline">
              <div>
                <h3>{activeFamily}</h3>
                <span className="category-count-sub">
                  Exibindo {activeProducts.length} {activeProducts.length === 1 ? 'item' : 'itens'} nesta linha
                </span>
              </div>
            </div>

            <div className="products-grid">
              {activeProducts.map((product) => (
                <article className="product-card" key={product.id}>
                  <div className="product-card-top">
                    <span className="product-format-badge">{product.format}</span>
                  </div>

                  <div className="product-image-container" onClick={() => { setActiveProduct(product); setModalTab('geral') }}>
                    <img
                      src={product.image}
                      alt={product.name}
                      onError={useFallback}
                      loading="lazy"
                      className="product-thumb"
                    />
                    <div className="image-hover-overlay">
                      <span className="hover-cta-badge">Ver Ficha Técnica & Rótulo ↗</span>
                    </div>
                  </div>

                  <div className="product-card-body">
                    <h4 className="product-title">{product.name}</h4>
                    <p className="product-desc">{product.description}</p>

                    <div className="product-claims-chips">
                      {product.claims.map((claim) => (
                        <span className="claim-chip" key={claim}>{claim}</span>
                      ))}
                    </div>

                    <div className="product-card-footer">
                      <button
                        className="btn-view-details"
                        onClick={() => { setActiveProduct(product); setModalTab('geral') }}
                        aria-label={'Ver especificações e modo de preparo de ' + product.name}
                      >
                        <span>Ficha Técnica & Preparo</span>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </button>
                      <a
                        className="btn-quick-quote"
                        href={getWhatsAppLink('Olá! Tenho interesse no produto: ' + product.name + ' (' + product.format + '). Poderiam me passar uma cotação?')}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Cotar no WhatsApp"
                      >
                        Cotar
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO RECEITAS & DICAS DE PREPARO ESTILO NITA */}
        <section id="receitas" className="recipes-section">
          <div className="recipes-inner">
            <div className="section-header-centered dark-theme">
              <span className="section-tag gold">Receitas & Dicas da Casa</span>
              <h2>O segredo do preparo perfeito.</h2>
              <p>
                Aprenda a tirar o máximo de crocância e sabor das massas Pôr do Sol com dicas extraídas diretamente
                da nossa tradição e dos rótulos oficiais.
              </p>
            </div>

            <div className="recipes-grid">
              {recipes.map((recipe) => (
                <div className="recipe-card" key={recipe.id} onClick={() => setActiveRecipe(recipe)}>
                  <div className="recipe-media">
                    <img src={recipe.image} alt={recipe.title} loading="lazy" onError={useFallback} />
                    <span className="recipe-category-pill">{recipe.category}</span>
                  </div>
                  <div className="recipe-content">
                    <div className="recipe-meta-row">
                      <span>⏱ {recipe.time}</span>
                      <span>🍽 {recipe.yield}</span>
                    </div>
                    <h3 className="recipe-title">{recipe.title}</h3>
                    <p className="recipe-brief">{recipe.description}</p>
                    <div className="recipe-tip-box">
                      <strong>Dica de Ouro:</strong> {recipe.tip}
                    </div>
                    <button className="recipe-open-btn">
                      <span>Ver receita completa passo a passo</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO PARA O SEU NEGÓCIO (B2B / FOOD SERVICE) */}
        <section id="negocio" className="business-section">
          <div className="business-container">
            <div className="business-copy-col">
              <span className="section-tag">Soluções Food Service</span>
              <h2>Feita sob medida para pastelarias, mercados e lanchonetes.</h2>
              <p className="business-intro">
                Quem trabalha com alimentos precisa de previsibilidade, rendimento e um produto que não decepcione
                na hora do pico de movimento. A massa Pôr do Sol entrega estabilidade e facilidade operacional.
              </p>

              <div className="business-pillars-list">
                <div className="pillar-item">
                  <div className="pillar-num">01</div>
                  <div>
                    <h4>Separação Ágil sem Rasgar</h4>
                    <p>Folhas intercaladas com plástico protetor que garantem agilidade na montagem e zero desperdício.</p>
                  </div>
                </div>
                <div className="pillar-item">
                  <div className="pillar-num">02</div>
                  <div>
                    <h4>Rendimento Financeiro Real</h4>
                    <p>O pacote de 2 kg rende cerca de 66 porções padrão de 30 g, proporcionando margem clara para seu comércio.</p>
                  </div>
                </div>
                <div className="pillar-item">
                  <div className="pillar-num">03</div>
                  <div>
                    <h4>Fritura Dourada e Sequinha</h4>
                    <p>Fórmula desenvolvida com teor equilibrado que borbulha de forma uniforme e absorve menos óleo.</p>
                  </div>
                </div>
                <div className="pillar-item">
                  <div className="pillar-num">04</div>
                  <div>
                    <h4>Atendimento e Entrega Confiável</h4>
                    <p>Fábrica em Limoeiro do Norte com presença em redes de supermercados e distribuidores regionais.</p>
                  </div>
                </div>
              </div>

              <div className="business-cta-box">
                <a
                  className="primary-action"
                  href={getWhatsAppLink('Olá! Sou comerciante/distribuidor e gostaria de conhecer as condições para fornecimento de produtos Pôr do Sol.')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar com Representante Comercial
                </a>
              </div>
            </div>

            <div className="business-card-display">
              <div className="business-display-card">
                <div className="display-badge">Embalagem 2 kg Oficial</div>
                <img src="/images/massa-26x32.webp" alt="Massa profissional Pôr do Sol 2kg" onError={useFallback} />
                <div className="display-stats-grid">
                  <div className="d-stat">
                    <strong>66</strong>
                    <span>porções / pacote</span>
                  </div>
                  <div className="d-stat">
                    <strong>3 em 1</strong>
                    <span>pastel, canudo, lasanha</span>
                  </div>
                  <div className="d-stat">
                    <strong>100%</strong>
                    <span>confiança de entrega</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO SOBRE A FÁBRICA */}
        <section id="sobre" className="about-section">
          <div className="about-container">
            <div className="about-image-card">
              <img
                src="/images/hero-produtos-madeira-hq.webp"
                alt="Parque fabril e linha de produção Pôr do Sol Alimentos em Limoeiro do Norte"
                onError={useFallback}
                loading="lazy"
              />
              <div className="about-stat-overlay">
                <strong>30+</strong>
                <span>Anos de dedicação à mesa do cearense</span>
              </div>
            </div>

            <div className="about-text-content">
              <span className="section-tag">Nossa História</span>
              <h2>Uma história que nasceu e cresceu no Vale do Jaguaribe.</h2>
              <p>
                A <strong>Pôr do Sol Alimentos</strong> iniciou sua trajetória em Limoeiro do Norte, Ceará,
                com a missão de levar praticidade e massas artesanais de altíssima crocância para as famílias e comerciantes locais.
              </p>
              <p>
                Com parque fabril próprio de 250 m² e maquinário moderno, a empresa combina receitas consagradas de família
                com processos padronizados de higiene e controle de qualidade estabelecidos pela legislação brasileira.
              </p>
              <div className="about-badges-row">
                <div className="a-badge">
                  <span className="a-icon">📍</span>
                  <div>
                    <strong>Limoeiro do Norte - CE</strong>
                    <small>Rua Augusto Fidélis, 2443</small>
                  </div>
                </div>
                <div className="a-badge">
                  <span className="a-icon">🏭</span>
                  <div>
                    <strong>250 m² de Fábrica</strong>
                    <small>Capacidade e higiene rigorosa</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO CONTATO E LOCALIZAÇÃO */}
        <section id="contato" className="contact-section">
          <div className="contact-container">
            <div className="contact-info-col">
              <span className="section-tag gold">Canais de Atendimento</span>
              <h2>Fale com a nossa equipe.</h2>
              <p>
                Estamos prontos para atender você, seja para pedidos no atacado, dúvidas sobre preparo ou parcerias comerciais.
              </p>

              <div className="contact-cards-list">
                <a className="contact-card-item" href="tel:+5588999005560">
                  <span className="c-icon">📱</span>
                  <div>
                    <strong>WhatsApp & Celular Principal</strong>
                    <span>(88) 9 9900-5560</span>
                  </div>
                </a>
                <a className="contact-card-item" href="tel:+5588992712966">
                  <span className="c-icon">📞</span>
                  <div>
                    <strong>Comercial</strong>
                    <span>(88) 9 9271-2966</span>
                  </div>
                </a>
                <a className="contact-card-item" href="tel:+558834234432">
                  <span className="c-icon">☎️</span>
                  <div>
                    <strong>Telefone Fixo da Fábrica</strong>
                    <span>(88) 3423-4432</span>
                  </div>
                </a>
                <a className="contact-card-item" href="mailto:pordosolalimentos@hotmail.com">
                  <span className="c-icon">✉️</span>
                  <div>
                    <strong>E-mail Institucional</strong>
                    <span>pordosolalimentos@hotmail.com</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="contact-legal-col">
              <div className="legal-box">
                <h3>Dados de Identificação Fiscal</h3>
                <p className="legal-text">
                  <strong>Razão Social:</strong> Milena Mara Costa da Silva - ME<br />
                  <strong>CNPJ:</strong> 07.677.559/0001-08<br />
                  <strong>Inscrição Estadual (CGF):</strong> 06.540.577-3<br />
                  <strong>Endereço:</strong> Rua Augusto Fidélis, 2443<br />
                  <strong>CEP:</strong> 62.930-000 • Limoeiro do Norte / CE<br />
                  <strong>Classificação:</strong> Indústria Brasileira
                </p>
                <div className="brazil-badge">
                  <span>🇧🇷 Produto fabricado no Ceará • Indústria Brasileira</span>
                </div>
                <a
                  className="primary-action full"
                  style={{ marginTop: '24px' }}
                  href={getWhatsAppLink('Olá! Gostaria de conversar com a Pôr do Sol Alimentos.')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Iniciar Conversa no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* RODAPÉ CORPORATIVO ELEGANTE */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand-col">
            <div className="brand">
              <span className="brand-main white">PÔR DO SOL</span>
              <span className="brand-sub yellow">ALIMENTOS</span>
            </div>
            <p className="footer-slogan">
              Tradição em massas frescas para pastel, lasanha, canudinhos e pães no Vale do Jaguaribe há mais de 30 anos.
            </p>
          </div>

          <div className="footer-links-col">
            <h5>Navegação</h5>
            <ul>
              <li><a href="#produtos">Produtos</a></li>
              <li><a href="#receitas">Receitas</a></li>
              <li><a href="#negocio">Para o seu Negócio</a></li>
              <li><a href="#sobre">Sobre a Fábrica</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h5>Contato Rápido</h5>
            <ul>
              <li><a href="tel:+5588999005560">(88) 9 9900-5560</a></li>
              <li><a href="tel:+558834234432">(88) 3423-4432</a></li>
              <li><a href="mailto:pordosolalimentos@hotmail.com">pordosolalimentos@hotmail.com</a></li>
              <li>Limoeiro do Norte - CE</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Pôr do Sol Alimentos • Milena Mara Costa da Silva - ME (CNPJ 07.677.559/0001-08). Todos os direitos reservados.</p>
          <p>Indústria Brasileira • Limoeiro do Norte - Ceará</p>
        </div>
      </footer>

      {/* BOTÃO FLUTUANTE DE WHATSAPP */}
      <a
        className="floating-whatsapp-btn"
        href={getWhatsAppLink('Olá! Gostaria de falar com o atendimento da Pôr do Sol Alimentos.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chamar no WhatsApp"
        title="Fale conosco no WhatsApp"
      >
        <span className="whatsapp-ping"></span>
        <svg viewBox="0 0 24 24" width="28" height="28" fill="#fff" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.75 7.85 19L7.55 18.82L4.43 19.64L5.26 16.6L5.06 16.29C4.24 14.98 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.68 12.05 3.68C14.25 3.68 16.31 4.54 17.87 6.1C19.42 7.66 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.05 20.15ZM16.57 14.04C16.32 13.91 15.1 13.31 14.88 13.23C14.65 13.15 14.49 13.11 14.32 13.36C14.16 13.61 13.69 14.16 13.54 14.32C13.4 14.49 13.25 14.51 13 14.39C12.75 14.26 11.7 13.92 10.45 12.81C9.48 11.95 8.83 10.88 8.7 10.64C8.58 10.39 8.69 10.26 8.81 10.13C8.92 10.02 9.06 9.85 9.18 9.71C9.31 9.57 9.35 9.47 9.43 9.3C9.51 9.14 9.47 8.99 9.41 8.87C9.35 8.75 8.86 7.55 8.66 7.05C8.46 6.57 8.26 6.63 8.11 6.63C7.97 6.63 7.81 6.62 7.64 6.62C7.48 6.62 7.21 6.68 6.98 6.93C6.76 7.18 6.13 7.76 6.13 8.95C6.13 10.14 7 11.28 7.12 11.45C7.25 11.61 8.83 14.05 11.25 15.09C11.83 15.34 12.28 15.49 12.63 15.6C13.21 15.79 13.74 15.76 14.16 15.7C14.63 15.63 15.6 15.11 15.8 14.54C16.01 13.97 16.01 13.48 15.95 13.38C15.88 13.27 15.74 13.21 15.49 13.08L16.57 14.04Z" />
        </svg>
      </a>

      {/* MODAL DETALHADO DO PRODUTO (FICHA TÉCNICA + DADOS DOS RÓTULOS REAIS) */}
      {activeProduct && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setActiveProduct(null)}>
          <section
            className="modal-sheet"
            role="dialog"
            aria-modal="true"
            aria-labelledby="product-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="modal-header-bar">
              <div className="modal-header-meta">
                <span className="modal-category-tag">{activeProduct.family}</span>
                <span className="modal-format-badge">{activeProduct.format}</span>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setActiveProduct(null)}
                aria-label="Fechar janela"
              >
                ✕
              </button>
            </div>

            <div className="modal-body-scroll">
              <div className="modal-grid-hero">
                <div className="modal-image-col">
                  <img src={activeProduct.image} alt={activeProduct.name} onError={useFallback} />
                </div>
                <div className="modal-intro-col">
                  <h2 id="product-modal-title">{activeProduct.name}</h2>
                  {activeProduct.packageWeight && (
                    <p className="modal-weight"><strong>Peso / Rendimento:</strong> {activeProduct.packageWeight} {activeProduct.servingsInfo ? '• ' + activeProduct.servingsInfo : ''}</p>
                  )}
                  <p className="modal-description-text">{activeProduct.description}</p>
                  <div className="modal-claims-row">
                    {activeProduct.claims.map((claim) => (
                      <span className="claim-chip" key={claim}>{claim}</span>
                    ))}
                  </div>

                  <div className="modal-cta-row">
                    <a
                      className="primary-action full"
                      href={getWhatsAppLink('Olá! Gostaria de cotar o produto ' + activeProduct.name + ' (' + activeProduct.format + ').')}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Solicitar Cotação no WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* TABS INTERNAS DO MODAL */}
              <div className="modal-tabs-nav">
                <button
                  className={'modal-tab-btn ' + (modalTab === 'geral' ? 'active' : '')}
                  onClick={() => setModalTab('geral')}
                >
                  Ficha Técnica & Benefícios
                </button>
                {activeProduct.methods && activeProduct.methods.length > 0 && (
                  <button
                    className={'modal-tab-btn ' + (modalTab === 'preparo' ? 'active' : '')}
                    onClick={() => setModalTab('preparo')}
                  >
                    Modo de Preparo Oficial
                  </button>
                )}
                {activeProduct.nutrition && (
                  <button
                    className={'modal-tab-btn ' + (modalTab === 'nutricao' ? 'active' : '')}
                    onClick={() => setModalTab('nutricao')}
                  >
                    Tabela Nutricional & Rótulo
                  </button>
                )}
              </div>

              {/* CONTEÚDO DA ABA GERAL */}
              {modalTab === 'geral' && (
                <div className="modal-tab-pane">
                  <h4>Diferenciais e Benefícios</h4>
                  <ul className="benefits-bullet-list">
                    {activeProduct.benefits.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>

                  {activeProduct.ingredients && (
                    <div className="info-block">
                      <h5>Ingredientes (conforme rótulo oficial)</h5>
                      <p>{activeProduct.ingredients}</p>
                    </div>
                  )}

                  {activeProduct.allergens && (
                    <div className="info-block warning-box">
                      <strong>Informações sobre Alergênicos:</strong>
                      <p>{activeProduct.allergens}</p>
                    </div>
                  )}
                </div>
              )}

              {/* CONTEÚDO DA ABA DE MODO DE PREPARO */}
              {modalTab === 'preparo' && activeProduct.methods && (
                <div className="modal-tab-pane">
                  <h4>Instruções do Rótulo Oficial</h4>
                  <div className="methods-cards-list">
                    {activeProduct.methods.map((method) => (
                      <div className="method-card-item" key={method.title}>
                        <h5>{method.title}</h5>
                        <p>{method.steps}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CONTEÚDO DA ABA DE NUTRIÇÃO COM SELO ANVISA */}
              {modalTab === 'nutricao' && activeProduct.nutrition && (
                <div className="modal-tab-pane">
                  {activeProduct.nutrition.highSodiumWarning && (
                    <div className="anvisa-seal-box">
                      <div className="anvisa-seal-badge">
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#000" strokeWidth="2.5">
                          <circle cx="10" cy="10" r="6" />
                          <path d="M14.5 14.5L20 20" />
                        </svg>
                        <div className="anvisa-seal-text">
                          <span>ALTO EM</span>
                          <strong>SÓDIO</strong>
                        </div>
                      </div>
                      <p className="anvisa-seal-caption">Rotulagem Nutricional Frontal conforme RDC 429 da Anvisa.</p>
                    </div>
                  )}

                  <div className="nutrition-table-wrapper">
                    <div className="nutrition-table-header">
                      <h5>INFORMAÇÃO NUTRICIONAL</h5>
                      <p>{activeProduct.nutrition.totalServings}</p>
                      <p><strong>Porção:</strong> {activeProduct.nutrition.servingSize}</p>
                    </div>
                    <table className="nutrition-table">
                      <thead>
                        <tr>
                          <th>Componente</th>
                          <th>100 g</th>
                          <th>30 g</th>
                          <th>%VD*</th>
                        </tr>
                      </thead>
                      <tbody>
                        {activeProduct.nutrition.rows.map((row) => (
                          <tr key={row.item}>
                            <td>{row.item}</td>
                            <td>{row.per100g}</td>
                            <td>{row.perServing}</td>
                            <td>{row.dailyValue}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p className="nutrition-footer-note">* Percentual de valores diários fornecidos pela porção.</p>
                  </div>

                  {activeProduct.ingredients && (
                    <div className="info-block" style={{ marginTop: '20px' }}>
                      <h5>Ingredientes:</h5>
                      <p>{activeProduct.ingredients}</p>
                    </div>
                  )}

                  {activeProduct.allergens && (
                    <div className="info-block warning-box">
                      <p>{activeProduct.allergens}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>
        </div>
      )}

      {/* MODAL DE RECEITA COMPLETA */}
      {activeRecipe && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setActiveRecipe(null)}>
          <section
            className="modal-sheet"
            role="dialog"
            aria-modal="true"
            aria-labelledby="recipe-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="modal-header-bar">
              <div className="modal-header-meta">
                <span className="modal-category-tag">Receita Recomendada</span>
                <span className="modal-format-badge">⏱ {activeRecipe.time} • 🍽 {activeRecipe.yield}</span>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setActiveRecipe(null)}
                aria-label="Fechar janela"
              >
                ✕
              </button>
            </div>

            <div className="modal-body-scroll">
              <div className="modal-grid-hero">
                <div className="modal-image-col">
                  <img src={activeRecipe.image} alt={activeRecipe.title} onError={useFallback} />
                </div>
                <div className="modal-intro-col">
                  <h2 id="recipe-modal-title">{activeRecipe.title}</h2>
                  <p className="modal-description-text">{activeRecipe.description}</p>
                  <div className="recipe-tip-banner">
                    <strong>💡 Dica de Ouro do Mestre:</strong>
                    <p>{activeRecipe.tip}</p>
                  </div>
                </div>
              </div>

              <div className="recipe-full-steps">
                <div className="recipe-ingredients-box">
                  <h4>Ingredientes</h4>
                  <ul>
                    {activeRecipe.ingredients.map((ing) => (
                      <li key={ing}>{ing}</li>
                    ))}
                  </ul>
                </div>

                <div className="recipe-instructions-box">
                  <h4>Modo de Preparo</h4>
                  <ol>
                    {activeRecipe.instructions.map((inst, i) => (
                      <li key={i}>
                        <span className="step-number">{i + 1}</span>
                        <p>{inst}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default App
