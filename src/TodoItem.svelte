<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let text
  export let checked

  $: {
    dispatch('checked', checked)
  }
</script>

<div class="main-container">
  <input
    type="checkbox"
    bind:checked={checked}
  />
  <p>{text}</p>
</div>

<style>
  .main-container {
    display: flex;
    height: 50px;
    border-radius: 5px;
    align-items: center;
    background-color: darkseagreen;
    padding: 0 15px;
  }
  input {
    margin: 0;
    margin-right: 20px;
  }
  p {
    margin: 0;
  }
</style>