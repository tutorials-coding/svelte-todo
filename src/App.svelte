<script>
	import { v4 as uuid } from 'uuid'
	import AddTodoItem from './AddTodoItem.svelte'
	import TodoItem from './TodoItem.svelte'
	import { todoItems, mousePosition } from './store'

	$: count = $todoItems.length;
	$: checkedCount = $todoItems.filter(({ checked }) => checked).length
	
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

<p>{JSON.stringify($mousePosition, null, 2)}</p>
<AddTodoItem
	title='Please type todo here:'
	buttonTitle={`Add (${checkedCount}/${count})`}
	on:add={handleAddTodoItem}
/>

{#if count === 0}
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
