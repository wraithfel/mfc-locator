# Описание проекта �️

MFC Locator — это SPA-приложение на React + Vite, которое позволяет пользователю быстро найти и отобразить на карте пять
ближайших многофункциональных центров «Мои документы» в Москве. Приложение автоматически определяет ваше местоположение
(с падбэком на центр города), вычисляет расстояния, предлагает фильтр «только ЦАО», отображает интерактивную карту на базе OpenStreetMap
и стилизовано с помощью styled-components. Кроме того, весь функционал покрыт unit-тестами (Jest + React Testing Library) и e2e-тестами (Cypress).

---

# Руководство для использования 🛠️

Данное руководство поможет быстро запустить проект, проверить функциональность и успешно прогнать все тесты.

---

## 📂 Структура проекта

```
mfc-locator
├─ cypress/                # E2E-тесты на Cypress
│  └─ e2e/                 # спецификации (app.cy.js)
├─ __mocks__/              # моки для Jest (fileMock.js, reactLeafletMock.js)
├─ __tests__/              # unit-тесты (App.test.jsx, OfficeCard.test.jsx)
├─ public/
│  └─ index.html
├─ src/
│  ├─ assets/              # логотип
│  ├─ components/          # React-компоненты (Header, OfficeCard, и т. д.)
│  ├─ data/                # offices.json
│  ├─ hooks/               # кастомные хуки (useGeolocation, useNearestOffices)
│  ├─ styles/              # theme.js, globalStyles.js
│  ├─ utils/               # helper-функции (distance.js)
│  ├─ App.jsx
│  └─ main.jsx
├─ babel.config.js         # Babel-пресеты для Jest
├─ cypress.config.js       # конфиг Cypress (baseUrl, specPattern)
├─ jest.config.mjs         # конфиг Jest (transform, moduleNameMapper)
├─ vite.config.js          # конфиг Vite + React plugin
└─ package.json            # скрипты и зависимости
```

---

## 🚀 Установка и запуск

1. **Клонировать репозиторий и перейти в папку**

   ```bash
   git clone <repo-url>
   cd mfc-locator
   ```

2. **Установить зависимости**

   ```bash
   npm install
   ```

3. **Запустить dev-сервер**

   ```bash
   npm run dev
   ```

   Откройте в браузере [http://localhost:5173](http://localhost:5173)

4. **Собрать production-версию**

   ```bash
   npm run build
   ```

5. **Локальный preview**

   ```bash
   npm run preview
   ```

---

## ✅ Unit-тесты (Jest)

* **Запуск:**

  ```bash
  npm run test
  ```
* **Что проверено:**

  * JSX и ESM из `react-leaflet` транспилируются через `babel-jest`.
  * Стили и ассеты (CSS, PNG, SVG) мокируются через `__mocks__/fileMock.js`.
  * Компоненты `OfficeCard` и `App` рендерятся без ошибок (ThemeProvider обёртка).

---

## 🧪 E2E-тесты (Cypress)

1. **Запустить dev-сервер** (если ещё не запущен):

   ```bash
   npm run dev
   ```
2. **Открыть GUI Cypress:**

   ```bash
   npm run cy:open
   ```
3. Cypress подождёт, пока `http://localhost:5173` станет доступен, и загрузит тесты из `cypress/e2e/app.cy.js`.

* **Запуск headless:**

  ```bash
  npm run cy:run
  ```

---

## 🎨 Особенности дизайна

* Градиентный хедер с логотипом
* «Воздушные», плавно парящие карточки МФЦ
* Адаптивная сетка офисов (auto-fill, minmax)
* Мягкие тени и плавные hover-эффекты
* Темизация через `src/styles/theme.js` (цвета, радиусы, breakpoint)
