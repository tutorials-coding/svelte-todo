<script>
	import { v4 as uuid } from 'uuid'
	import AddTodoItem from './AddTodoItem.svelte'
	import TodoItem from './TodoItem.svelte'

	let items = [{
			id: uuid(),
			text: 'First Item',
			done: false,
		}, {
			id: uuid(),
			text: 'Second Item',
			checked: true,
		}]
	$: count = items.length;
	$: checkedCount = items.filter(({ checked }) => checked).length
	
	function handleAddTodoItem(event) {
    items = [...items, {
      id: uuid(),
			text: event.detail,
			checked: false,
    }]
	}

	function handleItemChecked(id, checked) {
		items = items.map(item => (item.id === id
			? ({
				...item,
				checked
			})
			: item
		))
	}

	let reply
	const questionReplies = [{
		id: 1,
		text: 'First reply'
	}, {
		id: 2,
		text: 'Second reply'
	}, {
		id: 3,
		text: 'Third reply'
	}]
</script>

<p>Choose correct one:</p>
<div>
	{#each questionReplies as { id, text } (id)}
		<label>
			<input type=radio bind:group={reply} value={id}>
			{text}
		</label>
	{/each}
</div>

<AddTodoItem
	title='Please type todo here:'
	buttonTitle={`Add (${checkedCount}/${count})`}
	on:add={handleAddTodoItem}
/>

{#if count === 0}
  No items yet
{:else}
  <div>
		{#each items as { id, text, checked }, index (id)}
			<input
				bind:value={text}
			/>
			<TodoItem
				text={`${index + 1}: ${text}`}
				{checked}
				on:checked={event => handleItemChecked(id, event.detail)}
			/>
    {/each}
  </div>
{/if}
