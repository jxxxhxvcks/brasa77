const catalog = [
  { id: 'esfirra-cebola', category: 'entradas', name: 'Esfirra + Cebola Empanada', description: 'Uma dupla para começar o pedido com sabor.', price: 24.99, image: 'assets/entradas/esfirra-cebola.png', accent: '#6a3828' },
  { id: 'batata-cheddar-bacon', category: 'entradas', name: 'Batata Frita 500g com Cheddar e Bacon', description: '500g de batata frita com cheddar e bacon.', price: 24.99, image: 'assets/entradas/batata-cheddar-bacon.png', accent: '#5a321f' },
  { id: 'porcao-picanha', category: 'entradas', name: 'Porção de Picanha', description: 'Porção de picanha para dividir ou chamar de sua.', price: 35, image: 'assets/entradas/porcao-picanha.png', accent: '#692d26' },
  { id: 'triplo-burger', category: 'burgers', name: 'TRIPLO BURGER', description: '2 fatias de carne, 4 fatias de cheddar, 5 fatias de bacon, pão grelhado, alface e tomate.', price: 38.9, image: 'assets/burgers/triplo-burger.png', accent: '#683122' },
  { id: 'interestelar', category: 'burgers', name: 'INTERESTELAR', description: 'Picanha, bacon, cheddar triplo, barbecue, molho verde, batata palha, costela desossada e lombo suíno.', price: 49.9, image: 'assets/burgers/interestelar.png', accent: '#8a3c20' },
  { id: 'booyah-burger', category: 'burgers', name: 'BOOYAH BURGER', description: 'Pão grande, 2 carnes, cheddar, muçarela, 2 ovos fritos, bacon, calabresa, molho barbecue e presunto.', price: 39.9, image: 'assets/burgers/booyah.png', accent: '#6c3b25' },
  { id: 'jl', category: 'burgers', name: 'JL', description: 'Pão brioche selado na manteiga, molho verde, alface, duas carnes, cheddar, muçarela, presunto, bacon, pepperoni, dois anéis de cebola empanados, pickles e Last Sauce, o molho especial da casa.', price: 42.9, image: 'assets/burgers/jl.png', accent: '#743326' },
  { id: 'potterhead', category: 'burgers', name: 'POTTERHEAD', description: 'Hambúrguer artesanal, alface, tomate, salsicha, bacon crocante, batata e nosso molho mágico que derrete na boca.', price: 34.9, image: 'assets/burgers/potterhead.png', accent: '#663321' },
  { id: 'quarteto-queijos', category: 'burgers', name: 'QUARTETO QUEIJOS', description: 'Quatro queijos, cheddar, bacon, ovo, alface, tomate e duas carnes.', price: 44.9, image: 'assets/burgers/quarteto-queijos.png', accent: '#72512b' },
  { id: 'monstro-camadas', category: 'burgers', name: 'MONSTRO DE CAMADAS', description: 'Pão brioche gigante, mussarela, molho de tomate, carne bolonhesa, massa de lasanha, parmesão, molho branco, hambúrguer bovino, provolone e molho de tomate picante.', price: 54.9, image: 'assets/burgers/monstro-camadas.png', accent: '#7c3529' },
  { id: 'creme-morango', category: 'cremes', name: 'Creme de Morango', description: 'Gelado, cremoso e pronto para completar seu pedido.', price: 14.9, image: 'assets/cremes/morango.png', accent: '#884646' },
  { id: 'creme-cafe', category: 'cremes', name: 'Creme de Café', description: 'Gelado, cremoso e pronto para completar seu pedido.', price: 14.9, image: 'assets/cremes/cafe.png', accent: '#795743' },
  { id: 'creme-limao', category: 'cremes', name: 'Creme de Limão', description: 'Gelado, cremoso e pronto para completar seu pedido.', price: 13.9, image: 'assets/cremes/limao.png', accent: '#697848' },
  { id: 'creme-chocolate', category: 'cremes', name: 'Creme de Chocolate', description: 'Gelado, cremoso e pronto para completar seu pedido.', price: 15.9, image: 'assets/cremes/chocolate.png', accent: '#624942' },
  { id: 'creme-maracuja', category: 'cremes', name: 'Creme de Maracujá', description: 'Gelado, cremoso e pronto para completar seu pedido.', price: 14.9, image: 'assets/cremes/maracuja.png', accent: '#876f33' },
  { id: 'explosao-chocolate', category: 'sobremesas', name: 'EXPLOSÃO DE CHOCOLATE', description: 'Brownie quente, brigadeiro, calda de chocolate e sorvete de creme.', price: 14.9, image: 'assets/sobremesas/explosao-chocolate.png', accent: '#70423b' },
  { id: 'tentacao-morango', category: 'sobremesas', name: 'TENTAÇÃO DE MORANGO', description: 'Creme de morango, morangos frescos, chocolate e chantilly.', price: 15.9, image: 'assets/sobremesas/tentacao-morango.png', accent: '#8f4550' },
  { id: 'pedaco-ceu', category: 'sobremesas', name: 'PEDAÇO DO CÉU', description: 'Bolo de chocolate, brigadeiro, morangos e sorvete de creme.', price: 14.9, image: 'assets/sobremesas/pedaco-ceu.png', accent: '#79403d' },
  { id: 'doce-paixao', category: 'sobremesas', name: 'DOCE PAIXÃO', description: 'Mousse de maracujá, chocolate branco e calda de maracujá.', price: 13.9, image: 'assets/sobremesas/doce-paixao.png', accent: '#8b7134' },
  { id: 'magic-redberry', category: 'refrigerantes', name: 'Magic Pop Redberry', description: 'Magic Pop', price: 5.49, image: 'assets/refrigerantes/redberry.png', accent: '#e6392f', pop: '#d93044' },
  { id: 'magic-golden-fizz', category: 'refrigerantes', name: 'Magic Pop Golden Fizz', description: 'Magic Pop', price: 5.49, image: 'assets/refrigerantes/golden-fizz.png', accent: '#d68a22', pop: '#c77a12' },
  { id: 'magic-lemon-crush', category: 'refrigerantes', name: 'Magic Pop Lemon Crush', description: 'Magic Pop', price: 5.49, image: 'assets/refrigerantes/lemon-crush.png', accent: '#c9d42d', pop: '#9fae21' },
  { id: 'magic-cola', category: 'refrigerantes', name: 'Magic Pop Cola', description: 'Magic Pop', price: 5.49, image: 'assets/refrigerantes/cola.png', accent: '#965438', pop: '#75422e' },
  { id: 'magic-lime-pop', category: 'refrigerantes', name: 'Magic Pop Lime Pop', description: 'Magic Pop', price: 5.49, image: 'assets/refrigerantes/lime-pop.png', accent: '#59bb66', pop: '#339e59' },
  { id: 'magic-tropical-rush', category: 'refrigerantes', name: 'Magic Pop Tropical Rush', description: 'Magic Pop', price: 5.49, image: 'assets/refrigerantes/tropical-rush.png', accent: '#e25467', pop: '#cb3a62' },
  { id: 'magic-orange-sparky', category: 'refrigerantes', name: 'Magic Pop Orange Sparky', description: 'Magic Pop', price: 5.49, image: 'assets/refrigerantes/orange-sparky.png', accent: '#f57c28', pop: '#e65f18' },
  { id: 'magic-tropy-pop', category: 'refrigerantes', name: 'Magic Pop Tropy Pop', description: 'Magic Pop', price: 5.49, image: 'assets/refrigerantes/tropy-pop.png', accent: '#2ba4b3', pop: '#168494' },
  { id: 'luz-amanhecer', category: 'drinks', name: 'Luz do Amanhecer', description: 'Suco de maracujá, Sprite, Suco de laranja, Gelo.', price: 12, image: 'assets/drinks/luz-do-amanhecer.png', accent: '#61bb83' },
  { id: 'jheny-moon', category: 'drinks', name: 'Jheny Moon', description: 'Suco de uva, Sprite, Suco de laranja, Gelo.', price: 12.9, image: 'assets/drinks/jheny-moon.png', accent: '#8c72c1' },
];

const groups = {
  entradas: { title: 'PARA COMEÇAR', subtitle: 'Porque esperar pelo burger também dá fome.' },
  burgers: { title: 'BURGERS', subtitle: 'Aqui o básico não existe.' },
  cremes: { title: 'CREMES DA BRASA', subtitle: 'Cremosos, gelados e feitos para fechar o pedido do jeito certo.' },
  sobremesas: { title: 'SOBREMESAS', subtitle: 'Porque sempre cabe uma sobremesa.' },
  refrigerantes: { title: 'MAGIC POP', subtitle: 'O toque de cor que deixa o pedido ainda mais completo.' },
  drinks: { title: 'DRINKS', subtitle: 'Misturas refrescantes para acompanhar a sua brasa.' },
};

const state = { cart: [], modalProduct: null, modalQuantity: 1 };
const money = (value) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const getProduct = (id) => catalog.find((product) => product.id === id);

function productCard(product, isHighlight = false) {
  return `
    <article class="product-card${isHighlight ? ' is-highlight' : ''}" tabindex="0" data-product-id="${product.id}" style="--accent-soft:${product.accent};--pop-color:${product.pop || product.accent}">
      <div class="card-media image-slot">
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.classList.add('is-missing')" />
        <div class="image-placeholder" aria-hidden="true"><span>BRASA</span><strong>77</strong></div>
      </div>
      <div class="card-content">
        <span class="card-tag">${groups[product.category].title}</span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="card-footer"><strong class="price">${money(product.price)}</strong><button class="add-button" aria-label="Adicionar ${product.name}"><span>+</span> Adicionar</button></div>
      </div>
    </article>`;
}

function renderMenu(filter = 'todos') {
  const menuGroups = document.querySelector('#menu-groups');
  const activeGroups = filter === 'todos' ? Object.keys(groups) : [filter];
  menuGroups.innerHTML = activeGroups.map((category) => {
    const group = groups[category];
    const products = catalog.filter((product) => product.category === category);
    return `<section class="menu-group" data-category="${category}"><div class="category-heading"><h3>${group.title}</h3><p>${group.subtitle}</p></div><div class="product-grid">${products.map((product) => productCard(product)).join('')}</div></section>`;
  }).join('');
}

function renderHighlights() {
  const ids = ['interestelar', 'jl', 'booyah-burger'];
  document.querySelector('#highlights-grid').innerHTML = ids.map((id) => productCard(getProduct(id), true)).join('');
}

function renderCart() {
  const itemsNode = document.querySelector('#cart-items');
  const empty = document.querySelector('#empty-cart');
  const summary = document.querySelector('#cart-summary');
  const count = state.cart.reduce((total, item) => total + item.quantity, 0);
  const total = state.cart.reduce((sum, item) => sum + getProduct(item.id).price * item.quantity, 0);
  const cartCount = document.querySelector('#cart-count');
  cartCount.textContent = count;
  cartCount.hidden = count === 0;
  document.querySelector('#cart-trigger').setAttribute('aria-label', count ? `Abrir pedidos: ${count} ${count === 1 ? 'item' : 'itens'}` : 'Abrir pedidos');
  document.querySelector('#cart-total').textContent = money(total);
  empty.hidden = count !== 0;
  summary.hidden = count === 0;
  itemsNode.innerHTML = state.cart.map((item) => {
    const product = getProduct(item.id);
    return `<article class="cart-item"><div class="cart-thumb image-slot"><img src="${product.image}" alt="" onerror="this.classList.add('is-missing')"/><div class="image-placeholder"><span>77</span></div></div><div><h3>${product.name}</h3><strong class="price">${money(product.price * item.quantity)}</strong><div class="cart-controls"><button data-cart-action="decrease" data-id="${product.id}" aria-label="Diminuir ${product.name}">−</button><span>${item.quantity}</span><button data-cart-action="increase" data-id="${product.id}" aria-label="Aumentar ${product.name}">+</button></div></div><button class="remove-item" data-cart-action="remove" data-id="${product.id}" aria-label="Remover ${product.name}">×</button></article>`;
  }).join('');
}

function addToCart(productId, quantity = 1) {
  const found = state.cart.find((item) => item.id === productId);
  if (found) found.quantity += quantity;
  else state.cart.push({ id: productId, quantity });
  renderCart();
  const product = getProduct(productId);
  showToast(`${product.name} adicionado ao pedido`);
}

function changeQuantity(productId, change) {
  const item = state.cart.find((cartItem) => cartItem.id === productId);
  if (!item) return;
  item.quantity += change;
  if (item.quantity <= 0) state.cart = state.cart.filter((cartItem) => cartItem.id !== productId);
  renderCart();
}

function openCart() {
  document.querySelector('#cart-panel').classList.add('is-open');
  document.querySelector('#cart-panel').setAttribute('aria-hidden', 'false');
  document.querySelector('#overlay').classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closePanels() {
  document.querySelector('#cart-panel').classList.remove('is-open');
  document.querySelector('#cart-panel').setAttribute('aria-hidden', 'true');
  document.querySelector('#product-modal').classList.remove('is-open');
  document.querySelector('#product-modal').setAttribute('aria-hidden', 'true');
  document.querySelector('#overlay').classList.remove('is-open');
  document.body.style.overflow = '';
}

function openModal(productId) {
  const product = getProduct(productId);
  state.modalProduct = product;
  state.modalQuantity = 1;
  document.querySelector('#modal-title').textContent = product.name;
  document.querySelector('#modal-description').textContent = product.description;
  document.querySelector('#modal-price').textContent = money(product.price);
  document.querySelector('#modal-quantity').textContent = 1;
  document.querySelector('#modal-category').innerHTML = `<span></span> ${groups[product.category].title}`;
  const image = document.querySelector('#modal-image');
  image.onload = () => image.classList.add('is-loaded');
  image.onerror = () => image.classList.add('is-missing');
  image.classList.remove('is-missing');
  image.classList.remove('is-loaded');
  image.alt = product.name;
  image.src = product.image;
  document.querySelector('#product-modal').classList.add('is-open');
  document.querySelector('#product-modal').setAttribute('aria-hidden', 'false');
  document.querySelector('#overlay').classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

let toastTimer;
function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2500);
}

renderHighlights();
renderMenu();
renderCart();

document.querySelectorAll('.filter').forEach((filter) => filter.addEventListener('click', () => {
  document.querySelectorAll('.filter').forEach((button) => button.classList.remove('is-active'));
  filter.classList.add('is-active');
  renderMenu(filter.dataset.filter);
}));

document.addEventListener('click', (event) => {
  const addButton = event.target.closest('.add-button');
  const card = event.target.closest('.product-card');
  if (addButton && card) { event.stopPropagation(); addToCart(card.dataset.productId); return; }
  if (card) openModal(card.dataset.productId);
  const cartAction = event.target.closest('[data-cart-action]');
  if (cartAction) {
    const { cartAction: action, id } = cartAction.dataset;
    if (action === 'remove') { state.cart = state.cart.filter((item) => item.id !== id); renderCart(); }
    else changeQuantity(id, action === 'increase' ? 1 : -1);
  }
});

document.addEventListener('keydown', (event) => {
  if ((event.key === 'Enter' || event.key === ' ') && event.target.classList.contains('product-card')) { event.preventDefault(); openModal(event.target.dataset.productId); }
  if (event.key === 'Escape') closePanels();
});

document.querySelector('#cart-trigger').addEventListener('click', openCart);
document.querySelector('#overlay').addEventListener('click', closePanels);
document.querySelectorAll('[data-close]').forEach((button) => button.addEventListener('click', closePanels));
document.querySelector('#hero-order').addEventListener('click', openCart);
document.querySelector('#browse-menu').addEventListener('click', () => { closePanels(); document.querySelector('#cardapio').scrollIntoView({ behavior: 'smooth' }); });
document.querySelector('#modal-increase').addEventListener('click', () => { state.modalQuantity += 1; document.querySelector('#modal-quantity').textContent = state.modalQuantity; });
document.querySelector('#modal-decrease').addEventListener('click', () => { state.modalQuantity = Math.max(1, state.modalQuantity - 1); document.querySelector('#modal-quantity').textContent = state.modalQuantity; });
document.querySelector('#modal-add').addEventListener('click', () => { addToCart(state.modalProduct.id, state.modalQuantity); closePanels(); });
document.querySelector('#checkout').addEventListener('click', () => { if (state.cart.length) showToast('Pedido preparado! Esta é uma demonstração.'); });

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('#nav-links');
menuToggle.addEventListener('click', () => { const open = menuToggle.getAttribute('aria-expanded') === 'true'; menuToggle.setAttribute('aria-expanded', String(!open)); navLinks.classList.toggle('is-open', !open); });
const navigationLinks = [...document.querySelectorAll('.nav-link')];
function setActiveNavigation(id) {
  navigationLinks.forEach((link) => {
    const active = link.getAttribute('href') === `#${id}`;
    link.classList.toggle('is-active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}
navigationLinks.forEach((link) => link.addEventListener('click', () => {
  setActiveNavigation(link.getAttribute('href').slice(1));
  menuToggle.setAttribute('aria-expanded', 'false');
  navLinks.classList.remove('is-open');
}));

const header = document.querySelector('.site-header');
const navigationSections = ['cardapio', 'sobre', 'contato'].map((id) => document.querySelector(`#${id}`));
function updateHeaderState() {
  header.classList.toggle('scrolled', window.scrollY > 15);
  const position = window.scrollY + header.offsetHeight + 90;
  let currentSection = 'inicio';
  navigationSections.forEach((section) => { if (section && position >= section.offsetTop) currentSection = section.id; });
  setActiveNavigation(currentSection);
}
window.addEventListener('scroll', updateHeaderState, { passive: true });
updateHeaderState();
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: .13 });
reveals.forEach((element) => observer.observe(element));
