<script>
  import { createEventDispatcher } from 'svelte'
  const dispath = createEventDispatcher()

  export let title = ''
  export let buttonTitle = ''

  let text = ''
  function handleTodoTextChange(event) {
    text = event.target.value
    console.log(text)
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
    on:input={handleTodoTextChange}
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