# Lucrative Legal Group - Website v2.0

Современный, модульный и масштабируемый веб-сайт для Lucrative Legal Group, построенный с использованием чистого PHP, CSS и JavaScript.

## 🏗️ Архитектура

Проект использует модульную архитектуру с разделением на компоненты, что обеспечивает:
- Легкость поддержки и развития
- Переиспользование кода
- Готовность к миграции на WordPress
- Соблюдение принципов DRY и SOLID

## 📁 Структура проекта

```
v2.0/
├── assets/                 # Статические ресурсы
│   ├── css/               # Стили
│   │   ├── base/          # Базовые стили
│   │   ├── components/    # Стили компонентов
│   │   ├── pages/         # Стили страниц
│   │   └── main.css       # Главный CSS файл
│   ├── js/                # JavaScript
│   │   ├── components/    # JS компонентов
│   │   ├── pages/         # JS страниц
│   │   └── main.js        # Главный JS файл
│   ├── images/            # Изображения
│   └── fonts/             # Шрифты
├── components/            # PHP компоненты
│   ├── shared/           # Общие компоненты
│   └── home/             # Компоненты главной страницы
├── templates/            # Шаблоны
│   └── base.php          # Базовый шаблон
├── docs/                 # Документация
└── index.php             # Главная страница
```

## 🚀 Быстрый старт

### Требования
- PHP 7.4 или выше
- Веб-сервер (Apache/Nginx)
- Современный браузер с поддержкой ES6 модулей

### Установка
1. Скопируйте папку `v2.0` на ваш веб-сервер
2. Убедитесь, что веб-сервер настроен на обслуживание PHP файлов
3. Откройте `index.php` в браузере

### Локальная разработка
```bash
# Если у вас установлен PHP
cd v2.0
php -S localhost:8000

# Откройте http://localhost:8000 в браузере
```

## 🎨 Стили кода

### CSS (БЭМ методология)
```css
/* Блок */
.header { }

/* Элемент */
.header__logo { }

/* Модификатор */
.header--dark { }
```

### JavaScript (ES6 модули)
```javascript
// Используем const по умолчанию
const element = document.querySelector('.selector');

// let только при переназначении
let counter = 0;

// Функции в camelCase
function initHomePage() { }

// Обязательные точки с запятой
console.log('Hello World');
```

### PHP (PSR-12)
```php
<?php
// Комментарии на русском для сложной логики
function renderComponent($data) 
{
    // Логика компонента
    return $html;
}
?>
```

## 📱 Адаптивность

Сайт полностью адаптивен и оптимизирован для:
- Десктоп (1200px+)
- Планшеты (768px - 1199px)
- Мобильные устройства (до 767px)

## ⚡ Производительность

### Оптимизации
- Модульная загрузка JavaScript
- CSS импорты для лучшей организации
- Ленивая загрузка изображений
- Минимальные зависимости

### Метрики
- Lighthouse Score: 90+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s

## 📦 Управление версиями (Git)

### Репозиторий
**GitHub:** https://github.com/evgeniydoronin/lucrativelegal_v2.git

### Стратегия ветвления (Git Flow)

Мы используем модифицированную стратегию Git Flow для организации разработки:

#### Основные ветки
- **`main`** - Основная ветка, содержит только стабильный, готовый к продакшену код
- **`develop`** - Ветка для разработки, куда сливаются все завершенные и протестированные фичи

#### Feature ветки
- **`feature/название-секции`** - Ветки для каждой новой задачи/секции
  - Примеры: `feature/hero-section`, `feature/case-studies`, `feature/awards-section`
  - Создаются от `develop`
  - После завершения и тестирования сливаются обратно в `develop`

### Рабочий процесс

#### 1. Начало работы над новой секцией
```bash
# Переключиться на develop и получить последние изменения
git checkout develop
git pull origin develop

# Создать новую feature ветку
git checkout -b feature/название-секции

# Начать разработку...
```

#### 2. Во время разработки
```bash
# Регулярные коммиты с описательными сообщениями
git add .
git commit -m "feat: добавить базовую структуру hero секции"

# Отправить изменения на GitHub
git push origin feature/название-секции
```

#### 3. Завершение работы над секцией
```bash
# Убедиться, что все протестировано и работает
# Переключиться на develop
git checkout develop
git pull origin develop

# Слить feature ветку
git merge feature/название-секции

# Отправить изменения
git push origin develop

# Удалить feature ветку (опционально)
git branch -d feature/название-секции
git push origin --delete feature/название-секции
```

#### 4. Финальный релиз
```bash
# Когда все секции готовы, сливаем develop в main
git checkout main
git pull origin main
git merge develop
git push origin main

# Создать тег релиза
git tag -a v2.0 -m "Релиз версии 2.0"
git push origin v2.0
```

### Правила коммитов

Используем конвенцию Conventional Commits:

```bash
# Новая функциональность
git commit -m "feat: добавить прелоадер с анимацией"

# Исправление ошибки
git commit -m "fix: исправить двойную инициализацию прелоадера"

# Документация
git commit -m "docs: обновить README с Git workflow"

# Стили/форматирование
git commit -m "style: исправить отступы в CSS"

# Рефакторинг
git commit -m "refactor: оптимизировать производительность анимации"

# Тесты
git commit -m "test: добавить тесты для компонента header"
```

### Полезные команды

```bash
# Посмотреть текущую ветку и статус
git status
git branch

# Посмотреть историю коммитов
git log --oneline --graph

# Переключиться между ветками
git checkout develop
git checkout feature/hero-section

# Создать и переключиться на новую ветку
git checkout -b feature/новая-секция

# Посмотреть различия
git diff
git diff develop..feature/hero-section

# Отменить изменения (осторожно!)
git reset --hard HEAD  # отменить все незакоммиченные изменения
git reset --soft HEAD~1  # отменить последний коммит, сохранив изменения
```

### Пошаговые команды для завершения feature

Когда вы закончили работу над feature и готовы запушить изменения:

```bash
# 1. Проверить статус и убедиться, что вы в feature ветке
cd v2.0
git status

# 2. Добавить все изменения
git add .

# 3. Сделать коммит с описательным сообщением
git commit -m "feat: описание того что сделано"

# 4. Переключиться на develop
git checkout develop

# 5. Получить последние изменения из GitHub
git pull origin develop

# 6. Слить feature ветку в develop
git merge feature/название-вашей-ветки

# 7. Отправить изменения на GitHub
git push origin develop

# 8. Удалить локальную feature ветку (опционально)
git branch -d feature/название-вашей-ветки

# 9. Удалить feature ветку с GitHub (если она была отправлена)
git push origin --delete feature/название-вашей-ветки
```

**Пример реального использования:**
```bash
cd v2.0
git status
git add .
git commit -m "feat: разработан новый прелоадер с ракетой"
git checkout develop
git pull origin develop
git merge feature/preloader-rocket-animation
git push origin develop
git branch -d feature/preloader-rocket-animation
```

## 🔧 Разработка

### Добавление новой страницы
1. Создайте файл страницы (например, `about.php`)
2. Создайте CSS файл в `assets/css/pages/_about.css`
3. Создайте JS файл в `assets/js/pages/about.js`
4. Добавьте импорты в `main.css` и `main.js`

### Создание нового компонента
1. Создайте PHP файл в `components/shared/` или `components/[page]/`
2. Создайте CSS файл в `assets/css/components/`
3. При необходимости создайте JS файл в `assets/js/components/`
4. Добавьте комментарии `<!-- component-name start -->` и `<!-- component-name end -->`

### Структура компонента
```php
<!-- component-name start -->
<section class="component-name">
    <div class="component-name__container">
        <h2 class="component-name__title">Title</h2>
        <p class="component-name__text">Content</p>
    </div>
</section>
<!-- component-name end -->
```

## 🌐 Миграция на WordPress

Архитектура готова к миграции на WordPress:

### Компоненты → Template Parts
```php
// Текущий подход
include 'components/shared/header.php';

// WordPress подход
get_template_part('template-parts/header');
```

### Ассеты → functions.php
```php
// WordPress
function enqueue_assets() {
    wp_enqueue_style('main-css', get_template_directory_uri() . '/assets/css/main.css');
    wp_enqueue_script('main-js', get_template_directory_uri() . '/assets/js/main.js', [], '1.0', true);
}
add_action('wp_enqueue_scripts', 'enqueue_assets');
```

### Динамический контент → ACF
```php
// Статический контент
<h1>Заголовок</h1>

// WordPress + ACF
<h1><?php the_field('hero_title'); ?></h1>
```

## 🛠️ Инструменты разработки

### Рекомендуемые расширения VS Code
- PHP Intelephense
- Auto Rename Tag
- Bracket Pair Colorizer
- Live Server
- CSS Peek

### Полезные команды
```bash
# Поиск по файлам
grep -r "search-term" assets/

# Проверка синтаксиса PHP
php -l index.php

# Минификация CSS (если нужно)
cssnano assets/css/main.css assets/css/main.min.css
```

## 📋 Чеклист перед деплоем

- [ ] Проверить все ссылки
- [ ] Протестировать на мобильных устройствах
- [ ] Проверить производительность в Lighthouse
- [ ] Валидация HTML/CSS
- [ ] Проверить SEO метатеги
- [ ] Тестирование в разных браузерах

## 🐛 Отладка

### Включение отладки PHP
```php
// В начале файла
error_reporting(E_ALL);
ini_set('display_errors', 1);
```

### JavaScript отладка
```javascript
// Консоль браузера покажет все логи
console.log('Debug info');
```

## 📞 Поддержка

При возникновении вопросов или проблем:
1. Проверьте документацию в папке `docs/`
2. Изучите комментарии в коде
3. Обратитесь к архитектурному плану в `docs/architecture_plan.md`

## 📄 Лицензия

Проект разработан для Lucrative Legal Group. Все права защищены.

---

**Версия:** 2.0  
**Дата создания:** Июль 2025  
**Последнее обновление:** <?php echo date('d.m.Y'); ?>
