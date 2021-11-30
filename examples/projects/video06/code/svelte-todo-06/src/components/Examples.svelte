<script>
	import {onMount} from 'svelte';

	let container;

	onMount(()=> container.innerHTML = '<b>Hello</b>');
</script>

<div bind:this={container}>

</div>