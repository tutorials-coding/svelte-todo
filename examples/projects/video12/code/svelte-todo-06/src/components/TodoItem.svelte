<svelte:options immutable={true} accessors={true} namespace="html"  />


<script>
    import {createEventDispatcher, onMount, getContext, hasContext} from 'svelte';
    import {tweened} from 'svelte/motion';
    import {cubicIn} from 'svelte/easing';
    import {interpolateLab} from 'd3-interpolate';
    import {draggable} from '../actions/draggable';

    const todos = getContext('todos');
    console.log('todos ===>', hasContext('todos'));

    const dispatch = createEventDispatcher();
    export let title;
    export let done;

    // time form 0 to 1
    const doneMotion = tweened( done ? '#64AD80' : '#FAF792', {
        delay: 0,
        duration: 250,
        easing: cubicIn,
        interpolate: interpolateLab
    });

    function handleRemoveClick(){
        dispatch('remove');
    }

    function handleDoneChange(event) {
        doneMotion.set(event.target.checked ? '#64AD80' : '#FAF792');
        dispatch('doneChange', event.target.checked);
    }

    let coords = {x: 0, y: 0};

    function handleDragStart(){console.log(coords);}
    function handleDragMove(event){
        coords = {
            x: coords.x + event.detail.dx,
            y: coords.y + event.detail.dy};
 
    }
    function handleDragEnd(){console.log(coords); coords = {x: 0, y: 0};}

    let offset = 100;
    onMount(() =>{
        setInterval(() => {
            offset +=100;
        }, 1000);
    });
</script>

<div 
    use:draggable="{{offset}}"
    class="main-container" 
    style="
    background-color: {$doneMotion};
    transform: translate({coords.x}px, {coords.y}px);
  "
    on:dragstart={handleDragStart}
    on:dragmove={handleDragMove}
    on:dragend={handleDragEnd}
    >

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
        user-select: none;
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