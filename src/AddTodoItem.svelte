<script>
  import { v4 as uuid } from 'uuid'
import App from './App.svelte'
  import getTodos from './getTodos'
  import TodoItem from './TodoItem.svelte'

  export let title = "Enter what do you want to do:"
  export let buttonTitle = 'Add todo'

  let itemsFromServer = getTodos()

  let items = []
  $: count = items.length;

  function handleAddClick() {
    items = [...items, {
      id: uuid(),
      text: 'todo item'
    }]
  }

  console.log($$props)
</script>

<div class="main-container">
  <label for="todo-text">{title}</label>
  <input class="todo-input" id="todo-text" />
  <button on:click={handleAddClick}>{buttonTitle} (Items: {count})</button>
</div>

{#await itemsFromServer}
  <p>Getting todo items in progress...</p>
{:then}
  <div>
    {#each items as { id, text }, index (id)}
      <TodoItem text={`${index + 1}: ${text}`} />
    {/each}
  </div>
{:catch error}
  <p>{error.message}</p>
{/await}


<!-- {#if count === 0}
  No items yet
{:else if count === 1}
  You have only one todo: {items[0].text}
{:else}
  <div>
    {#each items as { id, text }, index (id)}
      <TodoItem text={`${index + 1}: ${text}`} />
    {/each}
  </div>
{/if} -->

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
</style>