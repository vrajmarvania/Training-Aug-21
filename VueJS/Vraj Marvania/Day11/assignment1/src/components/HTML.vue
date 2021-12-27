<template>
   <div class="container-fluid d-flex">
   <div class="item2 col-2">
       
               <Htmlnav></Htmlnav>         
   </div>
   <div class=" col-10 mt-2">
          <router-view />

      </div>
   </div>
</template>
      
<script>
import Htmlnav from "./Htmlnav.vue";

export default {
 name:'HTML',
 components: {
    Htmlnav
 },
  data(){return{
      HTML:"active",
     
     }}
}
</script>
<style>

</style>