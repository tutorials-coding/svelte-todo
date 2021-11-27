<script>
    import {onMount} from 'svelte';

    export let title = "Enter what do you want to do.";
    export let buttonTitle = "Add todo";

    let items = [];
    let counter = 0;

    onMount(() => {
        let interval = setInterval(() => {
            counter++;
        }, 1000);

        return () => clearInterval(interval);
    });

    function handleClick(){
        items.push('item');
        items = items;
    }

    $: console.log(items);
        
</script>

{counter}
<div class="main-container">
    <label for="todo-text">{ title }</label>
    <input class="todo-input" id="todo-text" />
    <button type="button" on:click={handleClick}>{buttonTitle}</button>
</div>

<style>
    :global(label) {
        color: cornsilk;
        color: blueviolet;
    }
    .main-container{
        background-color: lightseagreen;
        border-radius: 5px;
        padding: 10px;
    }
    .todo-input {
        width: 100%;
    }
</style>