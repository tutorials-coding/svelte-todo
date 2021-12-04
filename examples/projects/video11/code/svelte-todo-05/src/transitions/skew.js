import {quadIn} from 'svelte/easing';
// node - элемент, на которую будет применяться эффект
// Options
export function skew(node, {duration}) {
	return {
		duration,
		css: time => {
			const eased = quadIn(time);
			return `
				transform: scale(${eased}) skewX(${eased * 180}deg);
			`
		}
	}
}