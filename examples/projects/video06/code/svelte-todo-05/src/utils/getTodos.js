import { v4 as uuid } from 'uuid';

export function getTodos() {
	let counter  = 0;
	 return new Promise((resolve, reject) => {
		 setTimeout(() => {
			// if(Math.round(Math.random())){
			// 	reject(new Error('Error 500')) 
			// }
			resolve([
				{
					id: uuid(),
					text: `Todo item ${++counter}`,
					done:false	
				},
				{
					id: uuid(),
					text: `Todo item ${++counter}`,
					done: true	
				},
				{
					id: uuid(),
					text: `Todo item ${++counter}`,
					done:false		
				},
			])
    }, 500)
	})
}