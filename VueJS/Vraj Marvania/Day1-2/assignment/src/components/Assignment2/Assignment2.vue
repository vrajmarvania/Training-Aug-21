<!-- Create a StudentIDCard Component which will include another component image,Personal Component include(ID,FirstName,LastName,DOB),College Component include collegeName,College Address and College Logo)-->
<template>
  <div>
    <h1>====-Assignment2====</h1>
  
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