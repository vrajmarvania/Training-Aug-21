<template>
<form>
    <input type="text" v-model="Student.ID"><br>
        <input type="text" v-model="Student.Name"><br>
    <input type="text" v-model="Student.Address"><br>

<button @click="submit">submit</button>  
</form>
</template>
<script>

import student from "../Services/student"

export default ({
   name:"AddStudent",
   data(){
    return{
        Student:{}    
    }
  
   },
  methods:{
        submit(){
             student.set_data(this.Student)
        }
    }
})
</script>
