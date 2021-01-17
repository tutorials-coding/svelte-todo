<script>
	import { onMount } from 'svelte'
	import { v4 as uuid } from 'uuid'
	import AddTodoItem from './AddTodoItem.svelte'
	import TodoItem from './TodoItem.svelte'
	import getTodos from './getTodos'
	import { onInterval }  from './interval'

	let items = []
	let counter = 0
	$: count = items.length;
	$: checkedCount = items.filter(({ checked }) => checked).length

	onInterval(() => {
		counter++
	}, 1000)

	onMount(async () => {
		items = await getTodos()
	})
	
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

<p>{counter}</p>
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
