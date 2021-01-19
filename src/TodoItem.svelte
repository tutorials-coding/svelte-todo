<script>
  import { createEventDispatcher, onMount } from 'svelte'
  import { tweened, spring } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  import { interpolateLab } from 'd3-interpolate';
  
  const dispatch = createEventDispatcher()

  export let text
  export let checked

  const checkedMotion = tweened('#faf792', {
    delay: 0,
    duration: 250,
    easing: cubicOut,
    interpolate: (from, to) => (t) => {
      // return t < 0.5 ? from : to
      // interpolate and interpolateLab function signatures are the same
      return interpolateLab(from, to)(t)
    }
  });

  let container
  let containerPos = { left: -100, top: -100 }
  let coords = spring(containerPos, {
    stiffness: 0.1,
    damping: 0.25
  });
  onMount(() => {
    containerPos = {
      left: container.offsetLeft + 100,
      top: container.offsetTop + 100,
    }
    coords.set(containerPos)
  })

  $: {
    dispatch('checked', checked)
    checkedMotion.set(checked ? '#64ad80' : '#faf792')
  }
</script>

<div class="main-container">
  <div
    class="inner-container"
    style="
      background-color: {$checkedMotion};
      left: {$coords.left}px;
      top: {$coords.top}px;
    "
    bind:this={container}
  >
    <input
      type="checkbox"
      bind:checked={checked}
    />
    <p>{text}</p>
  </div>
</div>

<style>
  .main-container {
    position: relative;
    height: 50px;
    width: 100%;
  }
  .inner-container {
    position: absolute;
    display: flex;
    border-radius: 5px;
    align-items: center;
    background-color: darkseagreen;
    padding: 0 15px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
  input {
    margin: 0;
    margin-right: 20px;
  }
  p {
    margin: 0;
  }
</style>