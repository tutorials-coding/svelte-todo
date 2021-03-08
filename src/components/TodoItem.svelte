<svelte:options immutable={true}

accessors={true}/>


<script context="module">
  console.log('Hello from module')

  let state = 5
</script>

<script>
  import { createEventDispatcher, getContext, hasContext } from 'svelte'
  import { tweened } from 'svelte/motion'
  import { cubicIn } from 'svelte/easing'
  import { interpolateLab  } from 'd3-interpolate'
  import { draggable } from '../actions/draggable'

  const user = getContext('todo_user')
  console.log('todo_user ===>', hasContext('todo_user'))
  console.log('user ===>', hasContext('user'))

  console.log('state', state)

  const dispatch = createEventDispatcher()
  export let title
  export let done

  const doneMotion = tweened(done ? '#64ad80' : '#faf792', {
    delay: 0,
    duration: 250,
    easing: cubicIn,
    interpolate: interpolateLab
  })

  function handleRemoveClick() {
    dispatch('remove')
  }

  function handleDoneChange(event) {
    doneMotion.set(event.target.checked ? '#64ad80' : '#faf792')
    dispatch('doneChange', event.target.checked)
  }


  let coords = { x: 0, y: 0 }
  function handleDragStart() {

  }

  function  handleDragMove(event) {
    coords = {
      x: coords.x + event.detail.dx,
      y: coords.y + event.detail.dy,
    }
  }

  function  handleDragEnd() {
    coords = { x: 0, y: 0 }
  }
</script>

<div
  class="main-container"
  style="
    background-color: {$doneMotion};
    transform: translate({coords.x}px, {coords.y}px);
  "
  use:draggable="{{ offset: 0 }}"
  on:dragstart={handleDragStart}
  on:dragmove={handleDragMove}
  on:dragend={handleDragEnd}
>
  <input
    checked={done}
    type="checkbox"
    on:input={handleDoneChange}
  />
  <p>{user.name}!</p>
  <p class="title">{ title }</p>
  <p
    class="remove-button"
    on:click={handleRemoveClick}
  >Remove</p>
</div>

<style>
  .main-container {
    display: flex;
    height: 50px;
    border-radius: 5px;
    align-items: center;
    background-color: darkseagreen;
    padding: 0 15px;
    user-select: none;
  }
  input {
    margin: 0;
    margin-right: 20px;
  }
  p {
    margin: 0;
  }
  .title {
    flex: 1;
  }
  .remove-button {
    color: brown;
    font-weight: bold;
    cursor: pointer;
  }
</style>