# Демонстрация работы с методами `on`

- Рефакторинг. Перенесение части кода из `AddTodoItem` в `App`.
- Реализация передачи событий от дочерних элементов к родительским. Импорт функции `createEventDispatcher`. Использование события [CustomEvent](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent).
- Создание компонента `Form`, который объединяет input и button.