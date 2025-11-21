document.addEventListener("DOMContentLoaded", function () {
  const photos = document.querySelectorAll(".product-photo");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  photos.forEach((photo) => observer.observe(photo));
});


;(function(){
var wrapper=document.querySelector('.banner-wrapper');
var sticky=document.querySelector('.banner-sticky');
var overlay=document.querySelector('[data-banner-overlay]');
if(!wrapper||!sticky||!overlay)return;
var h=sticky.clientHeight;
function update(){
var rect=wrapper.getBoundingClientRect();
var start=Math.min(h,Math.max(0,-rect.top));
var progress=start/h;
var scale=1+200*progress;
overlay.style.transform='translate(-50%, -50%) scale('+scale+')';
}
window.addEventListener('scroll',update,{passive:true});
window.addEventListener('resize',function(){h=sticky.clientHeight;update();});
update();
})();

;(function(){
var container=document.querySelector('[data-scroll-container]');
if(!container || typeof LocomotiveScroll==='undefined') return;
var scroll=new LocomotiveScroll({
el: container,
smooth: true,
lerp: 0.1
});
})();




document.addEventListener('DOMContentLoaded', function () {
  new Typed('.typed-texto', {
    strings: ["TOO COLD FOR HOOK SNEAKERS"],
    typeSpeed: 60,      // velocidad al escribir
    backSpeed: 60,      // velocidad al borrar
    backDelay: 1000,    // pausa antes de borrar
    loop: true,         // repetir para siempre
    showCursor: true,
    cursorChar: '|'
  });
});






