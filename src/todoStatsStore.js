import { derived } from 'svelte/store'
import { todoItems } from './store'

export const todoStats = derived(
  [todoItems],
  ([todoItems]) => {
    const doneCount = todoItems.filter(item => item.checked).length
    const totalCount = todoItems.length
    return {
      doneCount,
      totalCount,
      leftTodoCount: totalCount - doneCount
    }
  }
)