import { writable } from 'svelte/store';
import { v4 as uuid } from 'uuid'

export function createTodoItemsStore() {
  const { subscribe, set, update } = writable([{
    id: uuid(),
    text: 'Learn JS',
    checked: false,
  }, {
    id: uuid(),
    text: 'Learn Svelte',
    checked: true,
  }]);

  return {
    subscribe,
    add: text => update(items => [...items, {
      id: uuid(),
      text,
      checked: false,
    }]),
    remove: id => update(items => items.filter(item => item.id !== id)),
    setCheckedStatus: (id, checked) => {
      update(items => items.map(item => (item.id === id
        ? ({
          ...item,
          checked
        })
        : item
      ))) 
    }
  };
}
