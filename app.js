/**
 * PÔR DO SOL ALIMENTOS — ENGINE V3
 * Motion System, Hero Rotator, Showcase Dinâmico & Integração WhatsApp
 * Dados 100% autênticos baseados no Catálogo Oficial
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initHeroRotator();
  initHeroCardRotator();
  initProductShowcase();
  initModal();
  initMotionSystem();
  initMobileMenu();
});

/* ==========================================================================
   01 HEADER & SCROLL SPY
   ========================================================================== */
function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Scroll Spy para links do menu
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(sec => observer.observe(sec));
}

/* ==========================================================================
   02 HERO WORD ROTATOR (ESTILO NITA DINÂMICO)
   ========================================================================== */
function initHeroRotator() {
  const container = document.getElementById('heroWordRotator');
  if (!container) return;

  const phrases = [
    'pastéis crocantes e sequinhos',
    'pizzas saborosas e práticas',
    'salgados de alto rendimento',
    'pães leves e artesanais'
  ];

  let currentIndex = 0;

  function updatePhrase() {
    const currentSpan = container.querySelector('.hero-rotator-text');
    if (currentSpan) {
      currentSpan.classList.add('sliding-out');
      setTimeout(() => {
        currentSpan.remove();
        createNewSpan();
      }, 400);
    } else {
      createNewSpan();
    }
  }

  function createNewSpan() {
    currentIndex = (currentIndex + 1) % phrases.length;
    const span = document.createElement('span');
    span.className = 'hero-rotator-text sliding-in';
    span.textContent = phrases[currentIndex];
    container.appendChild(span);

    requestAnimationFrame(() => {
      span.classList.remove('sliding-in');
    });
  }

  // Inicializa a primeira frase
  const initialSpan = document.createElement('span');
  initialSpan.className = 'hero-rotator-text';
  initialSpan.textContent = phrases[0];
  container.appendChild(initialSpan);

  setInterval(updatePhrase, 3600);
}

/* ==========================================================================
   03 HERO FLOATING CARD ROTATOR
   ========================================================================== */
const heroFeaturedProducts = [
  {
    category: 'Campeã de Vendas',
    title: 'Massa para Pastel 26x32',
    desc: 'Alto nível de crocância, fácil manuseio e rendimento superior para pastelarias.',
    img: './assets/products/massa-26x32.png',
    link: '#produtos'
  },
  {
    category: 'Pronto para Assar',
    title: 'Mini Pizzas (05 Unidades)',
    desc: 'Massa macia e crocante com sabores tradicionais: Mista, Calabresa e Frango.',
    img: './assets/products/mini-pizzas.png',
    link: '#produtos'
  },
  {
    category: 'Festas e Buffets',
    title: 'Micro Pizzas (24 Unidades)',
    desc: 'Tamanho coquetel ideal para eventos, preparo rápido e zero desperdício.',
    img: './assets/products/micro-pizzas.png',
    link: '#produtos'
  },
  {
    category: 'Tradição Artesanal',
    title: 'Canudinhos para Rechear',
    desc: 'Pacote com 50 unidades, crocância prolongada para doces e salgados.',
    img: './assets/products/canudinhos.png',
    link: '#produtos'
  }
];

function initHeroCardRotator() {
  const card = document.getElementById('heroFloatingCard');
  if (!card) return;

  const catTag = card.querySelector('.card-category-tag');
  const title = card.querySelector('.card-product-info h3');
  const desc = card.querySelector('.card-product-info p');
  const img = card.querySelector('.card-product-img');
  const dots = card.querySelectorAll('.card-dot');

  let currentCardIndex = 0;

  function setCard(index) {
    const item = heroFeaturedProducts[index];
    catTag.textContent = item.category;
    title.textContent = item.title;
    desc.textContent = item.desc;
    img.src = item.img;
    img.alt = item.title;

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === index);
    });
  }

  setInterval(() => {
    currentCardIndex = (currentCardIndex + 1) % heroFeaturedProducts.length;
    img.style.opacity = '0';
    img.style.transform = 'scale(0.95)';
    setTimeout(() => {
      setCard(currentCardIndex);
      img.style.opacity = '1';
      img.style.transform = 'scale(1)';
    }, 250);
  }, 4500);
}

/* ==========================================================================
   04 PRODUTOS OFICIAIS DO CATÁLOGO & SHOWCASE DINÂMICO
   ========================================================================== */
const officialProducts = [
  {
    id: 'massa-26x32',
    name: 'Massa para Pastel, Canudinho e Lasanha',
    spec: '26 cm × 32 cm • 1kg e 500g',
    category: 'pastel',
    categoryLabel: 'Pastelaria Profissional',
    desc: 'Ideal para quem busca praticidade na hora de fazer seus lanches e salgados. Nível de crocância elevado e fácil manuseio.',
    badges: ['0% Gordura Trans', 'Não Contém Ovos', 'Não Contém Lactose', 'Sem Proteína Animal'],
    img: './assets/products/massa-26x32.png',
    dishImg: './assets/products/massa-26x32-prato.png',
    nutrition: {
      serving: '30g (3/50 da unidade)',
      kcal: '93 kcal = 390 kJ (5% VD)',
      carb: '17 g (6% VD)',
      prot: '2,1 g (4% VD)',
      fat: '1,6 g (2% VD)',
      satFat: '0,6 g (3% VD)',
      transFat: '0 g (**)',
      fiber: '0,4 g (2% VD)',
      sodium: '403 mg (20% VD)'
    }
  },
  {
    id: 'massa-15x30',
    name: 'Massa para Pastel, Canudinho e Lasanha',
    spec: '15 cm × 30 cm • 1kg e 500g',
    category: 'pastel',
    categoryLabel: 'Lanches e Porções',
    desc: 'Formato prático e econômico. Nível de crocância elevado, massa sequinha e padronizada para produção contínua.',
    badges: ['0% Gordura Trans', 'Não Contém Ovos', 'Não Contém Lactose', 'Sem Proteína Animal'],
    img: './assets/products/massa-15x30.png',
    dishImg: './assets/products/massa-26x32-prato.png',
    nutrition: {
      serving: '30g (1/50 da unidade)',
      kcal: '93 kcal = 390 kJ (5% VD)',
      carb: '17 g (6% VD)',
      prot: '2,1 g (4% VD)',
      fat: '1,6 g (2% VD)',
      satFat: '0,6 g (3% VD)',
      transFat: '0 g (**)',
      fiber: '0,4 g (2% VD)',
      sodium: '403 mg (20% VD)'
    }
  },
  {
    id: 'discos',
    name: 'Discos de Massa para Pastel',
    spec: '15cm (500g) e 10cm (200g)',
    category: 'pastel',
    categoryLabel: 'Praticidade com Película',
    desc: 'Discos redondos com película plástica separadora individual. Crocância elevada, congelado, pronto para montar e fritar.',
    badges: ['0% Gordura Trans', 'Não Contém Ovos', 'Não Contém Lactose', 'Sem Proteína Animal'],
    img: './assets/products/discos.png',
    dishImg: './assets/products/massa-26x32-prato.png',
    nutrition: {
      serving: '30g (1 unidade)',
      kcal: '93 kcal (5% VD)',
      carb: '17 g (6% VD)',
      prot: '2,1 g (4% VD)',
      fat: '1,6 g (2% VD)',
      satFat: '0,6 g (3% VD)',
      transFat: '0 g (**)',
      fiber: '0,4 g (2% VD)',
      sodium: '403 mg (20% VD)'
    }
  },
  {
    id: 'mini-pizzas',
    name: 'Mini Pizzas Congeladas',
    spec: 'Pacote com 05 Unidades (400g)',
    category: 'pizza',
    categoryLabel: 'Pizzas Rápidas',
    desc: 'Massa macia e borda crocante. Sabores oficiais do catálogo: Mista, Calabresa, Frango e Mussarela. Fácil manuseio e preparo rápido no forno.',
    badges: ['Preparo Rápido', 'Fácil Manuseio', '05 Unidades por Pacote'],
    img: './assets/products/mini-pizzas.png',
    dishImg: './assets/products/mini-pizzas-prato.png',
    nutrition: {
      serving: '50g (1 unidade)',
      kcal: '279 kcal = 1172 kJ (14% VD)',
      carb: '39 g (13% VD)',
      prot: '13 g (17% VD)',
      fat: '8 g (15% VD)',
      satFat: '8 g (36% VD)',
      transFat: '0 g (**)',
      fiber: '0,2 g (1% VD)',
      sodium: '605 mg (25% VD)'
    }
  },
  {
    id: 'micro-pizzas',
    name: 'Micro Pizzas para Festas',
    spec: 'Pacote com 24 Unidades (180g)',
    category: 'pizza',
    categoryLabel: 'Eventos e Buffets',
    desc: 'Tamanho coquetel perfeito para festas, lanchonetes e buffets. 24 unidades por pacote, preparo ultrarrápido.',
    badges: ['Preparo Rápido', 'Fácil Manuseio', '24 Unidades por Pacote'],
    img: './assets/products/micro-pizzas.png',
    dishImg: './assets/products/micro-pizzas-prato.png',
    nutrition: {
      serving: '50g (1 porção)',
      kcal: '279 kcal = 1172 kJ (14% VD)',
      carb: '39 g (13% VD)',
      prot: '13 g (17% VD)',
      fat: '8 g (15% VD)',
      satFat: '8 g (36% VD)',
      transFat: '0 g (**)',
      fiber: '0,2 g (1% VD)',
      sodium: '605 mg (25% VD)'
    }
  },
  {
    id: 'paes-arabes',
    name: 'Pães Árabes / Pita Bread',
    spec: 'Pacote com 05 Unidades (280g)',
    category: 'paes',
    categoryLabel: 'Panificação Tradicional',
    desc: 'Massa fininha e leve com abertura perfeita para recheios. Fácil manuseio e preparo rápido.',
    badges: ['Sem Proteína Animal', '05 Unidades por Pacote', 'Fácil Manuseio'],
    img: './assets/products/paes-arabes.png',
    dishImg: './assets/products/paes-arabes-prato.png',
    nutrition: {
      serving: '50g (1 unidade)',
      kcal: '271 kcal = 1138 kJ (14% VD)',
      carb: '43 g (14% VD)',
      prot: '13 g (17% VD)',
      fat: '5 g (9% VD)',
      satFat: '4 g (18% VD)',
      transFat: '0 g (**)',
      fiber: '0 g (**)',
      sodium: '574 mg (24% VD)'
    }
  },
  {
    id: 'canudinhos',
    name: 'Canudinhos para Rechear',
    spec: 'Pacote com 50 Unidades (100g)',
    category: 'paes',
    categoryLabel: 'Recheios Doces e Salgados',
    desc: 'Cones dourados e ultra crocantes. Conotem 50 unidades em cada pacote. Ideal para doces, patês e salgados finos.',
    badges: ['Não Contém Ovos', 'Não Contém Lactose', '50 Unidades por Pacote'],
    img: './assets/products/canudinhos.png',
    dishImg: './assets/products/canudinhos-prato.png',
    nutrition: {
      serving: '50g (1 porção)',
      kcal: '128 kcal = 538 kJ (6% VD)',
      carb: '23 g (8% VD)',
      prot: '6 g (8% VD)',
      fat: '1 g (2% VD)',
      satFat: '1 g (5% VD)',
      transFat: '0 g (**)',
      fiber: '0,1 g (1% VD)',
      sodium: '360 mg (15% VD)'
    }
  }
];

function initProductShowcase() {
  const grid = document.getElementById('productsGrid');
  const tabs = document.querySelectorAll('.tab-btn');
  if (!grid) return;

  function renderProducts(filter = 'all') {
    grid.innerHTML = '';
    // Filtrar produtos secundários (excluindo o destaque que já fica no topo)
    const secondaryProducts = officialProducts.slice(1);
    const filtered = filter === 'all' 
      ? secondaryProducts 
      : secondaryProducts.filter(p => p.category === filter);

    filtered.forEach((prod, index) => {
      const card = document.createElement('article');
      card.className = 'product-card';
      card.setAttribute('data-reveal', 'fade-up');
      card.setAttribute('data-stagger', (index % 4) + 1);

      const waMessage = encodeURIComponent(`Olá! Gostaria de informações comerciais e cotação sobre ${prod.name} (${prod.spec}) da Pôr do Sol Alimentos.`);
      const waUrl = `https://wa.me/5588999005560?text=${waMessage}`;

      card.innerHTML = `
        <div class="product-visual-box">
          <img src="${prod.img}" alt="${prod.name}" class="product-pack-img" loading="lazy" />
          <div class="product-dish-thumb" title="Sugestão de consumo">
            <img src="${prod.dishImg}" alt="${prod.name} servido" loading="lazy" />
          </div>
        </div>
        <span class="product-card-category">${prod.categoryLabel}</span>
        <h3 class="product-card-title">${prod.name}</h3>
        <div class="product-card-spec">${prod.spec}</div>
        <p class="product-card-desc">${prod.desc}</p>
        <div class="product-card-footer">
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-sm-whatsapp">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.073-1.028-.061-.24-.082-.56-.184-.963-.357-1.705-.733-2.812-2.482-2.898-2.597-.085-.116-.693-.923-.693-1.758 0-.836.438-1.246.594-1.417.156-.171.341-.214.455-.214.114 0 .228.001.328.006.106.005.247-.04.387.297.144.347.492 1.2.535 1.288.043.088.072.19.014.305-.058.115-.087.188-.173.289l-.26.307c-.087.103-.178.214-.077.387.102.173.454.749.974 1.213.669.596 1.233.78 1.406.866.173.086.275.073.376-.044.101-.116.433-.506.549-.68.116-.173.232-.144.39-.086.158.058 1.004.474 1.177.561.173.086.289.13.332.202.043.072.043.418-.101.823z"/></svg>
            Pedir Cotação
          </a>
          <button class="btn-info-modal" data-product-id="${prod.id}" title="Ver Tabela Nutricional">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
          </button>
        </div>
      `;
      grid.appendChild(card);
    });

    initMotionSystem();
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-filter');
      renderProducts(filter);
    });
  });

  renderProducts('all');
}

/* ==========================================================================
   05 MODAL TÉCNICO DE ESPECIFICAÇÕES
   ========================================================================== */
function initModal() {
  const modal = document.getElementById('productModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (!modal) return;

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-product-id]');
    if (btn) {
      const prodId = btn.getAttribute('data-product-id');
      const prod = officialProducts.find(p => p.id === prodId);
      if (prod) {
        openProductModal(prod);
      }
    }
  });

  function openProductModal(prod) {
    document.getElementById('modalTitle').textContent = prod.name;
    document.getElementById('modalSpec').textContent = prod.spec;
    document.getElementById('modalDesc').textContent = prod.desc;
    document.getElementById('modalImg').src = prod.img;
    document.getElementById('modalImg').alt = prod.name;

    const nut = prod.nutrition;
    document.getElementById('modalNutritionBody').innerHTML = `
      <tr><td>Porção de Referência</td><td><strong>${nut.serving}</strong></td></tr>
      <tr><td>Valor Energético</td><td>${nut.kcal}</td></tr>
      <tr><td>Carboidratos</td><td>${nut.carb}</td></tr>
      <tr><td>Proteínas</td><td>${nut.prot}</td></tr>
      <tr><td>Gorduras Totais</td><td>${nut.fat}</td></tr>
      <tr><td>Gorduras Saturadas</td><td>${nut.satFat}</td></tr>
      <tr><td>Gorduras Trans</td><td>${nut.transFat}</td></tr>
      <tr><td>Fibras Alimentares</td><td>${nut.fiber}</td></tr>
      <tr><td>Sódio</td><td>${nut.sodium}</td></tr>
    `;

    const waMessage = encodeURIComponent(`Olá! Gostaria de uma cotação para fornecimento de ${prod.name} (${prod.spec}) da Pôr do Sol.`);
    document.getElementById('modalWaBtn').href = `https://wa.me/5588999005560?text=${waMessage}`;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   06 MOTION SYSTEM VIA INTERSECTION OBSERVER
   ========================================================================== */
function initMotionSystem() {
  const reveals = document.querySelectorAll('[data-reveal]:not(.revealed)');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

/* ==========================================================================
   07 MOBILE MENU
   ========================================================================== */
function initMobileMenu() {
  const toggle = document.getElementById('mobileToggle');
  const nav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    nav.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      nav.classList.remove('open');
    });
  });
}
