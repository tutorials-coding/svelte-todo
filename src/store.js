import { writable } from 'svelte/store';
import { v4 as uuid } from 'uuid'

function createTodoStore() {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    add: text => update(items => [...items, {
      id: uuid(),
      text,
      checked: false,
    }]),
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

export const todoItems = createTodoStore();
export const userName = writable('')
