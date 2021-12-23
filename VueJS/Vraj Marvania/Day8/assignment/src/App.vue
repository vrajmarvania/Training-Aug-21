<template>

<div class="container">
  <h1>Module 8
</h1>
  In the app component call Student Component and StudentList Component. Use Event Emitter to pass data from student component to the app component. From app component send data to studentList component using @Input decorator.
  <hr/>
  <Student @cartnotify="disstudent($event)"></Student><hr/>
  <StudentList v-bind:student="cartlist"></StudentList>
  </div>
  <hr/>

</template>

<script>

import Student from "./components/Student.vue";
import StudentList from "./components/StudentList.vue";

export default {
  name: "App",
  data() {
    return {
      cartlist: [],
    };
  },
  components: {
    Student,
    StudentList,
  },
  methods: {
    disstudent(data) {
      this.cartlist = data;
    },
  },
};
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
