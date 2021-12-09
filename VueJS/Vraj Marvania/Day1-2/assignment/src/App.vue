<template>
  <img alt="Vue logo" src="./assets/logo.png">
    <Assignment1/>
    <Assignment2/>
    <Assignment3/>
    <Assignment4/>
    <Assignment5/>



</template>

<script>
import Assignment1 from './components/Assignment1.vue'
import Assignment2 from './components/Assignment2/Assignment2.vue'
import Assignment3 from './components/Assignment3/Assignment3.vue'
import Assignment4 from './components/Assignment4/Assignment4.vue'
import Assignment5 from './components/Assignment5/Assignment5.vue'


export default {
  name: 'App',
  components: {
    Assignment1,Assignment2,Assignment3,Assignment4,Assignment5
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
