import { useEffect, useMemo, useState } from 'react'
import type { SyntheticEvent } from 'react'

type Family = 'Massas para pastel' | 'Pizzas' | 'Pães' | 'Canudinhos'

type Product = {
  id: string
  family: Family
  name: string
  format: string
  image: string
  imageReady: boolean
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
    image: '/images/massa-26x32-oficial.svg',
    imageReady: true,
    description: 'Ideal para quem busca praticidade na hora de fazer lanches e salgados, com nível de crocância elevado e fácil manuseio.',
    benefits: ['Praticidade para lanches e salgados', 'Nível de crocância elevado', 'Fácil manuseio'],
    claims: ['Não contém ovos', 'Não contém lactose', 'Não contém proteína animal'],
  },
  {
    id: 'massa-15x30',
    family: 'Massas para pastel',
    name: 'Massa para pastel, canudinho e lasanha',
    format: '15 cm × 30 cm',
    image: '/images/massa-15x30-oficial.svg',
    imageReady: true,
    description: 'Ideal para quem busca praticidade na hora de fazer lanches e salgados, com nível de crocância elevado e fácil manuseio.',
    benefits: ['Praticidade para lanches e salgados', 'Nível de crocância elevado', 'Fácil manuseio'],
    claims: ['Não contém ovos', 'Não contém lactose', 'Não contém proteína animal'],
  },
  {
    id: 'massa-redonda',
    family: 'Massas para pastel',
    name: 'Massa para pastel, canudinho e lasanha',
    format: '15 cm de diâmetro / 500 g • 10 cm de diâmetro / 200 g',
    image: '/images/massa-redonda-oficial.svg',
    imageReady: true,
    description: 'Ideal para quem busca praticidade na hora de fazer lanches e salgados, com nível de crocância elevado e fácil manuseio.',
    benefits: ['Praticidade para lanches e salgados', 'Nível de crocância elevado', 'Fácil manuseio'],
    claims: ['Não contém ovos', 'Não contém lactose', 'Não contém proteína animal'],
  },
  {
    id: 'micro-pizzas',
    family: 'Pizzas',
    name: 'Micro pizzas',
    format: '24 unidades por pacote',
    image: '/images/imagem-em-preparacao.svg',
    imageReady: false,
    description: 'Ideal para quem busca praticidade na hora de fazer lanches e salgados, com preparo rápido e fácil manuseio.',
    benefits: ['Praticidade para lanches e salgados', 'Preparo rápido', 'Fácil manuseio'],
    claims: ['Não contém ovos'],
  },
  {
    id: 'mini-pizzas',
    family: 'Pizzas',
    name: 'Mini pizzas',
    format: '5 unidades por pacote',
    image: '/images/imagem-em-preparacao.svg',
    imageReady: false,
    description: 'Ideal para quem busca praticidade na hora de fazer lanches e salgados, com preparo rápido e fácil manuseio.',
    benefits: ['Praticidade para lanches e salgados', 'Preparo rápido', 'Fácil manuseio'],
    claims: ['Não contém ovos'],
  },
  {
    id: 'pao-arabe',
    family: 'Pães',
    name: 'Pães árabes',
    format: '5 unidades por pacote',
    image: '/images/imagem-em-preparacao.svg',
    imageReady: false,
    description: 'Ideal para quem busca praticidade na hora de fazer lanches e salgados, com preparo rápido e fácil manuseio.',
    benefits: ['Praticidade para lanches e salgados', 'Preparo rápido', 'Fácil manuseio'],
    claims: ['Não contém proteína animal'],
  },
  {
    id: 'canudinhos',
    family: 'Canudinhos',
    name: 'Canudinhos para rechear',
    format: '50 unidades por pacote',
    image: '/images/imagem-em-preparacao.svg',
    imageReady: false,
    description: 'Ideal para quem busca praticidade na hora de fazer lanches e salgados, com preparo rápido e fácil manuseio.',
    benefits: ['Praticidade para lanches e salgados', 'Preparo rápido', 'Fácil manuseio'],
    claims: ['Não contém ovos', 'Não contém lactose', 'Não contém proteína animal'],
  },
]

const families: Family[] = ['Massas para pastel', 'Pizzas', 'Pães', 'Canudinhos']
const heroWords = ['produz', 'vende', 'serve']
const fallbackImage = '/images/imagem-em-preparacao.svg'

const familyId = (family: Family) => family.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-')

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState<Product | null>(null)
  const [activeFamily, setActiveFamily] = useState<Family>('Massas para pastel')
  const [heroWordIndex, setHeroWordIndex] = useState(0)

  useEffect(() => {
    document.body.style.overflow = activeProduct ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeProduct])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => {
      setHeroWordIndex((index) => (index + 1) % heroWords.length)
    }, 2200)
    return () => window.clearInterval(timer)
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

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Pôr do Sol Alimentos — início">
          <span className="brand-main">PÔR DO SOL</span>
          <span className="brand-sub">ALIMENTOS</span>
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
            <a href="#produtos" onClick={() => setMenuOpen(false)}>Produtos</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre nós</a>
            <a href="#negocio" onClick={() => setMenuOpen(false)}>Para o seu negócio</a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a>
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Pôr do Sol Alimentos • Vale do Jaguaribe</p>
            <h1>Feita para quem<br /><span className="hero-rotator">{heroWords[heroWordIndex]}.</span></h1>
            <p className="hero-text">Há mais de 30 anos produzindo massas e alimentos com praticidade, qualidade e presença regional em Limoeiro do Norte, Ceará.</p>
            <div className="hero-actions">
              <a className="primary-action" href="#produtos">Conheça a linha</a>
              <a className="text-link" href="#negocio">Para o seu negócio →</a>
            </div>
          </div>
          <figure className="hero-media">
            <img src="/images/hero-oficial.jpg" alt="Linha de produtos Pôr do Sol apresentada no catálogo oficial" onError={useFallback} />
            <figcaption className="hero-caption">Linha de produtos Pôr do Sol</figcaption>
          </figure>
        </section>

        <section className="institution-strip" aria-label="Informações institucionais">
          <span>+30 anos de história</span><span>Limoeiro do Norte, Ceará</span><span>Atuação regional</span>
        </section>

        <section className="brand-statement">
          <p className="eyebrow">Tradição que acompanha a rotina</p>
          <p className="statement-line">Da massa do pastel ao pão árabe,</p>
          <p className="statement-line accent">praticidade para preparar, vender e servir.</p>
        </section>

        <section id="produtos" className="products-section">
          <div className="products-intro">
            <div><p className="eyebrow">Nossos produtos</p><h2>Uma linha para diferentes preparos.</h2></div>
            <p>Massas para pastéis, mini pizzas, pães árabes e outros produtos relacionados para a rotina de pequenos empreendedores, supermercados e mercearias.</p>
          </div>

          <div className="family-tabs" role="tablist" aria-label="Famílias de produtos">
            {families.map((family, index) => {
              const id = familyId(family)
              return (
                <button key={family} id={`tab-${id}`} type="button" role="tab" aria-selected={activeFamily === family} aria-controls={`panel-${id}`} className={activeFamily === family ? 'active' : ''} onClick={() => setActiveFamily(family)}>
                  <span>0{index + 1}</span>{family}
                </button>
              )
            })}
          </div>

          <div id={`panel-${familyId(activeFamily)}`} className="featured-family" role="tabpanel" aria-labelledby={`tab-${familyId(activeFamily)}`}>
            <div className="family-title">
              <p className="eyebrow">Família selecionada</p>
              <h3>{activeFamily}</h3>
              <p>{activeProducts.length} {activeProducts.length === 1 ? 'produto' : 'produtos'} nesta categoria.</p>
            </div>
            <div className="product-grid">
              {activeProducts.map((product) => (
                <article className="product" key={product.id}>
                  <button className={`product-image ${product.imageReady ? '' : 'pending'}`} onClick={() => setActiveProduct(product)} aria-label={`Ver detalhes de ${product.name}`}>
                    <img src={product.image} alt={product.name} onError={useFallback} />
                    <span className="product-open">Ver produto ↗</span>
                  </button>
                  <p className="product-format">{product.format}</p>
                  <h4>{product.name}</h4>
                  <p className="product-description">{product.description}</p>
                  <div className="claims">{product.claims.map((claim) => <span key={claim}>{claim}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="about-section">
          <div className="about-visual">
            <img src="/images/sobre-fabrica-oficial.svg" alt="Imagem institucional apresentada no catálogo da Pôr do Sol Alimentos" onError={useFallback} />
            <div className="about-number"><strong>30+</strong><span>anos de história</span></div>
          </div>
          <div className="about-copy">
            <p className="eyebrow">Sobre nós</p><h2>Uma história feita no Vale do Jaguaribe.</h2>
            <p>A Pôr do Sol Alimentos está sediada em Limoeiro do Norte, Ceará, e atua na produção de massas para pastéis, mini pizzas, pães árabes e outros produtos relacionados, destinados a pequenos empreendedores, supermercados e mercearias.</p>
            <p>Com mais de 30 anos no mercado, a empresa mantém atuação regional e presença em alguns distribuidores regionais e redes de supermercado.</p>
          </div>
        </section>

        <section id="negocio" className="business-section">
          <div><p className="eyebrow light">Para o seu negócio</p><h2>Produtos para quem trabalha com alimento todos os dias.</h2><p>Uma linha destinada a pequenos empreendedores, supermercados e mercearias, com presença em alguns distribuidores regionais e redes de supermercado.</p><a className="primary-action inverted" href="#contato">Falar com o comercial</a></div>
          <ol className="business-list"><li><span>01</span>Variedade para diferentes preparos</li><li><span>02</span>Praticidade no dia a dia</li><li><span>03</span>Fácil preparo e manuseio</li><li><span>04</span>Atuação regional</li></ol>
        </section>

        <section id="contato" className="contact-section">
          <div><p className="eyebrow light">Contato</p><h2>Vamos conversar?</h2><p>Para informações sobre produtos e atendimento comercial, fale diretamente com a equipe da Pôr do Sol.</p></div>
          <div className="contact-grid">
            <div><h3>Endereço</h3><address>Rua Augusto Fidélis, 2443<br />CEP 62.930-000<br />Limoeiro do Norte - CE</address></div>
            <div><h3>Telefones</h3><a href="tel:+5588999005560">(88) 9 9900-5560</a><a href="tel:+558834234432">(88) 3423-4432</a></div>
            <div className="contact-email"><h3>E-mail</h3><a href="mailto:pordosolalimentos@hotmail.com">pordosolalimentos@hotmail.com</a></div>
            <div className="contact-legal"><h3>Identificação</h3><p>Fabricado por: Milena Mara Costa da Silva - ME<br />CNPJ 07.677.559/0001-08<br />CGF 06.540.577-3<br />Indústria Brasileira</p></div>
          </div>
        </section>
      </main>

      <footer><div className="footer-brand"><strong>PÔR DO SOL</strong><span>ALIMENTOS</span></div><p>Pôr do Sol Alimentos • Limoeiro do Norte - CE</p></footer>

      {activeProduct && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setActiveProduct(null)}>
          <section className="modal" role="dialog" aria-modal="true" aria-labelledby="product-modal-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveProduct(null)} aria-label="Fechar">×</button>
            <img src={activeProduct.image} alt={activeProduct.name} onError={useFallback} />
            <div className="modal-content"><p className="product-format">{activeProduct.format}</p><h2 id="product-modal-title">{activeProduct.name}</h2><p>{activeProduct.description}</p><ul>{activeProduct.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul><div className="claims">{activeProduct.claims.map((claim) => <span key={claim}>{claim}</span>)}</div></div>
          </section>
        </div>
      )}
    </>
  )
}

export default App
