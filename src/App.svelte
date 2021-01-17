<script>
	import { v4 as uuid } from 'uuid'
	import AddTodoItem from './AddTodoItem.svelte'
	import TodoItem from './TodoItem.svelte'

	let items = []
	$: count = items.length;
	
	function handleAddTodoItem(event) {
    items = [...items, {
      id: uuid(),
      text: event.detail
    }]
	}
</script>

<AddTodoItem
	title='Please type todo here:'
	buttonTitle={`Add (${count})`}
	on:add={handleAddTodoItem}
/>

{#if count === 0}
  No items yet
{:else if count === 1}
  You have only one todo: {items[0].text}
{:else}
  <div>
    {#each items as { id, text }, index (id)}
      <TodoItem text={`${index + 1}: ${text}`} />
    {/each}
  </div>
{/if}


<style>
</style>