# Секция 07: Types of Lawyers for Land Cases For

## Статус: 🔄 В разработке

## Описание от клиента (письмо Ника)

> Types of Lawyers for Land Cases For: (again, this section is supposed to be like the https://www.hugeinc.com/ and again, see the image below, have it slide in with images about that area of law and a button they can click to expand content and also videos about what we do for this area of law)

## Техническое решение

- **Стиль:** Интерактивный слайдер как на hugeinc.com (аналогично секции Services)
- **Интерактивность:** Слайд-ин эффекты с изображениями, кликабельные элементы
- **Медиа:** Видео о работе с каждым типом юристов
- **Адаптивность:** Полностью адаптивный дизайн

## Контент (8 типов юристов)

### 1. Personal Injury Law
**Заголовок:** Personal Injury Law  
**Подзаголовок:** We ROCK at landing quality MVA's and serious injury cases for accident attorneys  
**Описание:** Специализация на качественных делах о ДТП и серьезных травмах

### 2. Criminal Defense
**Заголовок:** Criminal Defense  
**Подзаголовок:** From DUI's and traffic tickets to white-collar crimes and major federal cases, we've got your firm covered  
**Описание:** От DUI и штрафов до белых воротничков и крупных федеральных дел

### 3. Family Law Lawyers
**Заголовок:** Family Law Lawyers  
**Подзаголовок:** Let us land you the high-paying divorce and family law legal cases you've been seeking  
**Описание:** Высокооплачиваемые дела о разводах и семейном праве

### 4. Lemon Law Cases
**Заголовок:** Lemon Law Cases  
**Подзаголовок:** Hands down we RULE at lemon law case leads, let us turn your sour campaigns sweet with cashable cases  
**Описание:** Лидеры в области Lemon Law - превращаем кислые кампании в сладкие дела

### 5. Workers' Compensation Attorneys
**Заголовок:** Workers' Compensation Attorneys  
**Подзаголовок:** We know injury law and workers' comp better than any other ad agency  
**Описание:** Знаем право травм и компенсации работникам лучше любого другого агентства

### 6. Estate Planning Lawyers
**Заголовок:** Estate Planning Lawyers  
**Подзаголовок:** Let us build your digital brand and presence so that you look presentable and confident to big-time estate planning clients  
**Описание:** Строим цифровой бренд для привлечения крупных клиентов по планированию наследства

### 7. Employment Law Lawyers
**Заголовок:** Employment Law Lawyers  
**Подзаголовок:** We understand the competitive nature of employment campaigns, let us land your firm the types of cases you want and weed out the ones you do not  
**Описание:** Понимаем конкурентную природу трудового права, привлекаем нужные дела

### 8. Immigration Attorneys
**Заголовок:** Immigration Attorneys  
**Подзаголовок:** Our staff is bilingual and we publish natural content and ads without AI in multiple languages, allowing us to dominate your market and drive you cases  
**Описание:** Двуязычный персонал, естественный контент на нескольких языках без ИИ

## Задачи реализации

### Этап 1: Подготовка компонентов
- [ ] Создать компонент `components/home/lawyer-types-section.php`
- [ ] Создать JavaScript модуль `assets/js/components/lawyer-types-slider.js`
- [ ] Создать стили `assets/css/components/_lawyer-types.css`

### Этап 2: Структура данных
- [ ] Создать PHP массив с данными всех 8 типов юристов
- [ ] Добавить плейсхолдеры для видео каждого типа
- [ ] Подготовить изображения для каждой области права

### Этап 3: Интерактивность
- [ ] Реализовать slide-in эффекты
- [ ] Добавить кликабельность элементов с раскрытием
- [ ] Создать модальные окна или раскрывающиеся секции
- [ ] Интегрировать видеоплеер для каждого типа

### Этап 4: Стилизация
- [ ] Адаптировать дизайн под стиль hugeinc.com
- [ ] Добавить анимации slide-in
- [ ] Обеспечить адаптивность для всех устройств
- [ ] Протестировать взаимодействие с секцией Services

## Файлы для изменения

### Новые файлы:
- `v2.0/components/home/lawyer-types-section.php`
- `v2.0/assets/js/components/lawyer-types-slider.js`
- `v2.0/assets/css/components/_lawyer-types.css`

### Изменения в существующих файлах:
- `v2.0/index.php` - заменить заглушку на компонент
- `v2.0/assets/css/main.css` - импорт новых стилей
- `v2.0/assets/js/main.js` - инициализация слайдера

## Зависимости

- **Видео контент:** Нужны видео о работе с каждым типом юристов от клиента
- **Изображения:** Изображения для каждой области права
- **hugeinc.com анализ:** Изучить slide-in эффекты
- **Координация с Services:** Обеспечить совместимость с секцией Services

## Особенности

- **Slide-in эффекты:** В отличие от Services, здесь нужны slide-in анимации
- **Изображения областей права:** Каждый тип должен иметь соответствующее изображение
- **Двуязычность:** Особое внимание к Immigration Attorneys (двуязычный контент)
- **Специализация:** Каждый тип имеет уникальную специализацию и подход

## Примечания

- Секция должна визуально отличаться от Services, но сохранять общий стиль
- Slide-in эффекты должны быть плавными и не конфликтовать с другими анимациями
- Видео должны показывать специфику работы с каждым типом юристов
- Дизайн должен подчеркивать экспертизу в каждой области права

## Ссылки

- **Референс:** https://www.hugeinc.com/
- **Текущая заглушка:** `v2.0/index.php` секция `#lawyer-types`
- **Связанная секция:** `06-services-area.md`
