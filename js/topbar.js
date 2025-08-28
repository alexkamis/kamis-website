// js/topbar.js
(function(){
  const bar = document.querySelector('.topbar');
  if (!bar) return;

  const toggle = () => {
    if (window.scrollY > 2) bar.classList.add('elevated');
    else bar.classList.remove('elevated');
  };

  toggle(); // initialt läge
  window.addEventListener('scroll', toggle, { passive: true });
})();