<script>
	import { onDestroy, onMount } from 'svelte'
	import { v4 as uuid } from 'uuid'
	import AddTodoItem from './AddTodoItem.svelte'
	import TodoItem from './TodoItem.svelte'
	import { todoItems } from './store'

	let items = []
	const unsubscribe = todoItems.subscribe(value => {
		items = value
	})

	$: count = items.length;
	$: checkedCount = items.filter(({ checked }) => checked).length
	
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

	onDestroy(() => {
		unsubscribe()
	})
</script>

<AddTodoItem
	title='Please type todo here:'
	buttonTitle={`Add (${checkedCount}/${count})`}
	on:add={handleAddTodoItem}
/>

{#if count === 0}
  No items yet
{:else}
  <div>
		{#each items as { id, text, checked }, index (id)}
			<TodoItem
				text={`${index + 1}: ${text}`}
				{checked}
				on:checked={event => handleItemChecked(id, event.detail)}
			/>
    {/each}
  </div>
{/if}
