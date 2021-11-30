<script>
    let reply= 3;
    const questionsReplies = [
        {
            id: 1,
            text: 'First reply'
        },
        {
            id: 2,
            text: 'Second reply'
        },
        {
            id: 3,
            text: 'Third reply'
        }
    ];

    let textAreaValue ="Simple text";

    
    const items =[
        'Learn JS',
        'Learn HTML',
        'Learn CSS',
        'Learn Svelte',
        'Just learn',
    ];
    let text = items[0];
    let multiply_text ='';
</script>

<p>Choose correct one:</p>

<div>
    {#each questionsReplies as {id, text} (id)}
        <label>
            <input type="radio" bind:group={reply} value="{id}" /> {text}
        </label>
    {/each}
</div>
<b>Reply: {reply}</b>

<div>
    <textarea bind:value={textAreaValue}></textarea>
    <br />
    <b>Text value = {textAreaValue}</b>
</div>

<div>
    <select bind:value={text}>
        {#each items as item (item)}
            <option value={item}>{item}</option>
        {/each}
    </select>
    <br />
    <b>Selected: {text}</b>
</div>

<div>
    <label for="multiply-item-select">Multiply select:</label>
    <select id="multiply-item-select" multiple bind:value={multiply_text}>
        {#each items as item (item)}
            <option value={item}>{item}</option>
        {/each}
    </select>

    <br />
    <b>Selected: {multiply_text}</b>
</div>