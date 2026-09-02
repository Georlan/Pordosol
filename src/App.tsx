import { useEffect, useMemo, useState } from 'react'

type Product = {
  id: string
  family: 'Massas para pastel' | 'Pizzas' | 'Pães' | 'Canudinhos'
  name: string
  format: string
  image: string
  description: string
  benefits: string[]
  claims: string[]
}

const products: Product[] = [
  {
    id: 'massa-26x32',
    family: 'Massas para pastel',
    name: 'Massa para pastel, canudinho e lasanha',
    format: '26 cm × 32 cm',
    image: '/images/massa-26x32.jpg',
    description: 'Versátil para lanches e salgados, com crocância elevada e fácil manuseio.',
    benefits: ['Praticidade no preparo', 'Nível de crocância elevado', 'Fácil manuseio'],
    claims: ['Não contém ovos', 'Não contém lactose', 'Não contém proteína animal'],
  },
  {
    id: 'massa-15x30',
    family: 'Massas para pastel',
    name: 'Massa para pastel, canudinho e lasanha',
    format: '15 cm × 30 cm',
    image: '/images/massa-15x30.jpg',
    description: 'Uma opção prática para produzir lanches e salgados com agilidade.',
    benefits: ['Praticidade no preparo', 'Nível de crocância elevado', 'Fácil manuseio'],
    claims: ['Não contém ovos', 'Não contém lactose', 'Não contém proteína animal'],
  },
  {
    id: 'massa-redonda',
    family: 'Massas para pastel',
    name: 'Massa redonda para pastel',
    format: '15 cm / 500 g • 10 cm / 200 g',
    image: '/images/massa-redonda.jpg',
    description: 'Formato redondo para facilitar o preparo de porções e salgados.',
    benefits: ['Praticidade no preparo', 'Nível de crocância elevado', 'Fácil manuseio'],
    claims: ['Não contém ovos', 'Não contém lactose', 'Não contém proteína animal'],
  },
  {
    id: 'micro-pizzas',
    family: 'Pizzas',
    name: 'Micro pizzas',
    format: '24 unidades por pacote',
    image: '/images/micro-pizzas.jpg',
    description: 'Porções pequenas para preparo rápido em diferentes ocasiões.',
    benefits: ['Praticidade', 'Preparo rápido', 'Fácil manuseio'],
    claims: ['Não contém ovos'],
  },
  {
    id: 'mini-pizzas',
    family: 'Pizzas',
    name: 'Mini pizzas',
    format: '5 unidades por pacote',
    image: '/images/mini-pizzas.jpg',
    description: 'Uma alternativa prática para lanches, balcões e consumo doméstico.',
    benefits: ['Praticidade', 'Preparo rápido', 'Fácil manuseio'],
    claims: ['Não contém ovos'],
  },
  {
    id: 'pao-arabe',
    family: 'Pães',
    name: 'Pães árabes',
    format: '5 unidades por pacote',
    image: '/images/pao-arabe.jpg',
    description: 'Pães versáteis para recheios, sanduíches e preparações rápidas.',
    benefits: ['Praticidade', 'Preparo rápido', 'Fácil manuseio'],
    claims: ['Não contém proteína animal'],
  },
  {
    id: 'canudinhos',
    family: 'Canudinhos',
    name: 'Canudinhos para rechear',
    format: '50 unidades por pacote',
    image: '/images/canudinhos.jpg',
    description: 'Canudinhos prontos para receber recheios doces ou salgados.',
    benefits: ['Praticidade', 'Preparo rápido', 'Fácil manuseio'],
    claims: ['Não contém ovos', 'Não contém lactose', 'Não contém proteína animal'],
  },
]

const families = ['Massas para pastel', 'Pizzas', 'Pães', 'Canudinhos'] as const

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState<Product | null>(null)

  useEffect(() => {
    document.body.style.overflow = activeProduct ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeProduct])

  const grouped = useMemo(() => families.map((family) => ({
    family,
    items: products.filter((product) => product.family === family),
  })), [])

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Pôr do Sol Alimentos — início">
          <img src="/images/logo-pordosol.png" alt="Pôr do Sol Alimentos" />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#produtos">Produtos</a>
          <a href="#sobre">Sobre nós</a>
          <a href="#negocio">Para o seu negócio</a>
          <a href="#contato">Contato</a>
        </nav>
        <a className="header-cta" href="#contato">Fale conosco</a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu">
          {menuOpen ? 'Fechar' : 'Menu'}
        </button>
        {menuOpen && (
          <nav id="mobile-menu" className="mobile-nav" aria-label="Navegação mobile">
            {['Produtos', 'Sobre nós', 'Para o seu negócio', 'Contato'].map((label, index) => {
              const href = ['#produtos', '#sobre', '#negocio', '#contato'][index]
              return <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>
            })}
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Pôr do Sol Alimentos • Limoeiro do Norte, CE</p>
            <h1>Massas que fazem parte de quem produz, vende e serve.</h1>
            <p className="hero-text">Há mais de 30 anos produzindo alimentos com foco em praticidade, qualidade e confiança no coração do Vale do Jaguaribe.</p>
            <div className="hero-actions">
              <a className="primary-action" href="#produtos">Conheça nossos produtos</a>
              <a className="text-link" href="#contato">Fale com o comercial →</a>
            </div>
          </div>
          <div className="hero-media">
            <img src="/images/hero-linha.jpg" alt="Linha de produtos Pôr do Sol Alimentos" />
            <div className="hero-caption">Tradição regional • produtos para diferentes rotinas</div>
          </div>
        </section>

        <section className="institution-strip" aria-label="Informações institucionais">
          <span>+30 anos de história</span>
          <span>Limoeiro do Norte, Ceará</span>
          <span>Atuação regional</span>
        </section>

        <section id="produtos" className="section products-section">
          <div className="section-heading">
            <p className="eyebrow">Linha completa</p>
            <h2>Nossos produtos</h2>
            <p>Massas e alimentos organizados por aplicação, com informações diretas para facilitar sua escolha.</p>
          </div>

          <div className="families">
            {grouped.map(({ family, items }, groupIndex) => (
              <div className="family" key={family}>
                <aside className="family-heading">
                  <span>0{groupIndex + 1}</span>
                  <h3>{family}</h3>
                </aside>
                <div className="product-grid">
                  {items.map((product) => (
                    <article className="product" key={product.id}>
                      <button className="product-image" onClick={() => setActiveProduct(product)} aria-label={`Ver detalhes de ${product.name}`}>
                        <img src={product.image} alt={product.name} />
                      </button>
                      <p className="product-format">{product.format}</p>
                      <h4>{product.name}</h4>
                      <p className="product-description">{product.description}</p>
                      <div className="claims">
                        {product.claims.map((claim) => <span key={claim}>{claim}</span>)}
                      </div>
                      <button className="product-link" onClick={() => setActiveProduct(product)}>Ver produto →</button>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="sobre" className="about-section">
          <div className="about-visual">
            <img src="/images/massa-26x32.jpg" alt="Massa para pastel Pôr do Sol" />
            <div className="about-number"><strong>30+</strong><span>anos de história</span></div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">Sobre nós</p>
            <h2>Uma história feita no Vale do Jaguaribe.</h2>
            <p>A Pôr do Sol Alimentos está sediada em Limoeiro do Norte, Ceará, e atua na produção de massas para pastéis, mini pizzas, pães árabes e outros produtos relacionados.</p>
            <p>Ao longo de mais de três décadas, a empresa construiu presença regional atendendo pequenos empreendedores, supermercados e mercearias, com foco em praticidade, qualidade e confiança.</p>
          </div>
        </section>

        <section id="negocio" className="business-section">
          <div>
            <p className="eyebrow light">Para o seu negócio</p>
            <h2>Para quem vende, produz e serve todos os dias.</h2>
            <p>Produtos pensados para pequenos empreendedores, supermercados, mercearias e distribuidores regionais.</p>
            <a className="primary-action inverted" href="#contato">Falar com o comercial</a>
          </div>
          <ol className="business-list">
            <li><span>01</span>Variedade para diferentes preparos</li>
            <li><span>02</span>Praticidade no dia a dia</li>
            <li><span>03</span>Fácil preparo e manuseio</li>
            <li><span>04</span>Tradição regional</li>
          </ol>
        </section>

        <section id="contato" className="contact-section">
          <div>
            <p className="eyebrow light">Contato</p>
            <h2>Vamos conversar?</h2>
            <p>Para informações sobre produtos e atendimento comercial, fale diretamente com a equipe da Pôr do Sol.</p>
          </div>
          <div className="contact-grid">
            <div>
              <h3>Endereço</h3>
              <address>Rua Augusto Fidélis, 2443<br />Limoeiro do Norte - CE</address>
            </div>
            <div>
              <h3>Telefones</h3>
              <a href="tel:+5588999005560">(88) 9 9900-5560</a>
              <a href="tel:+5588992712966">(88) 9 9271-2966</a>
              <a href="tel:+558834234432">(88) 3423-4432</a>
            </div>
            <div className="contact-email">
              <h3>E-mail</h3>
              <a href="mailto:pordosolalimentos@hotmail.com">pordosolalimentos@hotmail.com</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <img src="/images/logo-pordosol.png" alt="Pôr do Sol Alimentos" />
        <p>Pôr do Sol Alimentos • Limoeiro do Norte - CE</p>
      </footer>

      {activeProduct && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setActiveProduct(null)}>
          <section className="modal" role="dialog" aria-modal="true" aria-labelledby="product-modal-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveProduct(null)} aria-label="Fechar">×</button>
            <img src={activeProduct.image} alt={activeProduct.name} />
            <div className="modal-content">
              <p className="product-format">{activeProduct.format}</p>
              <h2 id="product-modal-title">{activeProduct.name}</h2>
              <p>{activeProduct.description}</p>
              <ul>{activeProduct.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
              <div className="claims">{activeProduct.claims.map((claim) => <span key={claim}>{claim}</span>)}</div>
            </div>
          </section>
        </div>
      )}
    </>
  )
}

export default App
