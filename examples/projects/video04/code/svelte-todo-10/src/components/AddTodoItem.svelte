<script>
	import TodoItem from "./TodoItem.svelte";
	import { getTodos } from "../utils/getTodos";

	let items = getTodos();

</script>

{#await items}
	<p>In progress...</p>
{:then _items}
	{#each _items as { id, text }, index (id)}
		<TodoItem title={`${index + 1}: ${text}`} />
	{:else}
		No items yet.
	{/each}	
{:catch}	
	Error
{/await}
