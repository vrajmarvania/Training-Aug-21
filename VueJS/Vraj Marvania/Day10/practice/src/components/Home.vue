<template>
  <h1 class="display-3">Home Page</h1>
  <div class="container bg-dark p-5" >
  <form v-on:submit.prevent="onSubmit">
    <label for="name" class="text-light">Enter Your Name:</label>
    <input  class="form-control my-3" name="name" type="text" v-model="name"/>
    <button class="btn btn-info">
      submit
    </button>

  </form>
  </div>
</template>

<script>

export default ({
  methods:{
    onSubmit(){
    this.$router.push({ name: 'About', params:  {name:this.name} })
    }
  },
  data(){
    return{
      name:"asas",

    }
  }

 
})
</script>
