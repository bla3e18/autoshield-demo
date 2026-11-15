 ---

  # 🛡️ AutoShield — B2B Калькулятор & Дашборд автосервиса

  ![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=for-the-badge&logo=typescript)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
  ![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel)

  Интерактивный B2B-инструмент для локального бизнеса (автосервиса), включающий калькулятор стоимости услуг в реальном времени,
  форму захвата лидов и встроенный мини-дашборд с ключевыми бизнес-метриками.

  ---

  ## ✨ Основные возможности

  - 🧮 **Интерактивный калькулятор**: Динамический расчёт стоимости в зависимости от типа услуги, типа кузова и времени ремонта.
  - 📬 **Форма захвата лидов**: Валидация данных в реальном времени и отправка заявки через Server API.
  - 📊 **Real-time Мини-дашборд**: Отображение динамических бизнес-метрик (заявки, конверсия, средний чек, время обработки).
  - 🎨 **Современный UI/UX**: Стеклянный дизайн (Glassmorphism), неоновые градиенты, адаптивная верстка и плавные анимации.
  - ⚡ **Next.js 14 App Router**: Высокая скорость работы, серверные роуты (API Routes) и оптимизация.

  ---

  ## 🛠 Технологический стек

  * **Фреймворк:** [Next.js 14](https://nextjs.org/) (App Router)
  * **Язык:** [TypeScript](https://www.typescriptlang.org/)
  * **Стилизация:** [Tailwind CSS](https://tailwindcss.com/) + PostCSS
  * **Архитектура:** React Server Components (RSC) + Client Components
  * **Хостинг:** [Vercel](https://vercel.com/)

  ---

  ## 🚀 Быстрый запуск

  ### 1. Клонирование репозитория
  ```bash
  git clone https://github.com/bla3e18/autoshield-demo.git
  cd НАЗВАНИЕ_РЕПОЗИТОРИЯ

  2. Установка зависимостей

  npm install

  3. Запуск сервера разработки

  npm run dev
  Откройте http://localhost:3000 в вашем браузере.

  ---

  📂 Структура проекта

  ├── app/
  │   ├── api/          # Server API endpoints (/lead, /metrics)
  │   ├── globals.css   # Глобальные стили Tailwind и анимации
  │   ├── layout.tsx    # Главный лейаут приложения
  │   └── page.tsx      # Главный экран
  ├── components/
  │   ├── Calculator.tsx # Компонент калькулятора
  │   ├── Dashboard.tsx  # Компонент дашборда
  │   └── LeadForm.tsx   # Компонент формы заявки
  ├── public/           # Статические ресурсы
  ├── postcss.config.js # Конфигурация PostCSS
  └── tailwind.config.ts # Настройки Tailwind CSS

  ---

  👨‍💻 Автор: [bla3e18]

  ***
