<template>
    <div class="row">

          <div class="column">
              <img src="Assets/images/img1.jpg" style="width:100%">
              <img src="Assets/images/img2.jpg" style="width:100%">
              <img src="Assets/images/img3.jpg" style="width:100%">
              <img src="Assets/images/img4.jpg" style="width:100%">
              
          </div>
          <div class="column">
              <img src="Assets/images/img3.jpg" style="width:100%">
      
              <img src="Assets/images/img1.jpg" style="width:100%">
              <img src="Assets/images/img2.jpg" style="width:100%">
              <img src="Assets/images/img4.jpg" style="width:100%">
          </div>   <div class="column">
              <img src="Assets/images/img2.jpg" style="width:100%">
      
              <img src="Assets/images/img1.jpg" style="width:100%">
              <img src="Assets/images/img4.jpg" style="width:100%">
      
              <img src="Assets/images/img3.jpg" style="width:100%">
          </div>
          <div class="column">
              <img src="Assets/images/img2.jpg" style="width:100%">
      
              <img src="Assets/images/img1.jpg" style="width:100%">
              <img src="Assets/images/img4.jpg" style="width:100%">
      
              <img src="Assets/images/img3.jpg" style="width:100%">
          </div><div class="column">
              <img src="Assets/images/img2.jpg" style="width:100%">
      
              <img src="Assets/images/img1.jpg" style="width:100%">
              <img src="Assets/images/img4.jpg" style="width:100%">
      
              <img src="Assets/images/img3.jpg" style="width:100%">
          </div>
      </div>    
</template>
<script>
export default {
   name:'Task7'
}
</script>

   <style>
        
    * {
box-sizing: border-box;
}

body {
margin: 0;
font-family: Arial;
}

.header {
text-align: center;
padding: 32px;
}

.row {
display: flex;
flex-wrap: wrap;
padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
flex: 25%;
max-width: 25%;
padding: 0 4px;
}

.column img {
margin-top: 8px;
vertical-align: middle;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media (max-width: 800px) {
.column {
flex: 50%;
max-width: 50%;
}
}

@media (max-width: 700px) {
.column {
flex: 80%;
max-width: 80%;
}
}
/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media (max-width: 600px) {
.column {
flex: 100%;
max-width: 100%;
}
}
</style>
