import {readable} from 'svelte/store';

export const mousePosition = readable(
	{
		x: 0,
		y: 0
	}, (set) => {
		const handler = event => {
			set(
				{
					x: event.clientX,
					y: event.clientY
				}
			);
		};
		
		document.addEventListener('mousemove', handler);

		return () => document.removeEventListener('mousemove', handler);
	}
	);