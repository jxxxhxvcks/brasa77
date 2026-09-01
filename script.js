const catalog = [
  { id:'esfirra-cebola', category:'entradas', name:'Esfirra + Cebola Empanada', description:'Uma dupla para começar o pedido com sabor.', price:24.99, image:'assets/entradas/esfirra-cebola.png', accent:'#6a3828', rating:4.8, featured:false },
  { id:'batata-cheddar-bacon', category:'entradas', name:'Batata Frita 500g com Cheddar e Bacon', description:'500g de batata frita com cheddar e bacon.', price:24.99, image:'assets/entradas/batata-cheddar-bacon.png', accent:'#5a321f', rating:4.9, featured:true },
  { id:'porcao-picanha', category:'entradas', name:'Porção de Picanha', description:'Porção de picanha para dividir ou chamar de sua.', price:35, image:'assets/entradas/porcao-picanha.png', accent:'#692d26', rating:4.8, featured:false },
  { id:'triplo-burger', category:'burgers', name:'TRIPLO BURGER', description:'2 fatias de carne, 4 fatias de cheddar, 5 fatias de bacon, pão grelhado, alface e tomate.', price:38.9, image:'assets/burgers/triplo-burger.png', accent:'#683122', rating:4.9, featured:true },
  { id:'interestelar', category:'burgers', name:'INTERESTELAR', description:'Picanha, bacon, cheddar triplo, barbecue, molho verde, batata palha, costela desossada e lombo suíno.', price:49.9, image:'assets/burgers/interestelar.png', accent:'#8a3c20', rating:5.0, featured:true },
  { id:'booyah-burger', category:'burgers', name:'BOOYAH BURGER', description:'Pão grande, 2 carnes, cheddar, muçarela, 2 ovos fritos, bacon, calabresa, molho barbecue e presunto.', price:39.9, image:'assets/burgers/booyah.png', accent:'#6c3b25', rating:4.9, featured:true },
  { id:'jl', category:'burgers', name:'JL', description:'Pão brioche selado na manteiga, molho verde, alface, duas carnes, cheddar, muçarela, presunto, bacon, pepperoni, dois anéis de cebola empanados, pickles e Last Sauce, o molho especial da casa.', price:42.9, image:'assets/burgers/jl.png', accent:'#743326', rating:5.0, featured:true },
  { id:'potterhead', category:'burgers', name:'POTTERHEAD', description:'Hambúrguer artesanal, alface, tomate, salsicha, bacon crocante, batata e nosso molho mágico que derrete na boca.', price:34.9, image:'assets/burgers/potterhead.png', accent:'#663321', rating:4.8, featured:false },
  { id:'quarteto-queijos', category:'burgers', name:'QUARTETO QUEIJOS', description:'Quatro queijos, cheddar, bacon, ovo, alface, tomate e duas carnes.', price:44.9, image:'assets/burgers/quarteto-queijos.png', accent:'#72512b', rating:4.9, featured:true },
  { id:'monstro-camadas', category:'burgers', name:'MONSTRO DE CAMADAS', description:'Pão brioche gigante, mussarela, molho de tomate, carne bolonhesa, massa de lasanha, parmesão, molho branco, hambúrguer bovino, provolone e molho de tomate picante.', price:54.9, image:'assets/burgers/monstro-camadas.png', accent:'#7c3529', rating:4.7, featured:false },
  { id:'creme-morango', category:'cremes', name:'Creme de Morango', description:'Gelado, cremoso e pronto para completar seu pedido.', price:14.9, image:'assets/cremes/morango.png', accent:'#884646', rating:4.8, featured:false },
  { id:'creme-cafe', category:'cremes', name:'Creme de Café', description:'Gelado, cremoso e pronto para completar seu pedido.', price:14.9, image:'assets/cremes/cafe.png', accent:'#795743', rating:4.8, featured:false },
  { id:'creme-limao', category:'cremes', name:'Creme de Limão', description:'Gelado, cremoso e pronto para completar seu pedido.', price:13.9, image:'assets/cremes/limao.png', accent:'#697848', rating:4.7, featured:false },
  { id:'creme-chocolate', category:'cremes', name:'Creme de Chocolate', description:'Gelado, cremoso e pronto para completar seu pedido.', price:15.9, image:'assets/cremes/chocolate.png', accent:'#624942', rating:4.9, featured:true },
  { id:'creme-maracuja', category:'cremes', name:'Creme de Maracujá', description:'Gelado, cremoso e pronto para completar seu pedido.', price:14.9, image:'assets/cremes/maracuja.png', accent:'#876f33', rating:4.8, featured:false },
  { id:'explosao-chocolate', category:'sobremesas', name:'EXPLOSÃO DE CHOCOLATE', description:'Brownie quente, brigadeiro, calda de chocolate e sorvete de creme.', price:14.9, image:'assets/sobremesas/explosao-chocolate.png', accent:'#70423b', rating:4.9, featured:true },
  { id:'tentacao-morango', category:'sobremesas', name:'TENTAÇÃO DE MORANGO', description:'Creme de morango, morangos frescos, chocolate e chantilly.', price:15.9, image:'assets/sobremesas/tentacao-morango.png', accent:'#8f4550', rating:4.8, featured:false },
  { id:'pedaco-ceu', category:'sobremesas', name:'PEDAÇO DO CÉU', description:'Bolo de chocolate, brigadeiro, morangos e sorvete de creme.', price:14.9, image:'assets/sobremesas/pedaco-ceu.png', accent:'#79403d', rating:4.8, featured:false },
  { id:'doce-paixao', category:'sobremesas', name:'DOCE PAIXÃO', description:'Mousse de maracujá, chocolate branco e calda de maracujá.', price:13.9, image:'assets/sobremesas/doce-paixao.png', accent:'#8b7134', rating:4.7, featured:false },
  { id:'magic-redberry', category:'refrigerantes', name:'Magic Pop Redberry', description:'Magic Pop', price:5.49, image:'assets/refrigerantes/redberry.png', accent:'#e6392f', pop:'#d93044', rating:4.7, featured:false },
  { id:'magic-golden-fizz', category:'refrigerantes', name:'Magic Pop Golden Fizz', description:'Magic Pop', price:5.49, image:'assets/refrigerantes/golden-fizz.png', accent:'#d68a22', pop:'#c77a12', rating:4.7, featured:false },
  { id:'magic-lemon-crush', category:'refrigerantes', name:'Magic Pop Lemon Crush', description:'Magic Pop', price:5.49, image:'assets/refrigerantes/lemon-crush.png', accent:'#c9d42d', pop:'#9fae21', rating:4.6, featured:false },
  { id:'magic-cola', category:'refrigerantes', name:'Magic Pop Cola', description:'Magic Pop', price:5.49, image:'assets/refrigerantes/cola.png', accent:'#965438', pop:'#75422e', rating:4.7, featured:false },
  { id:'magic-lime-pop', category:'refrigerantes', name:'Magic Pop Lime Pop', description:'Magic Pop', price:5.49, image:'assets/refrigerantes/lime-pop.png', accent:'#59bb66', pop:'#339e59', rating:4.7, featured:false },
  { id:'magic-tropical-rush', category:'refrigerantes', name:'Magic Pop Tropical Rush', description:'Magic Pop', price:5.49, image:'assets/refrigerantes/tropical-rush.png', accent:'#e25467', pop:'#cb3a62', rating:4.8, featured:false },
  { id:'magic-orange-sparky', category:'refrigerantes', name:'Magic Pop Orange Sparky', description:'Magic Pop', price:5.49, image:'assets/refrigerantes/orange-sparky.png', accent:'#f57c28', pop:'#e65f18', rating:4.7, featured:false },
  { id:'magic-tropy-pop', category:'refrigerantes', name:'Magic Pop Tropy Pop', description:'Magic Pop', price:5.49, image:'assets/refrigerantes/tropy-pop.png', accent:'#2ba4b3', pop:'#168494', rating:4.7, featured:false },
  { id:'luz-amanhecer', category:'drinks', name:'Luz do Amanhecer', description:'Suco de maracujá, Sprite, Suco de laranja, Gelo.', price:12, image:'assets/drinks/luz-do-amanhecer.png', accent:'#61bb83', rating:4.8, featured:true },
  { id:'jheny-moon', category:'drinks', name:'Jheny Moon', description:'Suco de uva, Sprite, Suco de laranja, Gelo.', price:12.9, image:'assets/drinks/jheny-moon.png', accent:'#8c72c1', rating:4.7, featured:false },
];

const groups = {
  entradas:{title:'PARA COMEÇAR',subtitle:'Porque esperar pelo burger também dá fome.'},
  burgers:{title:'BURGERS',subtitle:'Aqui o básico não existe.'},
  cremes:{title:'CREMES DA BRASA',subtitle:'Cremosos, gelados e feitos para fechar o pedido do jeito certo.'},
  sobremesas:{title:'SOBREMESAS',subtitle:'Porque sempre cabe uma sobremesa.'},
  refrigerantes:{title:'MAGIC POP',subtitle:'O toque de cor que deixa o pedido ainda mais completo.'},
  drinks:{title:'DRINKS',subtitle:'Misturas refrescantes para acompanhar a sua brasa.'},
};

const state={cart:JSON.parse(sessionStorage.getItem('brasa-cart')||'[]'),modalProduct:null,modalQuantity:1,filter:'todos',search:'',sort:'featured'};
const money=value=>value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const getProduct=id=>catalog.find(p=>p.id===id);
const starString=rating=>`<span class="card-rating" aria-label="${rating.toFixed(1).replace('.',',')} de 5">★ ${rating.toFixed(1).replace('.',',')}</span>`;

function productCard(product,isHighlight=false){
  const tag=isHighlight?'MAIS PEDIDO':groups[product.category].title;
  return `<article class="product-card${isHighlight?' is-highlight':''}" tabindex="0" role="button" data-product-id="${product.id}" style="--accent-soft:${product.accent};--pop-color:${product.pop||product.accent}">
    <div class="card-media image-slot"><img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.classList.add('is-missing')"/><div class="image-placeholder" aria-hidden="true"><span>BRASA</span><strong>77</strong></div><span class="product-badge">${tag}</span></div>
    <div class="card-content"><div class="card-meta"><span class="card-tag">${groups[product.category].title}</span>${starString(product.rating)}</div><h3>${product.name}</h3><p>${product.description}</p><div class="card-footer"><strong class="price">${money(product.price)}</strong><button class="add-button" type="button" aria-label="Adicionar ${product.name}"><span>+</span> Adicionar</button></div></div>
  </article>`;
}

function filteredProducts(){
  let products=state.filter==='todos'?[...catalog]:catalog.filter(p=>p.category===state.filter);
  const term=state.search.trim().toLowerCase();
  if(term) products=products.filter(p=>`${p.name} ${p.description} ${groups[p.category].title}`.toLowerCase().includes(term));
  const sorted=[...products];
  if(state.sort==='rating') sorted.sort((a,b)=>b.rating-a.rating || b.featured-a.featured);
  else if(state.sort==='price-asc') sorted.sort((a,b)=>a.price-b.price);
  else if(state.sort==='price-desc') sorted.sort((a,b)=>b.price-a.price);
  else if(state.sort==='name') sorted.sort((a,b)=>a.name.localeCompare(b.name,'pt-BR'));
  else sorted.sort((a,b)=>Number(b.featured)-Number(a.featured));
  return sorted;
}

function renderMenu(){
  const node=document.querySelector('#menu-groups');
  const products=filteredProducts();
  const result=document.querySelector('#menu-result');
  result.textContent=products.length?`${products.length} ${products.length===1?'item encontrado':'itens encontrados'}`:'Nenhum item encontrado';
  if(!products.length){node.innerHTML=`<div class="empty-results"><span>⌕</span><h3>Nada encontrado.</h3><p>Tente outro termo ou remova alguns filtros.</p><button class="text-button" type="button" id="clear-search">Limpar busca →</button></div>`;return;}
  const cats=state.filter==='todos'?Object.keys(groups):[state.filter];
  const sections=cats.map(category=>{
    const items=products.filter(p=>p.category===category);
    if(!items.length)return '';
    const group=groups[category];
    return `<section class="menu-group" data-category="${category}"><div class="category-heading"><h3>${group.title}</h3><p>${group.subtitle}</p></div><div class="product-grid">${items.map(p=>productCard(p)).join('')}</div></section>`;
  }).join('');
  node.innerHTML=sections;
}

function renderHighlights(){
  const ids=['interestelar','jl','booyah-burger'];
  document.querySelector('#highlights-grid').innerHTML=ids.map(id=>productCard(getProduct(id),true)).join('');
}

function saveCart(){sessionStorage.setItem('brasa-cart',JSON.stringify(state.cart));}
function cartCount(){return state.cart.reduce((t,i)=>t+i.quantity,0)}
function cartTotal(){return state.cart.reduce((s,i)=>s+getProduct(i.id).price*i.quantity,0)}
function renderCart(){
  const items=document.querySelector('#cart-items'),empty=document.querySelector('#empty-cart'),summary=document.querySelector('#cart-summary');
  const count=cartCount(),total=cartTotal();
  const badge=document.querySelector('#cart-count'); badge.textContent=count; badge.hidden=!count;
  document.querySelector('#cart-trigger').setAttribute('aria-label',count?`Abrir pedidos: ${count} ${count===1?'item':'itens'}`:'Abrir pedidos');
  document.querySelector('#cart-total').textContent=money(total);empty.hidden=Boolean(count);summary.hidden=!count;
  items.innerHTML=state.cart.map(item=>{const p=getProduct(item.id);return `<article class="cart-item"><div class="cart-thumb image-slot"><img src="${p.image}" alt="" onerror="this.classList.add('is-missing')"/><div class="image-placeholder"><span>77</span></div></div><div class="cart-item-copy"><h3>${p.name}</h3><strong class="price">${money(p.price*item.quantity)}</strong><div class="cart-controls"><button type="button" data-cart-action="decrease" data-id="${p.id}" aria-label="Diminuir ${p.name}">−</button><span>${item.quantity}</span><button type="button" data-cart-action="increase" data-id="${p.id}" aria-label="Aumentar ${p.name}">+</button></div></div><button class="remove-item" type="button" data-cart-action="remove" data-id="${p.id}" aria-label="Remover ${p.name}">×</button></article>`}).join('');
  saveCart();
}
function addToCart(productId,quantity=1){const found=state.cart.find(i=>i.id===productId); if(found)found.quantity+=quantity; else state.cart.push({id:productId,quantity}); renderCart();showToast(`${getProduct(productId).name} adicionado ao pedido`)}
function changeQuantity(id,change){const item=state.cart.find(i=>i.id===id);if(!item)return;item.quantity+=change;if(item.quantity<=0)state.cart=state.cart.filter(i=>i.id!==id);renderCart()}

function setBodyLock(locked){document.body.classList.toggle('is-locked',locked)}
function openLayer(layer){layer.classList.add('is-open');layer.setAttribute('aria-hidden','false');document.querySelector('#overlay').classList.add('is-open');setBodyLock(true)}
function closeLayers(){document.querySelectorAll('.cart-panel,.product-modal,.checkout-modal').forEach(el=>{el.classList.remove('is-open');el.setAttribute('aria-hidden','true')});document.querySelector('#overlay').classList.remove('is-open');setBodyLock(false)}
function openCart(){closeLayers();openLayer(document.querySelector('#cart-panel'))}
function openModal(id){const p=getProduct(id);if(!p)return;state.modalProduct=p;state.modalQuantity=1;document.querySelector('#modal-title').textContent=p.name;document.querySelector('#modal-description').textContent=p.description;document.querySelector('#modal-price').textContent=money(p.price);document.querySelector('#modal-quantity').textContent='1';document.querySelector('#modal-category').innerHTML=`<span></span> ${groups[p.category].title}`;const img=document.querySelector('#modal-image');img.className='';img.alt=p.name;img.src=p.image;openLayer(document.querySelector('#product-modal'))}
function showToast(message){const t=document.querySelector('#toast');t.textContent=message;t.classList.add('is-visible');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>t.classList.remove('is-visible'),2600)}

function openCheckout(){if(!state.cart.length){showToast('Adicione pelo menos um item ao pedido.');return} closeLayers();document.querySelector('#checkout-total-value').textContent=money(cartTotal());const feedback=document.querySelector('#checkout-feedback');feedback.hidden=true;feedback.textContent='';openLayer(document.querySelector('#checkout-modal'))}

renderHighlights();renderMenu();renderCart();

document.addEventListener('click',event=>{
  const add=event.target.closest('.add-button');const card=event.target.closest('.product-card');
  if(add&&card){event.stopPropagation();addToCart(card.dataset.productId);return}
  if(card){openModal(card.dataset.productId);return}
  const filter=event.target.closest('.filter');if(filter){document.querySelectorAll('.filter').forEach(b=>b.classList.remove('is-active'));filter.classList.add('is-active');state.filter=filter.dataset.filter;renderMenu();return}
  const action=event.target.closest('[data-cart-action]');if(action){const {cartAction,id}=action.dataset;if(cartAction==='remove'){state.cart=state.cart.filter(i=>i.id!==id);renderCart();showToast('Item removido do pedido')}else changeQuantity(id,cartAction==='increase'?1:-1);return}
  if(event.target.closest('#clear-search')){state.search='';document.querySelector('#menu-search').value='';renderMenu();}
});

document.addEventListener('keydown',event=>{
  if((event.key==='Enter'||event.key===' ')&&event.target.classList.contains('product-card')){event.preventDefault();openModal(event.target.dataset.productId)}
  if((event.key==='k'&&(event.metaKey||event.ctrlKey))){event.preventDefault();document.querySelector('#menu-search').focus()}
  if(event.key==='Escape')closeLayers();
});

document.querySelector('#cart-trigger').addEventListener('click',openCart);
document.querySelector('#hero-order').addEventListener('click',openCart);
document.querySelector('#overlay').addEventListener('click',closeLayers);
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',closeLayers));
document.querySelector('#browse-menu').addEventListener('click',()=>{closeLayers();document.querySelector('#cardapio').scrollIntoView({behavior:'smooth'})});
document.querySelector('#modal-increase').addEventListener('click',()=>{state.modalQuantity++;document.querySelector('#modal-quantity').textContent=state.modalQuantity});
document.querySelector('#modal-decrease').addEventListener('click',()=>{state.modalQuantity=Math.max(1,state.modalQuantity-1);document.querySelector('#modal-quantity').textContent=state.modalQuantity});
document.querySelector('#modal-add').addEventListener('click',()=>{addToCart(state.modalProduct.id,state.modalQuantity);closeLayers()});
document.querySelector('#checkout').addEventListener('click',openCheckout);
document.querySelector('#promo-add').addEventListener('click',()=>addToCart('interestelar'));
document.querySelector('#menu-search').addEventListener('input',e=>{state.search=e.target.value;renderMenu()});
document.querySelector('#menu-sort').addEventListener('change',e=>{state.sort=e.target.value;renderMenu()});

document.querySelector('#checkout-form').addEventListener('submit',e=>{e.preventDefault();const feedback=document.querySelector('#checkout-feedback');feedback.hidden=false;feedback.textContent='Pedido recebido! Esta é uma demonstração: não há cobrança ou envio real.';state.cart=[];renderCart();e.target.reset();setTimeout(closeLayers,1800)});

document.querySelector('#contact-form').addEventListener('submit',e=>{e.preventDefault();const feedback=document.querySelector('#contact-feedback');feedback.hidden=false;feedback.textContent='Mensagem enviada! Obrigado por entrar em contato com a BRASA 77.';e.target.reset();});

const menuToggle=document.querySelector('.menu-toggle'),navLinks=document.querySelector('#nav-links');
menuToggle.addEventListener('click',()=>{const open=menuToggle.getAttribute('aria-expanded')==='true';menuToggle.setAttribute('aria-expanded',String(!open));menuToggle.setAttribute('aria-label',open?'Abrir menu':'Fechar menu');navLinks.classList.toggle('is-open',!open)});
const navigationLinks=[...document.querySelectorAll('.nav-link')];
function setActiveNavigation(id){navigationLinks.forEach(link=>{const active=link.getAttribute('href')===`#${id}`;link.classList.toggle('is-active',active);if(active)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current')})}
navigationLinks.forEach(link=>link.addEventListener('click',()=>{setActiveNavigation(link.getAttribute('href').slice(1));menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Abrir menu');navLinks.classList.remove('is-open')}));
const header=document.querySelector('.site-header');
function updateHeaderState(){header.classList.toggle('scrolled',scrollY>15)}
window.addEventListener('scroll',updateHeaderState,{passive:true});updateHeaderState();
const sectionIds=['cardapio','avaliacoes','sobre','promocao','contato'];const sections=sectionIds.map(id=>document.getElementById(id)).filter(Boolean);
const sectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)setActiveNavigation(entry.target.id)}),{rootMargin:'-35% 0px -55% 0px',threshold:0});sections.forEach(s=>sectionObserver.observe(s));

const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

// Reviews
const reviewForm=document.querySelector('#review-form'),ratingInput=document.querySelector('#review-rating'),reviewFeedback=document.querySelector('#review-feedback'),stars=[...document.querySelectorAll('.star-option')];
function setReviewRating(rating){ratingInput.value=String(rating);stars.forEach(star=>{const value=Number(star.dataset.rating);star.classList.toggle('is-selected',value<=rating);star.setAttribute('aria-checked',String(value===rating))})}
stars.forEach(star=>{star.addEventListener('click',()=>setReviewRating(Number(star.dataset.rating)));star.addEventListener('keydown',event=>{if(['ArrowRight','ArrowUp','ArrowLeft','ArrowDown'].includes(event.key)){event.preventDefault();const delta=(event.key==='ArrowRight'||event.key==='ArrowUp')?1:-1;const next=Math.min(5,Math.max(1,Number(ratingInput.value||0)+delta));setReviewRating(next);stars[next-1].focus()}})});
reviewForm.addEventListener('submit',event=>{event.preventDefault();if(!ratingInput.value){reviewFeedback.hidden=false;reviewFeedback.textContent='Escolha uma nota de 1 a 5 estrelas antes de enviar.';return}reviewFeedback.hidden=false;reviewFeedback.textContent='Obrigado pelo feedback! Sua opinião foi recebida e entrará para análise.';reviewForm.reset();ratingInput.value='';stars.forEach(s=>{s.classList.remove('is-selected');s.setAttribute('aria-checked','false')})});

// Theme
const themeToggle=document.querySelector('#theme-toggle');
const savedTheme=localStorage.getItem('brasa-theme');
if(savedTheme==='light')document.body.classList.add('light-theme');
function updateThemeButton(){const light=document.body.classList.contains('light-theme');themeToggle.setAttribute('aria-pressed',String(light));themeToggle.setAttribute('aria-label',light?'Ativar modo escuro':'Ativar modo claro');themeToggle.querySelector('span').textContent=light?'☾':'☼';const themeMeta=document.querySelector('meta[name=theme-color]');if(themeMeta)themeMeta.setAttribute('content',light?'#f6f1e8':'#0d0d0d')}
updateThemeButton();themeToggle.addEventListener('click',()=>{document.body.classList.toggle('light-theme');localStorage.setItem('brasa-theme',document.body.classList.contains('light-theme')?'light':'dark');updateThemeButton()});

// Back to top
const backTop=document.querySelector('#back-top');window.addEventListener('scroll',()=>backTop.classList.toggle('is-visible',scrollY>700),{passive:true});backTop.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));

// Auto-close mobile navigation when selecting outside.
document.addEventListener('click',event=>{if(window.innerWidth<=720&&!event.target.closest('.nav')&&navLinks.classList.contains('is-open')){menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Abrir menu');navLinks.classList.remove('is-open')}});
