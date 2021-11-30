<script>
    export let title;

    function handleDoneChange(){
        console.log('handleDoneChange');
    }

    function handleRemoveClick(){
        console.log('handleRemoveClick');
    }
</script>

<div class="main-container">
    <input type="checkbox" on:input={handleDoneChange} />
    <p class="title">{title}</p>
    <button type="button" 
        on:click|once|preventDefault={handleRemoveClick}
        >Remove</button>
</div>

<style>
    .title{
        flex:1;
    }
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
    p{
        margin: 0;
    }
    button {
        color:brown;
        font-weight: bold;
        cursor: pointer;
    }
</style>