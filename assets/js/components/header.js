/**
 * Header Navigation System
 * Включает scroll-based поведение, dropdown меню и offcanvas
 * Основано на layout/index.php с адаптацией под v2.0 архитектуру
 */

let isOffcanvasOpen = false;
let lastScrollY = 0;

/**
 * Инициализация header
 */
export function initHeader() {
  console.log('🔧 Инициализация header navigation system...');
  
  const header = document.querySelector('.header');
  
  if (!header) {
    console.warn('⚠️ Элемент .header не найден');
    return;
  }
  
  // Инициализируем scroll-based поведение
  initScrollBehavior(header);
  
  // Инициализируем dropdown меню
  initDropdownMenus();
  
  // Инициализируем offcanvas меню
  initOffcanvasMenu();
  
  // Инициализируем мобильную навигацию
  initMobileNavigation();
  
  // Инициализируем плавную навигацию
  initSmoothNavigation();
  
  console.log('✅ Header navigation system инициализирован');
}

/**
 * Scroll-based поведение header
 */
function initScrollBehavior(header) {
  const scrollHandler = window.App.debounce(function() {
    const currentScrollY = window.scrollY;
    const isScrolled = currentScrollY > 50;
    
    // Переключаем классы в зависимости от скролла
    if (isScrolled) {
      header.classList.remove('header--transparent');
      header.classList.add('header--scrolled');
    } else {
      header.classList.add('header--transparent');
      header.classList.remove('header--scrolled');
    }
    
    lastScrollY = currentScrollY;
  }, 10);
  
  // Устанавливаем начальное состояние
  if (window.scrollY <= 50) {
    header.classList.add('header--transparent');
    header.classList.remove('header--scrolled');
  } else {
    header.classList.remove('header--transparent');
    header.classList.add('header--scrolled');
  }
  
  window.addEventListener('scroll', scrollHandler);
  
  console.log('✅ Scroll-based поведение header инициализировано');
}

/**
 * Dropdown меню
 */
function initDropdownMenus() {
  const dropdownItems = document.querySelectorAll('.header__nav .has-dropdown');
  
  dropdownItems.forEach(item => {
    const submenu = item.querySelector('.header__submenu');
    
    if (!submenu) return;
    
    let hoverTimeout;
    
    // Показать dropdown при hover
    item.addEventListener('mouseenter', function() {
      clearTimeout(hoverTimeout);
      submenu.style.display = 'block';
      
      // Небольшая задержка для плавности
      setTimeout(() => {
        submenu.classList.add('show');
      }, 10);
    });
    
    // Скрыть dropdown при уходе мыши
    item.addEventListener('mouseleave', function() {
      submenu.classList.remove('show');
      
      hoverTimeout = setTimeout(() => {
        submenu.style.display = 'none';
      }, 300);
    });
    
    // Обработка многоуровневых меню
    const nestedDropdowns = item.querySelectorAll('.menu-item-has-children');
    nestedDropdowns.forEach(nestedItem => {
      const nestedSubmenu = nestedItem.querySelector('.header__submenu');
      
      if (!nestedSubmenu) return;
      
      let nestedTimeout;
      
      nestedItem.addEventListener('mouseenter', function() {
        clearTimeout(nestedTimeout);
        nestedSubmenu.style.display = 'block';
        
        setTimeout(() => {
          nestedSubmenu.classList.add('show');
        }, 10);
      });
      
      nestedItem.addEventListener('mouseleave', function() {
        nestedSubmenu.classList.remove('show');
        
        nestedTimeout = setTimeout(() => {
          nestedSubmenu.style.display = 'none';
        }, 300);
      });
    });
  });
  
  // Закрытие dropdown при клике вне меню
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.header__nav')) {
      const openDropdowns = document.querySelectorAll('.header__submenu.show');
      openDropdowns.forEach(dropdown => {
        dropdown.classList.remove('show');
        setTimeout(() => {
          dropdown.style.display = 'none';
        }, 300);
      });
    }
  });
  
  console.log('✅ Dropdown меню инициализированы');
}

/**
 * Offcanvas мобильное меню
 */
function initOffcanvasMenu() {
  const openBtn = document.querySelector('.header__offcanvas-open-btn');
  const closeBtn = document.querySelector('.header__offcanvas-close-btn');
  const offcanvas = document.querySelector('.header__offcanvas-area');
  const overlay = document.querySelector('.body-overlay');
  
  if (!openBtn || !closeBtn || !offcanvas || !overlay) {
    console.warn('⚠️ Элементы offcanvas меню не найдены');
    return;
  }
  
  // Открытие offcanvas
  openBtn.addEventListener('click', function() {
    openOffcanvas();
  });
  
  // Закрытие offcanvas
  closeBtn.addEventListener('click', function() {
    closeOffcanvas();
  });
  
  // Закрытие при клике на overlay
  overlay.addEventListener('click', function() {
    closeOffcanvas();
  });
  
  // Закрытие при нажатии Escape
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && isOffcanvasOpen) {
      closeOffcanvas();
    }
  });
  
  // Закрытие при изменении размера окна
  window.addEventListener('resize', function() {
    if (window.innerWidth > 767 && isOffcanvasOpen) {
      closeOffcanvas();
    }
  });
  
  function openOffcanvas() {
    isOffcanvasOpen = true;
    offcanvas.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Анимация кнопки hamburger
    animateHamburger(openBtn, true);
    
    console.log('📱 Offcanvas меню открыто');
  }
  
  function closeOffcanvas() {
    isOffcanvasOpen = false;
    offcanvas.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    
    // Анимация кнопки hamburger
    animateHamburger(openBtn, false);
    
    console.log('📱 Offcanvas меню закрыто');
  }
  
  console.log('✅ Offcanvas меню инициализировано');
}

/**
 * Анимация hamburger кнопки
 */
function animateHamburger(button, isOpen) {
  const lines = button.querySelectorAll('i');
  
  if (lines.length !== 3) return;
  
  if (isOpen) {
    lines[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
    lines[1].style.opacity = '0';
    lines[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
  } else {
    lines[0].style.transform = 'none';
    lines[1].style.opacity = '1';
    lines[2].style.transform = 'none';
  }
}

/**
 * Мобильная навигация в offcanvas
 */
function initMobileNavigation() {
  const mobileMenuItems = document.querySelectorAll('.header__mobile-menu .has-dropdown');
  
  mobileMenuItems.forEach(item => {
    const link = item.querySelector(':scope > a');
    const submenu = item.querySelector('.header__mobile-submenu');
    
    if (!link || !submenu) return;
    
    // Добавляем индикатор dropdown
    const indicator = document.createElement('span');
    indicator.innerHTML = '+';
    indicator.style.cssText = 'float: right; cursor: pointer; font-size: 18px; line-height: 1;';
    link.appendChild(indicator);
    
    // Скрываем submenu по умолчанию
    submenu.style.display = 'none';
    
    // Обработчик клика
    link.addEventListener('click', function(event) {
      event.preventDefault();
      
      const isOpen = submenu.style.display === 'block';
      
      // Закрываем все другие submenu
      mobileMenuItems.forEach(otherItem => {
        const otherSubmenu = otherItem.querySelector('.header__mobile-submenu');
        const otherIndicator = otherItem.querySelector(':scope > a span');
        if (otherSubmenu && otherSubmenu !== submenu) {
          otherSubmenu.style.display = 'none';
          if (otherIndicator) otherIndicator.innerHTML = '+';
        }
      });
      
      // Переключаем текущий submenu
      if (isOpen) {
        submenu.style.display = 'none';
        indicator.innerHTML = '+';
      } else {
        submenu.style.display = 'block';
        indicator.innerHTML = '−';
      }
    });
    
    // Обработка вложенных submenu
    const nestedItems = submenu.querySelectorAll('.menu-item-has-children');
    nestedItems.forEach(nestedItem => {
      const nestedLink = nestedItem.querySelector(':scope > a');
      const nestedSubmenu = nestedItem.querySelector('.header__mobile-submenu');
      
      if (!nestedLink || !nestedSubmenu) return;
      
      const nestedIndicator = document.createElement('span');
      nestedIndicator.innerHTML = '+';
      nestedIndicator.style.cssText = 'float: right; cursor: pointer; font-size: 16px; line-height: 1;';
      nestedLink.appendChild(nestedIndicator);
      
      nestedSubmenu.style.display = 'none';
      
      nestedLink.addEventListener('click', function(event) {
        event.preventDefault();
        
        const isNestedOpen = nestedSubmenu.style.display === 'block';
        
        if (isNestedOpen) {
          nestedSubmenu.style.display = 'none';
          nestedIndicator.innerHTML = '+';
        } else {
          nestedSubmenu.style.display = 'block';
          nestedIndicator.innerHTML = '−';
        }
      });
    });
  });
  
  console.log('✅ Мобильная навигация инициализирована');
}

/**
 * Плавная навигация
 */
function initSmoothNavigation() {
  const navLinks = document.querySelectorAll('.header__nav a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        window.App.scrollTo(targetId, headerHeight + 20);
        
        // Закрываем offcanvas если открыт
        if (isOffcanvasOpen) {
          const closeBtn = document.querySelector('.header__offcanvas-close-btn');
          if (closeBtn) closeBtn.click();
        }
      }
    });
  });
  
  console.log('✅ Плавная навигация инициализирована');
}

/**
 * Обновление активной ссылки в навигации
 */
function updateActiveNavLink(activeLink) {
  const navLinks = document.querySelectorAll('.header__nav a');
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  if (activeLink) {
    activeLink.classList.add('active');
  }
}

/**
 * ScrollSpy для автоматического выделения активных ссылок
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.header__nav a[href^="#"]');
  
  if (sections.length === 0 || navLinks.length === 0) return;
  
  if (!window.App.isSupported.intersectionObserver) {
    console.warn('⚠️ IntersectionObserver не поддерживается');
    return;
  }
  
  const observer = new IntersectionObserver(
    function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const activeLink = document.querySelector(`.header__nav a[href="#${entry.target.id}"]`);
          updateActiveNavLink(activeLink);
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
  
  console.log('✅ ScrollSpy инициализирован');
}

/**
 * Публичные методы для внешнего использования
 */
export const headerAPI = {
  closeOffcanvas: function() {
    if (isOffcanvasOpen) {
      const closeBtn = document.querySelector('.header__offcanvas-close-btn');
      if (closeBtn) closeBtn.click();
    }
  },
  
  isOffcanvasOpen: function() {
    return isOffcanvasOpen;
  },
  
  updateActiveLink: function(link) {
    updateActiveNavLink(link);
  },
  
  scrollToTop: function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
};
