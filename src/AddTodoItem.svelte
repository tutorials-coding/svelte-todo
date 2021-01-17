<script>
  let title = "Enter what do you want to do:"
</script>

<div class="main-container">
  <label for="todo-text">{ title }</label>
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
</style>