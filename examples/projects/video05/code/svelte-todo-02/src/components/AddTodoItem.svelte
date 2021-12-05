<script>
	import { onMount } from "svelte";
	import {v4 as uuid} from 'uuid';
	import TodoItem from "./TodoItem.svelte";
	import { getTodos } from "../utils/getTodos";

	export let title = "Enter what do you want to do:";

	let items = [];

	onMount(() => {
		const get = async () => {
			items = await getTodos();
		}
		get();
	});

	function handleAddClick(){
		items = [...items, {
			id: uuid(),
			text: 'Item text'
		}];
	}

</script>

<div class="main-container">
	<label for="todo-text">{title}</label>
	<input
		class="todo-input"
		id="todo-text"
		
	/>
	<button type="button" on:click={handleAddClick}>Add todo</button>
</div>

{#each items as { id, text }, index (id)}
	<TodoItem title={`${index + 1}: ${text}`} />
{:else}
	No items yet.
{/each}

<style>
	.main-container {
		background-color: lightseagreen;
		border-radius: 5px;
		padding: 10px;
	}
</style>
