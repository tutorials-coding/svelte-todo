<script>
  import { createEventDispatcher } from 'svelte'
  import Form from './Form.svelte'

  const dispath = createEventDispatcher()

  export let title = "Enter what do you want to do:"
  export let buttonTitle = 'Add todo'
</script>

<Form 
  title={title}
  buttonTitle={buttonTitle}
  on:add
/>
