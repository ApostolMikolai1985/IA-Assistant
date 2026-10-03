
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


/* POLISH CYCLE 2026-10-03 — premium motion + navigation */
;(()=>{
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine=matchMedia('(pointer:fine)').matches;

  const current=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  document.querySelectorAll('a[href]').forEach(a=>{
    const raw=a.getAttribute('href')||'';
    if(!raw || raw.startsWith('#') || raw.startsWith('mailto:') || raw.startsWith('tel:')) return;
    const clean=raw.split('#')[0].split('?')[0].split('/').pop()?.toLowerCase();
    if(clean && clean===current && a.closest('.navlinks,.v5-mainnav,.mobile-panel,.v5-mobile')){
      a.classList.add('active');
      a.setAttribute('aria-current','page');
    }
  });

  const headers=[...document.querySelectorAll('.topbar,.v5-header')];
  const syncHeader=()=>{
    const on=scrollY>36;
    headers.forEach(h=>h.classList.toggle('is-scrolled',on));
  };
  addEventListener('scroll',syncHeader,{passive:true});
  syncHeader();

  const menu=document.querySelector('.menu-btn,.v5-menu');
  const panel=document.querySelector('.mobile-panel,.v5-mobile');
  if(menu && panel){
    const close=()=>{
      panel.classList.remove('open');
      menu.setAttribute('aria-expanded','false');
      document.body.classList.remove('menu-open');
    };
    menu.addEventListener('click',()=>requestAnimationFrame(()=>{
      document.body.classList.toggle('menu-open',panel.classList.contains('open'));
    }));
    panel.querySelectorAll('a').forEach(a=>a.addEventListener('click',close));
    addEventListener('keydown',e=>{if(e.key==='Escape') close();});
    addEventListener('resize',()=>{if(innerWidth>1020) close();},{passive:true});
  }

  document.querySelectorAll('section').forEach(section=>{
    [...section.querySelectorAll('.reveal')].forEach((el,i)=>{
      el.style.setProperty('--reveal-delay',Math.min(i*70,350)+'ms');
    });
  });
})();

;(()=>{
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine=matchMedia('(pointer:fine)').matches;

  if(fine && !reduced){
    document.querySelectorAll('.v5-offer,.v5-event,.v5-promo,.photo-card,.gallery-item,.card').forEach(el=>{
      el.classList.add('polish-tilt');
      el.addEventListener('pointerenter',()=>el.style.setProperty('--lift','-4px'));
      el.addEventListener('pointermove',e=>{
        const r=el.getBoundingClientRect();
        const x=(e.clientX-r.left)/r.width-.5;
        const y=(e.clientY-r.top)/r.height-.5;
        el.style.setProperty('--tilt-x',(-y*2.4)+'deg');
        el.style.setProperty('--tilt-y',(x*2.6)+'deg');
      });
      el.addEventListener('pointerleave',()=>{
        el.style.setProperty('--tilt-x','0deg');
        el.style.setProperty('--tilt-y','0deg');
        el.style.setProperty('--lift','0px');
      });
    });

    const glow=document.createElement('div');
    glow.className='site-spotlight';
    glow.setAttribute('aria-hidden','true');
    document.body.appendChild(glow);
    let raf=0,tx=innerWidth*.55,ty=innerHeight*.32;
    addEventListener('pointermove',e=>{
      tx=e.clientX;ty=e.clientY;
      if(raf) return;
      raf=requestAnimationFrame(()=>{
        glow.style.transform='translate3d('+(tx-180)+'px,'+(ty-180)+'px,0)';
        raf=0;
      });
    },{passive:true});
  }

  const top=document.createElement('button');
  top.type='button';
  top.className='back-top';
  top.textContent='↑';
  top.setAttribute('aria-label','Wróć na górę');
  document.body.appendChild(top);
  const syncTop=()=>top.classList.toggle('show',scrollY>720);
  addEventListener('scroll',syncTop,{passive:true});
  syncTop();
  top.addEventListener('click',()=>scrollTo({top:0,behavior:reduced?'auto':'smooth'}));

  const prime=document.querySelector('.v5-reserve,.v5-button.gold,.cta.hot');
  if(prime){
    setTimeout(()=>{
      prime.classList.add('cta-awake');
      setTimeout(()=>prime.classList.remove('cta-awake'),1500);
    },1000);
  }
})();


/* UNIFIED PAGE SYSTEM — same rhythm, same controls, richer transitions */
;(()=>{
  const body=document.body;
  const current=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  const pages=[
    {href:'index.html',label:'Start',icon:'✦'},
    {href:'history.html',label:'O nas',icon:'◇'},
    {href:'glow-club.html',label:'Klub',icon:'♢'},
    {href:'strefa81.html',label:'STREFA81',icon:'◫'},
    {href:'events.html',label:'Wydarzenia',icon:'▣'},
    {href:'hotel.html',label:'Hotel',icon:'▤'},
    {href:'weddings.html',label:'Wesela',icon:'♡'},
    {href:'business.html',label:'Biznes',icon:'♟'},
    {href:'gallery.html',label:'Galeria',icon:'▧'},
    {href:'members.html',label:'Klubowicze',icon:'☆'},
    {href:'contact.html',label:'Kontakt',icon:'⌖'}
  ];
  const byHref=href=>pages.findIndex(p=>p.href===href);
  const idx=Math.max(0,byHref(current));

  if(body.classList.contains('site-v4')){
    const hero=document.querySelector('.page-hero');
    if(hero){
      if(!hero.querySelector('.actions')){
        const c=hero.querySelector('.container');
        if(c){
          const actions=document.createElement('div');
          actions.className='actions';
          actions.innerHTML='<a class="cta hot" href="contact.html">Zapytaj / rezerwuj</a><a class="cta" href="#dalej">Zobacz dalej</a>';
          c.appendChild(actions);
        }
      }

      if(!document.querySelector('.unified-deck')){
        const deck=document.createElement('nav');
        deck.className='unified-deck reveal';
        deck.setAttribute('aria-label','Szybka nawigacja GLOW');
        deck.innerHTML='<div class="container unified-deck-inner">'+pages.map((p,i)=>
          '<a href="'+p.href+'"'+(i===idx?' class="active" aria-current="page"':'')+'><i>'+p.icon+'</i><span>'+p.label+'</span></a>'
        ).join('')+'</div>';
        hero.insertAdjacentElement('afterend',deck);
      }
    }
  }

  if(!document.querySelector('.site-pager')){
    const footer=document.querySelector('footer');
    if(footer){
      const prev=pages[(idx-1+pages.length)%pages.length];
      const next=pages[(idx+1)%pages.length];
      const pager=document.createElement('nav');
      pager.className='site-pager reveal';
      pager.setAttribute('aria-label','Przejdź do poprzedniej lub następnej strony');
      pager.innerHTML=
        '<div class="container site-pager-inner">'+
          '<a class="pager-link prev" href="'+prev.href+'"><small>← Poprzednia</small><strong>'+prev.label+'</strong></a>'+
          '<div class="pager-status"><span>'+String(idx+1).padStart(2,'0')+'</span><i></i><span>'+String(pages.length).padStart(2,'0')+'</span></div>'+
          '<a class="pager-link next" href="'+next.href+'"><small>Następna →</small><strong>'+next.label+'</strong></a>'+
        '</div>';
      footer.insertAdjacentElement('beforebegin',pager);
    }
  }

  const deck=document.querySelector('.unified-deck-inner');
  if(deck){
    const active=deck.querySelector('.active');
    if(active) setTimeout(()=>active.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'}),180);
  }

  addEventListener('keydown',e=>{
    const tag=(document.activeElement?.tagName||'').toLowerCase();
    if(['input','textarea','select'].includes(tag)) return;
    if(e.altKey && e.key==='ArrowLeft'){location.href=pages[(idx-1+pages.length)%pages.length].href}
    if(e.altKey && e.key==='ArrowRight'){location.href=pages[(idx+1)%pages.length].href}
  });
})();


/* MOBILE FIX — deterministic deck arrows and centered active tab */
;(()=>{
  const deck=document.querySelector('.unified-deck-inner');
  if(!deck || deck.closest('.unified-deck-wrap')) return;

  const wrap=document.createElement('div');
  wrap.className='unified-deck-wrap';
  deck.parentNode.insertBefore(wrap,deck);
  wrap.appendChild(deck);

  const prev=document.createElement('button');
  prev.type='button';
  prev.className='deck-arrow prev';
  prev.setAttribute('aria-label','Przewiń menu w lewo');
  prev.textContent='‹';

  const next=document.createElement('button');
  next.type='button';
  next.className='deck-arrow next';
  next.setAttribute('aria-label','Przewiń menu w prawo');
  next.textContent='›';

  wrap.append(prev,next);

  const step=()=>Math.max(220,Math.min(deck.clientWidth*.72,480));
  prev.addEventListener('click',()=>deck.scrollBy({left:-step(),behavior:'smooth'}));
  next.addEventListener('click',()=>deck.scrollBy({left:step(),behavior:'smooth'}));

  const active=deck.querySelector('.active');
  if(active){
    setTimeout(()=>{
      const left=active.offsetLeft-(deck.clientWidth-active.clientWidth)/2;
      deck.scrollTo({left:Math.max(0,left),behavior:'smooth'});
    },220);
  }

  const sync=()=>{
    const max=deck.scrollWidth-deck.clientWidth-2;
    prev.disabled=deck.scrollLeft<=4;
    next.disabled=deck.scrollLeft>=max;
    prev.style.opacity=prev.disabled?'.34':'1';
    next.style.opacity=next.disabled?'.34':'1';
  };
  deck.addEventListener('scroll',sync,{passive:true});
  addEventListener('resize',sync,{passive:true});
  setTimeout(sync,260);
})();
