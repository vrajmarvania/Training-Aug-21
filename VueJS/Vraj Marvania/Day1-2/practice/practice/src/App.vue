<template>
 <Demo></Demo>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Iterating></Iterating>
  <Conditional></Conditional>
  </template>

<script>
import Conditional from './components/Conditional.vue'
import HelloWorld from './components/HelloWorld.vue'
import Demo from './components/Demo.vue'
import Iterating from './components/Iterating.vue'
export default {
  name: 'App',
   components: {
    Conditional,HelloWorld,Iterating,Demo
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
