<template>

<h1>Passing Values from Parent Component to Child component</h1>
<HelloWorld msg='WelcometoYourVue.jsApp' v-bind:name="name" ></HelloWorld>
<input type="text" v-model="name">

<h1>passing values from child component to a parent component</h1>
<product @cartnotify="cartsevent($event)" ></product>
<h2>Cart List count :{{cartlist.length}}</h2>

</template>


<script>
import HelloWorld from './components/HelloWorld.vue'
import Product from './components/Product.vue'


export default {
  name: 'App',
  data(){
    return{
      name:"",
       cartlist:[],
    }
  },
  components: {
    HelloWorld,Product
  },
 methods:{
    cartsevent(data)
    {
      this.cartlist=data;
    }
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
