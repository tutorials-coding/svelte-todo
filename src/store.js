import { writable, readable } from 'svelte/store';

export const todoItems = writable([]);

export const mousePosition = readable({
  x: 0,
  y: 0
}, function start(set) {

  const handler = (event) => {
    set({
      x: event.clientX,
      y: event.clientY
    })
  }

  document.addEventListener('mousemove', handler)

  return function stop() {
    document.removeEventListener('mousemove', handler)
  };
});
