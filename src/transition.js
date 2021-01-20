
import { cubicIn } from 'svelte/easing';

export function custom(node, { duration }) {
  return {
    duration,
    css: t => {
      const eased = cubicIn(t);
      return `
        transform: scale(${eased}) skewX(${eased * 180}deg);
      `
    }
  };
}