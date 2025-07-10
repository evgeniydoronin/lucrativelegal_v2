// HugeInc Effect - Services Cards Scrolling
export function initServicesSlider() {
    'use strict';

    // Check for necessary libraries
    function checkDependencies() {
        if (typeof gsap === 'undefined') {
            console.error('Services Slider: GSAP is not loaded.');
            return false;
        }
        if (typeof ScrollTrigger === 'undefined') {
            console.error('Services Slider: ScrollTrigger is not loaded.');
            return false;
        }
        if (typeof Lenis === 'undefined') {
            console.warn('Services Slider: Lenis is not loaded. Smooth scroll will be disabled.');
        }
        return true;
    }

    // Initialize Lenis for smooth scrolling
    function initLenis() {
        if (typeof Lenis === 'undefined') return null;

        const lenis = new Lenis({
            duration: 5.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
        });

        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);
        
        console.log('✅ Lenis initialized for smooth scrolling.');
        return lenis;
    }

    // Main function to initialize the cards effect
    function initCardsEffect() {
        const section = document.querySelector('.hugeinc-services-section');
        if (!section) return;

        const pinSpacer = section.querySelector('.pin-spacer');
        const cardsViewer = section.querySelector('.js-cards-viewer');
        const cards = section.querySelectorAll('.js-card');
        const clientNumberEl = section.querySelector('.js-client-number');

        if (!pinSpacer || !cardsViewer || cards.length === 0) {
            console.error('Services Slider: Required elements for the effect are not found.');
            return;
        }

        // Set pin-spacer height based on cards and take fixed header into account
        const spacerHeight = cards.length * 100; // 100vh per card (faster entrance)
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 0;

        // Extra headerHeight so последняя карточка полностью прокручивается
        pinSpacer.style.height = `calc(${spacerHeight}vh + ${headerHeight}px)`;

        // Move sticky viewer below fixed header
        if (headerHeight) {
            cardsViewer.style.top = `${headerHeight}px`;
            cardsViewer.style.height = `calc(100vh - ${headerHeight}px)`;
        }

        const mainTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: pinSpacer,
                start: 'top top',
                end: 'bottom bottom',
                scrub: 2,
                pin: cardsViewer,
                anticipatePin: 1,
                onUpdate: (self) => updateCardCounter(self.progress, cards.length),
            }
        });

        cards.forEach((card, index) => {
            const image = card.querySelector('.js-card-image');
            const description = card.querySelector('.js-card-description');
            const scrollTitle = card.querySelector('.js-scroll-title');

            gsap.set(card, { opacity: 0, visibility: 'hidden' });
            gsap.set([image], { opacity: 0, y: 50 });
            gsap.set(description, { opacity: 0, x: 50 });
            if (scrollTitle) {
                gsap.set(scrollTitle, { opacity: 0, y: '75vh' });
            }

            const startTime = index / cards.length;
            const endTime = (index + 1) / cards.length;
            const duration = 1 / cards.length;

            const appearanceDuration = duration * 0.35;
            const disappearanceDuration = duration * 0.25;

            // Card appearance
            mainTimeline.to(card, {
                opacity: 1,
                visibility: 'visible',
                duration: appearanceDuration * 0.3,
                ease: 'power2.out'
            }, startTime);

            // Elements animation
            mainTimeline.to(image, {
                opacity: 1,
                y: 0,
                duration: appearanceDuration * 0.4,
                ease: 'power2.out'
            }, startTime + appearanceDuration * 0.1);

            mainTimeline.to(description, {
                opacity: 1,
                x: 0,
                duration: appearanceDuration * 0.5,
                ease: 'power2.out'
            }, startTime + appearanceDuration * 0.1);

            // Scrolling title animation
            if (scrollTitle) {
                mainTimeline.fromTo(scrollTitle, {
                    opacity: 1,
                    y: '75vh'
                }, {
                    y: '-75vh',
                    duration: duration,
                    ease: 'none'
                }, startTime);
                mainTimeline.set(scrollTitle, { opacity: 1 }, startTime);
                if (index < cards.length - 1) {
                    mainTimeline.set(scrollTitle, { opacity: 0 }, endTime);
                }
            }

            // Card disappearance
            if (index < cards.length - 1) {
                const disappearanceStart = endTime - disappearanceDuration;
                mainTimeline.to([description], {
                    opacity: 0,
                    x: -50,
                    duration: disappearanceDuration * 0.5,
                    ease: 'power2.out'
                }, disappearanceStart);

                mainTimeline.to([image], {
                    opacity: 0,
                    y: 50,
                    duration: disappearanceDuration * 0.4,
                    ease: 'power2.out'
                }, disappearanceStart + disappearanceDuration * 0.2);

                mainTimeline.to(card, {
                    opacity: 0,
                    visibility: 'hidden',
                    duration: disappearanceDuration * 0.3,
                    ease: 'power2.out'
                }, disappearanceStart + disappearanceDuration * 0.7);
            }
        });

        function updateCardCounter(progress, totalCards) {
            if (!clientNumberEl) return;
            const currentCard = Math.floor(progress * totalCards) + 1;
            const clampedCard = Math.min(currentCard, totalCards);
            const totalPadded = totalCards.toString().padStart(2, '0');
            clientNumberEl.innerHTML = `<span class="js-client-number-units">${clampedCard.toString().padStart(2, '0')}</span>/${totalPadded}`;
        }
        
        console.log('✅ Services Slider initialized.');
        
        // Initialize modal functionality
        initServiceModal();
    }

    // Service Modal functionality
    function initServiceModal() {
        const cards = document.querySelectorAll('.js-card');
        const modal = document.getElementById('service-modal');
        const closeBtn = modal?.querySelector('.service-modal__close');
        const modalTitle = modal?.querySelector('#service-modal-title');
        const modalSubtitle = modal?.querySelector('#service-modal-subtitle');
        const modalDescription = modal?.querySelector('#service-modal-description');
        const modalVideo = modal?.querySelector('#service-modal-video');
        const modalImage = modal?.querySelector('#service-modal-image');
        const modalCategory = modal?.querySelector('#service-modal-category');

        if (!modal) {
            console.warn('Service modal element not found');
            return;
        }

        // Add click listeners to service cards
        cards.forEach(card => {
            card.addEventListener('click', () => {
                const serviceId = card.dataset.serviceId;
                
                // Get service data from JSON
                const servicesDataScript = document.getElementById('services-data');
                if (!servicesDataScript) {
                    console.error('Services data not found');
                    return;
                }
                
                let servicesData;
                try {
                    servicesData = JSON.parse(servicesDataScript.textContent);
                } catch (e) {
                    console.error('Error parsing services data:', e);
                    return;
                }
                
                const serviceData = servicesData[serviceId];
                if (!serviceData) {
                    console.error('Service data not found for:', serviceId);
                    return;
                }

                // Populate modal content
                if (modalTitle) modalTitle.textContent = serviceData.title;
                if (modalSubtitle) modalSubtitle.textContent = serviceData.subtitle;
                if (modalCategory) modalCategory.textContent = serviceData.category;
                
                // Set description
                const modalDescriptionEl = modal?.querySelector('#service-modal-description');
                if (modalDescriptionEl) {
                    modalDescriptionEl.textContent = serviceData.description;
                }
                
                // Set benefits
                const modalBenefits = modal?.querySelector('#service-modal-benefits');
                if (modalBenefits && serviceData.benefits) {
                    modalBenefits.innerHTML = serviceData.benefits
                        .map(benefit => `<li>${benefit}</li>`)
                        .join('');
                }
                
                // Set approach
                const modalApproach = modal?.querySelector('#service-modal-approach');
                if (modalApproach) {
                    modalApproach.innerHTML = `<p>${serviceData.approach}</p>`;
                }
                
                // Set results
                const modalResults = modal?.querySelector('#service-modal-results');
                if (modalResults) {
                    modalResults.innerHTML = `<p>${serviceData.results}</p>`;
                }
                
                // Set image source and theme
                const imageWrapper = modal?.querySelector('.service-modal__image-wrapper');
                const leftColumn = modal?.querySelector('.service-modal__left');
                
                if (modalImage && serviceData.image) {
                    modalImage.src = serviceData.image;
                    modalImage.alt = serviceData.title;
                }
                
                // Apply theme to both left column and image wrapper for background
                if (imageWrapper) {
                    imageWrapper.setAttribute('data-theme', serviceId);
                }
                if (leftColumn) {
                    leftColumn.setAttribute('data-theme', serviceId);
                }
                
                // Set video source
                if (modalVideo && serviceData.video) {
                    const videoSource = modalVideo.querySelector('source');
                    if (videoSource) {
                        videoSource.src = serviceData.video;
                        modalVideo.load(); // Reload video with new source
                    }
                }
                
                // Set YouTube video
                const youtubeFrame = modal?.querySelector('#service-modal-youtube');
                if (youtubeFrame && serviceData.youtube) {
                    youtubeFrame.src = `https://www.youtube.com/embed/${serviceData.youtube}`;
                }

                // Show modal using native dialog API
                showModal();
            });
        });

        // Close modal handlers
        if (closeBtn) {
            closeBtn.addEventListener('click', hideModal);
        }

        // ESC key to close modal (handled automatically by dialog element)
        modal.addEventListener('cancel', (e) => {
            e.preventDefault(); // Prevent default ESC behavior
            hideModal();
        });

        // Close on backdrop click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                hideModal();
            }
        });

        function showModal() {
            // Сбросить позицию обычного скролла для content
            const modalContent = modal?.querySelector('.service-modal__content');
            if (modalContent) {
                modalContent.scrollTop = 0;
            }
            
            // Block body scroll when modal opens
            document.body.style.overflow = 'hidden';
            modal.showModal();
        }

        function hideModal() {
            // Restore body scroll when modal closes
            document.body.style.overflow = '';
            modal.close();
            
            // Сбросить позицию обычного скролла при закрытии
            const modalContent = modal?.querySelector('.service-modal__content');
            if (modalContent) {
                modalContent.scrollTop = 0;
            }
            
            // Pause video when modal closes
            if (modalVideo) {
                modalVideo.pause();
                modalVideo.currentTime = 0;
            }
            
            // Stop YouTube video when modal closes
            const youtubeFrame = modal?.querySelector('#service-modal-youtube');
            if (youtubeFrame) {
                youtubeFrame.src = ''; // Stops the video
            }
        }

        console.log('✅ Service Modal initialized.');
    }

    // Debounced resize handler
    function handleResize() {
        ScrollTrigger.refresh();
    }

    // Main initialization logic
    if (!checkDependencies()) return;

    gsap.registerPlugin(ScrollTrigger);
    const globalLenis = initLenis();
    initCardsEffect();

    // Re-calculate after all assets (images/fonts) are loaded
    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
    });

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleResize, 250);
    });
}
