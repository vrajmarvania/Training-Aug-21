<template>
<Navbar></Navbar>
<div >
    <router-view />
</div>

</template>

<script>

import Navbar from "./components/nav/Navbar.vue";
// import Sidenav from "./components/Sidenav.vue";

export default {
  name: 'App',
  components: {
    // Sidenav,
    Navbar
  }
}
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.item3 * {
    background-color: rgb(255, 255, 255);
}
</style>
