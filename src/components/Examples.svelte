<script>
  import { onMount } from 'svelte'

  let container


  onMount( () => {
    container.innerHTML = 'Hello'
  })

</script>



<div bind:this={container} ></div>