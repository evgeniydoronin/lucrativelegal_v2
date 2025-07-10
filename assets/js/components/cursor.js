/**
 * Magic Cursor Component
 * Портировано и адаптировано из layout/assets/js/tp-cursor.js
 */

class MagicCursor {
    constructor() {
        this.isInitialized = false;
        this.isMobile = this.checkMobile();
        
        // Элементы курсора
        this.$ball = null;
        this.$magicCursor = null;
        
        // Позиции и настройки
        this.mouse = { x: 0, y: 0 };
        this.pos = { x: 0, y: 0 };
        this.ratio = 0.15; // задержка следования курсора
        this.active = false;
        
        // Настройки по умолчанию
        this.ballWidth = 14;
        this.ballHeight = 14;
        this.ballScale = 1;
        this.ballOpacity = 1;
        this.ballBorderWidth = 1;
        
        this.init();
    }
    
    checkMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
               window.innerWidth <= 768;
    }
    
    init() {
        // Не инициализируем на мобильных устройствах
        if (this.isMobile) {
            return;
        }
        
        // Проверяем наличие класса tp-magic-cursor на body
        if (!document.body.classList.contains('tp-magic-cursor')) {
            return;
        }
        
        // Получаем элементы
        this.$magicCursor = document.getElementById('magic-cursor');
        this.$ball = document.getElementById('ball');
        
        if (!this.$magicCursor || !this.$ball) {
            console.warn('Magic cursor elements not found');
            return;
        }
        
        this.setupCursor();
        this.setupMagneticItems();
        this.setupDataCursor();
        this.setupHideOnHover();
        this.setupDocumentEvents();
        
        this.isInitialized = true;
        console.log('Magic cursor initialized');
    }
    
    setupCursor() {
        // Устанавливаем начальные стили курсора
        gsap.set(this.$ball, {
            xPercent: -50,
            yPercent: -50,
            width: this.ballWidth,
            height: this.ballHeight,
            borderWidth: this.ballBorderWidth,
            opacity: this.ballOpacity
        });
        
        // Слушаем движение мыши
        document.addEventListener('mousemove', (e) => this.mouseMove(e));
        
        // Запускаем анимацию позиции
        gsap.ticker.add(() => this.updatePosition());
    }
    
    mouseMove(e) {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
    }
    
    updatePosition() {
        if (!this.active) {
            this.pos.x += (this.mouse.x - this.pos.x) * this.ratio;
            this.pos.y += (this.mouse.y - this.pos.y) * this.ratio;
            
            gsap.set(this.$ball, { x: this.pos.x, y: this.pos.y });
        }
    }
    
    setupMagneticItems() {
        // Оборачиваем магнитные элементы
        const magneticItems = document.querySelectorAll('.tp-magnetic-item');
        magneticItems.forEach(item => {
            if (!item.closest('.tp-magnetic-wrap')) {
                const wrapper = document.createElement('div');
                wrapper.className = 'tp-magnetic-wrap';
                item.parentNode.insertBefore(wrapper, item);
                wrapper.appendChild(item);
            }
        });
        
        // Добавляем класс not-hide-cursor к ссылкам с магнитным эффектом
        const magneticLinks = document.querySelectorAll('a.tp-magnetic-item');
        magneticLinks.forEach(link => {
            link.classList.add('not-hide-cursor');
        });
        
        // Настраиваем магнитный эффект
        const magneticWraps = document.querySelectorAll('.tp-magnetic-wrap');
        magneticWraps.forEach(wrap => {
            wrap.addEventListener('mousemove', (e) => {
                this.parallaxCursor(e, wrap, 2);
                this.callParallax(e, wrap);
            });
            
            wrap.addEventListener('mouseenter', (e) => {
                gsap.to(this.$ball, { 
                    duration: 0.3, 
                    scale: 2, 
                    borderWidth: 1, 
                    opacity: this.ballOpacity 
                });
                this.active = true;
            });
            
            wrap.addEventListener('mouseleave', (e) => {
                gsap.to(this.$ball, { 
                    duration: 0.3, 
                    scale: this.ballScale, 
                    borderWidth: this.ballBorderWidth, 
                    opacity: this.ballOpacity 
                });
                
                const magneticItem = wrap.querySelector('.tp-magnetic-item');
                if (magneticItem) {
                    gsap.to(magneticItem, { 
                        duration: 0.3, 
                        x: 0, 
                        y: 0, 
                        clearProps: "all" 
                    });
                }
                
                this.active = false;
            });
        });
    }
    
    callParallax(e, parent) {
        const target = parent.querySelector('.tp-magnetic-item');
        if (target) {
            this.parallaxIt(e, parent, target, 25);
        }
    }
    
    parallaxIt(e, parent, target, movement) {
        const boundingRect = parent.getBoundingClientRect();
        const relX = e.clientX - boundingRect.left;
        const relY = e.clientY - boundingRect.top;
        
        gsap.to(target, {
            duration: 0.3,
            x: ((relX - boundingRect.width / 2) / boundingRect.width) * movement,
            y: ((relY - boundingRect.height / 2) / boundingRect.height) * movement,
            ease: "power2.out"
        });
    }
    
    parallaxCursor(e, parent, movement) {
        const rect = parent.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;
        
        this.pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
        this.pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
        
        gsap.to(this.$ball, { duration: 0.3, x: this.pos.x, y: this.pos.y });
    }
    
    setupDataCursor() {
        // Определяем цвет курсора на основе классов на странице
        let cursorColor = '#fff';
        
        if (document.querySelector('.cursor-bg-red')) {
            cursorColor = '#FF535B';
        } else if (document.querySelector('.cursor-bg-red-2')) {
            cursorColor = '#FF481F';
        } else if (document.querySelector('.cursor-white-bg')) {
            cursorColor = '#FFF';
        } else if (document.querySelector('.cursor-bg-yellow')) {
            cursorColor = '#FFF669';
        }
        
        // Обрабатываем элементы с data-cursor
        const dataCursorElements = document.querySelectorAll('[data-cursor]');
        dataCursorElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.$ball.classList.add('with-blur');
                
                const ballView = document.createElement('div');
                ballView.className = 'ball-view';
                ballView.innerHTML = element.getAttribute('data-cursor');
                this.$ball.appendChild(ballView);
                
                gsap.to(this.$ball, {
                    duration: 0.3,
                    xPercent: this.isRTL() ? 50 : -50,
                    yPercent: -60,
                    width: 110,
                    height: 110,
                    opacity: 1,
                    borderWidth: 0,
                    zIndex: 1,
                    backdropFilter: "blur(14px)",
                    backgroundColor: cursorColor
                });
                
                gsap.to(ballView, { 
                    duration: 0.3, 
                    scale: 1, 
                    autoAlpha: 1 
                });
            });
            
            element.addEventListener('mouseleave', () => {
                const ballView = this.$ball.querySelector('.ball-view');
                
                gsap.to(this.$ball, {
                    duration: 0.3,
                    yPercent: -50,
                    width: this.ballWidth,
                    height: this.ballHeight,
                    opacity: this.ballOpacity,
                    borderWidth: this.ballBorderWidth,
                    backgroundColor: "#000"
                });
                
                if (ballView) {
                    gsap.to(ballView, {
                        duration: 0.3,
                        scale: 0,
                        autoAlpha: 0,
                        clearProps: "all",
                        onComplete: () => {
                            ballView.remove();
                        }
                    });
                }
                
                this.$ball.classList.remove('with-blur');
            });
            
            element.classList.add('not-hide-cursor');
        });
    }
    
    setupHideOnHover() {
        // Скрываем курсор при наведении на ссылки и кнопки
        const hideElements = document.querySelectorAll('a, button');
        hideElements.forEach(element => {
            // Пропускаем элементы с классами исключения
            if (element.classList.contains('cursor-hide') || 
                element.classList.contains('not-hide-cursor')) {
                return;
            }
            
            element.addEventListener('mouseenter', () => {
                gsap.to(this.$ball, { duration: 0.3, scale: 0, opacity: 0 });
            });
            
            element.addEventListener('mouseleave', () => {
                gsap.to(this.$ball, { 
                    duration: 0.3, 
                    scale: this.ballScale, 
                    opacity: this.ballOpacity 
                });
            });
        });
        
        // Скрываем курсор при клике на ссылки
        const clickElements = document.querySelectorAll('a');
        clickElements.forEach(element => {
            // Пропускаем определенные типы ссылок
            if (element.getAttribute('target') === '_blank' ||
                element.classList.contains('cursor-hide') ||
                element.getAttribute('href')?.startsWith('#') ||
                element.getAttribute('href')?.startsWith('mailto') ||
                element.getAttribute('href')?.startsWith('tel') ||
                element.classList.contains('lg-trigger') ||
                element.closest('.tp-btn-disabled')) {
                return;
            }
            
            element.addEventListener('click', () => {
                gsap.to(this.$ball, { duration: 0.3, scale: 1.3, autoAlpha: 0 });
            });
        });
    }
    
    setupDocumentEvents() {
        // Показываем/скрываем курсор при входе/выходе из документа
        document.addEventListener('mouseleave', () => {
            gsap.to(this.$magicCursor, { duration: 0.3, autoAlpha: 0 });
        });
        
        document.addEventListener('mouseenter', () => {
            gsap.to(this.$magicCursor, { duration: 0.3, autoAlpha: 1 });
        });
        
        // Показываем курсор при движении мыши
        document.addEventListener('mousemove', () => {
            gsap.to(this.$magicCursor, { duration: 0.3, autoAlpha: 1 });
        });
    }
    
    isRTL() {
        return document.documentElement.getAttribute('dir') === 'rtl';
    }
    
    // Публичные методы для управления курсором
    enable() {
        if (!this.isInitialized && !this.isMobile) {
            document.body.classList.add('tp-magic-cursor');
            this.init();
        }
    }
    
    disable() {
        if (this.isInitialized) {
            document.body.classList.remove('tp-magic-cursor');
            if (this.$magicCursor) {
                this.$magicCursor.style.display = 'none';
            }
        }
    }
    
    destroy() {
        if (this.isInitialized) {
            // Удаляем все обработчики событий и очищаем элементы
            gsap.ticker.remove(this.updatePosition);
            this.disable();
            this.isInitialized = false;
        }
    }
}

// Экспортируем класс
export default MagicCursor;

// Автоматическая инициализация при загрузке DOM
document.addEventListener('DOMContentLoaded', () => {
    // Создаем глобальный экземпляр курсора
    window.magicCursor = new MagicCursor();
});
