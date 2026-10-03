
(()=>{const root=document;const btn=root.querySelector('.menu-btn');const panel=root.querySelector('.mobile-panel');if(btn&&panel){btn.addEventListener('click',()=>{const on=panel.classList.toggle('open');btn.setAttribute('aria-expanded',String(on));});}
const els=[...root.querySelectorAll('.reveal')];if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.08});els.forEach(e=>io.observe(e));}else els.forEach(e=>e.classList.add('in'));
root.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{const v=b.dataset.filter;root.querySelectorAll('[data-filter]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));root.querySelectorAll('.gallery-item').forEach(i=>i.hidden=!(v==='all'||i.dataset.cat===v));}));
root.querySelectorAll('form[data-lead]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(f);const required=[...f.querySelectorAll('[required]')];if(required.some(x=>!x.value.trim())){f.querySelector('.status').textContent='Uzupełnij wymagane pola.';return;}const subj=encodeURIComponent('Zapytanie ze strony GLOW: '+(fd.get('type')||'kontakt'));let body='';for(const [k,v] of fd.entries()) body+=k+': '+v+'\\n';f.querySelector('.status').textContent='Otwieram wiadomość e-mail. Formularz produkcyjny wymaga podłączenia endpointu przed publikacją.';location.href='mailto:Kontakt@glowgdynia.pl?subject='+subj+'&body='+encodeURIComponent(body);}));})();

;(()=>{
  const meter=document.createElement('div');meter.className='scroll-meter';meter.innerHTML='<span></span>';document.body.appendChild(meter);
  const bar=meter.firstElementChild;
  const update=()=>{const h=document.documentElement;const max=h.scrollHeight-h.clientHeight;bar.style.width=(max?Math.min(100,scrollY/max*100):0)+'%'};
  addEventListener('scroll',update,{passive:true});addEventListener('resize',update,{passive:true});update();

  document.querySelectorAll('.card').forEach(card=>{
    card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();card.style.setProperty('--mx',(e.clientX-r.left)+'px');card.style.setProperty('--my',(e.clientY-r.top)+'px')});
  });

  const items=[...document.querySelectorAll('.gallery-item')];
  if(items.length){
    const lb=document.createElement('div');lb.className='club-lightbox';lb.hidden=true;lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');
    lb.innerHTML='<header><strong>GLOW / MORSKA 497A</strong><button type="button" data-close aria-label="Zamknij">×</button></header><div class="stage"><img alt=""></div><footer><span data-cap></span><div class="nav"><button type="button" data-prev aria-label="Poprzednie">←</button><button type="button" data-next aria-label="Następne">→</button></div></footer>';
    document.body.appendChild(lb);const pic=lb.querySelector('img');const cap=lb.querySelector('[data-cap]');let idx=0;
    const open=i=>{idx=i;const it=items[idx];const im=it.querySelector('img');pic.src=im.currentSrc||im.src;pic.alt=im.alt||'';cap.textContent=(it.querySelector('.label')?.textContent||im.alt||'GLOW');lb.hidden=false;document.body.style.overflow='hidden';lb.querySelector('[data-close]').focus()};
    const close=()=>{lb.hidden=true;document.body.style.overflow=''};
    const step=n=>open((idx+n+items.length)%items.length);
    items.forEach((it,i)=>{it.tabIndex=0;it.addEventListener('click',()=>open(i));it.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open(i)}})});
    lb.querySelector('[data-close]').onclick=close;lb.querySelector('[data-prev]').onclick=()=>step(-1);lb.querySelector('[data-next]').onclick=()=>step(1);
    addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')step(-1);if(e.key==='ArrowRight')step(1)});
  }
})();
