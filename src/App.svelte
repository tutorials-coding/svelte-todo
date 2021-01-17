<script>
	import { v4 as uuid } from 'uuid'
	import AddTodoItem from './AddTodoItem.svelte'
	import TodoItem from './TodoItem.svelte'

	let items = []
	$: count = items.length;
	
	function handleAddTodoItem(event) {
    items = [...items, {
      id: uuid(),
			text: event.detail,
			done: false,
    }]
	}

	function handleItemChecked(id, checked) {
		items = items.map(item => (item.id === id
			? ({
				...item,
				done: checked
			})
			: item
		))
	}
</script>

<AddTodoItem
	title='Please type todo here:'
	buttonTitle={`Add (${count})`}
	on:add={handleAddTodoItem}
/>

{#if count === 0}
  No items yet
{:else}
  <div>
    {#each items as { id, text }, index (id)}
			<TodoItem
				text={`${index + 1}: ${text}`}
				on:checked={event => handleItemChecked(id, event.detail)}
			/>
    {/each}
  </div>
{/if}
