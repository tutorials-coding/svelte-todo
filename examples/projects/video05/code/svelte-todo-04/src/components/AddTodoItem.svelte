<script>
	import {createEventDispatcher} from 'svelte';
	import Form from './Form.svelte';

	const dispatch = createEventDispatcher();
	
	function handleAddItem(event){
		dispatch('add', event.detail)
	}
</script>

<Form
	on:add={handleAddItem}
/>
