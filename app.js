const WHATSAPP = '5588999005560';

// Catálogo oficial de produtos da Pôr do Sol Alimentos (Limoeiro do Norte - CE)
const products = [
  {
    id: 'massa-26x32',
    name: 'Massa para pastel, canudinho e lasanha',
    category: 'Massas de Rolo',
    measure: '26cm × 32cm',
    pack: 'Formato retangular grande • Porção 30g',
    image: 'assets/products/massa-26x32.png',
    plateImage: 'assets/products/massa-26x32-prato.png',
    origin: 'Página 3 do Catálogo Oficial',
    badges: ['Não contém ovos', 'Não contém lactose', 'Não contém proteína animal'],
    description: 'Ideal para quem busca praticidade na hora de fazer lanches e salgados. Nível de crocância elevado e fácil manuseio. Versátil tanto para fritura sequinha quanto para pratos de forno.',
    nutrition: {
      title: 'Informação Nutricional Oficial',
      subtitle: 'Porções por embalagem: cerca de 66g • Porção: 30g (3/50 unidade)',
      headers: ['Componente', '100 g', '30 g', '%VD*'],
      rows: [
        ['Valor energético (kcal)', '310', '93', '5%'],
        ['Carboidratos (g)', '57', '17', '6%'],
        ['Açúcares totais (g)', '-', '-', '-'],
        ['Açúcares adicionados (g)', '-', '-', '-'],
        ['Proteínas (g)', '6,9', '2,1', '4%'],
        ['Gorduras totais (g)', '5,5', '1,6', '2%'],
        ['Gorduras saturadas (g)', '2,1', '0,6', '3%'],
        ['Gorduras trans (g)', '0,5', '0,2', '10%'],
        ['Fibras alimentares (g)', '1,4', '0,4', '2%'],
        ['Sódio (mg)', '1344', '403', '20%']
      ],
      foot: '*Percentual de valores diários fornecidos pela porção (Catálogo oficial, pág. 3).'
    }
  },
  {
    id: 'massa-15x30',
    name: 'Massa para pastel, canudinho e lasanha',
    category: 'Massas de Rolo',
    measure: '15cm × 30cm',
    pack: 'Formato médio para porções individuais • Porção 30g',
    image: 'assets/products/massa-15x30.png',
    plateImage: 'assets/products/massa-26x32-prato.png',
    origin: 'Página 4 do Catálogo Oficial',
    badges: ['Não contém ovos', 'Não contém lactose', 'Não contém proteína animal'],
    description: 'Ideal para pastelarias, lanchonetes e mercearias que necessitam de agilidade e fechamento perfeito. Elevada crocância, preparo rápido e ótimo rendimento.',
    nutrition: {
      title: 'Informação Nutricional Oficial',
      subtitle: 'Porções por embalagem: cerca de 66g • Porção: 30g (1/50 unidade)',
      headers: ['Componente', '100 g', '30 g', '%VD*'],
      rows: [
        ['Valor energético (kcal)', '310', '93', '5%'],
        ['Carboidratos (g)', '57', '17', '6%'],
        ['Açúcares totais (g)', '-', '-', '-'],
        ['Açúcares adicionados (g)', '-', '-', '-'],
        ['Proteínas (g)', '6,9', '2,1', '4%'],
        ['Gorduras totais (g)', '5,5', '1,6', '2%'],
        ['Gorduras saturadas (g)', '2,1', '0,6', '3%'],
        ['Gorduras trans (g)', '0,5', '0,2', '10%'],
        ['Fibras alimentares (g)', '1,4', '0,4', '2%'],
        ['Sódio (mg)', '1344', '403', '20%']
      ],
      foot: '*Percentual de valores diários fornecidos pela porção (Catálogo oficial, pág. 4).'
    }
  },
  {
    id: 'discos',
    name: 'Discos redondos de pastel',
    category: 'Discos',
    measure: '15cm / 500g • 10cm / 200g',
    pack: 'Discos com separadores plásticos individuais',
    image: 'assets/products/discos.png',
    plateImage: 'assets/products/massa-26x32-prato.png',
    origin: 'Página 5 do Catálogo Oficial',
    badges: ['Não contém ovos', 'Não contém lactose', 'Não contém proteína animal'],
    description: 'Discos prontos para rechear e fechar com garfo ou carretilha. Agilidade na rotina de lanchonetes, pastelarias e festas sem perda de massa.',
    nutrition: {
      title: 'Informação Nutricional Oficial',
      subtitle: 'Porções por embalagem: cerca de 66g • Porção: 30g (1/50 unidade)',
      headers: ['Componente', '100 g', '30 g', '%VD*'],
      rows: [
        ['Valor energético (kcal)', '310', '93', '5%'],
        ['Carboidratos (g)', '57', '17', '6%'],
        ['Açúcares totais (g)', '-', '-', '-'],
        ['Açúcares adicionados (g)', '-', '-', '-'],
        ['Proteínas (g)', '6,9', '2,1', '4%'],
        ['Gorduras totais (g)', '5,5', '1,6', '2%'],
        ['Gorduras saturadas (g)', '2,1', '0,6', '3%'],
        ['Gorduras trans (g)', '0,5', '0,2', '10%'],
        ['Fibras alimentares (g)', '1,4', '0,4', '2%'],
        ['Sódio (mg)', '1344', '403', '20%']
      ],
      foot: '*Percentual de valores diários fornecidos pela porção (Catálogo oficial, pág. 5).'
    }
  },
  {
    id: 'micro-pizzas',
    name: 'Micro pizzas',
    category: 'Pizzas',
    measure: 'Pacote com 24 unidades',
    pack: 'Bases individuais pequenas para coquetéis e festas',
    image: 'assets/products/micro-pizzas.png',
    plateImage: 'assets/products/micro-pizzas-prato.png',
    origin: 'Página 6 do Catálogo Oficial',
    badges: ['Não contém ovos', 'Preparo rápido', 'Fácil manuseio'],
    description: 'Ideal para quem busca praticidade na hora de fazer seus lanches e salgados. Preparo rápido, assamento uniforme e crocância garantida.',
    nutrition: {
      title: 'Informações Nutricionais Oficiais',
      subtitle: 'Porção de 50g (1 unidade)',
      headers: ['Item', 'Quantidade', '%VD*'],
      rows: [
        ['Valor energético', '279 kcal = 1172 kJ', '14%'],
        ['Carboidratos', '39 g', '13%'],
        ['Proteínas', '13 g', '17%'],
        ['Gorduras totais', '8 g', '15%'],
        ['Gorduras saturadas', '8 g', '36%'],
        ['Gorduras trans', '-', '-'],
        ['Fibra alimentar', '0,2 g', '1%'],
        ['Sódio', '605 mg', '25%']
      ],
      foot: '*Valores conforme informações nutricionais apresentadas no catálogo oficial (pág. 6).'
    }
  },
  {
    id: 'mini-pizzas',
    name: 'Mini pizzas',
    category: 'Pizzas',
    measure: 'Pacote com 5 unidades',
    pack: 'Discos individuais tradicionais',
    image: 'assets/products/mini-pizzas.png',
    plateImage: 'assets/products/mini-pizzas-prato.png',
    origin: 'Página 7 do Catálogo Oficial',
    badges: ['Não contém ovos', 'Preparo rápido', 'Fácil manuseio'],
    description: 'Massa saborosa com borda crocante e excelente saída em supermercados e mercearias. Prática para montagem e aquecimento rápido.',
    nutrition: {
      title: 'Informações Nutricionais Oficiais',
      subtitle: 'Porção de 50g (1 unidade)',
      headers: ['Item', 'Quantidade', '%VD*'],
      rows: [
        ['Valor energético', '279 kcal = 1172 kJ', '14%'],
        ['Carboidratos', '39 g', '13%'],
        ['Proteínas', '13 g', '17%'],
        ['Gorduras totais', '8 g', '15%'],
        ['Gorduras saturadas', '8 g', '36%'],
        ['Gorduras trans', '-', '-'],
        ['Fibra alimentar', '0,2 g', '1%'],
        ['Sódio', '605 mg', '25%']
      ],
      foot: '*Valores conforme informações nutricionais apresentadas no catálogo oficial (pág. 7).'
    }
  },
  {
    id: 'paes-arabes',
    name: 'Pães árabes / pita',
    category: 'Pães',
    measure: 'Pacote com 5 unidades',
    pack: 'Pão sírio macio e maleável',
    image: 'assets/products/paes-arabes.png',
    plateImage: 'assets/products/paes-arabes-prato.png',
    origin: 'Página 8 do Catálogo Oficial',
    badges: ['Não contém proteína animal', 'Preparo rápido', 'Fácil manuseio'],
    description: 'Massa tradicional e macia, sem proteína animal. Excelente para lanches naturais, beirutes, sanduíches e acompanhamentos.',
    nutrition: {
      title: 'Informações Nutricionais Oficiais',
      subtitle: 'Porção de 50g (1 unidade)',
      headers: ['Item', 'Quantidade', '%VD*'],
      rows: [
        ['Valor energético', '271 kcal = 1138 kJ', '14%'],
        ['Carboidratos', '43 g', '14%'],
        ['Proteínas', '13 g', '17%'],
        ['Gorduras totais', '5 g', '9%'],
        ['Gorduras saturadas', '1 g', '5%'],
        ['Gorduras trans', '-', '-'],
        ['Fibra alimentar', '0,4 g', '2%'],
        ['Sódio', '410 mg', '17%']
      ],
      foot: '*Valores conforme informações nutricionais apresentadas no catálogo oficial (pág. 8).'
    }
  },
  {
    id: 'canudinhos',
    name: 'Canudinhos para rechear',
    category: 'Canudinhos',
    measure: 'Pacote com 50 unidades',
    pack: 'Canudos fritos ultracrocantes prontos para rechear',
    image: 'assets/products/canudinhos.png',
    plateImage: 'assets/products/canudinhos-prato.png',
    origin: 'Página 9 do Catálogo Oficial',
    badges: ['Não contém ovos', 'Não contém lactose', 'Não contém proteína animal'],
    description: 'Canudinhos crocantes e sequinhos, prontos para receber recheios doces ou salgados. Contém 50 unidades por pacote com fácil conservação.',
    nutrition: {
      title: 'Informações Nutricionais Oficiais',
      subtitle: 'Porção de 25g (cerca de 5 canudinhos)',
      headers: ['Item', 'Quantidade', '%VD*'],
      rows: [
        ['Valor energético', '128 kcal = 538 kJ', '6%'],
        ['Carboidratos', '23 g', '8%'],
        ['Proteínas', '6 g', '8%'],
        ['Gorduras totais', '1 g', '2%'],
        ['Gorduras saturadas', '1 g', '5%'],
        ['Gorduras trans', '-', '-'],
        ['Fibra alimentar', '0,1 g', '1%'],
        ['Sódio', '360 mg', '15%']
      ],
      foot: '*Valores conforme informações nutricionais apresentadas no catálogo oficial (pág. 9).'
    }
  }
];

const filters = ['Todos', 'Massas de Rolo', 'Discos', 'Pizzas', 'Pães', 'Canudinhos', 'Sem proteína animal'];
let activeFilter = 'Todos';

// Montador de cotações para comércios e lojas
let cart = {};
try {
  cart = JSON.parse(localStorage.getItem('pordosol-cart') || '{}');
} catch (e) {
  cart = {};
}

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function persistCart() {
  try {
    localStorage.setItem('pordosol-cart', JSON.stringify(cart));
  } catch (e) {
    console.error('Erro ao salvar cotação:', e);
  }
}

function cartTotal() {
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

function updateCartCount() {
  const total = cartTotal();
  $$('#cartCount').forEach(el => {
    el.textContent = total;
  });
}

function openDrawer() {
  const drawer = $('#drawer');
  if (drawer) {
    drawer.classList.add('open');
    drawer.setAttribute('aria-hidden', 'false');
    renderCart();
  }
}

function closeDrawer() {
  const drawer = $('#drawer');
  if (drawer) {
    drawer.classList.remove('open');
    drawer.setAttribute('aria-hidden', 'true');
  }
}

function renderFilters() {
  const container = $('#filters');
  if (!container) return;

  container.innerHTML = filters.map(filter => `
    <button type="button" class="filter-btn ${filter === activeFilter ? 'active' : ''}" data-filter="${filter}">
      ${filter}
    </button>
  `).join('');

  $$('[data-filter]').forEach(button => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter;
      renderFilters();
      renderProducts();
    });
  });
}

function matchesFilter(product) {
  if (activeFilter === 'Todos') return true;
  if (activeFilter === 'Sem proteína animal') {
    return product.badges.includes('Não contém proteína animal');
  }
  return product.category === activeFilter;
}

function renderProducts() {
  const grid = $('#productsGrid');
  if (!grid) return;

  const filtered = products.filter(matchesFilter);

  grid.innerHTML = filtered.map(product => `
    <article class="product-card" id="card-${product.id}">
      <div class="product-img-box">
        <span class="product-cat-tag">${product.category}</span>
        <span class="product-measure-badge">${product.measure}</span>
        <img src="${product.image}" alt="${product.name} - Pôr do Sol Alimentos" loading="lazy">
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <div class="product-pack">${product.pack}</div>
        <p class="product-desc">${product.description}</p>
        <div class="product-badges">
          ${product.badges.map(b => `<span class="diet-pill">${b}</span>`).join('')}
        </div>
        <div class="product-actions">
          <button type="button" class="mini-btn" data-details="${product.id}">Ficha técnica</button>
          <button type="button" class="mini-btn primary" data-add="${product.id}">+ Pedir cotação</button>
        </div>
      </div>
    </article>
  `).join('');

  $$('[data-details]').forEach(btn => {
    btn.addEventListener('click', () => showDetails(btn.dataset.details));
  });

  $$('[data-add]').forEach(btn => {
    btn.addEventListener('click', () => addToCart(btn.dataset.add));
  });
}

function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  persistCart();
  updateCartCount();
  openDrawer();
}

function changeQty(id, delta) {
  const current = cart[id] || 0;
  const next = current + delta;
  if (next <= 0) {
    delete cart[id];
  } else {
    cart[id] = next;
  }
  persistCart();
  updateCartCount();
  renderCart();
}

function renderCart() {
  const container = $('#cartItems');
  if (!container) return;

  const entries = Object.entries(cart);
  if (entries.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <p><strong>Nenhum item selecionado para cotação.</strong></p>
        <p style="font-size:13px; margin-top:6px;">Navegue pelo catálogo e clique em <em>"+ Pedir cotação"</em> nos produtos de interesse do seu comércio.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div class="cart-items-list">
      ${entries.map(([id, qty]) => {
        const item = products.find(p => p.id === id);
        if (!item) return '';
        return `
          <div class="cart-item">
            <div class="cart-item-title">
              <strong>${item.name}</strong>
              <small>${item.measure}</small>
            </div>
            <div class="cart-qty-ctrl">
              <button type="button" onclick="changeQty('${id}', -1)" title="Diminuir">-</button>
              <span>${qty}</span>
              <button type="button" onclick="changeQty('${id}', 1)" title="Aumentar">+</button>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

// Modal de Ficha Técnica
function showDetails(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const modalContent = $('#modalContent');
  if (!modalContent) return;

  modalContent.innerHTML = `
    <div class="modal-header">
      <span class="product-cat-tag">${product.category}</span>
      <h3>${product.name}</h3>
      <div class="modal-measure">${product.measure}</div>
      <div style="font-size:13px; color:#55645c; margin-top:4px;">${product.pack}</div>
    </div>

    <div class="modal-media-grid">
      <div class="modal-img-card">
        <img src="${product.image}" alt="Apresentação de ${product.name}">
        <span>Foto Oficial do Catálogo</span>
      </div>
      <div class="modal-img-card">
        <img src="${product.plateImage}" alt="Apresentação servida de ${product.name}">
        <span>Sugestão de Preparo / Rendimento</span>
      </div>
    </div>

    <div class="product-badges" style="margin-bottom:16px;">
      ${product.badges.map(b => `<span class="diet-pill" style="font-size:13px; padding:5px 10px;">${b}</span>`).join('')}
    </div>

    <p style="margin:0 0 16px; font-size:14.5px; color:#3a4740; line-height:1.6;">
      ${product.description}
    </p>

    <div class="modal-nutri">
      <table>
        <thead>
          <tr>
            ${product.nutrition.headers.map(h => `<th>${h}</th>`).join('')}
          </tr>
        </thead>
        <tbody>
          ${product.nutrition.rows.map(row => `
            <tr>
              <td><strong>${row[0]}</strong></td>
              <td>${row[1]}</td>
              <td>${row[2]}</td>
              ${row[3] !== undefined ? `<td>${row[3]}</td>` : ''}
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>

    <div style="font-size:12px; color:#607067; margin-top:8px;">
      ${product.nutrition.foot}
    </div>

    <div class="modal-source-tag">
      <strong>Origem dos dados:</strong> ${product.origin} • Fábrica Pôr do Sol Alimentos, Limoeiro do Norte - CE.
    </div>

    <div style="margin-top:20px; display:flex; gap:12px; justify-content:flex-end;">
      <button type="button" class="ghost-btn" onclick="closeModal()">Fechar</button>
      <button type="button" class="cta-btn" onclick="addToCart('${product.id}'); closeModal();">Adicionar à cotação</button>
    </div>
  `;

  const modal = $('#modal');
  if (modal) {
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  }
}

function closeModal() {
  const modal = $('#modal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }
}

// Inicialização de formulários e eventos
window.addEventListener('DOMContentLoaded', () => {
  renderFilters();
  renderProducts();
  updateCartCount();

  // Abertura/fechamento gaveta de cotação
  $('#openCartTop')?.addEventListener('click', openDrawer);
  $('#openCartMid')?.addEventListener('click', openDrawer);
  $('#closeDrawer')?.addEventListener('click', closeDrawer);
  $('#drawerBackdrop')?.addEventListener('click', closeDrawer);

  // Modal de ficha técnica
  $('#closeModal')?.addEventListener('click', closeModal);
  $('#modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'modal') closeModal();
  });

  // Tecla ESC fecha gaveta e modal
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDrawer();
      closeModal();
    }
  });

  // Formulário do Montador de Cotação (Dispara para WhatsApp comercial)
  const quoteForm = $('#quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const entries = Object.entries(cart);
      if (entries.length === 0) {
        alert('Por favor, adicione pelo menos um produto do catálogo antes de enviar a cotação.');
        return;
      }

      const nome = $('#quoteNome')?.value.trim() || 'Comprador';
      const empresa = $('#quoteEmpresa')?.value.trim() || 'Não informado';
      const cidade = $('#quoteCidade')?.value.trim() || 'Não informado';
      const obs = $('#quoteObs')?.value.trim() || '';

      let text = `*SOLICITAÇÃO DE COTAÇÃO - PÔR DO SOL ALIMENTOS*\n\n`;
      text += `*Responsável:* ${nome}\n`;
      text += `*Empresa / Estabelecimento:* ${empresa}\n`;
      text += `*Cidade/UF:* ${cidade}\n`;
      if (obs) text += `*Observações:* ${obs}\n`;

      text += `\n*ITENS SELECIONADOS NO CATÁLOGO:*\n`;
      entries.forEach(([id, qty]) => {
        const prod = products.find(p => p.id === id);
        if (prod) {
          text += `• ${qty}x ${prod.name} (${prod.measure})\n`;
        }
      });

      text += `\n_Mensagem enviada via catálogo digital da fábrica._`;

      const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  // Formulário de contato comercial para distribuidores e revendedores
  const distributorForm = $('#distributorForm');
  if (distributorForm) {
    distributorForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nome = $('#distNome')?.value.trim() || '';
      const empresa = $('#distEmpresa')?.value.trim() || '';
      const doc = $('#distDoc')?.value.trim() || '';
      const cidade = $('#distCidade')?.value.trim() || '';
      const tel = $('#distTel')?.value.trim() || '';
      const segmento = $('#distSegmento')?.value || 'Distribuição de alimentos';
      const frota = $('#distFrota')?.value.trim() || '';

      let text = `*CONTATO COMERCIAL - DISTRIBUIÇÃO E REVENDA*\n\n`;
      text += `*Responsável:* ${nome}\n`;
      text += `*Empresa:* ${empresa}\n`;
      if (doc) text += `*CNPJ/CPF:* ${doc}\n`;
      text += `*Cidade / Região:* ${cidade}\n`;
      text += `*WhatsApp/Telefone:* ${tel}\n`;
      text += `*Segmento:* ${segmento}\n`;
      if (frota) text += `*Informações de rota / logística:* ${frota}\n`;

      text += `\n_Mensagem enviada pelo site oficial da fábrica._`;

      const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }
});

// Expõe globalmente
window.addToCart = addToCart;
window.changeQty = changeQty;
window.showDetails = showDetails;
window.closeModal = closeModal;
window.openDrawer = openDrawer;
window.closeDrawer = closeDrawer;
