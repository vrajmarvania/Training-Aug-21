<!-- Create a flexbox with four flex items -->
<template>
      <div class="box">
            <div>
                1
            </div>
            <div>
                2
            </div>
            <div>
                3
            </div>
            <div>
                4
            </div>
    
        </div>     
</template>
<script>
export default {
   name:'Task5'
}
</script>
 <style>
    .box {
        background-color: DodgerBlue;
        flex-flow: row wrap;
        align-items: center;
        display: flex;


    }

    .box>div {
        background-color: #f1f1f1;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
    }
</style>
