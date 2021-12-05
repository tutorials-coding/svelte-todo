<script>
	import File from './File.svelte';
	
	export let files;
	export let name;
</script>

<p>{name}</p>

<ul>
	{#each files as file}
		<li>
			{#if file.type === 'dir'}
				<svelte:self {...file} />
			{:else}
				<File name={file.name} />
			{/if}
		</li>
	{/each}
</ul>