<script>
	import {onMount} from "svelte";
	import TodoItem from "./TodoItem.svelte";
	import { getTodos } from '../utils/getTodos';

	let items = [];

	onMount(() => getTodos().then((value) => (items = value)));
</script>

{#if items.length === 0}
	No items yet.
{:else}
	{#each items as item}
		<TodoItem title={item.text} />
	{/each}
{/if}

<style>
</style>
