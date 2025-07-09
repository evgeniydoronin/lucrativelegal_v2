# Изображения для сайта

Эта папка содержит все изображения, используемые на сайте.

## Структура папки

```
images/
├── favicon/           # Иконки сайта
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   └── apple-touch-icon.png
├── logo.png          # Основной логотип
├── logo-white.png    # Белый логотип для темного фона
├── og-image.jpg      # Изображение для Open Graph
├── twitter-image.jpg # Изображение для Twitter Card
└── hero/             # Изображения для hero секции
    └── hero-bg.jpg
```

## Требования к изображениям

### Логотипы
- **logo.png**: 200x60px, PNG с прозрачностью
- **logo-white.png**: 200x60px, PNG с прозрачностью, белый цвет

### Favicon
- **favicon.ico**: 32x32px, ICO формат
- **favicon-16x16.png**: 16x16px, PNG
- **favicon-32x32.png**: 32x32px, PNG
- **apple-touch-icon.png**: 180x180px, PNG

### Social Media
- **og-image.jpg**: 1200x630px, JPG, до 1MB
- **twitter-image.jpg**: 1200x675px, JPG, до 1MB

### Hero секция
- **hero-bg.jpg**: 1920x1080px, JPG, оптимизированный

## Оптимизация

Все изображения должны быть оптимизированы для веба:
- JPG: качество 80-85%
- PNG: сжатие с TinyPNG или подобными инструментами
- Использование WebP формата для современных браузеров (опционально)

## Генерация favicon

Для генерации всех размеров favicon можно использовать:
- [Favicon.io](https://favicon.io/)
- [RealFaviconGenerator](https://realfavicongenerator.net/)

## Примеры использования

```html
<!-- Логотип в header -->
<img src="/assets/images/logo.png" alt="Lucrative Legal Group" />

<!-- Favicon в head -->
<link rel="icon" type="image/x-icon" href="/assets/images/favicon/favicon.ico">

<!-- Open Graph -->
<meta property="og:image" content="/assets/images/og-image.jpg">
```

## Заглушки для разработки

Во время разработки можно использовать:
- [Placeholder.com](https://placeholder.com/) для временных изображений
- [Unsplash](https://unsplash.com/) для качественных фото
- [Pexels](https://pexels.com/) для бесплатных изображений

Пример заглушки:
```html
<img src="https://via.placeholder.com/200x60/007bff/ffffff?text=LOGO" alt="Logo" />
