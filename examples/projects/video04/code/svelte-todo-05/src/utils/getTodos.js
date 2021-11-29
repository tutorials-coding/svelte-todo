import { v4 as uuid } from 'uuid';

export function getTodos() {
	let counter  = 0;
	 return new Promise((resolve) => {
		 setTimeout(() => {
			resolve([
				{
					id: uuid(),
					text: `Todo item ${++counter}`	
				},
				{
					id: uuid(),
					text: `Todo item ${++counter}`	
				},
				{
					id: uuid(),
					text: `Todo item ${++counter}`	
				},
			])
    }, 1000)
	})
}