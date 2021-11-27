<script>
    export let title = "Enter what do you want to do.";
    export let buttonTitle = "Add todo";

    console.log('All property list:', $$props);
    console.log('Rest property list:', $$restProps);
</script>

<div class="main-container">
    <label for="todo-text">{ title }</label>
    <input class="todo-input" id="todo-text" />
    <button type="button">{buttonTitle}</button>
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