<template>
  <img
  :src=image_path

    alt="rover"
  />
</template>
<script>
export default {
  name: "Image",
 props:{
   image_path:String
 }};
</script>

<style >
</style>