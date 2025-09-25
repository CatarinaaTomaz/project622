
(function(){
  const els = document.querySelectorAll('[data-aos]');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('aos-animate'); } });
  }, {threshold: .15});
  els.forEach(el=>io.observe(el));
})();
(function(){
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.75);display:none;align-items:center;justify-content:center;z-index:9999;padding:20px;';
  const img = document.createElement('img');
  img.style.cssText = 'max-width:90vw;max-height:90vh;border-radius:16px;border:2px solid rgba(255,255,255,.6); background:#fff';
  overlay.appendChild(img);
  overlay.addEventListener('click', ()=> overlay.style.display='none');
  document.body.appendChild(overlay);
  document.addEventListener('click', (e)=>{
    const a = e.target.closest('a[data-lightbox]');
    if(a){ e.preventDefault(); img.src = a.getAttribute('href'); overlay.style.display = 'flex'; }
  });
})();
