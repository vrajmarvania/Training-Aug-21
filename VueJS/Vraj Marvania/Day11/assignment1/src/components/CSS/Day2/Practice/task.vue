<template>
     <h3>Parent div should contain 3 div inside. Div should be arranged in following manner.</h3>

        <div id='main'>
            <div id='div1'>1</div>
            <div id='div2'>2</div>
            <div id='div3'>3</div>
        </div> 
</template>
<script>
export default {
    name:"task"
}
</script>

   <style>
    #div1,#div2,#div3  {
        height: 100px;
        width: 100px;
        border: 1px solid black;
        float: left;
        margin: 5px;
    }
 
</style>
