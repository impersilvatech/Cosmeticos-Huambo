'use strict';
/* ═══════════════════════════════════════════════════════════════
   BELLE COSMÉTICOS — belle.js  v2.0
   Full CMS Data Layer — everything editable from Admin
════════════════════════════════════════════════════════════════ */

// ── DEFAULT SITE DATA (all overridable from Admin) ─────────────
const DATA_DEFAULTS = {
  store: {
    name:'Belle Cosméticos', tagline:'A sua beleza, elevada.',
    currency:'Kz', phone:'+244 923 000 000', whatsapp:'244923000000',
    email:'geral@belle.ao', address:'Rua Amílcar Cabral, Luanda, Angola',
    deliveryFee:1000, freeAbove:10000,
    instagram:'bellecosmeticos.ao', facebook:'', tiktok:'',
  },
  home: {
    announce:{ active:true, text:'🎁 Entrega grátis em compras acima de 10.000 Kz · Luanda em 24-48h' },
    hero:{
      badge:'🌟 Cosméticos Premium · Luanda, Angola',
      title:'A sua beleza,\nem destaque.',
      sub:'Produtos de beleza premium cuidadosamente seleccionados para realçar a beleza natural da mulher angolana.',
      btn1:'Explorar Catálogo →', btn2:'A nossa história',
    },
    stats:[
      { value:'2.5K+', label:'Clientes satisfeitas' },
      { value:'150+',  label:'Produtos disponíveis' },
      { value:'4.9★',  label:'Avaliação média' },
    ],
    catsSec:{ badge:'Categorias', title:'O que procura\nem hoje?', sub:'Cada categoria cuidadosamente seleccionada para si.' },
    featSec:{ badge:'Porquê Belle', title:'A diferença que\nse sente.' },
    depsSec:{ badge:'Depoimentos reais', title:'O que dizem as\nnossas clientes' },
    ctaSec:{ emoji:'✨', title:'Beleza que\nmerece.', sub:'Descubra o catálogo completo Belle e encontre os produtos perfeitos para a sua rotina.', btn:'Ver Catálogo →' },
  },
  features:[
    { emoji:'🌿', title:'100% Autêntico', desc:'Todos os produtos são originais, com certificado de autenticidade garantido.' },
    { emoji:'🚚', title:'Entrega Rápida', desc:'Entrega em Luanda em 24-48h. Envios para todo o território nacional.' },
    { emoji:'💳', title:'Pagamento Fácil', desc:'Transferência, Multicaixa Express ou pagamento na entrega. Sem complicações.' },
    { emoji:'🔄', title:'Devolução 30 dias', desc:'Não ficou satisfeita? Devolvemos o dinheiro, sem perguntas.' },
  ],
  testimonials:[
    { stars:5, text:'O Sérum Vitamina C transformou a minha pele em menos de 3 semanas! As manchas estão visivelmente mais claras.', name:'Joana M.', loc:'Luanda · Skincare', av:'👩🏿' },
    { stars:5, text:'O Belle Noir é simplesmente incrível. Recebo elogios sempre que o uso. A duração é fantástica, dura o dia todo!', name:'Sílvia P.', loc:'Benguela · Perfumes', av:'👩🏽' },
    { stars:5, text:'Entrega rápida, produtos bem embalados e qualidade que superou as expectativas. Já voltei a encomendar!', name:'Carla A.', loc:'Luanda · Maquilhagem', av:'👩🏾' },
    { stars:5, text:'A paleta Sahara é uma obra de arte. As cores são super pigmentadas e ficam lindas no meu tom de pele.', name:'Miriam K.', loc:'Luanda · Maquilhagem', av:'👩🏿‍🦱' },
  ],
  sobre:{
    hero:{ title:'Beleza que\ninspira.', sub:'Desde 2019 que levamos os melhores cosméticos até à mulher angolana, com autenticidade, cuidado e paixão pela beleza.' },
    mission:'"Cada mulher merece sentir-se bela. A nossa missão é garantir que tem acesso aos melhores produtos para cuidar de si, com qualidade e a um preço justo."',
    story:'A Belle nasceu de um sonho simples: tornar cosméticos de qualidade acessíveis a todas as mulheres angolanas. A nossa fundadora, apaixonada por beleza desde criança, viu uma oportunidade de trazer marcas internacionais para o mercado angolano com autenticidade garantida. O que começou como um pequeno negócio em Luanda cresceu para se tornar uma das referências no sector de cosméticos em Angola.',
    stats:[{ value:'2019', label:'Fundação' },{ value:'2.5K+', label:'Clientes' },{ value:'150+', label:'Marcas' }],
    faq:[
      { q:'Os produtos são originais?', a:'Sim, absolutamente. Todos os produtos Belle são 100% originais, importados directamente dos fabricantes ou distribuidores autorizados.' },
      { q:'Qual é o prazo de entrega?', a:'Em Luanda, entregamos em 24-48 horas úteis após confirmação. Para o resto do país, o prazo é de 3-5 dias úteis via transportadora.' },
      { q:'Como posso pagar?', a:'Aceitamos transferência bancária (BFA), referência Multicaixa Express e pagamento em dinheiro na entrega (apenas Luanda).' },
      { q:'Posso devolver um produto?', a:'Sim! Temos política de devolução de 30 dias. Se o produto não corresponder ao descrito, devolvemos o seu dinheiro na totalidade.' },
      { q:'Entregam fora de Luanda?', a:'Sim, entregamos em todo o território nacional. Compras acima de 10.000 Kz têm entrega gratuita em Luanda.' },
    ],
  },
  categories:[
    { id:1, name:'Cuidado da Pele', slug:'pele',        emoji:'✨', color:'#e8609a', active:true },
    { id:2, name:'Maquilhagem',     slug:'maquilhagem', emoji:'💄', color:'#9b46d4', active:true },
    { id:3, name:'Cabelo',          slug:'cabelo',      emoji:'💫', color:'#06d6a0', active:true },
    { id:4, name:'Perfumes',        slug:'perfumes',    emoji:'🌸', color:'#ffd166', active:true },
    { id:5, name:'Corpo',           slug:'corpo',       emoji:'🧴', color:'#ff9f43', active:true },
    { id:6, name:'Kits & Presentes',slug:'kits',        emoji:'🎁', color:'#ff8fab', active:true },
  ],
  products:[
    { id:1,  cid:1, name:'Sérum Vitamina C Glow',     emoji:'💎', price:4500, orig:6000, stock:15, featured:true,  active:true, tag:'promo',
      desc:'Sérum concentrado com 20% Vitamina C pura. Ilumina, uniformiza o tom e reduz manchas em 4 semanas. Fórmula leve, absorção rápida, sem oleosidade.',
      hl:['Vitamina C 20% estabilizada','Reduz manchas em 4 semanas','Acção antioxidante premium','Para todos os tipos de pele'], image:'' },
    { id:2,  cid:1, name:'Creme Hidratante 48h',      emoji:'🌿', price:3800, orig:0,    stock:22, featured:true,  active:true, tag:'bestseller',
      desc:'Hidratação profunda com ácido hialurónico triplo e manteiga de karité africano. Textura aveludada, absorção imediata.',
      hl:['Ácido hialurónico triplo','Karité africano puro','Hidratação garantida 48h','Testado dermatologicamente'], image:'' },
    { id:3,  cid:1, name:'Tónico Micelar Rosé',       emoji:'🌹', price:2900, orig:3500, stock:18, featured:false, active:true, tag:'promo',
      desc:'Água micelar enriquecida com extrato de rosas. Remove maquilhagem, impurezas e equilibra o pH da pele.',
      hl:['Água de rosas natural','Remove toda a maquilhagem','Equilíbrio de pH','Sem álcool'], image:'' },
    { id:4,  cid:1, name:'Protetor Solar SPF 50+',    emoji:'☀️', price:3200, orig:0,    stock:30, featured:false, active:true, tag:'',
      desc:'Proteção solar de amplo espectro, textura ultra-leve e não oleosa. Sem resíduo branco. Adaptada ao clima tropical.',
      hl:['FPS 50+ UV-A e UV-B','Textura ultra-leve','Não deixa resíduo branco','Resistente ao suor'], image:'' },
    { id:5,  cid:2, name:'Base Fluida HD 40 Tons',    emoji:'🎨', price:5500, orig:7000, stock:12, featured:true,  active:true, tag:'promo',
      desc:'Base de alta cobertura com acabamento natural matte. 40 tons formulados para peles africanas. Duração até 16 horas.',
      hl:['40 tons inclusivos','Cobertura total e homogénea','Acabamento natural-matte','Resistente até 16h'], image:'' },
    { id:6,  cid:2, name:'Batom Mate Velvet',         emoji:'💋', price:2400, orig:0,    stock:25, featured:false, active:true, tag:'novo',
      desc:'Batom de longa duração com fórmula mate aveludada enriquecida com vitamina E. 16 cores disponíveis.',
      hl:['Fórmula mate-hidratante','12 horas de duração','Vitamina E reparadora','16 cores'], image:'' },
    { id:7,  cid:2, name:'Paleta Sahara 16 Tons',     emoji:'🏜️', price:6800, orig:8500, stock:5,  featured:true,  active:true, tag:'destaque',
      desc:'16 tons quentes inspirados nos pôr do sol africanos. Acabamentos matte e shimmer com pigmentação ultra-intensa.',
      hl:['16 sombras premium','Matte + Shimmer','Ultra-pigmentação','Inspiração africana'], image:'' },
    { id:8,  cid:2, name:'Máscara Volume+ Waterproof',emoji:'👁️', price:3100, orig:0,    stock:18, featured:false, active:true, tag:'',
      desc:'Máscara que multiplica o volume até 3x. Fórmula waterproof de longa duração com pente de precisão.',
      hl:['Waterproof 24h','Volume x3','Pente de precisão','Não transfere'], image:'' },
    { id:9,  cid:3, name:'Óleo de Argan Premium',     emoji:'✨', price:4200, orig:5500, stock:20, featured:true,  active:true, tag:'bestseller',
      desc:'Óleo 100% puro de argan marroquino prensado a frio. Nutre em profundidade, elimina frizz, devolve brilho.',
      hl:['100% puro prensado a frio','Elimina frizz','Brilho intenso','Uso em cabelo seco ou molhado'], image:'' },
    { id:10, cid:3, name:'Máscara Reparadora Intensa', emoji:'💆', price:3600, orig:0,    stock:14, featured:false, active:true, tag:'',
      desc:'Tratamento intensivo semanal para cabelos danificados. Com queratina vegetal e proteínas da seda.',
      hl:['Queratina vegetal','Proteínas da seda','Repara danos severos','Resultado em 1 uso'], image:'' },
    { id:11, cid:4, name:'Belle Noir EDP 50ml',        emoji:'🖤', price:8500, orig:10000,stock:7,  featured:true,  active:true, tag:'destaque',
      desc:'A fragrância signature de Belle. Baunilha negra, âmbar e sândalo num blend intenso e sofisticado.',
      hl:['Notas: Baunilha · Âmbar · Sândalo','Concentração EDP premium','Duração 8-10h','Frasco exclusivo Belle'], image:'' },
    { id:12, cid:4, name:'Rose Sauvage EDT 30ml',      emoji:'🌺', price:6200, orig:0,    stock:11, featured:false, active:true, tag:'novo',
      desc:'Fragrância floral selvagem com notas de rosa, neroli e almíscar branco. Elegante e feminina.',
      hl:['Notas: Rosa · Neroli · Almíscar','Concentração EDT','Duração 6-8h','Para uso diário'], image:'' },
    { id:13, cid:5, name:'Esfoliante Café & Cana',    emoji:'☕', price:2800, orig:0,    stock:35, featured:false, active:true, tag:'',
      desc:'Esfoliante corporal natural com café arábico e açúcar de cana orgânico. Remove células mortas, activa a circulação.',
      hl:['Café arábico moído','Açúcar de cana orgânico','Activa a circulação','Pele de seda em 1 uso'], image:'' },
    { id:14, cid:5, name:'Manteiga de Karité 200g',   emoji:'🌰', price:3400, orig:4200, stock:28, featured:false, active:true, tag:'promo',
      desc:'Manteiga 100% natural de karité africano, produção artesanal. Para peles secas e muito secas.',
      hl:['100% karité puro africano','Produção artesanal','Para peles muito secas','Sem parabenos'], image:'' },
    { id:15, cid:6, name:'Kit Skincare Iniciante',     emoji:'🎁', price:9500, orig:12500,stock:8,  featured:true,  active:true, tag:'promo',
      desc:'Kit completo para começar a rotina de skincare Belle. Sérum vitamina C, tónico, creme e protetor solar.',
      hl:['4 produtos essenciais Belle','Embalagem de oferta','Poupa 3.000 Kz','Ideal para presentes'], image:'' },
    { id:16, cid:6, name:'Kit Luxury Belle Collection', emoji:'👑', price:15000,orig:0,   stock:5,  featured:false, active:true, tag:'destaque',
      desc:'A experiência Belle completa: Perfume Belle Noir EDP + Base Fluida HD + Paleta Sahara em caixa premium.',
      hl:['3 produtos premium','Caixa exclusiva Belle Luxury','Laço e cartão personalizável','Entrega especial'], image:'' },
  ],
};

// ── CMS DATA MANAGER ───────────────────────────────────────────
const CMS = {
  K: 'bl_cms',
  _data: null,

  load() {
    if (this._data) return this._data;
    try {
      const stored = localStorage.getItem(this.K);
      const parsed = stored ? JSON.parse(stored) : {};
      // Deep merge defaults with stored
      this._data = this._merge(DATA_DEFAULTS, parsed);
    } catch { this._data = { ...DATA_DEFAULTS }; }
    return this._data;
  },

  _merge(def, stored) {
    const result = { ...def };
    for (const k in stored) {
      if (Array.isArray(stored[k])) result[k] = stored[k];
      else if (typeof stored[k] === 'object' && stored[k] !== null && !Array.isArray(def[k])) result[k] = this._merge(def[k] || {}, stored[k]);
      else result[k] = stored[k];
    }
    return result;
  },

  save() {
    localStorage.setItem(this.K, JSON.stringify(this._data));
    window.dispatchEvent(new CustomEvent('bl:cms'));
  },

  get(path) {
    const d = this.load();
    return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), d);
  },

  set(path, value) {
    const d = this.load();
    const parts = path.split('.');
    let o = d;
    for (let i = 0; i < parts.length - 1; i++) {
      if (!o[parts[i]]) o[parts[i]] = {};
      o = o[parts[i]];
    }
    o[parts[parts.length - 1]] = value;
    this.save();
  },

  // Convenience
  store()       { return this.get('store'); },
  home()        { return this.get('home'); },
  products()    { return this.get('products') || []; },
  categories()  { return (this.get('categories') || []).filter(c => c.active !== false); },
  allCats()     { return this.get('categories') || []; },
  features()    { return this.get('features') || []; },
  testimonials(){ return this.get('testimonials') || []; },
  sobre()       { return this.get('sobre'); },

  // Products
  getProduct(id)  { return this.products().find(p => p.id === +id); },
  featured()      { return this.products().filter(p => p.featured && p.active !== false && p.stock > 0); },
  byCategory(cid) { return this.products().filter(p => p.cid === +cid && p.active !== false); },
  search(q)       { q = q.toLowerCase(); return this.products().filter(p => p.name.toLowerCase().includes(q) || (p.desc||'').toLowerCase().includes(q)); },

  saveProduct(p) {
    const prods = this.get('products') || [];
    if (p.id) {
      const i = prods.findIndex(x => x.id === p.id);
      if (i > -1) prods[i] = p; else prods.push(p);
    } else {
      p.id = Date.now();
      prods.push(p);
    }
    this.set('products', prods);
    return p;
  },

  deleteProduct(id) {
    this.set('products', (this.get('products') || []).filter(p => p.id !== +id));
  },

  saveCat(c) {
    const cats = this.get('categories') || [];
    if (c.id) {
      const i = cats.findIndex(x => x.id === c.id);
      if (i > -1) cats[i] = c; else cats.push(c);
    } else {
      c.id = Date.now();
      cats.push(c);
    }
    this.set('categories', cats);
    return c;
  },

  deleteCat(id) {
    this.set('categories', (this.get('categories') || []).filter(c => c.id !== +id));
  },

  saveTestimonial(t) {
    const list = this.get('testimonials') || [];
    if (t._idx !== undefined) { list[t._idx] = t; delete t._idx; }
    else list.push(t);
    this.set('testimonials', list);
  },

  saveFeature(f) {
    const list = this.get('features') || [];
    if (f._idx !== undefined) { list[f._idx] = f; delete f._idx; }
    else list.push(f);
    this.set('features', list);
  },

  saveFaq(faqs) { this.set('sobre.faq', faqs); },
};

// ── STORE SHORTCUT — works as both STORE.freeAbove and STORE() ─
const STORE = new Proxy(function(){}, {
  get: (_,k) => { const s = CMS.store(); return k in s ? s[k] : undefined; },
  apply: ()  => CMS.store(),
});

// ── UTILITIES ──────────────────────────────────────────────────
const kz = (n) => { if (typeof n !== 'number') return '—'; if (n === 0) return '0 Kz'; return n.toLocaleString('pt-AO') + ' Kz'; };
const fmtDate = (d) => new Date(d).toLocaleDateString('pt-AO',{day:'2-digit',month:'short',year:'numeric'});
const slugify = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
const debounce = (fn, ms = 300) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
const qs  = (s, ctx = document) => ctx.querySelector(s);
const qsa = (s, ctx = document) => [...ctx.querySelectorAll(s)];
const genId = () => Date.now();

// ── THEME ─────────────────────────────────────────────────────
const Theme = {
  init() { document.documentElement.setAttribute('data-theme', localStorage.getItem('bl_theme') || 'dark'); this.sync(); },
  toggle() { const n = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', n); localStorage.setItem('bl_theme', n); this.sync(); },
  sync() { const d = document.documentElement.getAttribute('data-theme') === 'dark'; qsa('[data-theme-ico]').forEach(el => el.className = d ? 'fa-solid fa-moon' : 'fa-solid fa-sun'); }
};

// ── TOAST ─────────────────────────────────────────────────────
let _tt;
const toast = (msg, type = 'ok') => {
  clearTimeout(_tt);
  let el = document.getElementById('bl-toast');
  if (!el) { el = Object.assign(document.createElement('div'), { id: 'bl-toast' }); document.body.appendChild(el); }
  el.textContent = msg; el.className = 'show ' + type;
  _tt = setTimeout(() => el.classList.remove('show'), 3000);
};

// ── CART ──────────────────────────────────────────────────────
const Cart = (() => {
  const K = 'bl_cart';
  const emit = () => window.dispatchEvent(new CustomEvent('bl:cart'));
  // Normalise item — handle both old format (preco/quantidade) and new (price/qty)
  const _norm = (i) => ({
    key:    i.key   || `${i.produto_id||i.id}_${Date.now()}`,
    id:     i.id    || i.produto_id || 0,
    name:   i.name  || i.nome  || '',
    price:  parseFloat(i.price || i.preco || 0),
    qty:    parseInt(i.qty    || i.quantidade || 1, 10),
    image:  i.image || i.imagem || '',
    emoji:  i.emoji || '✨',
    note:   i.note  || i.nota  || '',
  });
  const _get  = () => { try { return (JSON.parse(localStorage.getItem(K) || '[]')).map(_norm); } catch { return []; } };
  const _save = (items) => { localStorage.setItem(K, JSON.stringify(items)); emit(); };
  return {
    get:   _get,
    count: () => _get().reduce((s,i) => s + i.qty, 0),
    total: () => _get().reduce((s,i) => s + (i.price * i.qty), 0),
    clear: () => { localStorage.removeItem(K); emit(); },
    add(p, qty = 1, note = '') {
      const items = _get();
      items.push(_norm({ key:`${p.id}_${Date.now()}`, id:p.id, name:p.name, price:p.price, qty, image:p.image||'', emoji:p.emoji||'✨', note }));
      _save(items);
    },
    remove(key)      { _save(_get().filter(i => i.key !== key)); },
    update(key, qty) { const items = _get(); const it = items.find(i => i.key === key); if(it) it.qty = Math.max(1, Math.min(99, qty)); _save(items); },
  };
})();

// ── WISHLIST ──────────────────────────────────────────────────
const Wishlist = {
  K:'bl_wl',
  get()    { try { return JSON.parse(localStorage.getItem(this.K)||'[]'); } catch { return []; } },
  has(id)  { return this.get().includes(+id); },
  toggle(id){ const l=this.get(),i=l.indexOf(+id); if(i>-1)l.splice(i,1); else l.push(+id); localStorage.setItem(this.K,JSON.stringify(l)); return i===-1; },
};

// ── SESSION ───────────────────────────────────────────────────
const Session = {
  K:'bl_session',
  get()   { try { return JSON.parse(localStorage.getItem(this.K)||'null'); } catch { return null; } },
  set(d)  { localStorage.setItem(this.K, JSON.stringify(d)); },
  clear() { localStorage.removeItem(this.K); },
  is()    { return !!this.get(); },
};

// ── AUTH ──────────────────────────────────────────────────────
const Auth = {
  K:'bl_admin_token',
  set(t) { localStorage.setItem(this.K, t); },
  get()  { return localStorage.getItem(this.K) || ''; },
  clear(){ localStorage.removeItem(this.K); },
  is()   { return !!this.get(); },
};

// ── ORDERS ────────────────────────────────────────────────────
const Orders = {
  K:'bl_orders',
  _ref: () => `BL-${new Date().toISOString().slice(0,10).replace(/-/g,'')}-${String(Math.floor(Math.random()*9000)+1000)}`,
  get()  { try { return JSON.parse(localStorage.getItem(Orders.K)||'[]'); } catch { return []; } },
  save(list) { localStorage.setItem(Orders.K, JSON.stringify(list)); },
  create(data) {
    const ref = Orders._ref();
    const order = { ...data, reference:ref, status:'pending', payment_status:'unpaid', created_at:new Date().toISOString() };
    const list = Orders.get(); list.unshift(order); Orders.save(list);
    return order;
  },
  track(ref) { return Orders.get().find(o => o.reference.toUpperCase() === ref.toUpperCase()) || null; },
  updateStatus(ref, status, payStatus) {
    const list = Orders.get(); const o = list.find(x => x.reference === ref);
    if (o) { o.status = status; if(payStatus) o.payment_status = payStatus; o.updated_at = new Date().toISOString(); }
    Orders.save(list); return o;
  },
  stats() {
    const list = Orders.get();
    const today = new Date().toISOString().slice(0,10);
    return {
      total: list.length, pending: list.filter(o=>o.status==='pending').length,
      today: list.filter(o=>o.created_at?.startsWith(today)).length,
      revenue: list.filter(o=>o.status!=='cancelled').reduce((s,o)=>s+(o.total||0),0),
      clients: new Set(list.map(o=>o.customer?.phone).filter(Boolean)).size,
    };
  },
};

// ── SETTINGS (API config) ─────────────────────────────────────
const Settings = {
  K:'bl_settings',
  get()  { try { return JSON.parse(localStorage.getItem(this.K)||'{}'); } catch { return {}; } },
  set(d) { localStorage.setItem(this.K, JSON.stringify({...this.get(),...d})); },
  val(k) { return this.get()[k] || ''; },
  verifyPin(pin) { const p = this.val('pin') || '1234'; return pin === p; },
  setPin(p)      { this.set({ pin: p }); },
};

// ── ORDER STATUS CONFIG ───────────────────────────────────────
const ORDER_STATUS = {
  pending:   { label:'Pendente',   color:'#ffd166', bg:'rgba(255,209,102,.1)', icon:'⏳' },
  confirmed: { label:'Confirmado', color:'#06d6a0', bg:'rgba(6,214,160,.1)',   icon:'✅' },
  shipped:   { label:'Em entrega', color:'#7ab0c9', bg:'rgba(122,176,201,.1)', icon:'🚚' },
  delivered: { label:'Entregue',   color:'#06d6a0', bg:'rgba(6,214,160,.1)',   icon:'📦' },
  cancelled: { label:'Cancelado',  color:'#ff4757', bg:'rgba(255,71,87,.1)',   icon:'❌' },
};
const PAY_METHODS = {
  transferencia: { label:'Transferência Bancária',  icon:'🏦' },
  referencia:    { label:'Referência Multicaixa',   icon:'💳' },
  na_entrega:    { label:'Pagamento na Entrega',    icon:'💵' },
};

// ── CART BADGE SYNC ───────────────────────────────────────────
function _syncBadge() {
  const n = Cart.count();
  qsa('.bl-cart-badge').forEach(el => { el.textContent = n; el.style.display = n > 0 ? 'flex' : 'none'; });
}
window.addEventListener('bl:cart', _syncBadge);
document.addEventListener('DOMContentLoaded', _syncBadge);

// ── PRODUCT CARD BUILDER ──────────────────────────────────────
function buildProdCard(p, delay = 0) {
  const cats = CMS.categories();
  const cat = cats.find(c => c.id === p.cid);
  const disc = p.orig > 0 ? Math.round((1 - p.price / p.orig) * 100) : 0;
  const tagMap = { promo:`−${disc}%`, novo:'Novo', destaque:'Destaque', bestseller:'Best Seller' };
  const wishOn = Wishlist.has(p.id);
  return `
  <div class="${p.stock === 0 ? 'pcard pcard-esgotado' : 'pcard'}" onclick="openSheet(${p.id})" style="animation-delay:${delay}s">
    <div class="pcard-img">
      ${p.image ? `<img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.style.display='none'">` : ''}
      <span ${p.image ? 'style="display:none"' : ''}>${p.emoji}</span>
      ${p.tag ? `<span class="pcard-tag ${p.tag}">${tagMap[p.tag]||p.tag}</span>` : ''}
      ${p.stock === 0 ? '<div class="esgotado-badge">Esgotado</div>' : ''}
      <button class="btn-wish ${wishOn?'on':''}" onclick="event.stopPropagation();toggleWish(${p.id},this)">
        <i class="fa-${wishOn?'solid':'regular'} fa-heart"></i>
      </button>
    </div>
    <div class="pcard-body">
      <div class="pcard-cat">${cat?.name||''}</div>
      <div class="pcard-name">${p.name}</div>
      <div class="pcard-price">
        <span class="pcard-val">${kz(p.price)}</span>
        ${p.orig > 0 ? `<span class="pcard-orig">${kz(p.orig)}</span>` : ''}
      </div>
    </div>
    ${p.stock > 0 ? `<button class="btn-add-quick" onclick="event.stopPropagation();quickAdd(${p.id})" title="Adicionar">+</button>` : ''}
  </div>`;
}

// ── PRODUCT SHEET ─────────────────────────────────────────────
let _sheetProd = null, _sheetQty = 1;

function openSheet(id) {
  const p = CMS.getProduct(id);
  if (!p) return;
  if (p.stock === 0) { toast('Produto esgotado — em breve de volta! 🙈', 'err'); return; }
  _sheetProd = p; _sheetQty = 1;
  const cat = CMS.categories().find(c => c.id === p.cid);
  const disc = p.orig > 0 ? Math.round((1 - p.price / p.orig) * 100) : 0;
  qs('#sh-img').innerHTML   = p.image ? `<img src="${p.image}" alt="${p.name}" onerror="this.style.display='none'"><span style="display:none">${p.emoji}</span>` : p.emoji;
  qs('#sh-cat').textContent  = cat?.name || '';
  qs('#sh-name').textContent = p.name;
  qs('#sh-price').textContent = kz(p.price);
  const orig = qs('#sh-orig'), discEl = qs('#sh-disc');
  if (p.orig > 0) { orig.textContent=kz(p.orig); orig.style.display=''; discEl.textContent=`−${disc}%`; discEl.style.display=''; }
  else { orig.style.display='none'; discEl.style.display='none'; }
  qs('#sh-desc').textContent = p.desc;
  qs('#sh-hls').innerHTML = (p.hl||[]).map(h => `<span class="hl-tag">✓ ${h}</span>`).join('');
  qs('#qty-v').textContent = 1;
  qs('#sh-btn').textContent = `Adicionar — ${kz(p.price)}`;
  if (qs('#sh-note')) qs('#sh-note').value = '';
  qs('#overlay').classList.add('on');
  qs('#sheet').classList.add('on');
  document.body.style.overflow = 'hidden';
}
function closeSheet() { qs('#overlay')?.classList.remove('on'); qs('#sheet')?.classList.remove('on'); document.body.style.overflow = ''; }
function adjQty(d) { _sheetQty = Math.max(1, Math.min(99, _sheetQty + d)); qs('#qty-v').textContent = _sheetQty; if(_sheetProd) qs('#sh-btn').textContent = `Adicionar — ${kz(_sheetProd.price * _sheetQty)}`; }
function addToCart() { if (!_sheetProd) return; Cart.add({ id:_sheetProd.id, name:_sheetProd.name, price:_sheetProd.price, image:_sheetProd.image||'', emoji:_sheetProd.emoji }, _sheetQty, qs('#sh-note')?.value?.trim()||''); closeSheet(); toast(`✓ ${_sheetProd.name} adicionado`, 'ok'); }
function quickAdd(id) { const p = CMS.getProduct(id); if (!p || p.stock === 0) return; Cart.add({ id:p.id, name:p.name, price:p.price, image:p.image||'', emoji:p.emoji }); toast(`✓ ${p.name}`, 'ok'); }
function toggleWish(id, btn) { const added = Wishlist.toggle(id); btn.innerHTML = added ? '<i class="fa-solid fa-heart"></i>' : '<i class="fa-regular fa-heart"></i>'; btn.classList.toggle('on', added); toast(added ? '❤️ Adicionado à wishlist' : 'Removido da wishlist', added ? 'info' : 'ok'); }
function goToDetail() { if (_sheetProd) { closeSheet(); window.location.href = `produto.html?id=${_sheetProd.id}`; } }

// ── FOOTER BUILDER ────────────────────────────────────────────
function buildFooter(el) {
  if (!el) return;
  const s = CMS.store();
  el.innerHTML = `
    <div class="footer-logo">${s.name}</div>
    <div class="footer-tag">${s.tagline}</div>
    <div class="footer-links">
      <span class="footer-link" onclick="location.href='catalogo.html'">Catálogo</span>
      <span class="footer-link" onclick="location.href='sobre.html'">Sobre Nós</span>
      <span class="footer-link" onclick="location.href='conta.html'">Minha Conta</span>
      <span class="footer-link" onclick="location.href='rastrear.html'">Rastrear Pedido</span>
    </div>
    <div class="footer-social">
      ${s.whatsapp?`<button class="soc-btn" onclick="window.open('https://wa.me/${s.whatsapp.replace(/\D/g,'')}','_blank')"><i class="fa-brands fa-whatsapp"></i></button>`:''}
      ${s.instagram?`<button class="soc-btn" onclick="window.open('https://instagram.com/${s.instagram.replace('@','')}','_blank')"><i class="fa-brands fa-instagram"></i></button>`:''}
      ${s.facebook?`<button class="soc-btn" onclick="window.open('${s.facebook}','_blank')"><i class="fa-brands fa-facebook"></i></button>`:''}
    </div>
    <div class="f-hr"></div>
    <div class="footer-copy">© ${new Date().getFullYear()} ${s.name} · ${s.address} · Todos os direitos reservados</div>`;
}
document.addEventListener('DOMContentLoaded', () => { buildFooter(document.getElementById('footer')); });
