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
  const section = document.querySelector('.video-text-section');
  const video = section.querySelector('video');

  let scrollStart = 0;
  let scrollEnd = 0;
  let duration = 0;

  function setupScrollPoints() {
    const rect = section.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // punto donde empezamos a “scrubear” el vídeo
    scrollStart = scrollTop + rect.top;

    // punto donde dejamos de controlar el vídeo (cuando la parte de abajo de la sección
    // llega al borde inferior del viewport)
    scrollEnd = scrollTop + rect.bottom - window.innerHeight;
  }

  function onScroll() {
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;

    // antes de la sección
    if (scrollPos <= scrollStart) {
      video.currentTime = 0;
      return;
    }

    // después de la sección
    if (scrollPos >= scrollEnd) {
      video.currentTime = duration;
      return;
    }

    const progress = (scrollPos - scrollStart) / (scrollEnd - scrollStart); // 0 → 1
    const time = progress * duration;
    video.currentTime = time;
  }

  // Cuando el vídeo sabe su duración, configuramos todo
  video.addEventListener('loadedmetadata', function () {
    duration = video.duration || 0;
    setupScrollPoints();
    onScroll(); // posición inicial
  });

  window.addEventListener('resize', function () {
    setupScrollPoints();
    onScroll();
  });

  window.addEventListener('scroll', onScroll, { passive: true });
});




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


// Seleccionamos el <model-viewer>
const viewer = document.querySelector("#myModel");

// Pausar la rotación automática mientras se arrastra / pulsa
const stopAutoRotate = () => {
  viewer.autoRotate = false;
};

const startAutoRotate = () => {
  viewer.autoRotate = true;
};

// Ratón
viewer.addEventListener("pointerdown", stopAutoRotate);
viewer.addEventListener("pointerup", startAutoRotate);
viewer.addEventListener("pointercancel", startAutoRotate);
viewer.addEventListener("pointerleave", startAutoRotate);

// Touch extra (por si acaso, algunos navegadores)
viewer.addEventListener("touchstart", stopAutoRotate);
viewer.addEventListener("touchend", startAutoRotate);







