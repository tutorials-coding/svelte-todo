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

{@debug items}
{JSON.stringify(items, null, 2)}

<style>
	.main-container {
		background-color: lightseagreen;
		border-radius: 5px;
		padding: 10px;
	}
	
</style>
