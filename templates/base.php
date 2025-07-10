<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <!-- SEO Meta Tags -->
    <title><?php echo isset($pageTitle) ? $pageTitle : 'Lucrative Legal Group'; ?></title>
    <meta name="description" content="<?php echo isset($pageDescription) ? $pageDescription : 'Профессиональные юридические услуги и маркетинг для юридических фирм'; ?>">
    <meta name="keywords" content="<?php echo isset($pageKeywords) ? $pageKeywords : 'юридические услуги, маркетинг для юристов, реклама юридических услуг'; ?>">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="<?php echo isset($pageTitle) ? $pageTitle : 'Lucrative Legal Group'; ?>">
    <meta property="og:description" content="<?php echo isset($pageDescription) ? $pageDescription : 'Профессиональные юридические услуги и маркетинг для юридических фирм'; ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo isset($pageUrl) ? $pageUrl : ''; ?>">
    <meta property="og:image" content="<?php echo isset($pageImage) ? $pageImage : '/assets/images/og-image.jpg'; ?>">
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php echo isset($pageTitle) ? $pageTitle : 'Lucrative Legal Group'; ?>">
    <meta name="twitter:description" content="<?php echo isset($pageDescription) ? $pageDescription : 'Профессиональные юридические услуги и маркетинг для юридических фирм'; ?>">
    <meta name="twitter:image" content="<?php echo isset($pageImage) ? $pageImage : '/assets/images/twitter-image.jpg'; ?>">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/assets/images/favicon/favicon.ico">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon/favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicon/apple-touch-icon.png">
    
    <!-- Preconnect для оптимизации загрузки шрифтов -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <!-- CSS -->
    <link rel="stylesheet" href="/assets/css/main.css">

    <!-- GSAP Library -->
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/ScrollTrigger.min.js"></script>

    <!-- Lenis for Smooth Scrolling -->
    <script src="https://unpkg.com/lenis@1.1.5/dist/lenis.min.js"></script>
    
    <!-- Дополнительные CSS файлы для конкретных страниц -->
    <?php if (isset($additionalCSS) && is_array($additionalCSS)): ?>
        <?php foreach ($additionalCSS as $cssFile): ?>
            <link rel="stylesheet" href="<?php echo $cssFile; ?>">
        <?php endforeach; ?>
    <?php endif; ?>
    
    <!-- Structured Data (JSON-LD) -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Lucrative Legal Group",
        "url": "<?php echo isset($siteUrl) ? $siteUrl : ''; ?>",
        "logo": "<?php echo isset($siteUrl) ? $siteUrl : ''; ?>/assets/images/logo.png",
        "description": "Профессиональные юридические услуги и маркетинг для юридических фирм",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": ["English", "Russian"]
        }
    }
    </script>
    
    <!-- Дополнительные скрипты в head -->
    <?php if (isset($headScripts) && is_array($headScripts)): ?>
        <?php foreach ($headScripts as $script): ?>
            <?php echo $script; ?>
        <?php endforeach; ?>
    <?php endif; ?>
</head>

<body data-page="<?php echo isset($bodyDataPage) ? $bodyDataPage : 'default'; ?>" <?php echo isset($bodyClass) ? 'class="' . $bodyClass . '"' : ''; ?>>
    
    <!-- Magic Cursor -->
    <div id="magic-cursor">
        <div id="ball"></div>
    </div>
    
    <!-- Прелоадер -->
    <?php include __DIR__ . '/../components/shared/preloader.php'; ?>
    
    <!-- Основное содержимое страницы -->
    <div class="page-wrapper">
        
        <!-- Шапка сайта -->
        <?php include __DIR__ . '/../components/shared/header.php'; ?>
        
        <!-- Основной контент -->
        <main class="main-content">
            <?php echo $content; ?>
        </main>
        
        <!-- Подвал сайта -->
        <?php include __DIR__ . '/../components/shared/footer.php'; ?>
        
    </div>
    
    <!-- JavaScript -->
    <script type="module" src="/assets/js/main.js"></script>
    
    <!-- Дополнительные JavaScript файлы -->
    <?php if (isset($additionalJS) && is_array($additionalJS)): ?>
        <?php foreach ($additionalJS as $jsFile): ?>
            <script <?php echo strpos($jsFile, 'type="module"') !== false ? '' : 'defer'; ?> src="<?php echo $jsFile; ?>"></script>
        <?php endforeach; ?>
    <?php endif; ?>
    
    <!-- Inline скрипты -->
    <?php if (isset($inlineScripts) && is_array($inlineScripts)): ?>
        <?php foreach ($inlineScripts as $script): ?>
            <script><?php echo $script; ?></script>
        <?php endforeach; ?>
    <?php endif; ?>
    
    
</body>
</html>
