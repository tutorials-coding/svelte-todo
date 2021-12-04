import {writable} from 'svelte/store';

export const todoItems = writable([], () => {
	console.log('subscribed');
	return () => console.log('unsubscribe');
});