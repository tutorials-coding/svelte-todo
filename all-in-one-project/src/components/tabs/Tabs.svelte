<script>
  import Tab1 from './Tab1.svelte'
  import Tab2 from './Tab2.svelte'

  const tabs = [{
    id: 'tab1', title: 'Tab 1', component: Tab1
  }, {
    id: 'tab2', title: 'Tab 2', component: Tab2
  }]

  let selected = tabs[0]
</script>


<select bind:value={selected}>
  {#each tabs as tab}
    <option value={tab}>{tab.title}</option>
  {/each}
</select>

<svelte:component this={selected.component} name="John" />
