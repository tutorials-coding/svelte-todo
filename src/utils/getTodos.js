import { v4 as uuid } from 'uuid'
 
export function getTodos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: uuid(),
          text: 'Todo item 1 from server',
          done: false
        },
        {
          id: uuid(),
          text: 'Todo item 2 from server',
          done: true
        },
        {
          id: uuid(),
          text: 'Todo item 3 from server',
          done: false
        }
      ])
    }, 500)
  })
}