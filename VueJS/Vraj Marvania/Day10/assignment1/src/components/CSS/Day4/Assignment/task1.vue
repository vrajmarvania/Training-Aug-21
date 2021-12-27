
    <!-- Create Photo Album Gallery, which must be responsive. Using Media Queries Implement this task. -->
<template>
     <div class="grid-container">
            <div class="grid-item item11"><img src="Assets/images/img1.jpg"></div>
            <div class="grid-item item21"><img src="Assets/images/img3.jpg"></div>
            <div class="grid-item item31"><img src="Assets/images/img1.jpg"></div>
            <div class="grid-item item41"><img src="Assets/images/img1.jpg"></div>
            <div class="grid-item item51"><img src="Assets/images/img3.jpg"></div>
            <div class="grid-item item61"><img src="Assets/images/img1.jpg"></div>
            <div class="grid-item item71"><img src="Assets/images/img1.jpg"></div>
            <div class="grid-item item81"><img src="Assets/images/img3.jpg"></div>
            <div class="grid-item item91"><img src="Assets/images/img1.jpg"></div>
        </div>    
</template>
<script>
export default {
   name:'task1'
}
</script>


   <style>
  /* .item3 .grid-container>div {} */

    .item3 .grid-container {
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-gap: 10px;
        padding: 10px;
        grid-gap: 10px;

    }

    @media screen and (max-width:950px) {

        .item11,
        .item31,
        .item51,
        .item71,
        .item91 {
            grid-column: 1 / 2;
        }

        .item21,
        .item41,
        .item61,
        .item81 {
            grid-column: 3 / 4;

        }

    }
    @media screen and (max-width:700px) {

        .item11,
        .item31,
        .item51,
        .item71,
        .item91,
        .item21,
        .item41,
        .item61,
        .item81 {
            grid-column: 1 / 4;

        }

    }

    .grid-item {
        background-color: beige;
    }
 item11,
        .item31,
        .item51,
        .item71,
        .item91,
        .item21,
        .item41,
        .item61,
        .item81  img {
        width: 100%;
        height: auto;

    }
    
</style>
