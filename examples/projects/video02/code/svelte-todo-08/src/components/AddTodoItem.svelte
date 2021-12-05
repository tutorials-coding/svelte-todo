<script>
    export let title = "Enter what do you want to do.";
    export let buttonTitle = "Add todo";

    let items = [];

    function handleClick(){
        items = [...items, 'item'];
    }

    $: 
        {
            if(items.length > 5) {
                console.log('items', items);
            }
        }

    $: console.log('Old len = ', len);
    $: len = items.length;        
    $: console.log('New len = ', len);

    
        
</script>

<div class="main-container">
    <label for="todo-text">{ title }</label>
    <input class="todo-input" id="todo-text" />
    <button type="button" on:click={handleClick}>{buttonTitle}</button>
</div>

<style>
    .main-container{
        background-color: lightseagreen;
        border-radius: 5px;
        padding: 10px;
    }
    .todo-input {
        width: 100%;
    }
</style>