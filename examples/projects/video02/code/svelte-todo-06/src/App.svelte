<script>
	import AddTodoItem from "./components/AddTodoItem.svelte";
	export let name;

	const props = {
		title: "What to do?",
		buttonTitle: "Go!",
		someProp: "some prop value"
	};
</script>

<main>
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>
<AddTodoItem {...props} />

<style>

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>