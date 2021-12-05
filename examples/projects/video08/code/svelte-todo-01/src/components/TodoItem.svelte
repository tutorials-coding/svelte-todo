<script>
    import {createEventDispatcher} from 'svelte';
    import {tweened} from 'svelte/motion';
    import {cubicIn} from 'svelte/easing'

    const dispatch = createEventDispatcher();
    export let title;
    export let done;

    // time form 0 to 1
    const doneMotion = tweened('#FAF792', {
        delay: 0,
        duration: 1000,
        easing: cubicIn,
        interpolate: (from, to) => (time) => time < 0.5 ? from : to 
    });

    function handleRemoveClick(){
        dispatch('remove');
    }

    function handleDoneChange(event) {
        doneMotion.set(event.target.checked ? '#64AD80' : '#FAF792');
        dispatch('doneChange', event.target.checked);
    }
</script>

<div class="main-container" style="background-color: {$doneMotion}">
    <input 
        checked={done}
        type="checkbox" 
        on:input={handleDoneChange} />
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