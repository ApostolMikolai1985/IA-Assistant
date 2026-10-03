
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


;(()=>{
  if(!document.body.classList.contains('home-v4')) return;

  // Horizontal gallery controls.
  const rail=document.querySelector('[data-rail]');
  if(rail){
    document.querySelectorAll('[data-slide]').forEach(btn=>{
      btn.addEventListener('click',()=>{
        const dir=Number(btn.dataset.slide||1);
        rail.scrollBy({left:dir*Math.min(rail.clientWidth*.75,520),behavior:'smooth'});
      });
    });
  }

  // Light hero parallax on capable devices.
  const heroImg=document.querySelector('.v4-hero-bg img');
  if(heroImg && !matchMedia('(prefers-reduced-motion: reduce)').matches && matchMedia('(pointer:fine)').matches){
    let raf=0;
    addEventListener('mousemove',e=>{
      cancelAnimationFrame(raf);
      raf=requestAnimationFrame(()=>{
        const x=(e.clientX/innerWidth-.5)*8;
        const y=(e.clientY/innerHeight-.5)*5;
        heroImg.style.transform='scale(1.035) translate('+(-x)+'px,'+(-y)+'px)';
      });
    },{passive:true});
  }

  // Magnetic micro-interaction for primary actions.
  if(matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.querySelectorAll('.magnetic').forEach(el=>{
      el.addEventListener('mousemove',e=>{
        const r=el.getBoundingClientRect();
        const x=(e.clientX-r.left-r.width/2)*.08;
        const y=(e.clientY-r.top-r.height/2)*.08;
        el.style.transform='translate('+x+'px,'+y+'px)';
      });
      el.addEventListener('mouseleave',()=>el.style.transform='');
    });
  }

  // Close mobile menu after navigation.
  const panel=document.querySelector('.mobile-panel');
  const menu=document.querySelector('.menu-btn');
  document.querySelectorAll('.mobile-panel a').forEach(a=>a.addEventListener('click',()=>{
    panel?.classList.remove('open');
    menu?.setAttribute('aria-expanded','false');
  }));
})();


;(()=>{
  if(!document.body.classList.contains('home-v5')) return;

  // Reference-style gallery category pills.
  const pills=[...document.querySelectorAll('[data-v5-cat]')];
  const gallery=[...document.querySelectorAll('[data-v5-kind]')];
  pills.forEach(btn=>btn.addEventListener('click',()=>{
    pills.forEach(x=>x.classList.toggle('active',x===btn));
    const cat=btn.dataset.v5Cat;
    gallery.forEach(item=>item.hidden=!(cat==='all'||item.dataset.v5Kind===cat));
  }));

  // Slight hero depth, preserving accessibility/reduced motion.
  const hero=document.querySelector('.v5-hero-bg img');
  if(hero && matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches){
    let raf=0;
    addEventListener('pointermove',e=>{
      cancelAnimationFrame(raf);
      raf=requestAnimationFrame(()=>{
        const x=(e.clientX/innerWidth-.5)*5;
        const y=(e.clientY/innerHeight-.5)*3;
        hero.style.transform='scale(1.02) translate('+(-x)+'px,'+(-y)+'px)';
      });
    },{passive:true});
  }

  // Horizontal wheel assist on gallery.
  const rail=document.querySelector('[data-v5-gallery]');
  if(rail && matchMedia('(pointer:fine)').matches){
    rail.addEventListener('wheel',e=>{
      if(Math.abs(e.deltaY)>Math.abs(e.deltaX)){
        e.preventDefault();
        rail.scrollBy({left:e.deltaY*.8,behavior:'smooth'});
      }
    },{passive:false});
  }
})();
