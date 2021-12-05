	import {derived} from 'svelte/store';
	import {todoItems} from './customStore';

	export const todoStats = derived (
		[todoItems],
		([todoItems]) => {
			const doneCount = todoItems.filter(item => item.done).length;
			const totalCount = todoItems.length;
			return {
				doneCount,
				totalCount,
				leftTodoCount: totalCount - doneCount
				}
		}
	);
