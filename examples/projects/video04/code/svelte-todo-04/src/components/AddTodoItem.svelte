<script>
	import { tick } from "svelte";
	import { format } from "../utils/format";
	
	let items = [];
	function handleClick(){
        items.push('item');
        items = items;
    }

    $: console.log(items);
</script>

<div class="main-container">
	<button type="button" on:click={handleClick}>"Add todo"</button>
</div>

{#if items.length === 0}
No items yet.
{:else if items.length === 4}
You have 4 item to do.
{:else}
{JSON.stringify(items, null, 2)}
{/if}

<style>
	.main-container {
		background-color: lightseagreen;
		border-radius: 5px;
		padding: 10px;
	}
	
</style>
