<script>
	
	import { v4 as uuid } from "uuid";
	import TodoItem from "./TodoItem.svelte";
	import { getTodos } from "../utils/getTodos";

	let items = getTodos();

</script>

{#await items then _items}
	{#each _items as { id, text }, index (id)}
		<TodoItem title={`${index + 1}: ${text}`} />
	{:else}
		No items yet.
	{/each}
{/await}
