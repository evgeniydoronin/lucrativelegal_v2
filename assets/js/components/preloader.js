/**
 * Preloader Component
 * Manages the loading animation with percentage counter
 */

class Preloader {
    constructor() {
        this.preloader = document.getElementById('preloader');
        this.percentage = document.getElementById('preloader-percentage');
        this.command = document.getElementById('preloader-command');
        this.slices = document.getElementById('preloader-slices');
        this.rocket = document.getElementById('preloader-rocket');
        
        this.currentPercentage = 10;
        this.targetPercentage = 10;
        this.isComplete = false;
        this.isLoading = false;
        this.pageLoaded = false;
        this.animationId = null;
        
        // Commands array
        this.commands = [
            'LAUNCHING YOUR ROI'
        ];
        this.currentCommand = '';
        
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
        
        // Устанавливаем начальное отображение
        this.updatePercentageDisplay();
        
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
        console.log('🎬 Запуск обратного отсчета от 10 до 1');
        
        // Плавная анимация от 10 до 1 за 3 секунды
        this.animateToPercentage(1, 3000);
        
        
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
        console.log('🎯 Завершение обратного отсчета до 0');
        
        // Завершаем обратный отсчет до 0
        this.animateToPercentage(0, 500);
        
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
            this.percentage.textContent = `${displayPercentage}`;
            
            // Update command based on counter ranges
            this.updateCommand(displayPercentage);
        }
    }
    
    updateCommand(percentage) {
        // Always show the single command throughout the countdown
        const newCommand = this.commands[0];
        
        // Only update if command changed
        if (newCommand !== this.currentCommand) {
            this.currentCommand = newCommand;
            this.showCommand(newCommand);
        }
    }
    
    showCommand(commandText) {
        if (this.command && commandText) {
            // Update text and show with fade effect (use innerHTML for <br> tags)
            this.command.innerHTML = commandText;
            this.command.classList.remove('visible');
            
            // Small delay to ensure smooth transition
            setTimeout(() => {
                this.command.classList.add('visible');
            }, 50);
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
        
        // Скрываем основной контент
        setTimeout(() => {
            if (this.percentage) this.percentage.style.opacity = '0';
            if (this.command) this.command.style.opacity = '0';
        }, 500);
        
        // Запускаем анимацию взлета ракеты
        setTimeout(() => {
            this.startRocketTakeoff();
        }, 800);
    }
    
    startRocketTakeoff() {
        console.log('🚀 Запуск анимации взлета ракеты');
        
        if (this.rocket) {
            // Добавляем класс для анимации взлета
            this.rocket.classList.add('takeoff');
            
            // Слушаем окончание анимации
            const handleAnimationEnd = () => {
                console.log('🚀 Ракета улетела, запускаем анимацию полос');
                this.rocket.removeEventListener('animationend', handleAnimationEnd);
                this.startSlicesAnimation();
            };
            
            this.rocket.addEventListener('animationend', handleAnimationEnd);
            
            // Fallback на случай, если событие animationend не сработает
            setTimeout(() => {
                if (this.rocket && this.rocket.classList.contains('takeoff')) {
                    console.log('🚀 Fallback: запускаем анимацию полос после взлета ракеты');
                    this.rocket.removeEventListener('animationend', handleAnimationEnd);
                    this.startSlicesAnimation();
                }
            }, 2500); // 2s анимация + 500ms запас
        } else {
            // Если ракета не найдена, скрываем прелоадер как обычно
            console.warn('⚠️ Элемент ракеты не найден, скрываем прелоадер');
            this.hide();
        }
    }
    
    startSlicesAnimation() {
        console.log('🎬 Запуск анимации расхождения штор');
        
        // Запускаем анимацию расхождения штор (они уже видимы)
        if (this.slices) {
            this.slices.classList.add('animate');
            
            // Скрываем прелоадер после завершения анимации штор
            setTimeout(() => {
                this.hide();
            }, 800); // Время анимации штор
        } else {
            // Если слайсы не найдены, скрываем прелоадер
            this.hide();
        }
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
