<script>
    import { afterUpdate, beforeUpdate, onMount } from 'svelte';
    import { getTodos } from '../utils/getTodos';

    export let title = "Enter what do you want to do.";
    export let buttonTitle = "Add todo";

    let items = [];

    onMount(() => {
        console.log('onMount');
        const get = async () => {
            items = await getTodos();
        }
        get();
    });

    beforeUpdate(() => console.log('beforeUpdate'));

    afterUpdate(() => console.log('afterUpdate'));

    function handleClick(){
        items = [...items, 'item'];
    }
       
</script>

<div class="main-container">
    <label for="todo-text">{ title }</label>
    <input class="todo-input" id="todo-text" />
    <button type="button" on:click={handleClick}>{buttonTitle}</button>
</div>

{JSON.stringify(items, null, 2)}

<style>
    label {
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