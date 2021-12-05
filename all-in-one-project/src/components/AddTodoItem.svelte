<script>
  import Form from './Form.svelte'

  export let title
  export let buttonTitle
</script>

<Form
  {title}
  {buttonTitle}
  on:add
/>
