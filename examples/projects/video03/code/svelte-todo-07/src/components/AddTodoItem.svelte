<script>
    import { onMount, tick } from 'svelte';
    import { getTodos } from '../utils/getTodos';
    import { format } from '../utils/format';

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

    function handleClick(){
        items = [...items, 'item'];
    }

    let text = '';
    async function handleTextChange(event) {
        const { selectionStart, selectionEnd, value } = this;
        text = format(event.target.value);

        await tick();
        this.selectionStart = selectionStart;
        this.selectionEnd = selectionEnd;
    }
       
</script>

<div class="main-container">
    <label for="todo-text">{ title }</label>
    <input class="todo-input" id="todo-text" value={text} on:input={handleTextChange} />
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