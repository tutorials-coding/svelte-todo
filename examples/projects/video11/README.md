# API контекста - Svelte Context API

[![API контекста - Svelte Context API](https://img.youtube.com/vi/olyPCoIdgT0/0.jpg)](https://youtu.be/olyPCoIdgT0 "API контекста - Svelte Context API")

 В этом видео рассматриваем возможности контекста Svelte, функции `setContext`, `getContext` и `hasContext`, а также применение CSS классов по условию.


Контекст даёт возможность компонентам передавать друг другу сообщения без необходимости передавать данные через всю иерархию компонентов, т.е. от родителя к потомкам.

Любой дочерний компонент может получить значение контекста с помощью функции `getContext` с помощью ключа. В качестве ключа может быть любой тип данных.

Методы `setContext`и `getContext` должны вызываться только при инициализации компонента.

## Команда запуска приложения
`npm run dev`

## Адрес приложения
`http://localhost:5000/`

## Примеры

1. [Пример №1](code/svelte-todo-01)
2. [Пример №2](code/svelte-todo-02)
3. [Пример №3](code/svelte-todo-03)
4. [Пример №4](code/svelte-todo-04)
5. [Пример №5](code/svelte-todo-05)
6. [Пример №6](code/svelte-todo-06)
