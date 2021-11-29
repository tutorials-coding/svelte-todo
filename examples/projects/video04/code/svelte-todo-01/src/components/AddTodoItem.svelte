<script>
	import { tick } from "svelte";
	import { format } from "../utils/format";
	
	export let title = "Enter <strong>what do you want to do:</strong>";

	let text = "";
	async function handleTextChange(event) {
		const { selectionStart, selectionEnd, value } = this;
		text = format(event.target.value);

		await tick();
		this.selectionStart = selectionStart;
		this.selectionEnd = selectionEnd;
	}
</script>

<div class="main-container">
	<label for="todo-text">{@html title}</label>
	<input
		class="todo-input"
		id="todo-text"
		value={text}
		on:input={handleTextChange}
	/>
</div>

<style>
	label {
		color: cornsilk;
		color: blueviolet;
	}
	.main-container {
		background-color: lightseagreen;
		border-radius: 5px;
		padding: 10px;
	}
	.todo-input {
		width: 100%;
	}
</style>
