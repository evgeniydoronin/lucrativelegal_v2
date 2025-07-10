# Секция 06: What We Do / Services Area

## Статус: 🔄 В разработке

## Описание от клиента (письмо Ника)

> What We Do/Services Area: (this is supposed to be like the sliding area on https://www.hugeinc.com/ also see image below. Please also make it clickable where it opens up and there is content and video about each section.

**Дополнительное уточнение от Ника:**
> Do me a favor and take a look at the huge ink website that I sent you I'm gonna re-email you the link there's a section there where it's scrolling through companies a service like it says Google then it says I think Cialis then it says Nike that it says planet fitness, I want that same effect but I wanna be able to use it for our service areas like Google ads local service ads SCO content Social Media all that kind of stuff

## Техническое решение

- **Стиль:** Горизонтальный скролл как секция "Work" на hugeinc.com (Google, Planet Fitness, etc.)
- **Эффект:** Карточки с изображениями, которые прокручиваются горизонтально
- **Интерактивность:** Кликабельные карточки с раскрытием детального контента
- **Медиа:** Видео для каждой услуги
- **Адаптивность:** Полностью адаптивный дизайн
- **Референс:** Секция "Work — Ambitious work for ambitious brands" на hugeinc.com

## Контент (8 услуг)

### 1. Aggressive Case Generation
**Заголовок:** Aggressive Case Generation  
**Подзаголовок:** Google Ads for Attorneys  
**Описание:** Агрессивная генерация дел через таргетированную рекламу Google Ads

### 2. Building Your Law Firm's BRAND
**Заголовок:** Building Your Law Firm's BRAND and Digital Footprint  
**Подзаголовок:** Social Media Marketing for Law Firms  
**Описание:** Построение бренда и цифрового присутствия через социальные сети

### 3. Quality Content and Natural Case Lead Funnels
**Заголовок:** Quality Content and Natural Case Lead Funnels  
**Подзаголовок:** State-of-the-Art SEO for Lawyers  
**Описание:** Качественный контент и естественные воронки привлечения клиентов через SEO

### 4. Dominating Your Local Market
**Заголовок:** Dominating Your Local Market  
**Подзаголовок:** Local Service Ads for Attorneys  
**Описание:** Доминирование на локальном рынке через местную рекламу

### 5. Controlling Maximum Lead Generation Real Estate
**Заголовок:** Controlling Maximum Lead Generation Real Estate on Searches  
**Подзаголовок:** Google Local MAPS  
**Описание:** Контроль максимального пространства для генерации лидов в поиске

### 6. Traditional Advertising and Media Buys
**Заголовок:** Traditional Advertising and Media Buys  
**Подзаголовок:** Over 100 Years of Combined TV, Radio, and Billboard Purchasing Experience  
**Описание:** Традиционная реклама с более чем 100-летним опытом

### 7. Live Intake Teams
**Заголовок:** Live Intake Teams in English & Spanish  
**Подзаголовок:** 24/7/365 Live Case Qualifying Intake Specialists Answer and Sign Your Retainers  
**Описание:** Команды приема звонков на английском и испанском языках 24/7/365

### 8. The Industry's Most Advanced AI
**Заголовок:** The Industry's Most Advanced AI  
**Подзаголовок:** Saturn AI Allows Law Firms to Take Calls in Any Language and Obtain Signed Client Files  
**Описание:** Самый продвинутый ИИ в индустрии - Saturn AI

## Задачи реализации

### Этап 1: Подготовка компонентов
- [ ] Создать компонент `components/home/services-section.php`
- [ ] Создать JavaScript модуль `assets/js/components/services-slider.js`
- [ ] Создать стили `assets/css/components/_services.css`

### Этап 2: Структура данных
- [ ] Создать PHP массив с данными всех 8 услуг
- [ ] Добавить плейсхолдеры для видео каждой услуги
- [ ] Подготовить иконки/изображения для каждой услуги

### Этап 3: Интерактивность
- [ ] Реализовать горизонтальный скролл/слайдер
- [ ] Добавить кликабельность элементов
- [ ] Создать модальные окна или раскрывающиеся секции
- [ ] Интегрировать видеоплеер

### Этап 4: Стилизация
- [ ] Адаптировать дизайн под стиль hugeinc.com
- [ ] Добавить анимации и переходы
- [ ] Обеспечить адаптивность для всех устройств
- [ ] Протестировать на разных браузерах

## Файлы для изменения

### Новые файлы:
- `v2.0/components/home/services-section.php`
- `v2.0/assets/js/components/services-slider.js`
- `v2.0/assets/css/components/_services.css`

### Изменения в существующих файлах:
- `v2.0/index.php` - заменить заглушку на компонент
- `v2.0/assets/css/main.css` - импорт новых стилей
- `v2.0/assets/js/main.js` - инициализация слайдера

## Зависимости

- **Видео контент:** Нужны видео для каждой из 8 услуг от клиента
- **Изображения:** Иконки или изображения для каждой услуги
- **hugeinc.com анализ:** Изучить исходный код для понимания механики

## Детальное описание эффекта hugeinc.com

На hugeinc.com в секции "Work" есть горизонтальный скролл с карточками клиентов:
- **Google** - "Defining the future of Google by driving their most ambitious initiatives"
- **NBCU** - "Introducing an Intelligent Experience to the 2024 Paris Olympics"  
- **McDonald's** - "Driving digital transformation to create a multi-billion dollar sales channel"
- **UNC Health** - "Making wellness accessible, wherever people live"
- **Android** - "Reintroducing Android to users through the power of self-expression"
- **LPGA** - "Modernizing LPGA's digital presence to unify platforms, engage fans and drive revenue"
- **Hublot** - "Business transformation designed to disrupt a sector steeped in tradition"
- **Planet Fitness** - "Creating the world's most accessible and inclusive fitness experience"

**Ник хочет такой же эффект, но вместо клиентов - наши услуги:**
- Google Ads
- Local Service Ads  
- SEO
- Content Marketing
- Social Media
- И т.д.

## Примечания

- Секция должна быть полностью интерактивной
- Каждый элемент должен раскрываться с подробной информацией
- Видео должны воспроизводиться в модальном окне или встроенном плеере
- Дизайн должен соответствовать общему стилю сайта
- **ВАЖНО:** Точно повторить эффект горизонтального скролла из секции "Work" на hugeinc.com

## Ссылки

- **Референс:** https://www.hugeinc.com/
- **Текущая заглушка:** `v2.0/index.php` секция `#services`

---

## 🔍 РЕЗУЛЬТАТЫ ИССЛЕДОВАНИЯ

### 1. Анализ `hugeinc.com`
- **HTML-структура:** Секция "Work" (`section-our-work`) использует `<ul>` со списком `<li>`, каждый из которых представляет карточку клиента. Используется `position: sticky` и `pin-spacer` для фиксации секции во время скролла.
- **CSS-стили:** Горизонтальный скролл реализован через `transform: translate()` на JS, а не через нативный CSS скролл. Анимации появления и исчезновения карточек управляются через `opacity` и `transform: scale()`.
- **JavaScript-логика:** Используется GSAP и Lenis для плавной прокрутки и сложных анимаций. Логика отслеживает позицию скролла и динамически изменяет стили карточек, создавая эффект "липкого" горизонтального скролла.

### 2. Анализ старой реализации (`layout/index.php`)
- **HTML-структура:** Секция `hugeinc-services-section` уже существует и содержит базовую разметку с `<ul>` и `<li>`.
- **CSS-стили:** Подключен файл `hugeinc-effect.css`, который содержит стили для горизонтального скролла.
- **JavaScript-логика:** Подключен `hugeinc-effect.js`, который управляет анимацией.

### 🎯 ВЫВОД ИССЛЕДОВАНИЯ
У нас есть отличная база для работы! Старая реализация уже содержит основные элементы, которые можно адаптировать и улучшить, используя более продвинутые техники с `hugeinc.com`.

---

## 📋 ДЕТАЛЬНЫЙ ПЛАН РЕАЛИЗАЦИИ "ПОД КЛЮЧ"

### ЭТАП 1: ПОДГОТОВКА КОМПОНЕНТОВ
- [ ] Создать компонент `v2.0/components/home/services-section.php`
- [ ] Создать JS-модуль `v2.0/assets/js/components/services-slider.js`
- [ ] Создать CSS-файл `v2.0/assets/css/components/_services.css`

### ЭТАП 2: СТРУКТУРА ДАННЫХ (в `services-section.php`)
- [ ] Создать PHP-массив `$services` с 8 услугами:
  ```php
  $services = [
      [
          'title' => 'Aggressive Case Generation',
          'subtitle' => 'Google Ads for Attorneys',
          'image' => 'v2.0/assets/images/services/google-ads.jpg',
          'video' => 'path/to/video1.mp4'
      ],
      // ... и так далее для всех 8 услуг
  ];
  ```

### ЭТАП 3: HTML-РАЗМЕТКА (в `services-section.php`)
- [ ] Создать основную секцию и контейнер:
  ```html
  <section id="services" class="services-section">
      <div class="services-container">
          <ul class="services-list">
              <?php foreach ($services as $service): ?>
                  <li class="service-item">
                      <div class="service-card">
                          <img src="<?= $service['image'] ?>" alt="<?= $service['title'] ?>">
                          <h3><?= $service['title'] ?></h3>
                          <p><?= $service['subtitle'] ?></p>
                      </div>
                  </li>
              <?php endforeach; ?>
          </ul>
      </div>
  </section>
  ```

### ЭТАП 4: CSS-СТИЛИ (в `_services.css`)
- [ ] Реализовать "липкий" контейнер и горизонтальный скролл:
  ```css
  .services-section {
      position: relative;
      height: 400vh; /* Высота для скролла */
  }
  .services-container {
      position: sticky;
      top: 0;
      height: 100vh;
      display: flex;
      align-items: center;
      overflow: hidden;
  }
  .services-list {
      display: flex;
      gap: 20px;
  }
  .service-item {
      flex: 0 0 300px; /* Ширина карточки */
  }
  ```

### ЭТАП 5: JAVASCRIPT-ЛОГИКА (в `services-slider.js`)
- [ ] Использовать GSAP и ScrollTrigger:
  ```javascript
  import gsap from 'gsap';
  import ScrollTrigger from 'gsap/ScrollTrigger';

  gsap.registerPlugin(ScrollTrigger);

  export function initServicesSlider() {
      const servicesList = document.querySelector('.services-list');
      const servicesItems = document.querySelectorAll('.service-item');

      gsap.to(servicesList, {
          x: () => -(servicesList.scrollWidth - window.innerWidth),
          ease: 'none',
          scrollTrigger: {
              trigger: '.services-section',
              pin: true,
              scrub: 1,
              end: () => `+=${servicesList.scrollWidth}`,
          },
      });
  }
  ```

### ЭТАП 6: ИНТЕГРАЦИЯ
- [ ] В `v2.0/index.php` заменить заглушку на `include 'components/home/services-section.php';`
- [ ] В `v2.0/assets/css/main.css` добавить `@import 'components/_services.css';`
- [ ] В `v2.0/assets/js/main.js` импортировать и инициализировать `initServicesSlider()`
- [ ] Протестировать на разных устройствах и браузерах
