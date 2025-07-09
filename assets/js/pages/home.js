/**
 * Модуль для главной страницы
 * Содержит логику анимаций, интерактивных элементов и специфичную функциональность
 */

/**
 * Инициализация главной страницы
 */
export function initHomePage() {
  console.log('🏠 Инициализация главной страницы...');
  
  // Инициализируем различные компоненты страницы
  initHeroSection();
  initImageDistortion();
  initScrollAnimations();
  initCounterAnimations();
  initVideoHandlers();
  
  console.log('✅ Главная страница инициализирована');
}

/**
 * Инициализация hero секции
 */
function initHeroSection() {
  const heroSection = document.querySelector('.hero-section');
  if (!heroSection) return;
  
  // Добавляем параллакс эффект для hero секции
  const parallaxHandler = window.App.debounce(function() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    if (heroSection) {
      heroSection.style.transform = `translateY(${rate}px)`;
    }
  }, 10);
  
  window.addEventListener('scroll', parallaxHandler);
  
  // Анимация появления элементов hero секции
  const heroTitle = heroSection.querySelector('.hero-section__title');
  const heroSubtitle = heroSection.querySelector('.hero-section__subtitle');
  const heroActions = heroSection.querySelector('.hero-section__actions');
  
  if (heroTitle) {
    window.App.addClassWithDelay('.hero-section__title', 'animate-fade-in-up', 300);
  }
  
  if (heroSubtitle) {
    window.App.addClassWithDelay('.hero-section__subtitle', 'animate-fade-in-up', 600);
  }
  
  if (heroActions) {
    window.App.addClassWithDelay('.hero-section__actions', 'animate-fade-in-up', 900);
  }
  
  // Добавляем CSS для анимаций
  addAnimationStyles();
}

/**
 * Инициализация эффекта искажения изображения
 */
function initImageDistortion() {
  // Динамически загружаем скрипт эффекта искажения
  const script = document.createElement('script');
  script.type = 'module';
  script.src = 'assets/js/components/distortion-img.js';
  script.onload = function() {
    console.log('✅ Эффект искажения изображения загружен');
  };
  script.onerror = function() {
    console.warn('⚠️ Не удалось загрузить эффект искажения изображения');
  };
  document.head.appendChild(script);
}

/**
 * Инициализация анимаций при скролле
 */
function initScrollAnimations() {
  if (!window.App.isSupported.intersectionObserver) {
    console.warn('⚠️ IntersectionObserver не поддерживается');
    return;
  }
  
  // Элементы для анимации при скролле
  const animatedElements = document.querySelectorAll('.card, .stats__item, .home-section__header');
  
  const observer = new IntersectionObserver(
    function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
  );
  
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    observer.observe(element);
  });
}

/**
 * Инициализация анимации счетчиков
 */
function initCounterAnimations() {
  const counters = document.querySelectorAll('.stats__number');
  
  if (counters.length === 0) return;
  
  const observer = new IntersectionObserver(
    function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  
  counters.forEach(counter => {
    observer.observe(counter);
  });
}

/**
 * Анимация счетчика
 */
function animateCounter(element) {
  const target = parseInt(element.textContent.replace(/[^\d]/g, ''));
  const duration = 2000; // 2 секунды
  const step = target / (duration / 16); // 60 FPS
  let current = 0;
  
  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    
    // Форматируем число с разделителями тысяч
    const formattedNumber = Math.floor(current).toLocaleString();
    
    // Сохраняем оригинальный суффикс (%, +, и т.д.)
    const originalText = element.textContent;
    const suffix = originalText.replace(/[\d,\s]/g, '');
    
    element.textContent = formattedNumber + suffix;
  }, 16);
}

/**
 * Инициализация обработчиков видео
 */
function initVideoHandlers() {
  // Обработка YouTube видео в hero секции
  const videoButtons = document.querySelectorAll('[data-video-url]');
  
  videoButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      
      const videoUrl = this.dataset.videoUrl;
      if (videoUrl) {
        openVideoModal(videoUrl);
      }
    });
  });
  
  // Автовоспроизведение видео при появлении в viewport
  const autoplayVideos = document.querySelectorAll('video[data-autoplay]');
  
  if (autoplayVideos.length > 0 && window.App.isSupported.intersectionObserver) {
    const videoObserver = new IntersectionObserver(
      function(entries) {
        entries.forEach(entry => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(error => {
              console.warn('⚠️ Автовоспроизведение видео заблокировано:', error);
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );
    
    autoplayVideos.forEach(video => {
      videoObserver.observe(video);
    });
  }
}

/**
 * Открытие модального окна с видео
 */
function openVideoModal(videoUrl) {
  // Создаем модальное окно
  const modal = document.createElement('div');
  modal.className = 'video-modal';
  modal.innerHTML = `
    <div class="video-modal__backdrop">
      <div class="video-modal__content">
        <button class="video-modal__close">&times;</button>
        <div class="video-modal__video">
          <iframe 
            src="${videoUrl}?autoplay=1" 
            frameborder="0" 
            allowfullscreen
            allow="autoplay; encrypted-media">
          </iframe>
        </div>
      </div>
    </div>
  `;
  
  // Добавляем стили для модального окна
  if (!document.querySelector('#video-modal-styles')) {
    const style = document.createElement('style');
    style.id = 'video-modal-styles';
    style.textContent = `
      .video-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .video-modal__backdrop {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .video-modal__content {
        position: relative;
        width: 90%;
        max-width: 800px;
        aspect-ratio: 16/9;
      }
      .video-modal__close {
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 30px;
        cursor: pointer;
        z-index: 1;
      }
      .video-modal__video {
        width: 100%;
        height: 100%;
      }
      .video-modal__video iframe {
        width: 100%;
        height: 100%;
      }
    `;
    document.head.appendChild(style);
  }
  
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
  
  // Обработчики закрытия
  const closeBtn = modal.querySelector('.video-modal__close');
  const backdrop = modal.querySelector('.video-modal__backdrop');
  
  function closeModal() {
    document.body.removeChild(modal);
    document.body.style.overflow = '';
  }
  
  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', function(event) {
    if (event.target === backdrop) {
      closeModal();
    }
  });
  
  // Закрытие по Escape
  document.addEventListener('keydown', function escapeHandler(event) {
    if (event.key === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', escapeHandler);
    }
  });
}

/**
 * Добавление CSS стилей для анимаций
 */
function addAnimationStyles() {
  if (document.querySelector('#home-animations')) return;
  
  const style = document.createElement('style');
  style.id = 'home-animations';
  style.textContent = `
    .animate-fade-in-up {
      animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    /* Плавные переходы для карточек */
    .card {
      transition: all 0.3s ease;
    }
    
    /* Анимация для статистики */
    .stats__number {
      transition: all 0.3s ease;
    }
  `;
  
  document.head.appendChild(style);
}

/**
 * Публичные методы для внешнего использования
 */
export const homeAPI = {
  // Прокрутка к определенной секции
  scrollToSection: function(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
      const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
      window.App.scrollTo(sectionId, headerHeight + 20);
    }
  },
  
  // Перезапуск анимации счетчиков
  restartCounters: function() {
    const counters = document.querySelectorAll('.stats__number');
    counters.forEach(counter => {
      animateCounter(counter);
    });
  }
};
