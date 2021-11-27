<script>
	import { setContext } from 'svelte'
	import { crossfade } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing'

	import AddTodoItem from './components/AddTodoItem.svelte'
	import TodoItem from './components/TodoItem.svelte'
	import { todoItems } from './store/customStore'
	import { todoStats } from './store/todoStats'	
	import { flip } from 'svelte/animate'
	import BaseLayout from './layouts/BaseLayout.svelte'
	import Dir from './components/Dir.svelte'
	import { files } from './components/files'
	import Tabs from './components/tabs/Tabs.svelte'

	setContext('todos', todoItems)

	setContext('todo_user', {
		name: "John"
	})

	const [ send, receive ] = crossfade({
		duration: 250,
		fallback(node, params) {
			const style = getComputedStyle(node)
			const transform = style.transform === 'none' ? '' : style.transform

			return {
				duration: 250,
				easing: cubicIn,
				css: t => `
					transform: ${transform} scale(${t});
					opacity: ${t};
				`
			}
		}
	})

	function handleAddClick(event) {
		todoItems.add(event.detail)
	}
	
	function handleDoneChange(id, done) {
		todoItems.setDone(id, done)
	}

	function handleRemove(id) {
		todoItems.remove(id)
	}

	function handleKaydown(event) {
		console.log('===>', event.key)
	}
	
	function handleMouseenter(event) {
		console.log('===>', event)
	}
</script>

<svelte:window on:keydown={handleKaydown} />
<svelte:body on:mouseenter={handleMouseenter} />
<svelte:head>
	<title>Home page</title>
</svelte:head>

<Dir name="root" {files} />

<Tabs />

<BaseLayout>
	<div slot="header">
		Welcome!
	</div>
	<AddTodoItem on:add={handleAddClick} />

	{$todoStats.doneCount}/{$todoStats.totalCount}

	<div class="todos-container">
		<div class="todo-items-container">
			{#each $todoItems.filter(item => !item.done) as { id, text, done }, index (id)}
				<div
					class="todo-item-container"
					in:receive="{{ key: id }}"
					out:send="{{ key: id }}"
					animate:flip="{{ deration: 250 }}"
				>
					<TodoItem
						title={`${index + 1}: ${text}`}
						{done}
						on:doneChange={event => handleDoneChange(id, event.detail)}
						on:remove={() => handleRemove(id)}
					/>
				</div>
			{:else}
				No items yet
			{/each}
		</div>
		<div class="todo-items-container">
			{#each $todoItems.filter(item => item.done) as { id, text, done }, index (id)}
				<div
					class="todo-item-container"
					in:receive="{{ key: id }}"
					out:send="{{ key: id }}"
					animate:flip="{{ deration: 250 }}"
				>
					<TodoItem
						title={`${index + 1}: ${text}`}
						{done}
						on:doneChange={event => handleDoneChange(id, event.detail)}
						on:remove={() => handleRemove(id)}
					/>
				</div>
			{:else}
				No items yet
			{/each}
		</div>
	</div>
</BaseLayout>

<style>
	.todo-item-container {
		margin-top: 5px;
		margin-bottom: 5px;
	}

	.todos-container {
		width: 100%;
		display: flex;
	}

	.todo-items-container {
		flex: 1;
		padding: 5px;
		box-sizing: border-box;
	}
	.footer-item {
		font-size: 24px;
		color: dimgray;
	}
</style>