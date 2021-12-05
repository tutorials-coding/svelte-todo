<script>
	import { onDestroy } from "svelte";
	import { v4 as uuid } from "uuid";
	import AddTodoItem from "./components/AddTodoItem.svelte";
	import TodoItem from "./components/TodoItem.svelte";
	import { todoItems } from "./store/store";

	let items = [];

	const unsubsribe = todoItems.subscribe(value => items = value);

	onDestroy(() => unsubsribe());

	function handleAddClick(event) {
		todoItems.update(items => {
			return [...items, {
					id: uuid(),
					text: event.detail,
					done: false,
				},
			];
		});
	}

	function handleDoneChange(id, done){
		todoItems.update(items => {
			return items.map(item => {
				if(item.id === id){
					return {
						...item, done
					}
				} else {
					return item
				}
			});
		});
	}

	function handleRemove(id){
		todoItems.update(items => {
			return items.filter(item =>  item.id !== id	);
		});
	}

	function handleResetClick(){
		todoItems.set([]);
	}

	function handleClose(){
		const thisItem = this.parentNode;
		//console.log(thisItem);
		thisItem.parentNode.removeChild(thisItem);
		
	}
</script>
<button type="button" on:click="{handleClose}">Close App</button>
<AddTodoItem on:add={handleAddClick} on:reset={handleResetClick} />
<div>
	<b>{items.filter((item) => item.done).length} / {items.length}</b>
</div>

{#each items as { id, text, done }, index (id)}
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
