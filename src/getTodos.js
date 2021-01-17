import { v4 as uuid } from 'uuid'

export default function getTodos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject(new Error('Error 500'))
      resolve([{
          id: uuid(),
          text: 'Todo Item 1 received from server'
        }, {
          id: uuid(),
          text: 'Todo Item 2 received from server'
        }, {
          id: uuid(),
          text: 'Todo Item 3 received from server'
      }])
    }, 1000)
  })
}
