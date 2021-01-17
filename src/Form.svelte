<script>
  import { createEventDispatcher, tick } from 'svelte'
  import { format } from './format'

  const dispath = createEventDispatcher()

  export let title = ''
  export let buttonTitle = ''

  let text = ''

  async function handleTextChange(event) {
    const { selectionStart, selectionEnd, value } = this;
    text = format(event.target.value)

    await tick();
		this.selectionStart = selectionStart;
		this.selectionEnd = selectionEnd;
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