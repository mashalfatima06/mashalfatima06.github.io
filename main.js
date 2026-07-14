const nav=document.getElementById('navbar');
if(nav){window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>40));}
const hamburger=document.getElementById('hamburger');
const mobileMenu=document.getElementById('mobileMenu');
if(hamburger){hamburger.addEventListener('click',()=>{const o=mobileMenu.classList.toggle('open');hamburger.setAttribute('aria-expanded',o)});}
function closeMob(){mobileMenu.classList.remove('open');hamburger.setAttribute('aria-expanded','false')}
const revealObs=new IntersectionObserver((entries)=>{entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),i*55);revealObs.unobserve(e.target)}})},{threshold:0.08,rootMargin:'0px 0px -30px 0px'});
document.querySelectorAll('.reveal').forEach(r=>revealObs.observe(r));

function switchTab(id,btn){
  const panels=btn.closest('#how')?.querySelectorAll('.how-panel');
  if(!panels)return;
  panels.forEach(p=>p.classList.remove('active'));
  btn.parentElement.querySelectorAll('.how-tab').forEach(t=>t.classList.remove('active'));
  document.getElementById('tab-'+id).classList.add('active');
  btn.classList.add('active');
}
function switchPricing(id,btn){
  document.querySelectorAll('.pricing-section').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.ptab').forEach(t=>t.classList.remove('active'));
  document.getElementById('price-'+id).classList.add('active');
  btn.classList.add('active');
}

// Industries dropdown (click/tap, works on mobile — not hover-only)
function toggleDropdown(btn){
  const li=btn.closest('.has-dropdown');
  document.querySelectorAll('.has-dropdown.open').forEach(el=>{if(el!==li)el.classList.remove('open')});
  li.classList.toggle('open');
}
document.addEventListener('click',(e)=>{
  if(!e.target.closest('.has-dropdown')){
    document.querySelectorAll('.has-dropdown.open').forEach(el=>el.classList.remove('open'));
  }
});

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const item=btn.closest('.faq-item');
    const wasOpen=item.classList.contains('open');
    item.parentElement.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
    if(!wasOpen)item.classList.add('open');
  });
});

// Demo form
const demoForm=document.getElementById('demoForm');
if(demoForm){
  const successMessage=document.getElementById('successMessage');
  const errorMessage=document.getElementById('errorMessage');
  demoForm.addEventListener('submit',async(e)=>{
    e.preventDefault();
    errorMessage.textContent='';
    const btn=demoForm.querySelector('button[type="submit"]');
    btn.disabled=true;btn.textContent='Sending...';
    try{
      const res=await fetch(demoForm.action,{method:'POST',body:new FormData(demoForm)});
      if(!res.ok){const d=await res.json().catch(()=>({}));throw new Error(d.message||'Submission failed. Please try again.')}
      demoForm.style.display='none';successMessage.style.display='block';
    }catch(err){errorMessage.textContent=err.message}
    finally{btn.disabled=false;btn.textContent='Schedule Demo'}
  });
}
