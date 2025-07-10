/**
 * Главный JavaScript файл - точка входа для всех модулей
 * Использует нативные ES6 модули для организации кода
 */

// Импортируем общие компоненты
import { initHeader } from './components/header.js';
import Preloader from './components/preloader.js';

// Утилитарные функции, доступные глобально
window.App = {
  // Плавная прокрутка к элементу
  scrollTo: function(selector, offset = 0) {
    const element = document.querySelector(selector);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  },
  
  // Показать/скрыть элемент с анимацией
  toggleElement: function(selector, show = null) {
    const element = document.querySelector(selector);
    if (element) {
      if (show === null) {
        element.classList.toggle('d-none');
      } else {
        element.classList.toggle('d-none', !show);
      }
    }
  },
  
  // Добавить класс с задержкой (для анимаций)
  addClassWithDelay: function(selector, className, delay = 0) {
    setTimeout(() => {
      const element = document.querySelector(selector);
      if (element) {
        element.classList.add(className);
      }
    }, delay);
  },
  
  // Дебаунс функция для оптимизации событий
  debounce: function(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        timeout = null;
        if (!immediate) func(...args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func(...args);
    };
  },
  
  // Позиционирование main-content под header
  adjustMainContent: function() {
    const header = document.querySelector('.header');
    const mainContent = document.querySelector('.main-content');
    
    if (header && mainContent) {
      const headerHeight = header.offsetHeight;
      mainContent.style.marginTop = `-${headerHeight}px`;
      console.log(`📐 Main content adjusted: margin-top: -${headerHeight}px`);
    }
  },
  
  // Проверка поддержки браузером
  isSupported: {
    intersectionObserver: 'IntersectionObserver' in window,
    webGL: function() {
      try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && canvas.getContext('webgl'));
      } catch (e) {
        return false;
      }
    }
  }
};

// Инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', function() {
  console.log('🚀 Инициализация приложения...');
  
  // Инициализируем прелоадер
  window.preloader = new Preloader();
  
  // Добавляем fallback на случай, если что-то пойдет не так
  window.fallbackTimer = setTimeout(() => {
    if (window.preloader && document.getElementById('preloader')) {
      console.log('⏰ Fallback: принудительное скрытие прелоадера через 5 секунд');
      window.preloader.forceHide();
    }
  }, 5000);
  
  // Инициализируем общие компоненты
  initHeader();
  
  // Позиционируем main-content под header
  window.App.adjustMainContent();
  
  // Переустанавливаем позицию при изменении размера окна
  window.addEventListener('resize', window.App.debounce(window.App.adjustMainContent, 250));
  
  // Определяем текущую страницу по data-атрибуту body
  const page = document.body.dataset.page;
  console.log(`📄 Текущая страница: ${page}`);
  
  // Динамический импорт модулей для конкретных страниц
  if (page === 'home') {
    import('./pages/home.js')
      .then(module => {
        module.initHomePage();
        console.log('✅ Модуль главной страницы загружен');
      })
      .catch(error => {
        console.error('❌ Ошибка загрузки модуля главной страницы:', error);
      });
  }
  
  // Добавляем другие страницы по мере необходимости
  // if (page === 'about') {
  //   import('./pages/about.js').then(module => module.initAboutPage());
  // }
  
  console.log('✅ Приложение инициализировано');
});

// Обработка ошибок загрузки модулей
window.addEventListener('error', function(event) {
  if (event.filename && event.filename.includes('.js')) {
    console.error('❌ Ошибка загрузки JavaScript модуля:', event.filename, event.message);
  }
});

// Экспортируем для использования в других модулях
export default window.App;
