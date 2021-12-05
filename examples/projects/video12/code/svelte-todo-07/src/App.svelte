
<script>
	import { setContext } from 'svelte';
	import { flip } from 'svelte/animate';
	import { cubicIn } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';

	import AddTodoItem from './components/AddTodoItem.svelte';
	import TodoItem from './components/TodoItem.svelte';
	import { todoItems } from './store/customStore';
	import { todoStats } from './store/todoStats';
	import BaseLayout from './layouts/BaseLayout.svelte';
	import Dir from './components/Dir.svelte';
	import {files} from './components/files';
	import Tabs from './components/tabs/Tabs.svelte';

	setContext('todos', todoItems)

	const [send, receive] = crossfade({
		duration: 5000,
		fallback(node, params){
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: cubicIn,
				css: t=> `
					transform: ${transform} scale(${t});
					opacity: ${t};
				`
			}
		}
	});

	function handleAddClick(event) {
		todoItems.add(event.detail);
	}

	function handleDoneChange(id, done){
		todoItems.setDone(id,done);
	}

	function handleRemove(id){
		todoItems.remove(id);
	}

	function handleResetClick(){
		todoItems.set([]);
	}

		
</script>

<svelte:head>
	<title>Home page</title>
</svelte:head> 

<Dir name="root" files={files} />

<Tabs />

<BaseLayout>
<div slot="header" let:greeting>
	{greeting} and Welcome!
</div>

<AddTodoItem on:add={handleAddClick} on:reset={handleResetClick} />
<div>
	<b>{$todoStats.doneCount} / {$todoStats.totalCount}</b>
</div>

<div class="todos-container">
	<div class="todo-items-container">
		{#each $todoItems.filter(item => item.done === false) as { id, text, done }, index (id)}
		<div class="todo-item-container" 
			in:receive="{{ key: id }}" out:send="{{ key: id }}"
			animate:flip="{{ duration: 500 }}" >
			<TodoItem 
				title={`${index + 1}: ${text}`} 
				{done}
				on:doneChange={event => handleDoneChange(id, event.detail)}
				on:remove={() => handleRemove(id)}
				/>
		</div>
	{:else}
		No items yet.
	{/each}
	</div>

	<div class="todo-items-container">
		{#each $todoItems.filter(item => item.done === true) as { id, text, done }, index (id)}
		<div class="todo-item-container"
			in:receive="{{ key: id }}" out:send="{{ key: id }}"
			animate:flip="{{ duration: 500 }}"
		>
			<TodoItem 
				title={`${index + 1}: ${text}`} 
				{done}
				on:doneChange={event => handleDoneChange(id, event.detail)}
				on:remove={() => handleRemove(id)}
				/>
		</div>
	{:else}
		No items yet.
	{/each}
	</div>

</div>
</BaseLayout>


<style>
	.todos-container{
		width: 100%;
		display: flex;
	}
	.todo-items-container{
		flex: 1;
		padding: 5px;
		box-sizing: border-box;
	}
	.todo-item-container {
		margin-top: 5px;
		margin-bottom: 5px;
	}

</style>
