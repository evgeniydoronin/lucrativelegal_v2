/**
 * Модуль для управления шапкой сайта
 * Включает мобильное меню, скролл-эффекты и навигацию
 */

let isMenuOpen = false;
let lastScrollY = 0;

/**
 * Инициализация шапки
 */
export function initHeader() {
  console.log('🔧 Инициализация header...');
  
  const header = document.querySelector('.header');
  const mobileToggle = document.querySelector('.header__mobile-toggle');
  const nav = document.querySelector('.header__nav');
  
  if (!header) {
    console.warn('⚠️ Элемент .header не найден');
    return;
  }
  
  // Инициализируем мобильное меню
  if (mobileToggle && nav) {
    initMobileMenu(mobileToggle, nav);
  }
  
  // Инициализируем скролл-эффекты
  initScrollEffects(header);
  
  // Инициализируем плавную навигацию
  initSmoothNavigation();
  
  console.log('✅ Header инициализирован');
}

/**
 * Инициализация мобильного меню
 */
function initMobileMenu(toggle, nav) {
  // Создаем иконку гамбургера
  toggle.innerHTML = `
    <span class="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </span>
  `;
  
  // Добавляем стили для гамбургера
  if (!document.querySelector('#hamburger-styles')) {
    const style = document.createElement('style');
    style.id = 'hamburger-styles';
    style.textContent = `
      .hamburger {
        display: flex;
        flex-direction: column;
        width: 24px;
        height: 18px;
        justify-content: space-between;
        cursor: pointer;
      }
      .hamburger span {
        display: block;
        height: 2px;
        width: 100%;
        background-color: currentColor;
        transition: all 0.3s ease;
        transform-origin: center;
      }
      .hamburger--active span:nth-child(1) {
        transform: rotate(45deg) translate(6px, 6px);
      }
      .hamburger--active span:nth-child(2) {
        opacity: 0;
      }
      .hamburger--active span:nth-child(3) {
        transform: rotate(-45deg) translate(6px, -6px);
      }
    `;
    document.head.appendChild(style);
  }
  
  // Обработчик клика по кнопке меню
  toggle.addEventListener('click', function() {
    toggleMobileMenu(toggle, nav);
  });
  
  // Закрытие меню при клике на ссылку
  const navLinks = nav.querySelectorAll('.header__nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (isMenuOpen) {
        toggleMobileMenu(toggle, nav);
      }
    });
  });
  
  // Закрытие меню при клике вне его
  document.addEventListener('click', function(event) {
    if (isMenuOpen && !nav.contains(event.target) && !toggle.contains(event.target)) {
      toggleMobileMenu(toggle, nav);
    }
  });
  
  // Закрытие меню при изменении размера окна
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && isMenuOpen) {
      toggleMobileMenu(toggle, nav);
    }
  });
}

/**
 * Переключение мобильного меню
 */
function toggleMobileMenu(toggle, nav) {
  isMenuOpen = !isMenuOpen;
  
  nav.classList.toggle('header__nav--open', isMenuOpen);
  toggle.querySelector('.hamburger').classList.toggle('hamburger--active', isMenuOpen);
  
  // Блокируем скролл при открытом меню
  document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  
  console.log(`📱 Мобильное меню ${isMenuOpen ? 'открыто' : 'закрыто'}`);
}

/**
 * Инициализация скролл-эффектов для шапки
 */
function initScrollEffects(header) {
  const scrollHandler = window.App.debounce(function() {
    const currentScrollY = window.scrollY;
    
    // Добавляем класс при скролле
    if (currentScrollY > 50) {
      header.classList.add('header--scrolled');
    } else {
      header.classList.remove('header--scrolled');
    }
    
    // Скрытие/показ шапки при скролле (опционально)
    // if (currentScrollY > lastScrollY && currentScrollY > 100) {
    //   header.style.transform = 'translateY(-100%)';
    // } else {
    //   header.style.transform = 'translateY(0)';
    // }
    
    lastScrollY = currentScrollY;
  }, 10);
  
  window.addEventListener('scroll', scrollHandler);
}

/**
 * Инициализация плавной навигации
 */
function initSmoothNavigation() {
  const navLinks = document.querySelectorAll('.header__nav-link[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        window.App.scrollTo(targetId, headerHeight + 20);
        
        // Обновляем активную ссылку
        updateActiveNavLink(this);
      }
    });
  });
  
  // Обновление активной ссылки при скролле
  if (window.App.isSupported.intersectionObserver) {
    initScrollSpy();
  }
}

/**
 * Обновление активной ссылки в навигации
 */
function updateActiveNavLink(activeLink) {
  const navLinks = document.querySelectorAll('.header__nav-link');
  navLinks.forEach(link => {
    link.classList.remove('header__nav-link--active');
  });
  activeLink.classList.add('header__nav-link--active');
}

/**
 * Инициализация ScrollSpy для автоматического выделения активных ссылок
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.header__nav-link[href^="#"]');
  
  if (sections.length === 0 || navLinks.length === 0) return;
  
  const observer = new IntersectionObserver(
    function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const activeLink = document.querySelector(`.header__nav-link[href="#${entry.target.id}"]`);
          if (activeLink) {
            updateActiveNavLink(activeLink);
          }
        }
      });
    },
    {
      rootMargin: '-20% 0px -70% 0px'
    }
  );
  
  sections.forEach(section => {
    observer.observe(section);
  });
}

/**
 * Публичные методы для внешнего использования
 */
export const headerAPI = {
  closeMenu: function() {
    if (isMenuOpen) {
      const toggle = document.querySelector('.header__mobile-toggle');
      const nav = document.querySelector('.header__nav');
      if (toggle && nav) {
        toggleMobileMenu(toggle, nav);
      }
    }
  },
  
  isMenuOpen: function() {
    return isMenuOpen;
  }
};
