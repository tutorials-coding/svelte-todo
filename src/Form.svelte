<script>
  import { createEventDispatcher, onMount } from 'svelte'
  import { typewriter } from './transition'
  const dispath = createEventDispatcher()

  export let title = ''
  export let buttonTitle = ''

  let text = ''
  let isTitleVisible = false

  async function handleTextChange(event) {
    text = event.target.value
  }

  function handleAddClick() {
    dispath('add', text)
  }

  onMount(() => {
    isTitleVisible = true
  })
</script>

<div class="main-container">
  {#if isTitleVisible}
  <label
    in:typewriter
    for="text"
    on:introstart="{() => console.log('introstart')}"
    on:outrostart="{() => console.log('outrostart')}"
    on:introend="{() => console.log('introend')}"
    on:outroend="{() => console.log('outroend')}"
  >{title}</label>
  {/if}
  <input
    class="input"
    id="text"
    value={text}
    on:input={handleTextChange}
  />

  <button on:click={handleAddClick}>{buttonTitle}</button>
</div>

<style>
  .main-container {
    background-color: lightseagreen;
    border-radius: 5px;
    padding: 10px;
  }
  .input {
    width: 100%;
  }
</style>