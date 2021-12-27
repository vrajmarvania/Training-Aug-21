<!-- Flexbox with three flex items –right to left direction -->
<template>
        <div class="flex-cantainer">
            <div>
                1
            </div>
            <div>
                2
            </div>
            <div>
                3
            </div>
            </div>     
</template>
<script>
export default {
   name:'Task6'
}
</script>

   <style>
    .flex-cantainer{
        background-color: tomato;
        align-items: center;
        flex-flow: row;
        justify-content: flex-end;
        display: flex;

    }
    .flex-cantainer > div{
        background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
    }
</style>
