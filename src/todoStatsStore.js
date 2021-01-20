import { derived } from 'svelte/store'
import { todoItems } from './store'

export const todoStats = derived(
  [todoItems],
  ([todoItems]) => {
    const doneItems = todoItems.filter(item => item.checked)
    const doneCount = doneItems.length
    const totalCount = todoItems.length
    return {
      doneCount,
      totalCount,
      leftTodoCount: totalCount - doneCount,
      doneItems,
      notDoneItems: todoItems.filter(item => !item.checked)
    }
  }
)