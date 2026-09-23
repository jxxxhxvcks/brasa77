const catalog = [
  { id:'esfirra-cebola', category:'entradas', name:'Esfirra + Cebola Empanada', description:'Uma dupla para começar o pedido com sabor.', price:24.99, image:'assets/entradas/esfirra-cebola.webp', accent:'#6a3828', rating:4.8, featured:false },
  { id:'batata-cheddar-bacon', category:'entradas', name:'Batata Frita 500g com Cheddar e Bacon', description:'500g de batata frita com cheddar e bacon.', price:24.99, image:'assets/entradas/batata-cheddar-bacon.webp', accent:'#5a321f', rating:4.9, featured:true },
  { id:'porcao-picanha', category:'entradas', name:'Porção de Picanha', description:'Porção de picanha para dividir ou chamar de sua.', price:35, image:'assets/entradas/porcao-picanha.webp', accent:'#692d26', rating:4.8, featured:false },
  { id:'bolinho-costela', category:'entradas', name:'Bolinho de Costela', description:'Bolinho crocante por fora, recheado com costela desfiada e temperada, acompanhado de molho especial.', price:19.99, image:'assets/entradas/costela.webp', accent:'#783b28', rating:4.8, featured:false },
  { id:'mini-pasteis', category:'entradas', name:'Mini Pastéis — 10 unidades', description:'Mini pastéis crocantes, servidos em uma porção com 10 unidades.', price:24.90, image:'assets/entradas/mini-pasteis.webp', accent:'#8a542d', rating:4.8, featured:false },
  { id:'triplo-burger', category:'burgers', name:'TRIPLO BURGER', description:'2 fatias de carne, 4 fatias de cheddar, 5 fatias de bacon, pão grelhado, alface e tomate.', price:38.9, image:'assets/burgers/triplo-burger.webp', accent:'#683122', rating:4.9, featured:true },
  { id:'interestelar', category:'burgers', name:'INTERESTELAR', description:'Picanha, bacon, cheddar triplo, barbecue, molho verde, batata palha, costela desossada e lombo suíno.', price:49.9, image:'assets/burgers/interestelar.webp', accent:'#8a3c20', rating:5.0, featured:true },
  { id:'booyah-burger', category:'burgers', name:'BOOYAH BURGER', description:'Pão grande, 2 carnes, cheddar, muçarela, 2 ovos fritos, bacon, calabresa, molho barbecue e presunto.', price:39.9, image:'assets/burgers/booyah.webp', accent:'#6c3b25', rating:4.9, featured:true },
  { id:'jl', category:'burgers', name:'JL', description:'Pão brioche selado na manteiga, molho verde, alface, duas carnes, cheddar, muçarela, presunto, bacon, pepperoni, dois anéis de cebola empanados, pickles e Last Sauce, o molho especial da casa.', price:42.9, image:'assets/burgers/jl.webp', accent:'#743326', rating:5.0, featured:true },
  { id:'potterhead', category:'burgers', name:'POTTERHEAD', description:'Hambúrguer artesanal, alface, tomate, salsicha, bacon crocante, batata e nosso molho mágico que derrete na boca.', price:55.9, originalPrice:62.9, image:'assets/burgers/potterhead.webp', accent:'#663321', rating:4.8, featured:false },
  { id:'quarteto-queijos', category:'burgers', name:'QUARTETO QUEIJOS', description:'Quatro queijos, cheddar, bacon, ovo, alface, tomate e duas carnes.', price:44.9, image:'assets/burgers/quarteto-queijos.webp', accent:'#72512b', rating:4.9, featured:true },
  { id:'monstro-camadas', category:'burgers', name:'MONSTRO DE CAMADAS', description:'Pão brioche gigante, mussarela, molho de tomate, carne bolonhesa, massa de lasanha, parmesão, molho branco, hambúrguer bovino, provolone e molho de tomate picante.', price:54.9, image:'assets/burgers/monstro-camadas.webp', accent:'#7c3529', rating:4.7, featured:false },
  { id:'combo-mini-brasa', category:'burgers', name:'COMBO MINI BRASA', description:'Hambúrguer Mini Brasa: pão brioche, hambúrguer artesanal, queijo e molho especial. Acompanha batata frita, Magic Pop Cola, Pedaço do Céu e 1 brinquedo surpresa.', price:42.99, image:'assets/burgers/combo-mini-brasa.webp', accent:'#8a3a25', rating:4.9, featured:true },
  { id:'combo-kids-cheddar', category:'burgers', name:'COMBO KIDS CHEDDAR', description:'Hambúrguer Kids Cheddar: pão brioche, hambúrguer artesanal, cheddar e molho especial. Acompanha batata frita, Magic Pop Cola, Pedaço do Céu e 1 brinquedo surpresa.', price:41.99, image:'assets/burgers/combo-kids-cheddar.webp', accent:'#9a5428', rating:4.8, featured:true },
  { id:'combo-mini-bacon', category:'burgers', name:'COMBO MINI BACON', description:'Hambúrguer Mini Bacon: pão brioche, hambúrguer artesanal, queijo, bacon crocante e molho especial. Acompanha batata frita, Magic Pop Cola, Pedaço do Céu e 1 brinquedo surpresa.', price:41.99, image:'assets/burgers/combo-mini-bacon.webp', accent:'#713329', rating:4.9, featured:true },
  { id:'combo-chicken-kids', category:'burgers', name:'COMBO CHICKEN KIDS', description:'Hambúrguer Chicken Kids: pão brioche, frango empanado, queijo e molho especial. Acompanha batata frita, Magic Pop Cola, Pedaço do Céu e 1 brinquedo surpresa.', price:41.99, image:'assets/burgers/combo-chicken-kids.webp', accent:'#a1692d', rating:4.8, featured:true },
  { id:'creme-morango', category:'cremes', name:'Creme de Morango', description:'Gelado, cremoso e pronto para completar seu pedido.', price:14.9, image:'assets/cremes/morango.webp', accent:'#884646', rating:4.8, featured:false },
  { id:'creme-cafe', category:'cremes', name:'Creme de Café', description:'Gelado, cremoso e pronto para completar seu pedido.', price:14.9, image:'assets/cremes/cafe.webp', accent:'#795743', rating:4.8, featured:false },
  { id:'creme-limao', category:'cremes', name:'Creme de Limão', description:'Gelado, cremoso e pronto para completar seu pedido.', price:13.9, image:'assets/cremes/limao.webp', accent:'#697848', rating:4.7, featured:false },
  { id:'creme-chocolate', category:'cremes', name:'Creme de Chocolate', description:'Gelado, cremoso e pronto para completar seu pedido.', price:15.9, image:'assets/cremes/chocolate.webp', accent:'#624942', rating:4.9, featured:true },
  { id:'creme-maracuja', category:'cremes', name:'Creme de Maracujá', description:'Gelado, cremoso e pronto para completar seu pedido.', price:14.9, image:'assets/cremes/maracuja.webp', accent:'#876f33', rating:4.8, featured:false },
  { id:'explosao-chocolate', category:'sobremesas', name:'EXPLOSÃO DE CHOCOLATE', description:'Brownie quente, brigadeiro, calda de chocolate e sorvete de creme.', price:14.9, image:'assets/sobremesas/explosao-chocolate.webp', accent:'#70423b', rating:4.9, featured:true },
  { id:'tentacao-morango', category:'sobremesas', name:'TENTAÇÃO DE MORANGO', description:'Creme de morango, morangos frescos, chocolate e chantilly.', price:15.9, image:'assets/sobremesas/tentacao-morango.webp', accent:'#8f4550', rating:4.8, featured:false },
  { id:'pedaco-ceu', category:'sobremesas', name:'PEDAÇO DO CÉU', description:'Bolo de chocolate, brigadeiro, morangos e sorvete de creme.', price:14.9, image:'assets/sobremesas/pedaco-ceu.webp', accent:'#79403d', rating:4.8, featured:false },
  { id:'doce-paixao', category:'sobremesas', name:'DOCE PAIXÃO', description:'Mousse de maracujá, chocolate branco e calda de maracujá.', price:13.9, image:'assets/sobremesas/doce-paixao.webp', accent:'#8b7134', rating:4.7, featured:false },
  { id:'bloom-love', category:'sobremesas', name:'BLOOM LOVE', description:'Milk shake de morango com baunilha, chocolate branco derretido, leite, calda de morango, farofa crocante de biscoito de morango, pedacinhos de morango e raspas de chocolate branco.', price:19.99, image:'assets/sobremesas/tentacao-morango.webp', accent:'#a8465a', rating:4.9, featured:true },
  { id:'choco-fire', category:'sobremesas', name:'CHOCO FIRE', description:'Milk-shake de chocolate, creme de avelã, calda de chocolate e pedaços de brownie.', price:18.99, image:'assets/sobremesas/choco-fire.webp', accent:'#713a35', rating:4.9, featured:true },
  { id:'magic-redberry', category:'refrigerantes', name:'Magic Pop Redberry', description:'Magic Pop', price:5.49, image:'assets/refrigerantes/redberry.webp', accent:'#e6392f', pop:'#d93044', rating:4.7, featured:false },
  { id:'magic-golden-fizz', category:'refrigerantes', name:'Magic Pop Golden Fizz', description:'Magic Pop', price:5.49, image:'assets/refrigerantes/golden-fizz.webp', accent:'#d68a22', pop:'#c77a12', rating:4.7, featured:false },
  { id:'magic-lemon-crush', category:'refrigerantes', name:'Magic Pop Lemon Crush', description:'Magic Pop', price:5.49, image:'assets/refrigerantes/lemon-crush.webp', accent:'#c9d42d', pop:'#9fae21', rating:4.6, featured:false },
  { id:'magic-cola', category:'refrigerantes', name:'Magic Pop Cola', description:'Magic Pop', price:5.49, image:'assets/refrigerantes/cola.webp', accent:'#965438', pop:'#75422e', rating:4.7, featured:false },
  { id:'magic-lime-pop', category:'refrigerantes', name:'Magic Pop Lime Pop', description:'Magic Pop', price:5.49, image:'assets/refrigerantes/lime-pop.webp', accent:'#59bb66', pop:'#339e59', rating:4.7, featured:false },
  { id:'magic-tropical-rush', category:'refrigerantes', name:'Magic Pop Tropical Rush', description:'Magic Pop', price:5.49, image:'assets/refrigerantes/tropical-rush.webp', accent:'#e25467', pop:'#cb3a62', rating:4.8, featured:false },
  { id:'magic-orange-sparky', category:'refrigerantes', name:'Magic Pop Orange Sparky', description:'Magic Pop', price:5.49, image:'assets/refrigerantes/orange-sparky.webp', accent:'#f57c28', pop:'#e65f18', rating:4.7, featured:false },
  { id:'magic-tropy-pop', category:'refrigerantes', name:'Magic Pop Tropy Pop', description:'Magic Pop', price:5.49, image:'assets/refrigerantes/tropy-pop.webp', accent:'#2ba4b3', pop:'#168494', rating:4.7, featured:false },
  { id:'luz-amanhecer', category:'drinks', name:'Luz do Amanhecer', description:'Suco de maracujá, Sprite, Suco de laranja, Gelo.', price:12, image:'assets/drinks/luz-do-amanhecer.webp', accent:'#61bb83', rating:4.8, featured:true },
  { id:'jheny-moon', category:'drinks', name:'Jheny Moon', description:'Suco de uva, Sprite, Suco de laranja, Gelo.', price:12.9, image:'assets/drinks/jheny-moon.webp', accent:'#8c72c1', rating:4.7, featured:false },
  { id:'brasa-tropical', category:'drinks', name:'Brasa Tropical', description:'Suco de maracujá, morango, abacaxi, xarope de frutas vermelhas e gelo.', price:16.99, image:'assets/drinks/brasa-tropical.webp', accent:'#d45c48', rating:4.9, featured:true },
  { id:'brasa-77-energy', category:'refrigerantes', name:'BRASA 77 ENERGY', description:'Energético BRASA 77 — lata de 473 ml.', price:14.99, image:'assets/refrigerantes/brasa-77.webp', accent:'#e6392f', pop:'#b51f2d', rating:4.9, featured:true },
  { id:'valhalla', category:'drinks', name:'VALHALLA', description:'Mel • Maçã • Limão • Canela • Gengibre • Laranja • Baunilha • 0,0% Álcool', price:14.90, image:'assets/drinks/hidromel.webp', accent:'#d5a43c', rating:4.9, featured:true },
  { id:'ragnarok', category:'burgers', name:'RAGNARÖK', description:'Blend Bovino 180g • Cheddar Maturado • Bacon Crocante • Cebola Caramelizada na Cerveja Escura • Repolho Roxo • Molho Fogo de Muspelheim • Brioche Artesanal', price:39.90, image:'assets/burgers/ragnarok.webp', accent:'#8a3c20', rating:4.9, featured:true },
  { id:'pink-brasa', category:'drinks', name:'Pink Brasa', description:'Drink refrescante de morango com limão e água com gás, servido com gelo e calda de morango escorrendo pela borda, finalizado com morango e limão.', price:12.99, image:'assets/drinks/pink-brasa.webp', accent:'#d84e65', rating:4.8, featured:false },
  { id:'purple-berry', category:'drinks', name:'Purple Berry', description:'Drink refrescante de uva e morango com gás, blueberries e gelo, com um toque de limão para equilibrar o sabor.', price:13.99, image:'assets/drinks/purple-berry.webp', accent:'#7653b2', rating:4.8, featured:false },
  { id:'jhen-peach', category:'drinks', name:'Jhen Peach', description:'Drink refrescante de pêssego, morango e limão com água de coco e gelo. Leve, frutado e bem tropical.', price:13.99, image:'assets/drinks/jhen-peach.webp', accent:'#e08b55', rating:4.8, featured:false },
  { id:'mar-profundo', category:'drinks', name:'Mar Profundo', description:'Drink sem álcool de blueberry ou amora com água com gás, limão e gelo, criando um degradê natural do transparente ao azul-escuro. Visual bonito e refrescante.', price:14.99, image:'assets/drinks/mar-profundo.webp', accent:'#315d9a', rating:4.8, featured:false },
  { id:'sunset-berry', category:'drinks', name:'Sunset Berry', description:'Drink refrescante de morango e uva, com pedaços de morango, toque de limão e um final frutado.', price:13.99, image:'assets/drinks/sunset-berry.webp', accent:'#bd4d6a', rating:4.8, featured:false },
];

const groups = {
  entradas:{title:'PARA COMEÇAR',subtitle:'Porque esperar pelo burger também dá fome.'},
  burgers:{title:'BURGERS',subtitle:'Aqui o básico não existe.'},
  cremes:{title:'CREMES DA BRASA',subtitle:'Cremosos, gelados e feitos para fechar o pedido do jeito certo.'},
  sobremesas:{title:'SOBREMESAS',subtitle:'Porque sempre cabe uma sobremesa.'},
  refrigerantes:{title:'MAGIC POP',subtitle:'O toque de cor que deixa o pedido ainda mais completo.'},
  drinks:{title:'DRINKS',subtitle:'Misturas refrescantes para acompanhar a sua brasa.'},
};

const money=value=>value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
const getProduct=id=>catalog.find(p=>p.id===id);
const MAX_CART_QUANTITY=20;

function createElement(tag,className,text){
  const element=document.createElement(tag);
  if(className)element.className=className;
  if(text!==undefined)element.textContent=text;
  return element;
}

function bindImageState(image,{loadedClass='is-loaded',missingClass='is-missing'}={}){
  image.addEventListener('load',()=>image.classList.add(loadedClass));
  image.addEventListener('error',()=>image.classList.add(missingClass));
  return image;
}

function createImageSlot(product,alt='',className=''){
  const media=createElement('div',`image-slot${className?` ${className}`:''}`);
  const image=bindImageState(createElement('img'));
  image.src=product.image;
  image.alt=alt;
  image.loading='lazy';
  image.decoding='async';
  media.append(image);
  const placeholder=createElement('div','image-placeholder');
  placeholder.setAttribute('aria-hidden','true');
  placeholder.append(createElement('span',null,'BRASA'),createElement('strong',null,'77'));
  media.append(placeholder);
  return media;
}

function createPriceElement(product){
  if(product.originalPrice){
    const stack=createElement('span','price-stack');
    stack.append(createElement('s','price-old',money(product.originalPrice)),createElement('strong','price',money(product.price)));
    return stack;
  }
  return createElement('strong','price',money(product.price));
}

function createRatingElement(rating){
  const value=rating.toFixed(1).replace('.',',');
  const ratingElement=createElement('span','card-rating',`★ ${value}`);
  ratingElement.setAttribute('aria-label',`${value} de 5`);
  return ratingElement;
}

function productCard(product,isHighlight=false){
  const card=createElement('article',`product-card${isHighlight?' is-highlight':''}`);
  card.tabIndex=0;
  card.setAttribute('role','button');
  card.dataset.productId=product.id;
  card.style.setProperty('--accent-soft',product.accent);
  card.style.setProperty('--pop-color',product.pop||product.accent);

  const media=createImageSlot(product,product.name,'card-media');
  media.append(createElement('span','product-badge',isHighlight?'MAIS PEDIDO':groups[product.category].title));
  card.append(media);

  const content=createElement('div','card-content');
  const meta=createElement('div','card-meta');
  meta.append(createElement('span','card-tag',groups[product.category].title),createRatingElement(product.rating));
  const title=createElement('h3',null,product.name);
  const description=createElement('p',null,product.description);
  const footer=createElement('div','card-footer');
  const addButton=createElement('button','add-button');
  addButton.type='button';
  addButton.setAttribute('aria-label',`Adicionar ${product.name}`);
  addButton.append(createElement('span',null,'+'),document.createTextNode(' Adicionar'));
  footer.append(createPriceElement(product),addButton);
  content.append(meta,title,description,footer);
  card.append(content);
  return card;
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
  node.replaceChildren();
  if(!products.length){
    const empty=createElement('div','empty-results');
    empty.append(createElement('span',null,'⌕'),createElement('h3',null,'Nada encontrado.'),createElement('p',null,'Tente outro termo ou remova alguns filtros.'));
    const clear=createElement('button','text-button','Limpar busca →');
    clear.type='button';
    clear.id='clear-search';
    empty.append(clear);
    node.append(empty);
    return;
  }
  const cats=state.filter==='todos'?Object.keys(groups):[state.filter];
  const fragment=document.createDocumentFragment();
  cats.forEach(category=>{
    const items=products.filter(p=>p.category===category);
    if(!items.length)return;
    const group=groups[category];
    const section=createElement('section','menu-group');
    section.dataset.category=category;
    const heading=createElement('div','category-heading');
    heading.append(createElement('h3',null,group.title),createElement('p',null,group.subtitle));
    const grid=createElement('div','product-grid');
    items.forEach(product=>grid.append(productCard(product)));
    section.append(heading,grid);
    fragment.append(section);
  });
  node.append(fragment);
}

function renderHighlights(){
  const ids=['interestelar','jl','booyah-burger','potterhead'];
  const grid=document.querySelector('#highlights-grid');
  grid.replaceChildren(...ids.map(id=>productCard(getProduct(id),true)));
}

function normalizeCart(rawCart){
  if(!Array.isArray(rawCart))return [];
  const quantities=new Map();
  rawCart.forEach(item=>{
    if(!item||typeof item.id!=='string'||!getProduct(item.id)||!Number.isInteger(item.quantity)||item.quantity<1||item.quantity>MAX_CART_QUANTITY)return;
    quantities.set(item.id,Math.min(MAX_CART_QUANTITY,(quantities.get(item.id)||0)+item.quantity));
  });
  return [...quantities].map(([id,quantity])=>({id,quantity}));
}

function readCart(){
  try{return normalizeCart(JSON.parse(sessionStorage.getItem('brasa-cart')||'[]'));}
  catch{return []}
}

const state={cart:readCart(),modalProduct:null,modalQuantity:1,filter:'todos',search:'',sort:'featured'};

function saveCart(){
  state.cart=normalizeCart(state.cart);
  try{sessionStorage.setItem('brasa-cart',JSON.stringify(state.cart));}catch{}
}
function cartCount(){return state.cart.reduce((total,item)=>total+item.quantity,0)}
function cartTotal(){return state.cart.reduce((total,item)=>{const product=getProduct(item.id);return product?total+product.price*item.quantity:total},0)}
function renderCart(){
  const items=document.querySelector('#cart-items'),empty=document.querySelector('#empty-cart'),summary=document.querySelector('#cart-summary');
  state.cart=normalizeCart(state.cart);
  const count=cartCount(),total=cartTotal();
  const badge=document.querySelector('#cart-count'); badge.textContent=count; badge.hidden=!count;
  document.querySelector('#cart-trigger').setAttribute('aria-label',count?`Abrir pedidos: ${count} ${count===1?'item':'itens'}`:'Abrir pedidos');
  document.querySelector('#cart-total').textContent=money(total);empty.hidden=Boolean(count);summary.hidden=!count;
  const fragment=document.createDocumentFragment();
  state.cart.forEach(item=>{
    const product=getProduct(item.id);
    if(!product)return;
    const article=createElement('article','cart-item');
    const thumb=createImageSlot(product,'','cart-thumb');
    thumb.querySelector('.image-placeholder').replaceChildren(createElement('span',null,'77'));
    const copy=createElement('div','cart-item-copy');
    const title=createElement('h3',null,product.name);
    const itemPrice=createElement('strong','price',money(product.price*item.quantity));
    const controls=createElement('div','cart-controls');
    const decrease=createElement('button',null,'−');
    decrease.type='button';
    decrease.dataset.cartAction='decrease';
    decrease.dataset.id=product.id;
    decrease.setAttribute('aria-label',`Diminuir ${product.name}`);
    const quantity=createElement('span',null,String(item.quantity));
    const increase=createElement('button',null,'+');
    increase.type='button';
    increase.dataset.cartAction='increase';
    increase.dataset.id=product.id;
    increase.setAttribute('aria-label',`Aumentar ${product.name}`);
    controls.append(decrease,quantity,increase);
    copy.append(title,itemPrice,controls);
    const remove=createElement('button','remove-item','×');
    remove.type='button';
    remove.dataset.cartAction='remove';
    remove.dataset.id=product.id;
    remove.setAttribute('aria-label',`Remover ${product.name}`);
    article.append(thumb,copy,remove);
    fragment.append(article);
  });
  items.replaceChildren(fragment);
  saveCart();
}
function addToCart(productId,quantity=1){
  const product=getProduct(productId);
  if(!product||!Number.isInteger(quantity)||quantity<1)return;
  const found=state.cart.find(item=>item.id===productId);
  if(found)found.quantity=Math.min(MAX_CART_QUANTITY,found.quantity+quantity);
  else state.cart.push({id:productId,quantity:Math.min(MAX_CART_QUANTITY,quantity)});
  renderCart();
  showToast(`${product.name} adicionado ao pedido`);
}
function changeQuantity(id,change){
  if(!getProduct(id)||!Number.isInteger(change)||Math.abs(change)>MAX_CART_QUANTITY)return;
  const item=state.cart.find(entry=>entry.id===id);
  if(!item)return;
  item.quantity+=change;
  if(item.quantity<=0)state.cart=state.cart.filter(entry=>entry.id!==id);
  else item.quantity=Math.min(MAX_CART_QUANTITY,item.quantity);
  renderCart();
}

function setBodyLock(locked){document.body.classList.toggle('is-locked',locked)}
let activeLayer=null;
function openLayer(layer){
  if(!layer)return;
  if(activeLayer&&activeLayer!==layer){activeLayer.classList.remove('is-open');activeLayer.setAttribute('aria-hidden','true')}
  activeLayer=layer;
  layer.classList.add('is-open');
  layer.setAttribute('aria-hidden','false');
  document.querySelector('#overlay').classList.add('is-open');
  setBodyLock(true);
}
function closeLayers(){
  if(activeLayer){activeLayer.classList.remove('is-open');activeLayer.setAttribute('aria-hidden','true');activeLayer=null}
  document.querySelector('#overlay').classList.remove('is-open');
  setBodyLock(false);
}
function openCart(){openLayer(document.querySelector('#cart-panel'))}
function openModal(id){
  const product=getProduct(id);
  if(!product)return;
  state.modalProduct=product;
  state.modalQuantity=1;
  document.querySelector('#modal-title').textContent=product.name;
  document.querySelector('#modal-description').textContent=product.description;
  document.querySelector('#modal-price').replaceChildren(createPriceElement(product));
  document.querySelector('#modal-quantity').textContent='1';
  const category=document.querySelector('#modal-category');
  category.replaceChildren(createElement('span'),document.createTextNode(` ${groups[product.category].title}`));
  const image=document.querySelector('#modal-image');
  image.className='';
  image.alt=product.name;
  image.src=product.image;
  openLayer(document.querySelector('#product-modal'));
}
function showToast(message){const t=document.querySelector('#toast');t.textContent=message;t.classList.add('is-visible');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>t.classList.remove('is-visible'),2600)}

function openCheckout(){
  state.cart=normalizeCart(state.cart);
  saveCart();
  if(!state.cart.length){showToast('Adicione pelo menos um item ao pedido.');return}
  document.querySelector('#checkout-total-value').textContent=money(cartTotal());
  const feedback=document.querySelector('#checkout-feedback');
  feedback.hidden=true;
  feedback.textContent='';
  openLayer(document.querySelector('#checkout-modal'));
}

let menuSearchTimer;
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
document.querySelector('#modal-increase').addEventListener('click',()=>{state.modalQuantity=Math.min(MAX_CART_QUANTITY,state.modalQuantity+1);document.querySelector('#modal-quantity').textContent=state.modalQuantity});
document.querySelector('#modal-decrease').addEventListener('click',()=>{state.modalQuantity=Math.max(1,state.modalQuantity-1);document.querySelector('#modal-quantity').textContent=state.modalQuantity});
document.querySelector('#modal-add').addEventListener('click',()=>{addToCart(state.modalProduct.id,state.modalQuantity);closeLayers()});
document.querySelector('#checkout').addEventListener('click',openCheckout);
document.querySelector('#promo-add').addEventListener('click',()=>addToCart('potterhead'));
document.querySelector('#promo-energy-add').addEventListener('click',()=>addToCart('brasa-77-energy'));
document.querySelector('#menu-search').addEventListener('input',e=>{state.search=e.target.value;clearTimeout(menuSearchTimer);menuSearchTimer=setTimeout(renderMenu,120)});
document.querySelector('#menu-sort').addEventListener('change',e=>{state.sort=e.target.value;renderMenu()});

document.querySelector('#checkout-form').addEventListener('submit',e=>{e.preventDefault();const feedback=document.querySelector('#checkout-feedback');feedback.hidden=false;feedback.textContent='Pedido simulado com sucesso! Esta é uma demonstração acadêmica: nenhum dado é enviado, nenhuma cobrança é feita e nenhum pedido real é criado.';state.cart=[];renderCart();e.target.reset();setTimeout(closeLayers,1800)});

document.querySelector('#contact-form').addEventListener('submit',e=>{e.preventDefault();const feedback=document.querySelector('#contact-feedback');feedback.hidden=false;feedback.textContent='Mensagem simulada! Esta é uma demonstração acadêmica: nenhum dado foi enviado ou armazenado.';e.target.reset();});

const menuToggle=document.querySelector('.menu-toggle'),navLinks=document.querySelector('#nav-links');
menuToggle.addEventListener('click',()=>{const open=menuToggle.getAttribute('aria-expanded')==='true';menuToggle.setAttribute('aria-expanded',String(!open));menuToggle.setAttribute('aria-label',open?'Abrir menu':'Fechar menu');navLinks.classList.toggle('is-open',!open)});
const navigationLinks=[...document.querySelectorAll('.nav-link')];
function setActiveNavigation(id){navigationLinks.forEach(link=>{const active=link.getAttribute('href')===`#${id}`;link.classList.toggle('is-active',active);if(active)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current')})}
navigationLinks.forEach(link=>link.addEventListener('click',()=>{setActiveNavigation(link.getAttribute('href').slice(1));menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Abrir menu');navLinks.classList.remove('is-open')}));
const header=document.querySelector('.site-header');
const backTop=document.querySelector('#back-top');
function updateHeaderState(){header.classList.toggle('scrolled',scrollY>15);backTop.classList.toggle('is-visible',scrollY>700)}
window.addEventListener('scroll',updateHeaderState,{passive:true});updateHeaderState();
const sectionIds=['promocao','cardapio','anatomia','avaliacoes','sobre','contato'];const sections=sectionIds.map(id=>document.getElementById(id)).filter(Boolean);
const sectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)setActiveNavigation(entry.target.id)}),{rootMargin:'-35% 0px -55% 0px',threshold:0});sections.forEach(s=>sectionObserver.observe(s));

const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

// Burger Anatomy Showcase
const anatomyData = {
  'triplo-burger': {
    kicker:'BURGER #01',
    intro:'Duas carnes, quatro fatias de cheddar e cinco de bacon. Um dos maiores clássicos da casa — montado em camadas para você ver cada detalhe.',
    image:'assets/burgers/triplo-burger.webp',
    stats:[['Camadas','07'],['Carnes','02'],['Cheddar','04'],['Bacon','05']],
    layers:[
      ['top-bun','Pão grelhado','Selado na chapa para criar uma superfície dourada e firme por fora, sem perder a maciez por dentro.'],
      ['sauce','Molho da casa','A camada que amarra os sabores e adiciona cremosidade entre o pão e o recheio.'],
      ['lettuce','Alface','Frescor e crocância para quebrar a intensidade das carnes e do cheddar.'],
      ['tomato','Tomate','Acidez leve e suculência para trazer equilíbrio ao conjunto.'],
      ['bacon','Bacon × 5','Cinco fatias para entregar crocância, gordura e aquele toque defumado marcante.'],
      ['cheddar','Cheddar × 4','Quatro fatias derretidas que abraçam as carnes e deixam cada mordida mais cremosa.'],
      ['beef','Carne × 2','Duas carnes grelhadas formando o coração do burger, com sabor intenso e textura suculenta.'],
      ['bottom-bun','Base selada','A base mantém toda a estrutura firme para o burger chegar inteiro até a última mordida.']
    ]
  },
  'interestelar': {
    kicker:'BURGER #02',
    intro:'O protagonista da casa: picanha, bacon, cheddar triplo e uma sequência de camadas que faz o Interestelar parecer uma pequena galáxia de sabores.',
    image:'assets/burgers/interestelar.webp',
    stats:[['Camadas','09'],['Queijo','03'],['Carnes','03'],['Molhos','02']],
    layers:[
      ['top-bun','Pão da casa','A cobertura dourada que segura o conjunto e prepara a mordida para o recheio.'],
      ['sauce-bbq','Barbecue','Defumado, adocicado e intenso: entra para conversar diretamente com a picanha.'],
      ['crispy','Batata palha','Textura crocante no meio do recheio para criar contraste a cada mordida.'],
      ['bacon','Bacon','Gordura e crocância para aumentar o impacto do conjunto.'],
      ['cheddar','Cheddar × 3','Três camadas de queijo derretido envolvendo as carnes e criando o efeito ultra-cremoso.'],
      ['beef-premium','Picanha','A carne de destaque do Interestelar, trazendo sabor mais profundo e presença no conjunto.'],
      ['pork','Lombo suíno','Uma camada suína que amplia a complexidade e deixa o recheio ainda mais generoso.'],
      ['beef-braised','Costela desossada','Maciez e sabor intenso para fechar a parte mais carnuda da montagem.'],
      ['sauce-green','Molho verde','Frescor e acidez para equilibrar as carnes, o queijo e a defumação.'],
      ['bottom-bun','Base selada','A última camada mantém tudo no lugar até a última mordida.']
    ]
  },
  'booyah-burger': {
    kicker:'BURGER #03',
    intro:'Dois ovos, duas carnes, cheddar, muçarela, bacon, calabresa e ainda mais recheio. O Booyah não foi feito para passar despercebido.',
    image:'assets/burgers/booyah.webp',
    stats:[['Camadas','10'],['Carnes','02'],['Ovos','02'],['Queijos','02']],
    layers:[
      ['top-bun','Pão grande','Volume, maciez e estrutura para receber um recheio que não economiza em nada.'],
      ['ham','Presunto','Uma camada salgada e delicada que conecta os queijos às carnes.'],
      ['egg','Ovos × 2','Duas gemas entram para adicionar riqueza e cremosidade à montagem.'],
      ['bacon','Bacon','Crocância e defumação para destacar a parte mais intensa do recheio.'],
      ['sausage','Calabresa','Sabor especiado e gordura que aumentam o impacto do burger.'],
      ['cheese-mix','Cheddar + muçarela','A dupla de queijos cria contraste entre cremosidade e elasticidade.'],
      ['beef','Carne × 2','Duas camadas de carne para dar corpo e presença ao conjunto.'],
      ['sauce-bbq','Molho barbecue','Um toque adocicado e defumado que costura as notas mais fortes.'],
      ['bottom-bun','Base','Firme o suficiente para sustentar uma montagem tão generosa.']
    ]
  },
  'jl': {
    kicker:'BURGER #04',
    intro:'O JL é uma coleção de texturas: crocante, cremoso, fresco e defumado convivendo na mesma montagem.',
    image:'assets/burgers/jl.webp',
    stats:[['Camadas','12'],['Carnes','02'],['Queijos','02'],['Crocantes','03']],
    layers:[
      ['top-bun','Pão brioche','Brioche selado na manteiga para uma casquinha dourada e aroma amanteigado.'],
      ['sauce-last','Last Sauce','O molho especial da casa entra como assinatura do JL.'],
      ['pickles','Pickles','Acidez e crocância para limpar o paladar entre as mordidas.'],
      ['onion-rings','Anéis de cebola × 2','Duas peças empanadas para adicionar crocância e doçura caramelizada.'],
      ['pepperoni','Pepperoni','Um toque mais intenso e levemente picante no centro do recheio.'],
      ['bacon','Bacon','Defumação e crocância no ponto certo.'],
      ['ham','Presunto','Uma camada macia que ajuda a conectar os recheios.'],
      ['cheese-mix','Cheddar + muçarela','Dois queijos para garantir sabor, elasticidade e cremosidade.'],
      ['beef','Carne × 2','Duas carnes formando a estrutura principal do burger.'],
      ['lettuce','Alface','Frescor e textura para equilibrar o peso das carnes e queijos.'],
      ['sauce-green','Molho verde','Frescor e cremosidade espalhados pela montagem.'],
      ['bottom-bun','Base brioche','A base selada segura todas as camadas e mantém o conjunto estável.']
    ]
  },
  'potterhead': {
    kicker:'BURGER #05',
    intro:'Inspirado pelo universo mágico, o Potterhead combina o clássico do burger artesanal com uma montagem divertida e cheia de contraste.',
    image:'assets/burgers/potterhead.webp',
    stats:[['Camadas','08'],['Carne','01'],['Crocantes','02'],['Molho','01']],
    layers:[
      ['top-bun','Pão da casa','A parte superior dourada que dá o primeiro toque de textura.'],
      ['magic-sauce','Molho mágico','Cremoso e marcante, foi pensado para derreter na mordida.'],
      ['bacon','Bacon crocante','A magia acontece também na textura: crocância para quebrar a maciez.'],
      ['sausage','Salsicha','Uma camada extra de sabor, trazendo personalidade ao burger.'],
      ['tomato','Tomate','Sabor fresco e suculência para equilibrar o conjunto.'],
      ['lettuce','Alface','Leveza e crocância no meio de uma montagem intensa.'],
      ['beef','Hambúrguer artesanal','A base carnuda com sabor grelhado que segura toda a composição.'],
      ['crispy','Batata','Um toque crocante que lembra o lado mais divertido da montagem.'],
      ['bottom-bun','Base','A camada final que mantém o Potterhead firme e pronto para a primeira mordida.']
    ]
  },
  'quarteto-queijos': {
    kicker:'BURGER #06',
    intro:'Quatro queijos, duas carnes, bacon e ovo: uma montagem pensada para quem coloca cremosidade no centro da experiência.',
    image:'assets/burgers/quarteto-queijos.webp',
    stats:[['Camadas','09'],['Carnes','02'],['Queijos','04'],['Ovo','01']],
    layers:[
      ['top-bun','Pão da casa','Maciez e estrutura para uma montagem muito cremosa.'],
      ['cheese-quad','Quarteto de queijos','Quatro queijos diferentes criando camadas de sabor e textura.'],
      ['egg','Ovo','A gema adiciona uma cremosidade natural que se mistura aos queijos.'],
      ['bacon','Bacon','Crocância e defumação para cortar a cremosidade.'],
      ['tomato','Tomate','Um toque de acidez para evitar que a montagem fique pesada.'],
      ['lettuce','Alface','Frescor e leveza entre as camadas.'],
      ['beef','Carne × 2','Duas carnes grelhadas dando força ao recheio.'],
      ['cheese-melt','Queijo derretido','Mais uma camada para manter o centro extremamente cremoso.'],
      ['bottom-bun','Base selada','Fecha a montagem e sustenta o peso do recheio.']
    ]
  },
  'monstro-camadas': {
    kicker:'BURGER #07',
    intro:'Aqui a palavra “camadas” é literal: lasanha, bolonhesa, parmesão, molho branco, hambúrguer bovino e provolone na mesma construção.',
    image:'assets/burgers/monstro-camadas.webp',
    stats:[['Camadas','11'],['Massas','01'],['Carnes','02'],['Molhos','03']],
    layers:[
      ['top-bun','Pão brioche gigante','Um pão alto para suportar uma montagem de proporções monstruosas.'],
      ['tomato-sauce','Molho de tomate','Uma camada ácida e aromática que atravessa a montagem.'],
      ['parmesan','Parmesão','Salinidade e sabor mais seco para contrastar com os molhos.'],
      ['white-sauce','Molho branco','Cremosidade intensa que envolve a parte central.'],
      ['lasagna','Massa de lasanha','A surpresa do Monstro: uma camada de massa no meio do burger.'],
      ['bolognese','Carne bolonhesa','Molho encorpado e carnudo para construir profundidade.'],
      ['beef','Hambúrguer bovino','A carne grelhada traz a identidade de burger para a montagem.'],
      ['provolone','Provolone','Queijo de sabor mais pronunciado para deixar o centro ainda mais intenso.'],
      ['spicy-tomato','Molho de tomate picante','Calor e acidez para levantar todas as camadas.'],
      ['sauce-house','Molho da casa','Uma camada final que junta os sabores e ajuda na suculência.'],
      ['bottom-bun','Base brioche','A fundação do Monstro de Camadas.']
    ]
  }
};

const anatomyProductOrder=['triplo-burger','interestelar','booyah-burger','jl','potterhead','quarteto-queijos','monstro-camadas'];
const anatomyNames={
  'triplo-burger':'TRIPLO BURGER','interestelar':'INTERESTELAR','booyah-burger':'BOOYAH BURGER','jl':'JL','potterhead':'POTTERHEAD','quarteto-queijos':'QUARTETO QUEIJOS','monstro-camadas':'MONSTRO DE CAMADAS'
};
const anatomyTabs=document.querySelector('#anatomy-tabs');
const anatomyBurger=document.querySelector('#anatomy-burger');
const anatomyReference=document.querySelector('#anatomy-reference');
const anatomyReferenceImage=document.querySelector('#anatomy-reference-image');
const anatomyPhotoName=document.querySelector('#anatomy-photo-name');
const anatomyPhotoNumber=document.querySelector('#anatomy-photo-number');
const anatomyViewToggle=document.querySelector('#anatomy-view-toggle');
const anatomyLegend=document.querySelector('#anatomy-legend');
const anatomyTitle=document.querySelector('#anatomy-title');
const anatomyIntro=document.querySelector('#anatomy-intro');
const anatomyCategory=document.querySelector('#anatomy-category');
const anatomyCurrent=document.querySelector('#anatomy-current');
const anatomyTotal=document.querySelector('#anatomy-total');
const anatomyStats=document.querySelector('#anatomy-stats');
const anatomyLayerTitle=document.querySelector('#anatomy-layer-title');
const anatomyLayerDescription=document.querySelector('#anatomy-layer-description');
const anatomyFeatureIcon=document.querySelector('#anatomy-feature-icon');
const anatomyOrder=document.querySelector('#anatomy-order');
let anatomyCurrentId='triplo-burger';
let anatomySelectedIndex=0;

document.querySelectorAll('img').forEach(image=>bindImageState(image));
if(anatomyReferenceImage){
  anatomyReferenceImage.addEventListener('load',()=>anatomyReference.classList.add('is-visible'));
  anatomyReferenceImage.addEventListener('error',()=>anatomyReference.classList.remove('is-visible'));
}

function anatomyRenderTabs(){
  if(!anatomyTabs)return;
  const fragment=document.createDocumentFragment();
  anatomyProductOrder.forEach((id,index)=>{
    const tab=createElement('button',`anatomy-tab${id===anatomyCurrentId?' is-active':''}`);
    tab.type='button';
    tab.setAttribute('role','tab');
    tab.setAttribute('aria-selected',String(id===anatomyCurrentId));
    tab.dataset.anatomyId=id;
    tab.append(createElement('span',null,String(index+1).padStart(2,'0')),document.createTextNode(anatomyNames[id]));
    fragment.append(tab);
  });
  anatomyTabs.replaceChildren(fragment);
  anatomyTotal.textContent=String(anatomyProductOrder.length).padStart(2,'0');
}

function anatomySetSelection(index, shouldScroll=false){
  const data=anatomyData[anatomyCurrentId];
  if(!data)return;
  const nextIndex=Math.max(0,Math.min(index,data.layers.length-1));
  if(nextIndex===anatomySelectedIndex&&!shouldScroll)return;
  anatomySelectedIndex=nextIndex;
  const buttons=[...anatomyBurger.querySelectorAll('.anatomy-layer')];
  buttons.forEach((el,i)=>{el.classList.toggle('is-selected',i===anatomySelectedIndex);el.setAttribute('aria-selected',String(i===anatomySelectedIndex));el.tabIndex=i===anatomySelectedIndex?0:-1});
  anatomyLegend?.querySelectorAll('.anatomy-legend-item').forEach((el,i)=>el.classList.toggle('is-active',i===anatomySelectedIndex));
  const layer=data.layers[anatomySelectedIndex];
  anatomyLayerTitle.textContent=layer[1];
  anatomyLayerDescription.textContent=layer[2];
  anatomyFeatureIcon.textContent=String(anatomySelectedIndex+1).padStart(2,'0');
  anatomyBurger.style.setProperty('--active-depth',String(anatomySelectedIndex));
  if(shouldScroll && window.innerWidth<=720){document.querySelector('#anatomy-info')?.scrollIntoView({behavior:'smooth',block:'nearest'});}
}

function anatomyRenderBurger(id){
  const data=anatomyData[id];
  if(!data||!anatomyBurger)return;
  anatomyCurrentId=id;
  anatomySelectedIndex=-1;
  anatomyBurger.classList.remove('is-switching');
  requestAnimationFrame(()=>anatomyBurger.classList.add('is-switching'));
  anatomyReference.classList.remove('is-visible');
  anatomyReferenceImage.classList.remove('is-loaded','is-missing');
  anatomyReferenceImage.src=data.image;
  anatomyReferenceImage.alt=`${anatomyNames[id]} — foto do burger`;
  if(anatomyPhotoName) anatomyPhotoName.textContent=anatomyNames[id];
  if(anatomyPhotoNumber) anatomyPhotoNumber.textContent=`${String(anatomyProductOrder.indexOf(id)+1).padStart(2,'0')} / ${String(anatomyProductOrder.length).padStart(2,'0')}`;
  anatomyTitle.textContent=anatomyNames[id];
  anatomyIntro.textContent=data.intro;
  anatomyCategory.textContent=data.kicker;
  anatomyCurrent.textContent=String(anatomyProductOrder.indexOf(id)+1).padStart(2,'0');
  const stats=data.stats.map(([label,value])=>[label,value]);
  if(stats[0])stats[0]=['Camadas',String(data.layers.length).padStart(2,'0')];
  anatomyStats.replaceChildren(...stats.map(([label,value])=>{const stat=createElement('div');stat.append(createElement('strong',null,value),createElement('span',null,label));return stat}));

  const layerFragment=document.createDocumentFragment();
  const legendFragment=document.createDocumentFragment();
  data.layers.forEach((layer,index)=>{
    const layerButton=createElement('button',`anatomy-layer anatomy-layer--${layer[0]}${index===0?' is-selected':''}`);
    layerButton.type='button';
    layerButton.setAttribute('role','option');
    layerButton.setAttribute('aria-selected',String(index===0));
    layerButton.tabIndex=index===0?0:-1;
    layerButton.dataset.layerIndex=String(index);
    layerButton.setAttribute('aria-label',layer[1]);
    layerButton.append(createElement('span','anatomy-layer-marker',String(index+1).padStart(2,'0')),createElement('span','anatomy-layer-surface'),createElement('span','anatomy-layer-label',layer[1]));
    layerFragment.append(layerButton);

    const legendItem=createElement('button',`anatomy-legend-item${index===0?' is-active':''}`);
    legendItem.type='button';
    legendItem.dataset.layerIndex=String(index);
    legendItem.append(createElement('span',null,String(index+1).padStart(2,'0')),document.createTextNode(layer[1]));
    legendFragment.append(legendItem);
  });
  anatomyBurger.replaceChildren(layerFragment);
  anatomyLegend.replaceChildren(legendFragment);
  anatomySetSelection(0);
  anatomyRenderTabs();
}

function anatomyChoose(id){
  if(!anatomyData[id])return;
  anatomyRenderBurger(id);
}

if(anatomyBurger){
  anatomyRenderBurger(anatomyCurrentId);
  anatomyTabs.addEventListener('click',event=>{const tab=event.target.closest('.anatomy-tab');if(tab)anatomyChoose(tab.dataset.anatomyId)});
  anatomyBurger.addEventListener('pointerover',event=>{const layer=event.target.closest('.anatomy-layer');if(layer&&window.matchMedia('(hover:hover)').matches)anatomySetSelection(Number(layer.dataset.layerIndex))});
  anatomyBurger.addEventListener('focusin',event=>{const layer=event.target.closest('.anatomy-layer');if(layer)anatomySetSelection(Number(layer.dataset.layerIndex))});
  anatomyBurger.addEventListener('click',event=>{const layer=event.target.closest('.anatomy-layer');if(layer)anatomySetSelection(Number(layer.dataset.layerIndex),true)});
  anatomyBurger.addEventListener('keydown',event=>{
    if(!['ArrowDown','ArrowUp','Home','End'].includes(event.key))return;
    event.preventDefault();
    const max=anatomyData[anatomyCurrentId].layers.length-1;
    let next=anatomySelectedIndex;
    if(event.key==='ArrowDown')next=Math.min(max,next+1);
    if(event.key==='ArrowUp')next=Math.max(0,next-1);
    if(event.key==='Home')next=0;
    if(event.key==='End')next=max;
    anatomySetSelection(next);
    const button=anatomyBurger.querySelector(`.anatomy-layer[data-layer-index="${next}"]`);button?.focus();
  });
  anatomyLegend.addEventListener('click',event=>{const item=event.target.closest('.anatomy-legend-item');if(!item)return;anatomySetSelection(Number(item.dataset.layerIndex),true)});
  anatomyOrder.addEventListener('click',()=>addToCart(anatomyCurrentId));
}

// Anatomy photo / exploded view toggle
if(anatomyViewToggle){
  anatomyViewToggle.addEventListener('click',()=>{
    const photoVisible=document.querySelector('.anatomy-stage')?.classList.toggle('show-real-photo');
    anatomyViewToggle.setAttribute('aria-pressed',String(Boolean(photoVisible)));
    const label=anatomyViewToggle.querySelector('.anatomy-view-toggle-label');
    if(label) label.textContent=photoVisible?'VER ANATOMIA':'VER FOTO';
  });
}
// Reviews
const reviewForm=document.querySelector('#review-form'),ratingInput=document.querySelector('#review-rating'),reviewFeedback=document.querySelector('#review-feedback'),stars=[...document.querySelectorAll('.star-option')];
function setReviewRating(rating){ratingInput.value=String(rating);stars.forEach(star=>{const value=Number(star.dataset.rating);star.classList.toggle('is-selected',value<=rating);star.setAttribute('aria-checked',String(value===rating))})}
stars.forEach(star=>{star.addEventListener('click',()=>setReviewRating(Number(star.dataset.rating)));star.addEventListener('keydown',event=>{if(['ArrowRight','ArrowUp','ArrowLeft','ArrowDown'].includes(event.key)){event.preventDefault();const delta=(event.key==='ArrowRight'||event.key==='ArrowUp')?1:-1;const next=Math.min(5,Math.max(1,Number(ratingInput.value||0)+delta));setReviewRating(next);stars[next-1].focus()}})});
reviewForm.addEventListener('submit',event=>{event.preventDefault();if(!ratingInput.value){reviewFeedback.hidden=false;reviewFeedback.textContent='Escolha uma nota de 1 a 5 estrelas antes de enviar.';return}reviewFeedback.hidden=false;reviewFeedback.textContent='Feedback simulado! Esta é uma demonstração acadêmica: sua opinião não foi enviada nem armazenada.';reviewForm.reset();ratingInput.value='';stars.forEach(s=>{s.classList.remove('is-selected');s.setAttribute('aria-checked','false')})});

// Theme
const themeToggle=document.querySelector('#theme-toggle');
const savedTheme=localStorage.getItem('brasa-theme');
if(savedTheme==='light')document.body.classList.add('light-theme');
function updateThemeButton(){const light=document.body.classList.contains('light-theme');themeToggle.setAttribute('aria-pressed',String(light));themeToggle.setAttribute('aria-label',light?'Ativar modo escuro':'Ativar modo claro');themeToggle.querySelector('span').textContent=light?'☾':'☼';const themeMeta=document.querySelector('meta[name=theme-color]');if(themeMeta)themeMeta.setAttribute('content',light?'#f6f1e8':'#0d0d0d')}
updateThemeButton();themeToggle.addEventListener('click',()=>{document.body.classList.toggle('light-theme');localStorage.setItem('brasa-theme',document.body.classList.contains('light-theme')?'light':'dark');updateThemeButton()});

// Back to top
backTop.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));

// Auto-close mobile navigation when selecting outside.
document.addEventListener('click',event=>{if(window.innerWidth<=720&&!event.target.closest('.nav')&&navLinks.classList.contains('is-open')){menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Abrir menu');navLinks.classList.remove('is-open')}});
