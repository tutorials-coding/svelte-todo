<script>
	import {onMount, createEventDispatcher} from 'svelte';

	export let title = "Enter what do you want to do:";
	export let buttonTitle = "Add todo";

	const dispatch = createEventDispatcher();
	let text = '';
	
	function handleAddClick(){
		dispatch('add', text);
	}
	function handleResetClick(){
		dispatch('reset');
	}

	
</script>

<div class="main-container">
	<label for="todo-text">{title}</label>
	<input
		class="todo-input"
		id="todo-text"
		bind:value={text}
		
	/>
	<button type="button" on:click={handleAddClick}>{buttonTitle}</button>
	<button type="button" on:click={handleResetClick}>Reset Todo list</button>

</div>

<style>
	.main-container {
		background-color: lightseagreen;
		border-radius: 5px;
		padding: 10px;
	}
</style>