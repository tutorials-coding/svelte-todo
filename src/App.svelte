<script>
	import { v4 as uuid } from 'uuid'
	import AddTodoItem from './AddTodoItem.svelte'
	import TodoItem from './TodoItem.svelte'

	let items = [{
			id: uuid(),
			text: 'First Item',
			done: false,
		}, {
			id: uuid(),
			text: 'Second Item',
			checked: true,
		}]
	$: count = items.length;
	$: checkedCount = items.filter(({ checked }) => checked).length
	
	function handleAddTodoItem(event) {
    items = [...items, {
      id: uuid(),
			text: event.detail,
			checked: false,
    }]
	}

	function handleItemChecked(id, checked) {
		items = items.map(item => (item.id === id
			? ({
				...item,
				checked
			})
			: item
		))
	}
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
