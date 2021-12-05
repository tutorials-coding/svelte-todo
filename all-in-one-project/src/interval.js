import { onDestroy } from 'svelte'

export function onInterval(cb, ms) {
  const interval = setInterval(cb, ms)
  onDestroy(() => {
    clearInterval(interval)
  })
}
