<template>
   <div class="container-fluid d-flex">
   <div class="item2 col-2">
       
               <JSnav></JSnav>         
   </div>
   <div class=" col-10 mt-2">
          <router-view />

      </div>
   </div>
</template>

<script>
import JSnav from "../nav/JSnav.vue";

export default 
{
 name:'JS',
 components: {
    JSnav
 },
  data(){return{
        JS:"active"
     }}
}


</script>
<style>
.item3  {
    background-color: rgb(255, 255, 255);
}
</style>
