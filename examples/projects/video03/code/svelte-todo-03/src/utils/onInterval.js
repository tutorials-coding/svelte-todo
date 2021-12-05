import { onDestroy } from 'svelte';

// cb - callback-function
// ms - milliseconds
export function onInterval(cb, ms) {
    const interval = setInterval(cb, ms);
    onDestroy(() => clearInterval(interval));
}