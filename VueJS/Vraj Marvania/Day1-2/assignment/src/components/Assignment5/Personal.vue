<template>
  <div className="text-cente ">
    <span className="tag tag-teal text-dark">ID:{{Id}}</span>
    <h3>
      <b>{{FirstName}} {{LastName}}</b>
    </h3>
    <h6>DOB:{{Dob}}</h6>
  </div>
</template>
<script>
export default {
  name: "Personal",
  props:{
    FirstName:String, 
    LastName:String,
     Dob:String,
     Id:String
  }
};
</script>

<style >
</style>