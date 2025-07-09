<?php
/**
 * Главная страница сайта
 * Собирает все компоненты и передает их в базовый шаблон
 */

// Начало буферизации вывода
ob_start();

// Подключаем компоненты для главной страницы в правильном порядке

// 1. Hero секция с видео
include 'components/home/hero-section.php';

// 2. Секция "Будущее генерации лидов"
?>
<!-- future-leads-section start -->
<section id="future-leads" class="home-section">
    <div class="home-section__container">
        <div class="home-section__header">
            <h2 class="home-section__title">Будущее генерации лидов в маркетинге</h2>
            <p class="home-section__subtitle">
                Представляем Rocket Leads - революционную систему привлечения клиентов для юридических фирм
            </p>
        </div>
        
        <div class="grid grid-2">
            <div class="card">
                <div class="card__icon">🚀</div>
                <div class="card__header">
                    <h3 class="card__title">Rocket Leads Technology</h3>
                    <p class="card__subtitle">Инновационная система</p>
                </div>
                <div class="card__content">
                    <p>Наша запатентованная технология Rocket Leads использует искусственный интеллект и машинное обучение для точного таргетинга потенциальных клиентов.</p>
                </div>
            </div>
            
            <div class="card">
                <div class="card__icon">📈</div>
                <div class="card__header">
                    <h3 class="card__title">Гарантированные результаты</h3>
                    <p class="card__subtitle">Проверенная эффективность</p>
                </div>
                <div class="card__content">
                    <p>Средний ROI наших клиентов составляет 500-5000%. Мы гарантируем результат или возвращаем деньги.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- future-leads-section end -->

<?php
// 3. Секция "Что нового в LLG в июле 2025"
?>
<!-- whats-new-section start -->
<section id="whats-new" class="home-section home-section--gray">
    <div class="home-section__container">
        <div class="home-section__header">
            <h2 class="home-section__title">Что нового в LLG в июле 2025</h2>
            <p class="home-section__subtitle">
                Последние обновления и новые возможности для наших клиентов
            </p>
        </div>
        
        <div class="grid grid-3">
            <div class="card">
                <div class="card__icon">🤖</div>
                <div class="card__header">
                    <h3 class="card__title">Saturn AI 2.0</h3>
                </div>
                <div class="card__content">
                    <p>Обновленная система искусственного интеллекта теперь поддерживает 47 языков и может обрабатывать звонки в режиме реального времени.</p>
                </div>
            </div>
            
            <div class="card">
                <div class="card__icon">📱</div>
                <div class="card__header">
                    <h3 class="card__title">Мобильное приложение</h3>
                </div>
                <div class="card__content">
                    <p>Новое мобильное приложение для отслеживания кампаний и управления лидами прямо с вашего телефона.</p>
                </div>
            </div>
            
            <div class="card">
                <div class="card__icon">⚡</div>
                <div class="card__header">
                    <h3 class="card__title">Быстрый запуск</h3>
                </div>
                <div class="card__content">
                    <p>Теперь мы можем запустить вашу рекламную кампанию всего за 24 часа вместо обычных 7 дней.</p>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- whats-new-section end -->

<?php
// 4. Секция наград и аккредитаций
?>
<!-- awards-section start -->
<section id="awards" class="home-section">
    <div class="home-section__container">
        <div class="home-section__header">
            <h2 class="home-section__title">Награды, достижения и аккредитации</h2>
            <p class="home-section__subtitle">
                Признание нашего профессионализма от ведущих организаций индустрии
            </p>
        </div>
        
        <div class="grid grid-4">
            <div class="card text-center">
                <div class="card__icon">🏆</div>
                <div class="card__header">
                    <h3 class="card__title">Google Partner</h3>
                </div>
                <div class="card__content">
                    <p>Сертифицированный партнер Google с премиум статусом</p>
                </div>
            </div>
            
            <div class="card text-center">
                <div class="card__icon">⭐</div>
                <div class="card__header">
                    <h3 class="card__title">AVVO Rating</h3>
                </div>
                <div class="card__content">
                    <p>Высший рейтинг на платформе AVVO для юридических услуг</p>
                </div>
            </div>
            
            <div class="card text-center">
                <div class="card__icon">🥇</div>
                <div class="card__header">
                    <h3 class="card__title">Martindale Partner</h3>
                </div>
                <div class="card__content">
                    <p>Партнер Martindale-Hubbell с рейтингом AV</p>
                </div>
            </div>
            
            <div class="card text-center">
                <div class="card__icon">🏅</div>
                <div class="card__header">
                    <h3 class="card__title">Clutch Awards</h3>
                </div>
                <div class="card__content">
                    <p>Лучшее агентство цифрового маркетинга 2024 по версии Clutch</p>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- awards-section end -->

<?php
// 5. Секция кейсов и результатов клиентов
?>
<!-- case-studies-section start -->
<section id="case-studies" class="home-section home-section--dark">
    <div class="home-section__container">
        <div class="home-section__header">
            <h2 class="home-section__title">Результаты наших клиентов</h2>
            <p class="home-section__subtitle">
                Реальные кейсы и достижения юридических фирм, работающих с нами
            </p>
        </div>
        
        <!-- Статистика -->
        <div class="stats mb-5">
            <div class="stats__item">
                <span class="stats__number">500%</span>
                <span class="stats__label">Средний ROI</span>
            </div>
            <div class="stats__item">
                <span class="stats__number">1,200+</span>
                <span class="stats__label">Довольных клиентов</span>
            </div>
            <div class="stats__item">
                <span class="stats__number">50,000+</span>
                <span class="stats__label">Дел в месяц</span>
            </div>
            <div class="stats__item">
                <span class="stats__number">24/7</span>
                <span class="stats__label">Поддержка</span>
            </div>
        </div>
        
        <!-- Кейсы клиентов -->
        <div class="grid grid-2">
            <div class="card">
                <div class="card__header">
                    <h3 class="card__title">Lassiter Law</h3>
                    <p class="card__subtitle">Наш местный герой 🏆</p>
                </div>
                <div class="card__content">
                    <p><strong>5,000% ROI</strong> месяц за месяцем</p>
                    <p><strong>Дела:</strong> Личные травмы ($3,000 - $5,000)</p>
                    <p><strong>Результат:</strong> 40-70 подписанных дел в месяц</p>
                    <p><strong>Лучший месяц:</strong> 79 дел</p>
                </div>
                <div class="card__footer">
                    <a href="https://lassiterlaw.com/" class="btn btn--outline btn--small" target="_blank">
                        Посетить сайт
                    </a>
                </div>
            </div>
            
            <div class="card">
                <div class="card__header">
                    <h3 class="card__title">Gaslamp Law Group</h3>
                    <p class="card__subtitle">Впечатляющие результаты</p>
                </div>
                <div class="card__content">
                    <p><strong>3,000% ROI</strong> месяц за месяцем</p>
                    <p><strong>Дела:</strong> Личные травмы и Lemon Law ($350 - $5,000)</p>
                    <p><strong>Результат:</strong> 20-75 подписанных дел в месяц</p>
                    <p><strong>Лучший месяц:</strong> 82 дела</p>
                </div>
                <div class="card__footer">
                    <a href="https://gaslamplaw.com/" class="btn btn--outline btn--small" target="_blank">
                        Посетить сайт
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- case-studies-section end -->

<?php
// 6. CTA секция
?>
<!-- cta-section start -->
<section class="cta-section">
    <div class="container">
        <h2 class="cta-section__title">
            Готовы увеличить поток клиентов?
        </h2>
        <p class="cta-section__text">
            Получите бесплатную консультацию и узнайте, как мы можем помочь вашей юридической фирме 
            привлечь больше качественных клиентов уже в этом месяце.
        </p>
        <div class="hero-section__actions">
            <a href="#contact" class="btn btn--outline btn--large">
                Получить консультацию
            </a>
            <a href="tel:+1234567890" class="btn btn--ghost btn--large">
                <span class="btn__icon">📞</span>
                Позвонить сейчас
            </a>
        </div>
    </div>
</section>
<!-- cta-section end -->

<?php
// Получаем содержимое буфера
$content = ob_get_clean();

// Настройки страницы
$pageTitle = "Lucrative Legal Group - Маркетинг для юридических фирм";
$pageDescription = "Профессиональный маркетинг для юридических фирм. ROI 500-5000%. Rocket Leads технология. Получите больше клиентов уже сегодня.";
$pageKeywords = "маркетинг для юристов, реклама юридических услуг, Google Ads для адвокатов, SEO для юридических фирм, генерация лидов";
$bodyDataPage = "home";

// Подключаем базовый шаблон
include 'templates/base.php';
?>
