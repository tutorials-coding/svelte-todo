
import { cubicIn } from 'svelte/easing';
import { interpolateLab } from 'd3-interpolate';

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

export function typewriter(node, { speed = 100 }) {
  const isValid = (
    node.childNodes.length === 1 &&
    node.childNodes[0].nodeType === Node.TEXT_NODE
  );

  if (!isValid) {
    throw new Error('Please provide plain text as a child');
  }

  const text = node.textContent;
  const duration = text.length * speed;

  return {
    duration,
    tick: t => {
      const i = Math.round(text.length * t);     
      node.textContent = text.slice(0, i);
    },
    css: t => {
      // use color from to as params
      const color = interpolateLab('#64ad80', '#faf792')(t)
      console.log(color)
      return `
        color: ${color};
      `
    }
  };
}