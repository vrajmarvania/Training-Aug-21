<!--Store above example info javascript variable and then display dynamically, Display FullName variable in respective Component
-->
<template>
  <div>
    <h1>====-Assignment3====</h1>
  
     <StudentIDCard />
  </div>
</template>
<script>
import StudentIDCard from "./StudentIDCard.vue"

export default {
  name: "Assignment2",
   components: {
     StudentIDCard
  }
 
};
</script>

<style>


</style>