# <svelte:window>

Будем отслеживать нажатие клавиш.


Также можно получать доступ к следующим параментрам экрана:

<svelte:window bind:scrollX={scrollX} />
<svelte:window bind:scrollX={scrollY} />

scrollX
scrollY

## Данные только для чтения

innerWidhth
innerHeight
outerWidhth
outerHeight
online - сокращение для window.navigator.online
