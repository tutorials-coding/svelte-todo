<script>
	import { onMount } from 'svelte'
	import AddTodoItem from './AddTodoItem.svelte'
	import TodoItem from './TodoItem.svelte'
	import { todoItems } from './store'
	import { todoStats } from './todoStatsStore'

	let mounted = false
	onMount(() => {
		mounted = true
	})

	function handleAddTodoItem(event) {
		todoItems.add(event.detail)
	}

	function handleItemChecked(id, checked) {
		todoItems.setCheckedStatus(id, checked)
	}

	function handleItemRemove(id) {
		todoItems.remove(id)
	}
</script>

<div class="add-todo-item-container">
	<AddTodoItem
		title='Please type todo here:'
		buttonTitle={`Add (${$todoStats.doneCount}/${$todoStats.totalCount})`}
		on:add={handleAddTodoItem}
	/>
</div>

{#if mounted}
	{#if $todoStats.totalCount === 0}
		No items yet
	{:else}
		<div class="todo-items-container">
			{#each $todoItems as { id, text, checked }, index (id)}
				<div class="todo-item-container">
					<TodoItem
						text={`${index + 1}: ${text}`}
						{checked}
						on:checked={event => handleItemChecked(id, event.detail)}
						on:remove={() => handleItemRemove(id)}
					/>
				</div>
			{/each}
		</div>
	{/if}
{/if}

<style>
	.add-todo-item-container {
		margin-bottom: 5px;
	}
	.todo-items-container:not(:last-child) > .todo-item-container {
		margin-bottom: 5px;
	}
</style>