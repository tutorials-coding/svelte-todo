<script>
    import {createEventDispatcher, onMount} from 'svelte';
    import {tweened, spring} from 'svelte/motion';
    import {cubicIn} from 'svelte/easing';
    import {interpolateLab} from 'd3-interpolate';

    const dispatch = createEventDispatcher();
    export let title;
    export let done;

    // time form 0 to 1
    const doneMotion = tweened('#FAF792', {
        delay: 0,
        duration: 250,
        easing: cubicIn,
        interpolate: interpolateLab
    });

    const containerPos = spring(
        // start point
        {
            left: -100,
            top: -100
        }, 
        {
            stiffness: 0.1,
            damping: 0.1
        }
    );

    let container;
    onMount(() => {
        containerPos.set({
            left: container.offsetLeft + 100,
            top:  container.offsetTop + 100,
        });
    });

    function handleRemoveClick(){
        dispatch('remove');
    }

    function handleDoneChange(event) {
        doneMotion.set(event.target.checked ? '#64AD80' : '#FAF792');
        dispatch('doneChange', event.target.checked);
    }
</script>
<div class="main-container">
    <div 
        class="inner-container" 
        style="
            background-color: {$doneMotion}; 
            left: {$containerPos.left}px;
            top: {$containerPos.top}px;
            "
        bind:this={container}
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
</div>


<style>
    .title{
        flex:1;
    }
    .main-container {
        position: relative;
        height: 50px;
        width: 100%;
    }
    .inner-container {
        position: absolute;
        display: flex;
        border-radius: 5px;
        align-items: center;
        background-color: darkseagreen;
        padding: 0 15px;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
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