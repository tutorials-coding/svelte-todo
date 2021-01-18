<script>
	import { v4 as uuid } from 'uuid'
	import AddTodoItem from './AddTodoItem.svelte'
	import TodoItem from './TodoItem.svelte'
	import { todoItems } from './store'
	import { todoStats } from './todoStatsStore'

	function handleAddTodoItem(event) {
		todoItems.update(items => [...items, {
      id: uuid(),
			text: event.detail,
			checked: false,
    }])
	}

	function handleItemChecked(id, checked) {
		todoItems.update(items => items.map(item => (item.id === id
			? ({
				...item,
				checked
			})
			: item
		))) 
	}
</script>

<AddTodoItem
	title='Please type todo here:'
	buttonTitle={`Add (${$todoStats.doneCount}/${$todoStats.totalCount})`}
	on:add={handleAddTodoItem}
/>

{#if $todoStats.totalCount === 0}
  No items yet
{:else}
  <div>
		{#each $todoItems as { id, text, checked }, index (id)}
			<TodoItem
				text={`${index + 1}: ${text}`}
				{checked}
				on:checked={event => handleItemChecked(id, event.detail)}
			/>
    {/each}
  </div>
{/if}
