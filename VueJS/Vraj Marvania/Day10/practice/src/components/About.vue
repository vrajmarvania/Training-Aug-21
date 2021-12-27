<template>
  <h1 class="display-3">About Page</h1>
  <h1> Helloo {{ $route.params.name }}.. ! welcome back..</h1>
</template>
<script>

export default ({
   props: ["name"],

})
</script>
