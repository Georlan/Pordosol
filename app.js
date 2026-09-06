const WHATSAPP = '5588999005560';
const products = [
  {
    id:'massa-26x32',
    name:'Massa para pastel, canudinho e lasanha',
    category:'Massas de Rolo',
    measure:'26cm × 32cm',
    pack:'Porção 30g (3/50 unidade)',
    badges:['Não contém ovos','Não contém lactose','Não contém proteína animal'],
    description:'Ideal para quem busca praticidade na hora de fazer lanches e salgados; nível de crocância elevado; fácil manuseio.',
    nutrition:{
      title:'Informação nutricional',
      subtitle:'Porções por embalagem: cerca de 66g • Porção: 30g (3/50 unidade)',
      headers:['Item','100 g','30 g','%VD*'],
      rows:[
        ['Valor energético (kcal)','310','93','5'],
        ['Carboidratos (g)','57','17','6'],
        ['Açúcares totais (g)','-','-','-'],
        ['Açúcares adicionados (g)','-','-','-'],
        ['Proteínas (g)','6,9','2,1','4'],
        ['Gorduras totais (g)','5,5','1,6','2'],
        ['Gorduras saturadas (g)','2,1','0,6','3'],
        ['Gorduras trans (g)','0,5','0,2','10'],
        ['Fibras alimentares (g)','1,4','0,4','2'],
        ['Sódio (mg)','1344','403','20']
      ],
      foot:'*Percentual de valores diários fornecidos pela porção.'
    }
  },
  {
    id:'massa-15x30',
    name:'Massa para pastel, canudinho e lasanha',
    category:'Massas de Rolo',
    measure:'15cm × 30cm',
    pack:'Porção 30g (1/50 unidade)',
    badges:['Não contém ovos','Não contém lactose','Não contém proteína animal'],
    description:'Ideal para quem busca praticidade na hora de fazer lanches e salgados; nível de crocância elevado; fácil manuseio.',
    nutrition:{
      title:'Informação nutricional',
      subtitle:'Porções por embalagem: cerca de 66g • Porção: 30g (1/50 unidade)',
      headers:['Item','100 g','30 g','%VD*'],
      rows:[
        ['Valor energético (kcal)','310','93','5'],
        ['Carboidratos (g)','57','17','6'],
        ['Açúcares totais (g)','-','-','-'],
        ['Açúcares adicionados (g)','-','-','-'],
        ['Proteínas (g)','6,9','2,1','4'],
        ['Gorduras totais (g)','5,5','1,6','2'],
        ['Gorduras saturadas (g)','2,1','0,6','3'],
        ['Gorduras trans (g)','0,5','0,2','10'],
        ['Fibras alimentares (g)','1,4','0,4','2'],
        ['Sódio (mg)','1344','403','20']
      ],
      foot:'*Percentual de valores diários fornecidos pela porção.'
    }
  },
  {
    id:'discos',
    name:'Discos redondos de pastel',
    category:'Discos',
    measure:'15cm / 500g • 10cm / 200g',
    pack:'Porção 30g (1/50 unidade)',
    badges:['Não contém ovos','Não contém lactose','Não contém proteína animal'],
    description:'Discos redondos prontos para uso, com foco em praticidade, crocância e fácil manuseio.',
    nutrition:{
      title:'Informação nutricional',
      subtitle:'Porções por embalagem: cerca de 66g • Porção: 30g (1/50 unidade)',
      headers:['Item','100 g','30 g','%VD*'],
      rows:[
        ['Valor energético (kcal)','310','93','5'],
        ['Carboidratos (g)','57','17','6'],
        ['Açúcares totais (g)','-','-','-'],
        ['Açúcares adicionados (g)','-','-','-'],
        ['Proteínas (g)','6,9','2,1','4'],
        ['Gorduras totais (g)','5,5','1,6','2'],
        ['Gorduras saturadas (g)','2,1','0,6','3'],
        ['Gorduras trans (g)','0,5','0,2','10'],
        ['Fibras alimentares (g)','1,4','0,4','2'],
        ['Sódio (mg)','1344','403','20']
      ],
      foot:'*Percentual de valores diários fornecidos pela porção.'
    }
  },
  {
    id:'micro-pizzas',
    name:'Micro pizzas',
    category:'Pizzas',
    measure:'Pacote com 24 unidades',
    pack:'Porção de 50g (1 unidade)',
    badges:['Não contém ovos','Preparo rápido','Fácil manuseio'],
    description:'Ideal para quem busca praticidade na hora de fazer seus lanches e salgados; preparo rápido; fácil manuseio; contém 24 unidades em cada pacote.',
    nutrition:{
      title:'Informações nutricionais',
      subtitle:'Porção de 50g (1 unidade)',
      headers:['Item','Quantidade','%VD*'],
      rows:[
        ['Valor energético','279kcal = 1172kJ','14%'],
        ['Carboidratos','39g','13%'],
        ['Proteínas','13g','17%'],
        ['Gorduras totais','8g','15%'],
        ['Gorduras saturadas','8g','36%'],
        ['Gorduras trans','-','-'],
        ['Fibra alimentar','0,2g','1%'],
        ['Sódio','605mg','25%']
      ],
      foot:'*Valores conforme informações nutricionais apresentadas no catálogo oficial.'
    }
  },
  {
    id:'mini-pizzas',
    name:'Mini pizzas',
    category:'Pizzas',
    measure:'Pacote com 5 unidades',
    pack:'Porção de 50g (1 unidade)',
    badges:['Não contém ovos','Preparo rápido','Fácil manuseio'],
    description:'Ideal para quem busca praticidade na hora de fazer seus lanches e salgados; preparo rápido; fácil manuseio; contém 05 unidades em cada pacote.',
    nutrition:{
      title:'Informações nutricionais',
      subtitle:'Porção de 50g (1 unidade)',
      headers:['Item','Quantidade','%VD*'],
      rows:[
        ['Valor energético','279kcal = 1172kJ','14%'],
        ['Carboidratos','39g','13%'],
        ['Proteínas','13g','17%'],
        ['Gorduras totais','8g','15%'],
        ['Gorduras saturadas','8g','36%'],
        ['Gorduras trans','-','-'],
        ['Fibra alimentar','0,2g','1%'],
        ['Sódio','605mg','25%']
      ],
      foot:'*Valores conforme informações nutricionais apresentadas no catálogo oficial.'
    }
  },
  {
    id:'paes-arabes',
    name:'Pães árabes / pita',
    category:'Pães',
    measure:'Pacote com 5 unidades',
    pack:'Porção de 50g (1 unidade)',
    badges:['Não contém proteína animal','Preparo rápido','Fácil manuseio'],
    description:'Ideal para quem busca praticidade na hora de fazer seus lanches e salgados; preparo rápido; fácil manuseio; contém 05 unidades em cada pacote.',
    nutrition:{
      title:'Informações nutricionais',
      subtitle:'Porção de 50g (1 unidade)',
      headers:['Item','Quantidade','%VD*'],
      rows:[
        ['Valor energético','271kcal = 1138kJ','14%'],
        ['Carboidratos','43g','14%'],
        ['Proteínas','13g','17%'],
        ['Gorduras totais','5g','9%'],
        ['Gorduras saturadas','4g','18%'],
        ['Gorduras trans','-','-'],
        ['Fibra alimentar','-','-'],
        ['Sódio','574mg','24%']
      ],
      foot:'*Valores conforme informações nutricionais apresentadas no catálogo oficial.'
    }
  },
  {
    id:'canudinhos',
    name:'Canudinhos para rechear',
    category:'Canudinhos',
    measure:'Pacote com 50 unidades',
    pack:'Porção de 50g (1 unidade)',
    badges:['Não contém ovos','Não contém lactose','Não contém proteína animal'],
    description:'Ideal para quem busca praticidade na hora de fazer seus lanches e salgados; preparo rápido; fácil manuseio; contém 50 unidades em cada pacote.',
    nutrition:{
      title:'Informações nutricionais',
      subtitle:'Porção de 50g (1 unidade)',
      headers:['Item','Quantidade','%VD*'],
      rows:[
        ['Valor energético','128kcal = 538kJ','6%'],
        ['Carboidratos','23g','8%'],
        ['Proteínas','6g','8%'],
        ['Gorduras totais','1g','2%'],
        ['Gorduras saturadas','1g','5%'],
        ['Gorduras trans','-','-'],
        ['Fibra alimentar','0,1g','1%'],
        ['Sódio','360mg','15%']
      ],
      foot:'*Valores conforme informações nutricionais apresentadas no catálogo oficial.'
    }
  }
];
const filters = ['Todos','Massas de Rolo','Discos','Pizzas','Pães','Canudinhos','Sem proteína animal'];
let activeFilter = 'Todos';
let cart = {};
try { cart = JSON.parse(localStorage.getItem('pordosol-cart') || '{}'); } catch (e) { cart = {}; }
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function persistCart(){ localStorage.setItem('pordosol-cart', JSON.stringify(cart)); }
function cartTotal(){ return Object.values(cart).reduce((sum, qty) => sum + qty, 0); }
function updateCount(){ $('#cartCount').textContent = cartTotal(); }
function openDrawer(){ $('#drawer').classList.add('open'); $('#drawer').setAttribute('aria-hidden','false'); }
function closeDrawer(){ $('#drawer').classList.remove('open'); $('#drawer').setAttribute('aria-hidden','true'); }

function renderFilters(){
  $('#filters').innerHTML = filters.map(filter => `<button class="filter-btn ${filter === activeFilter ? 'active' : ''}" data-filter="${filter}">${filter}</button>`).join('');
  $$('[data-filter]').forEach(button => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter;
      renderFilters();
      renderProducts();
    });
  });
}

function matchesFilter(product){
  if(activeFilter === 'Todos') return true;
  if(activeFilter === 'Sem proteína animal') return product.badges.includes('Não contém proteína animal');
  return product.category === activeFilter;
}

function renderProducts(){
  $('#productsGrid').innerHTML = products.filter(matchesFilter).map(product => `
    <article class="card product-card">
      <div class="product-head">
        <div class="cat">${product.category}</div>
        <div>
          <h3>${product.name}</h3>
          <div class="measure">${product.measure}</div>
        </div>
      </div>
      <div class="product-body">
        <div class="badges">${product.badges.map(badge => `<span class="badge">${badge}</span>`).join('')}</div>
        <p>${product.description}</p>
        <div class="product-actions">
          <button class="mini-btn" data-details="${product.id}">Ver ficha técnica</button>
          <button class="mini-btn primary" data-add="${product.id}">Adicionar à cotação</button>
        </div>
      </div>
    </article>
  `).join('');

  $$('[data-details]').forEach(button => button.addEventListener('click', () => showDetails(button.dataset.details)));
  $$('[data-add]').forEach(button => button.addEventListener('click', () => addToCart(button.dataset.add)));
}

function addToCart(id){
  cart[id] = (cart[id] || 0) + 1;
  persistCart();
  renderCart();
  updateCount();
  openDrawer();
}

function renderCart(){
  const entries = Object.entries(cart).filter(([, qty]) => qty > 0);
  if(!entries.length){
    $('#cartItems').innerHTML = '<div class="empty">Adicione produtos do catálogo para montar sua cotação.</div>';
    return;
  }
  $('#cartItems').innerHTML = entries.map(([id, qty]) => {
    const product = products.find(item => item.id === id);
    return `
      <div class="cart-item">
        <div>
          <strong>${product.name}</strong>
          <small>${product.measure} • ${product.pack}</small>
        </div>
        <div class="qty">
          <button data-change="${id}" data-step="-1">−</button>
          <span>${qty}</span>
          <button data-change="${id}" data-step="1">+</button>
        </div>
      </div>
    `;
  }).join('');
  $$('[data-change]').forEach(button => button.addEventListener('click', () => {
    const id = button.dataset.change;
    cart[id] = (cart[id] || 0) + Number(button.dataset.step);
    if(cart[id] <= 0) delete cart[id];
    persistCart();
    renderCart();
    updateCount();
  }));
}

function renderNutrition(nutrition){
  if(!nutrition) return '<div class="meta-note">Tabela nutricional não disponível.</div>';
  const headCells = nutrition.headers.map(header => `<th>${header}</th>`).join('');
  const rowCells = nutrition.rows.map(row => `<tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('');
  return `
    <div class="nutri">
      <table>
        <thead>
          <tr>${headCells}</tr>
        </thead>
        <tbody>${rowCells}</tbody>
      </table>
    </div>
    <div class="meta-note"><strong>${nutrition.title}</strong><br>${nutrition.subtitle}<br>${nutrition.foot}</div>
  `;
}

function showDetails(id){
  const product = products.find(item => item.id === id);
  $('#modalCard').innerHTML = `
    <button class="icon-btn close-btn" id="closeModalBtn" aria-label="Fechar">×</button>
    <div class="modal-head">
      <div class="note">Ficha técnica</div>
      <h3>${product.name}</h3>
      <div class="sub">${product.measure}</div>
      <p>${product.description}</p>
    </div>
    <div class="spec-grid">
      <div class="spec"><span>Categoria</span><strong>${product.category}</strong></div>
      <div class="spec"><span>Medida / formato</span><strong>${product.measure}</strong></div>
      <div class="spec"><span>Porção / embalagem</span><strong>${product.pack}</strong></div>
      <div class="spec"><span>Diferenciais</span><strong>${product.badges.join(' • ')}</strong></div>
    </div>
    ${renderNutrition(product.nutrition)}
    <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:18px">
      <button class="cta-btn" id="modalAddBtn">Adicionar à cotação</button>
      <a class="ghost-btn" target="_blank" rel="noopener" href="https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Olá, quero saber mais sobre o produto ${product.name} (${product.measure}).`)}">Tirar dúvida no WhatsApp</a>
    </div>
  `;
  $('#modal').classList.add('open');
  $('#closeModalBtn').addEventListener('click', closeModal);
  $('#modalAddBtn').addEventListener('click', () => { addToCart(product.id); closeModal(); });
}

function closeModal(){ $('#modal').classList.remove('open'); }

$('#modal').addEventListener('click', (event) => { if(event.target.id === 'modal') closeModal(); });
$('#openCartTop').addEventListener('click', openDrawer);
$('#openCartMid').addEventListener('click', openDrawer);
$('#closeDrawer').addEventListener('click', closeDrawer);
$('#drawerBackdrop').addEventListener('click', closeDrawer);
document.addEventListener('keydown', (event) => { if(event.key === 'Escape'){ closeDrawer(); closeModal(); } });

$('#quoteForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const selected = Object.entries(cart).filter(([, qty]) => qty > 0);
  if(!selected.length){ alert('Adicione pelo menos um produto à cotação.'); return; }
  const data = new FormData(event.currentTarget);
  const items = selected.map(([id, qty]) => {
    const product = products.find(item => item.id === id);
    return `• ${product.name} — ${product.measure} — Qtd.: ${qty} unidade(s) comercial(is)`;
  });
  const message = [
    'Olá! Quero solicitar uma cotação B2B da Pôr do Sol Alimentos.',
    '',
    `Comprador: ${data.get('buyer')}`,
    `Empresa: ${data.get('business')}`,
    `Cidade/UF: ${data.get('city')}`,
    `WhatsApp: ${data.get('phone')}`,
    '',
    'Produtos de interesse:',
    ...items,
    '',
    'Por favor, enviem disponibilidade, preços e condições de entrega.'
  ].join('\n');
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

$('#distributorForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = [
    'Olá! Tenho interesse em atuar como distribuidor/revendedor da Pôr do Sol Alimentos.',
    '',
    `Responsável: ${data.get('name')}`,
    `Empresa: ${data.get('company')}`,
    `Cidade/UF: ${data.get('city')}`,
    `WhatsApp: ${data.get('phone')}`,
    `Região de atendimento: ${data.get('region')}`,
    `Frota/capacidade: ${data.get('fleet')}`,
    `Observações: ${data.get('notes') || '—'}`,
    '',
    'Gostaria de receber as condições comerciais para distribuição.'
  ].join('\n');
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
});

$('#year').textContent = new Date().getFullYear();
updateCount();
renderFilters();
renderProducts();
renderCart();
