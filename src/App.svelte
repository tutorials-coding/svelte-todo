<script>
  import AddTodoItem from './AddTodoItem.svelte'
  import TodoItem from './TodoItem.svelte'
  import { todoItems } from './store'
  import { todoStats } from './todoStatsStore'
  import { quintOut } from 'svelte/easing';
  import { crossfade } from 'svelte/transition';
  import { flip } from 'svelte/animate';

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
    todoItems.add(event.detail)
  }

  function handleItemChecked(id, checked) {
    todoItems.setCheckedStatus(id, checked)
  }

  function handleItemRemove(id) {
    todoItems.remove(id)
  }
</script>

<div class="add-todo-item-container">
  <AddTodoItem
    title='Please type todo here:'
    buttonTitle={`Add (${$todoStats.doneCount}/${$todoStats.totalCount})`}
    on:add={handleAddTodoItem}
  />
</div>

  {#if $todoStats.totalCount === 0}
    No items yet
  {:else}
    <div class="todos-container">
      <div class="todo-items-container">
        {#each $todoStats.notDoneItems as { id, text, checked }, index (id)}
          <div
            class="todo-item-container"
            in:receive="{{key: id}}"
            out:send="{{key: id}}"
            animate:flip="{{ duration: 500 }}"
          >
            <TodoItem
              text={`${index + 1}: ${text}`}
              {checked}
              on:checked={event => handleItemChecked(id, event.detail)}
              on:remove={() => handleItemRemove(id)}
            />
          </div>
        {/each}
      </div>
      <div class="todo-items-container">
        {#each $todoStats.doneItems as { id, text, checked }, index (id)}
          <div
            class="todo-item-container"
            in:receive="{{key: id}}"
            out:send="{{key: id}}"
            animate:flip="{{ duration: 500 }}"
          >
            <TodoItem
              text={`${index + 1}: ${text}`}
              {checked}
              on:checked={event => handleItemChecked(id, event.detail)}
              on:remove={() => handleItemRemove(id)}
            />
          </div>
        {/each}
      </div>
    </div>
  {/if}

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