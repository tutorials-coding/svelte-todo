import {writable} from 'svelte/store';
import { v4 as uuid } from 'uuid';

function createTodoStore(){
	
	const store = writable(
		Array.from({length: 3}, (_, index) =>({
			id: uuid(),
			text: `Todo item ${++index} from server`
		}))
	);
	const {subscribe, update} = store;
	
	return {
		subscribe,

		add: (text) => {
			update(items => {
				return [...items, {
						id: uuid(),
						text,
						done: false,
					},
				];
			});
	
		},
		setDone: (id, done) => {
			update(items => {
				return items.map(item => {
					if(item.id === id){
						return {
							...item, done
						}
					} else {
						return item
					}
				});
			});
		},
		remove: (id) => {
			update(items => {
				return items.filter(item =>  item.id !== id	);
			});
		},
		set: (items)=>{
			store.set(items);
		}
	}
}

export const todoItems = createTodoStore();