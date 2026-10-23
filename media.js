// Shared photo slideshow + video behavior (used on facials, coaching, elevate, prosperity)
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.slideshow').forEach(function(slideshow) {
    const slides = slideshow.querySelectorAll('.slideshow-slide');
    const dotsContainer = slideshow.parentElement.querySelector('.slideshow-dots');
    const prevBtn = slideshow.querySelector('.slideshow-arrow.prev');
    const nextBtn = slideshow.querySelector('.slideshow-arrow.next');
    let currentIndex = 0;
    let autoPlayInterval;

    slides.forEach(function(slide, index) {
      slide.style.setProperty('--slide-bg', "url('" + slide.querySelector('img').getAttribute('src') + "')");

      const dot = document.createElement('button');
      dot.classList.add('slideshow-dot');
      dot.setAttribute('aria-label', 'Go to photo ' + (index + 1));
      dot.addEventListener('click', function() {
        goToSlide(index);
        resetAutoPlay();
      });
      dotsContainer.appendChild(dot);
    });

    // Lazy-loaded images only start loading once they're near the viewport,
    // so warm up the next slide just before it fades in.
    function preload(index) {
      const img = slides[index].querySelector('img');
      if (img.loading === 'lazy') img.loading = 'eager';
    }

    function goToSlide(index) {
      slides[currentIndex].classList.remove('active');
      dotsContainer.children[currentIndex].classList.remove('active');
      currentIndex = index;
      slides[currentIndex].classList.add('active');
      dotsContainer.children[currentIndex].classList.add('active');
      preload((currentIndex + 1) % slides.length);
    }

    function step(delta) {
      goToSlide((currentIndex + delta + slides.length) % slides.length);
    }

    function startAutoPlay() {
      stopAutoPlay();
      autoPlayInterval = setInterval(function() { step(1); }, 5000);
    }

    function stopAutoPlay() {
      clearInterval(autoPlayInterval);
    }

    function resetAutoPlay() {
      startAutoPlay();
    }

    prevBtn.addEventListener('click', function() { step(-1); resetAutoPlay(); });
    nextBtn.addEventListener('click', function() { step(1); resetAutoPlay(); });
    slideshow.addEventListener('mouseenter', stopAutoPlay);
    slideshow.addEventListener('mouseleave', startAutoPlay);
    slideshow.addEventListener('focusin', stopAutoPlay);

    // Swipe on touch screens
    let touchStartX = null;
    slideshow.addEventListener('touchstart', function(e) {
      touchStartX = e.touches[0].clientX;
      stopAutoPlay();
    }, { passive: true });
    slideshow.addEventListener('touchend', function(e) {
      if (touchStartX === null) return;
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
      touchStartX = null;
      startAutoPlay();
    });

    goToSlide(0);
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) startAutoPlay();
  });

  // Only one video plays at a time
  const videos = document.querySelectorAll('.video-card video');
  videos.forEach(function(video) {
    video.addEventListener('play', function() {
      videos.forEach(function(other) {
        if (other !== video) other.pause();
      });
    });
  });
});
