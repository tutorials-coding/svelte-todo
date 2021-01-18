<script>
  import { createEventDispatcher } from 'svelte'
  import { userName } from './store'

  const dispath = createEventDispatcher()

  export let title = ''
  export let buttonTitle = ''

  let text = ''

  async function handleTextChange(event) {
    text = event.target.value
  }

  function handleAddClick() {
    dispath('add', text)
  }
</script>

<div class="main-container">
  <label for="text">{title}</label>
  <input
    class="input"
    id="text"
    value={text}
    on:input={handleTextChange}
  />

  <label for="userName">User Name:</label>
  {$userName}
  <input
    class="input"
    id="userName"
    bind:value={$userName}
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