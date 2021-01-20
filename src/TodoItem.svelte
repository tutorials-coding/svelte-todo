<script>
  import { createEventDispatcher } from 'svelte'
  import { tweened } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';
  // import fade transition
  import { fly, fade } from 'svelte/transition';
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

  $: {
    dispatch('checked', checked)
    checkedMotion.set(checked ? '#64ad80' : '#faf792')
  }

  function handleRemoveClick() {
    dispatch('remove')
  }
</script>

<!-- apply in and out transitions -->
<div
  in:fly="{{ y: 200, duration: 500 }}"
  out:fade
  class="main-container"
>
  <div
    class="inner-container"
    style="background-color: {$checkedMotion};"
  >
    <input
      type="checkbox"
      bind:checked={checked}
    />
    <p class="text">{text}</p>
    <p class="remove-button" on:click={handleRemoveClick}>Remove</p>
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
  .text {
    flex: 1;
  }
  .remove-button {
    color: brown;
    font-weight: 700;
    cursor: pointer;
  }
</style>