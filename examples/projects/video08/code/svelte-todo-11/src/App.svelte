<script>
	import AddTodoItem from './components/AddTodoItem.svelte';
	import TodoItem from './components/TodoItem.svelte';
	import { todoItems } from './store/customStore'
	import { todoStats } from './store/todoStats'


	function handleAddClick(event) {
		todoItems.add(event.detail);
	}

	function handleDoneChange(id, done){
		todoItems.setDone(id,done);
	}

	function handleRemove(id){
		todoItems.remove(id);
	}

	function handleResetClick(){
		todoItems.set([]);
	}

	
</script>

<AddTodoItem on:add={handleAddClick} on:reset={handleResetClick} />
<div>
	<b>{$todoStats.doneCount} / {$todoStats.totalCount}</b>
</div>

{#each $todoItems as { id, text, done }, index (id)}
	<div class="todo-item-container">
		<TodoItem 
			title={`${index + 1}: ${text}`} 
			{done}
			on:doneChange={event => handleDoneChange(id, event.detail)}
			on:remove={() => handleRemove(id)}
			/>
	</div>
{:else}
	No items yet.
{/each}

<style>
	.todo-item-container {
		margin-top: 5px;
		margin-bottom: 5px;
	}
</style>
