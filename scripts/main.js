/**
 * MAIN.JS - Scroll Animations, Counters, Interactions
 */

// ========================================
// Intersection Observer for Scroll Triggers
// ========================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');

      // Special handling for stat numbers (counter animation)
      if (entry.target.classList.contains('stat-number')) {
        animateCounter(entry.target);
      }

      // Stop observing after animation triggers
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all reveal elements and stat blocks
document.querySelectorAll('.reveal, .stat-number, .timeline-step, .card').forEach(el => {
  observer.observe(el);
});

// ========================================
// Counter Animation Function
// ========================================

function animateCounter(element) {
  const target = parseInt(element.dataset.target);
  const duration = 2000; // 2 seconds
  const step = Math.ceil(target / (duration / 16)); // ~60fps
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      element.textContent = formatNumber(target);
      clearInterval(timer);
    } else {
      element.textContent = formatNumber(current);
    }
  }, 16);
}

// Format numbers with commas and $ for revenue
function formatNumber(num) {
  if (num >= 1000000) {
    return '$' + (num / 1000000).toFixed(1) + 'M+';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(0) + 'K+';
  }
  return num.toString();
}

// ========================================
// Scroll-triggered Hero Glitch Effect
// ========================================

const heroHeadline = document.querySelector('#hero h1');

if (heroHeadline) {
  heroHeadline.classList.add('animate-glitch');

  // Re-trigger glitch on scroll for effect
  let scrollGlitchTimeout;
  window.addEventListener('scroll', () => {
    if (window.scrollY < 100 && heroHeadline.style.animation === '') {
      heroHeadline.style.animation = 'none';
      setTimeout(() => {
        heroHeadline.style.animation = '';
      }, 10);
    }
  });
}

// ========================================
// CTA Button Click Handler
// ========================================

function scrollToDiscovery() {
  // Placeholder: In production, this would open a calendar widget (e.g., Calendly)
  // For now, scroll to final CTA section
  const finalCTA = document.querySelector('#final-cta');
  if (finalCTA) {
    finalCTA.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // Log for analytics tracking
  console.log('Discovery call button clicked');

  // Example: Send event to analytics
  // gtag('event', 'click_discovery_call');
}

// ========================================
// Parallax Effect on Hero Background
// ========================================

const hero = document.querySelector('#hero');

if (hero) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const parallaxOffset = scrollY * 0.5;

    // Apply parallax to hero background (if using background-image)
    hero.style.backgroundPosition = 'center ' + parallaxOffset + 'px';
  });
}

// ========================================
// Performance: Lazy Load Images
// ========================================

if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ========================================
// Accessibility: Focus Trap & Keyboard Nav
// ========================================

document.addEventListener('keydown', (e) => {
  // ESC key closes any open modals (future enhancement)
  if (e.key === 'Escape') {
    // Handle modal close
  }

  // Enter/Space on buttons triggers click
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('btn-primary')) {
    e.preventDefault();
    e.target.click();
  }
});

// ========================================
// Smooth Scroll Behavior (fallback for older browsers)
// ========================================

if (!('scrollBehavior' in document.documentElement.style)) {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

console.log('✓ Main.js loaded successfully');
