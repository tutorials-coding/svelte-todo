<script>
	import AddTodoItem from './AddTodoItem.svelte'
	import TodoItem from './TodoItem.svelte'
	import { todoItems } from './store'
	import { todoStats } from './todoStatsStore'

	function handleAddTodoItem(event) {
		todoItems.add(event.detail)
	}

	function handleItemChecked(id, checked) {
		todoItems.setCheckedStatus(id, checked)
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
