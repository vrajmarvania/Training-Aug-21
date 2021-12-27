<template>
   <div class="container-fluid d-flex">
   <div class="item2 col-2 ">
       
               <Cssnav></Cssnav>         
   </div>
   <div class=" col-10 mt-2 m-1">
          <router-view />
      </div>
   </div>
</template>
<script>
import Cssnav from "../nav/Cssnav.vue";

export default 
{
 name:'CSS',
 components: {
    Cssnav
 },
  data(){return{
       CSS:"active",
     }}
}
</script>
<style>
.item3  {
    background-color: rgb(255, 255, 255);
}
</style>
