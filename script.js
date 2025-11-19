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