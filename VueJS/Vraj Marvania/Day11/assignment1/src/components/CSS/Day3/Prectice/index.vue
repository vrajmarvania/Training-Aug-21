<template>
      <h1>The flex-direction Property</h1>
        <p>The "flex-direction: column;" stacks the flex items vertically (from top to bottom):</p>
      
        <div class="flex-container">
          <div style="flex-grow: 1">1</div>
          <div style="flex-grow: 1">2</div>
          <div style="flex-grow: 1">3</div>
          <div>4</div>
          <div>5</div>
          <div style="flex-grow: 1=3">6</div>
          <div>7</div>
          <div style="flex-shrink: 0">8</div>
          <div>9</div>
          <div style="align-self: center">10</div>
          <div style="flex: 0 0 200px">11</div>
          <div style="flex-basis: 200px">12</div>
      
        </div>    
</template>
<script>
export default {
   name:'index'
}
</script>
  <style>
    .flex-container {
      display: flex;
      /* -------The flex-direction Property---------- */

      /* flex-direction: row; */
      /* flex-direction: column; */
      /* flex-direction: column-reverse; */
      /* flex-direction: row-reverse;  */


      /*---------- The flex-wrap Property ------------*/
      /* flex-wrap: wrap; */
      /* flex-wrap: nowrap; */
      /* flex-wrap: wrap-reverse; */


      /*-------The flex-flow Property-------------*/
      flex-flow: row wrap;

      /*----- justify-content ----------------*/
      /* justify-content: center; */
      /* justify-content: flex-start; */
      /* justify-content: flex-end; */
      /* justify-content: space-around; */
      /* justify-content: space-between; */

      /*------- The align-items Property --------*/
      /* align-items: flex-start; */
      /* align-items: flex-end; */
      /* align-items: stretch;  */
      /* align-items: baseline; */
      height: 600px;
      /* align-content: space-between; */


      /* Perfect Centering */
      justify-content: center;
      align-items: center;

      background-color: DodgerBlue;
    }

    .flex-container>div {
      background-color: #f1f1f1;
      width: 100px;
      margin: 10px;
      text-align: center;
      line-height: 75px;
      font-size: 30px;
    }
  </style>
