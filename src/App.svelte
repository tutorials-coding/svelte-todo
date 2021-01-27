<script>
  import { setContext } from 'svelte'
  import AddTodoItem from './AddTodoItem.svelte'
  import TodoItem from './TodoItem.svelte'
  import { createTodoItemsStore } from './store'
  import { quintOut } from 'svelte/easing';
  import { crossfade } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import BaseLayout from './Layouts/BaseLayout.svelte'
  import { getStats } from './utils/stat'

  let todoItemsStore = createTodoItemsStore()
  $: todoStats = getStats($todoItemsStore)

  setContext('todoItemsStore', {
    getTodoItemsStore: () => todoItemsStore
  });

  const [send, receive] = crossfade({
    duration: d => Math.sqrt(d * 200),

    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === 'none' ? '' : style.transform;

      return {
        duration: 600,
        easing: quintOut,
        css: t => `
          transform: ${transform} scale(${t});
          opacity: ${t}
        `
      };
    }
  });

  function handleAddTodoItem(event) {
    todoItemsStore.add(event.detail)
  }
</script>


<BaseLayout>
  <div slot="header" let:greeting={defaultGreeting}>
    {defaultGreeting} This is a TODO app
  </div>
  <div slot="footer">
    Thank you for using our app!
  </div>
  <div class="add-todo-item-container">
    <AddTodoItem
      title='Please type todo here:'
      buttonTitle={`Add (${todoStats.doneCount}/${todoStats.totalCount})`}
      on:add={handleAddTodoItem}
    />
  </div>
  
  {#if todoStats.totalCount === 0}
    No items yet
  {:else}
    <div class="todos-container">
      <div class="todo-items-container">
        {#each todoStats.notDoneItems as { id, text, checked }, index (id)}
          <div
            class="todo-item-container"
            in:receive="{{key: id}}"
            out:send="{{key: id}}"
            animate:flip="{{ duration: 500 }}"
          >
            <TodoItem
              {id}
              text={`${index + 1}: ${text}`}
              {checked}
            />
          </div>
        {/each}
      </div>
      <div class="todo-items-container">
        {#each todoStats.doneItems as { id, text, checked }, index (id)}
          <div
            class="todo-item-container"
            in:receive="{{key: id}}"
            out:send="{{key: id}}"
            animate:flip="{{ duration: 500 }}"
          >
            <TodoItem
              {id}
              text={`${index + 1}: ${text}`}
              {checked}
            />
          </div>
        {/each}
      </div>
    </div>
  {/if}
</BaseLayout>

<style>
  .add-todo-item-container {
    margin-bottom: 5px;
  }
  .todo-items-container {
    flex: 1;
    padding: 5px;
    box-sizing: border-box;
  }
  .todo-items-container > .todo-item-container:not(:last-child) {
    margin-bottom: 5px;
  }
  .todos-container {
    width: 100%;
    display: flex;
  }
</style>