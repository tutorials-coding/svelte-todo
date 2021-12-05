<script>
	import { onMount } from "svelte";
	import {v4 as uuid} from 'uuid';
	import AddTodoItem from "./components/AddTodoItem.svelte";
	import TodoItem from "./components/TodoItem.svelte";
	import { getTodos } from "./utils/getTodos";

	let items = [];

	onMount(() => {
		const get = async () => {
			items = await getTodos();
		}
		get();
	});

	function handleAddClick(event){
		items = [...items, {
			id: uuid(),
			text: event.detail,
			done: false,
		}];
	}

</script>

<AddTodoItem on:add={handleAddClick}  />
<div>
	<b>{items.filter(item => item.done).length} / {items.length}</b>
</div>


{#each items as { id, text, done }, index (id)}
	<div class="todo-item-container">
		<TodoItem 
			title={`${index + 1}: ${text}`} 
			bind:done={done} />
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