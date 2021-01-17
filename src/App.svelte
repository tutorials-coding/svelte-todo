<script>
	import AddTodoItem from './AddTodoItem.svelte'

	const addTodoItemProps = {
		title: 'Please type todo here:',
		buttonTitle: "Go!"
	}
</script>

<AddTodoItem
	{...addTodoItemProps}
/>

<style>
</style>