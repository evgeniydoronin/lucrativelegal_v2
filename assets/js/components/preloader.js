/**
 * Preloader Component
 * Manages the loading animation with percentage counter
 */

class Preloader {
    constructor() {
        this.preloader = document.getElementById('preloader');
        this.percentage = document.getElementById('preloader-percentage');
        this.hello = document.getElementById('preloader-hello');
        this.weAre = document.getElementById('preloader-we-are');
        this.tagline = document.getElementById('preloader-tagline');
        this.slices = document.getElementById('preloader-slices');
        
        this.currentPercentage = 0;
        this.targetPercentage = 0;
        this.isComplete = false;
        this.isLoading = false;
        this.pageLoaded = false;
        this.animationId = null;
        
        this.init();
    }
    
    init() {
        console.log('🔄 Инициализация прелоадера...');
        
        if (!this.preloader) {
            console.warn('⚠️ Элемент прелоадера не найден');
            return;
        }
        
        // Показываем прелоадер
        this.show();
        
        // Запускаем симуляцию загрузки
        this.startLoading();
        
        // Слушаем событие полной загрузки страницы
        if (document.readyState === 'complete') {
            this.onPageLoad();
        } else {
            window.addEventListener('load', () => this.onPageLoad());
        }
        
        console.log('✅ Прелоадер инициализирован');
    }
    
    show() {
        if (this.preloader) {
            this.preloader.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    }
    
    hide() {
        if (this.preloader) {
            this.preloader.classList.add('hidden');
            document.body.style.overflow = '';
            
            // Очищаем ресурсы и отменяем fallback таймер
            this.destroy();
            
            // Удаляем прелоадер из DOM через 1 секунду
            setTimeout(() => {
                if (this.preloader && this.preloader.parentNode) {
                    this.preloader.parentNode.removeChild(this.preloader);
                }
            }, 1000);
        }
    }
    
    startLoading() {
        if (this.isLoading) {
            console.log('⚠️ Анимация уже запущена, пропускаем');
            return;
        }
        
        this.isLoading = true;
        console.log('🎬 Запуск анимации загрузки от 0 до 95%');
        
        // Плавная анимация от 0 до 95% за 3 секунды
        this.animateToPercentage(95, 3000);
        
        // Показываем текстовые элементы поэтапно
        setTimeout(() => this.showHello(), 800);
        setTimeout(() => this.showWeAre(), 1800);
        setTimeout(() => this.showTagline(), 2500);
        
        // Через 3.2 секунды проверяем, загружена ли страница
        setTimeout(() => {
            this.isLoading = false;
            if (this.pageLoaded) {
                this.completeLoading();
            }
        }, 3200);
    }
    
    onPageLoad() {
        console.log('📄 Страница полностью загружена');
        this.pageLoaded = true;
        
        // Если анимация загрузки еще идет, ждем ее завершения
        if (!this.isLoading) {
            this.completeLoading();
        }
    }
    
    completeLoading() {
        console.log('🎯 Завершение загрузки до 100%');
        
        // Завершаем загрузку до 100%
        this.animateToPercentage(100, 500);
        
        setTimeout(() => {
            this.startExitAnimation();
        }, 800);
    }
    
    animateToPercentage(target, duration) {
        this.targetPercentage = target;
        const startPercentage = this.currentPercentage;
        const difference = target - startPercentage;
        const startTime = performance.now();
        
        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Используем easing функцию для плавности
            const easeProgress = this.easeOutCubic(progress);
            
            this.currentPercentage = startPercentage + (difference * easeProgress);
            this.updatePercentageDisplay();
            
            if (progress < 1) {
                this.animationId = requestAnimationFrame(animate);
            } else {
                this.currentPercentage = target;
                this.updatePercentageDisplay();
            }
        };
        
        this.animationId = requestAnimationFrame(animate);
    }
    
    updatePercentageDisplay() {
        if (this.percentage) {
            const displayPercentage = Math.round(this.currentPercentage);
            this.percentage.textContent = `${displayPercentage}%`;
        }
    }
    
    showHello() {
        if (this.hello) {
            this.hello.classList.add('visible');
            
            setTimeout(() => {
                this.hello.classList.remove('visible');
            }, 1000);
        }
    }
    
    showWeAre() {
        if (this.weAre) {
            this.weAre.classList.add('visible');
        }
    }
    
    showTagline() {
        if (this.tagline) {
            this.tagline.classList.add('visible');
        }
    }
    
    startExitAnimation() {
        console.log('🎬 Запуск анимации выхода прелоадера');
        
        // Отменяем fallback таймер сразу, как только начинается нормальное завершение
        if (window.fallbackTimer) {
            clearTimeout(window.fallbackTimer);
            window.fallbackTimer = null;
            console.log('✅ Fallback таймер отменен при начале анимации выхода');
        }
        
        // Показываем слайсы
        if (this.slices) {
            this.slices.classList.add('visible');
            
            setTimeout(() => {
                this.slices.classList.add('animate');
            }, 100);
        }
        
        // Скрываем основной контент
        setTimeout(() => {
            if (this.percentage) this.percentage.style.opacity = '0';
            if (this.weAre) this.weAre.style.opacity = '0';
            if (this.tagline) this.tagline.style.opacity = '0';
        }, 500);
        
        // Полностью скрываем прелоадер
        setTimeout(() => {
            this.hide();
        }, 1200);
    }
    
    // Easing функция для плавной анимации
    easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }
    
    // Метод для принудительного скрытия (на случай ошибок)
    forceHide() {
        console.log('🚫 Принудительное скрытие прелоадера');
        this.hide();
    }
    
    // Очистка ресурсов
    destroy() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
        
        // Отменяем fallback таймер
        if (window.fallbackTimer) {
            clearTimeout(window.fallbackTimer);
            window.fallbackTimer = null;
            console.log('✅ Fallback таймер отменен');
        }
        
        window.removeEventListener('load', this.onPageLoad);
        
        if (this.preloader && this.preloader.parentNode) {
            this.preloader.parentNode.removeChild(this.preloader);
        }
        
        document.body.style.overflow = '';
    }
}

// Экспортируем класс
export default Preloader;
