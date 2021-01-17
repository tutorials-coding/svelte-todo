<script>
  let title = "Enter <strong>what do you want to do:</strong>"
  const src = "https://raw.githubusercontent.com/sveltejs/branding/master/svelte-logo.png"
</script>

<img
  {src}
  alt="Svelte logo"  
>
<div class="main-container">
  <label for="todo-text">{@html title}</label>
  <input class="todo-input" id="todo-text" />
  <button>Add Todo</button>
</div>

<style>
  .main-container {
    background-color: lightseagreen;
    border-radius: 5px;
    padding: 10px;
  }
  .todo-input {
    width: 100%;
  }
  img {
    width: 150px;
  }
  :global(button) {
    background-color: indigo;
    color: white;
  }
</style>