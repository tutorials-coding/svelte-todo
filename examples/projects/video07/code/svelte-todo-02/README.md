#  `writable store`

Обсуждение второго параметра функции`writable`. Это callback-функция, которая вызывается, когда количество
подписчиков меняется с `0` на `1`. Т.е. когда впервые вызывается функция `subscribe`. Эта callback-функция 
возвращает другую функцию, которая вызовется, когда количество подписчиков уменьшиться с `1` до `0`. Она вызовется, когда произойдёт событие `onDestroy`.
