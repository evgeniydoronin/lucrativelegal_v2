<?php
// v2.0 Services Data based on 06-services-area.md
$servicesData = [
    [
        'id' => 'aggressive-case-generation',
        'title' => 'Aggressive Case Generation',
        'subtitle' => 'Google Ads for Attorneys',
        'description' => 'Google Ads for Attorneys. Aggressive case generation through targeted Google Ads.',
        'detailed_description' => 'Агрессивная генерация дел через таргетированную рекламу Google Ads. Наши сертифицированные специалисты по Google AdWords работают один на один с каждым клиентом, обеспечивая максимальную конверсию и привлечение новых клиентов.',
        'theme' => 'google-ads',
        'link' => '#',
        'icon' => 'assets/images/services/element-079.png',
        'video' => 'https://www.w3schools.com/html/mov_bbb.mp4'
    ],
    [
        'id' => 'law-firm-brand',
        'title' => 'Building Your Law Firm\'s BRAND',
        'subtitle' => 'Social Media Marketing for Law Firms',
        'description' => 'Social Media Marketing for Law Firms. Building brand and digital presence through social media.',
        'detailed_description' => 'Построение бренда и цифрового присутствия через социальные сети. Создаем узнаваемый образ вашей юридической фирмы в цифровом пространстве, привлекаем целевую аудиторию и формируем доверие к вашим услугам.',
        'theme' => 'social-media',
        'link' => '#',
        'icon' => 'assets/images/services/element-012.png',
        'video' => 'https://www.w3schools.com/html/mov_bbb.mp4'
    ],
    [
        'id' => 'quality-content-seo',
        'title' => 'Quality Content & SEO',
        'subtitle' => 'State-of-the-Art SEO for Lawyers',
        'description' => 'State-of-the-Art SEO for Lawyers. Quality content and natural case lead funnels through SEO.',
        'detailed_description' => 'Качественный контент и естественные воронки привлечения клиентов через SEO. Создаем высококачественный контент, который не только привлекает поисковые системы, но и убеждает потенциальных клиентов выбрать именно вас.',
        'theme' => 'seo',
        'link' => '#',
        'icon' => 'assets/images/services/element-016.png',
        'video' => 'https://www.w3schools.com/html/mov_bbb.mp4'
    ],
    [
        'id' => 'local-market-domination',
        'title' => 'Dominating Your Local Market',
        'subtitle' => 'Local Service Ads for Attorneys',
        'description' => 'Local Service Ads for Attorneys. Dominating the local market through local service ads.',
        'detailed_description' => 'Доминирование на локальном рынке через местную рекламу. Используем передовые стратегии локального маркетинга для обеспечения вашего превосходства над конкурентами в вашем географическом регионе.',
        'theme' => 'local-ads',
        'link' => '#',
        'icon' => 'assets/images/services/element-017.png',
        'video' => 'https://www.w3schools.com/html/mov_bbb.mp4'
    ],
    [
        'id' => 'google-maps-leads',
        'title' => 'Maximum Lead Generation Real Estate',
        'subtitle' => 'Google Local MAPS',
        'description' => 'Google Local MAPS. Controlling maximum lead generation real estate on searches.',
        'detailed_description' => 'Контроль максимального пространства для генерации лидов в поиске через Google Local MAPS. Обеспечиваем максимальную видимость вашей фирмы в локальных поисковых результатах и картах Google.',
        'theme' => 'google-maps',
        'link' => '#',
        'icon' => 'assets/images/services/element-024.png',
        'video' => 'https://www.w3schools.com/html/mov_bbb.mp4'
    ],
    [
        'id' => 'traditional-advertising',
        'title' => 'Traditional Advertising',
        'subtitle' => 'Over 100 Years of Combined TV, Radio, and Billboard Purchasing Experience',
        'description' => 'Over 100 Years of Combined TV, Radio, and Billboard Purchasing Experience.',
        'detailed_description' => 'Традиционная реклама с более чем 100-летним опытом. Наши специалисты имеют десятилетия опыта в размещении рекламы на телевидении, радио и билбордах, обеспечивая максимальную эффективность ваших рекламных кампаний.',
        'theme' => 'traditional-ads',
        'link' => '#',
        'icon' => 'assets/images/services/element-026.png',
        'video' => 'https://www.w3schools.com/html/mov_bbb.mp4'
    ],
    [
        'id' => 'live-intake-teams',
        'title' => 'Live Intake Teams',
        'subtitle' => '24/7/365 Live Case Qualifying Intake Specialists in English & Spanish',
        'description' => '24/7/365 Live Case Qualifying Intake Specialists in English & Spanish.',
        'detailed_description' => 'Команды приема звонков на английском и испанском языках 24/7/365. Наши квалифицированные специалисты работают круглосуточно, обеспечивая профессиональный прием звонков и первичную квалификацию потенциальных клиентов.',
        'theme' => 'live-intake',
        'link' => '#',
        'icon' => 'assets/images/services/element-008.png',
        'video' => 'https://www.w3schools.com/html/mov_bbb.mp4'
    ],
    [
        'id' => 'advanced-ai',
        'title' => 'The Industry\'s Most Advanced AI',
        'subtitle' => 'Saturn AI Allows Law Firms to Take Calls in Any Language and Obtain Signed Client Files',
        'description' => 'Saturn AI allows law firms to take calls in any language and obtain signed client files.',
        'detailed_description' => 'Самый продвинутый ИИ в индустрии - Saturn AI. Революционная технология, позволяющая юридическим фирмам принимать звонки на любом языке и автоматически получать подписанные клиентские файлы, значительно упрощая процесс работы с клиентами.',
        'theme' => 'saturn-ai',
        'link' => '#',
        'icon' => 'assets/images/services/element-030.png',
        'video' => 'https://www.w3schools.com/html/mov_bbb.mp4'
    ]
];
?>

<!-- HugeInc Services Cards Effect area start -->
<section id="services" data-component-name="section-our-work" class="hugeinc-services-section relative overflow-hidden">
    <!-- Контейнер для прокрутки -->
    <div class="pin-spacer">
        <div class="js-cards-viewer">
            <ul class="js-cards-list">
                <?php foreach ($servicesData as $index => $service): ?>
                <!-- Card <?php echo $index + 1; ?>: <?php echo $service['title']; ?> -->
                <li class="js-card" 
                    data-service-id="<?php echo $service['id']; ?>"
                    data-cursor="View<br>Details">
                    <div class="card-content">
                        <!-- Image in the center of the screen -->
                        <img src="<?php echo $service['icon']; ?>" 
                             alt="<?php echo $service['title']; ?>" 
                             class="js-card-image">
                        
                        <!-- Scrolling title -->
                        <h2 class="js-scroll-title"><?php echo $service['title']; ?></h2>
                        
                        <!-- Description in the bottom right corner -->
                        <p class="js-card-description">
                            <?php echo $service['description']; ?>
                        </p>
                    </div>
                </li>
                <?php endforeach; ?>
            </ul>

            <!-- Card counter -->
            <div class="card-counter">
                <span class="js-client-number"><span class="js-client-number-units">01</span>/<?php echo count($servicesData); ?></span>
            </div>
        </div>
    </div>
</section>
<!-- HugeInc Services Cards Effect area end -->

<?php
// Include service modal component once per page
include __DIR__ . '/../shared/service-modal.php';
?>
