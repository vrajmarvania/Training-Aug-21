<template>
  <!-- CSS Float Properties -->
  <h3>CSS Float Properties</h3>

  <h2>none</h2>
  <div class="a">
  </div>
  <div class="b">
  </div>
  <div class="c">
  </div>
  <br style="clear:both" />
  <hr/>

  <h2>left</h2>
  <div class="e">
  </div>
  <div class="f">
  </div>
  <div class="g">
  </div>

  <br style="clear:both" />
  <hr/>


  <h2>right</h2>
  <div class="h">
  </div>
  <div class="i">
  </div>
  <div class="j">
  </div>
  <br style="clear:both" />

  <hr/>

  <!-- CSS Position Properties -->
  <h3>CSS Position Properties</h3>


  <h2>position: static;</h2>

  <p>An element with position: static; is not positioned in any special way; it is
      always positioned according to the normal flow of the page:</p>

  <div class="static">
      This div element has position: static;
  </div>

  <h2>position: relative;</h2>

  <p>An element with position: relative; is positioned relative to its normal position:</p>

  <div class="relative2">
      This div element has position: relative;
  </div>


  <h2>position: fixed;</h2>

  <p>An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same
      place even if the page is scrolled:</p>

  <div class="fixed">
      This div element has position: fixed;
  </div>



  <h2>position: absolute;</h2>

  <p>An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of
      positioned relative to the viewport, like fixed):</p>

  <div class="relative">This div element has position: relative;
      <div class="absolute">This div element has position: absolute;</div>
  </div>


  <!-- CSS Overflow Properties -->
  <h1>The overflow Property</h1>

  <p>The overflow property specifies whether to clip content or to add scrollbars when an element's content is too big
      to fit in a specified area.</p>

  <h2>overflow: scroll:</h2>
  <div class="ex1">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
      ut laoreet dolore magna aliquam erat volutpat.</div>

  <h2>overflow: hidden:</h2>
  <div class="ex2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
      ut laoreet dolore magna aliquam erat volutpat.</div>

  <h2>overflow: auto:</h2>
  <div class="ex3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
      ut laoreet dolore magna aliquam erat volutpat.</div>

  <h2>overflow: visible (default):</h2>
  <div class="ex4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt
      ut laoreet dolore magna aliquam erat volutpat.</div>

</template>
<script>
export default {
    name:"index"
}
</script>


   <style>
    .a,.b, .c,.e, .f,.g,  .h, .i, .j {
        width: 100px;
        height: 100px;
        border: solid 1px royalblue;
    }

    .a,
    .b,
    .c {
        float: none;
    }

    .e,
    .f,
    .g {
        float: left;
    }

    .h,
    .i,
    .j {
        float: right;
    }


    div.static {
        position: static;
        border: 3px solid #73AD21;
    }

    div.relative2 {
        position: relative;
        left: 30px;
        border: 3px solid #73AD21;
    }

    div.fixed {
        position: fixed;
        bottom: 0;
        right: 0;
        width: 300px;
        border: 3px solid #73AD21;
    }

    div.relative {
        position: relative;
        width: 400px;
        height: 200px;
        border: 3px solid #73AD21;
    }

    div.absolute {
        position: absolute;
        top: 80px;
        right: 0;
        width: 200px;
        height: 100px;
        border: 3px solid #73AD21;
    }

    div.ex1 {
        background-color: lightblue;
        width: 110px;
        height: 110px;
        overflow: scroll;
    }

    div.ex2 {
        background-color: lightblue;
        width: 110px;
        height: 110px;
        overflow: hidden;
    }

    div.ex3 {
        background-color: lightblue;
        width: 110px;
        height: 110px;
        overflow: auto;
    }

    div.ex4 {
        background-color: lightblue;
        width: 110px;
        height: 110px;
        overflow: visible;
    }
</style>

 