<script>
  import { createEventDispatcher } from 'svelte'
  import { tweened } from 'svelte/motion';
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

  $: {
    dispatch('checked', checked)
    checkedMotion.set(checked ? '#64ad80' : '#faf792')
  }
</script>

<div class="main-container" style="background-color: {$checkedMotion}">
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