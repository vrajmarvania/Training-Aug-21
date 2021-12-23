// Create a student Model interface with field( ID,Name,Age,Average,grade,Active )
// StudentList Component will create an array of student type.Display an array with NGFor in table. Grade wise color should be given using ngSwitch and ngClass or ngStyle. Only active should displayed using ngIf.

<template>
  <table class="table" v-if="(student!='')">
    <thead>
      <tr class="bg-primary">
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Age</th>
        <th scope="col">grade</th>
        <th scope="col">Active</th>
      </tr>
    </thead>
    <tbody v-for="s in student" :key="s.ID">
      <tr v-if="s.Active == true" v-bind:class="classObject(s.grade)">
        <td>{{ s.ID }}</td>
        <td>{{ s.Name }}</td>
        <td>{{ s.Age }}</td>
        <td>{{ s.grade }}</td>
        <td>{{ s.Active }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    student: Array,
  },
  methods: {
    classObject: function (data) {
      console.log(data);
      switch (data) {
        case "A":
          return "table-success";
        case "B":
          return "table-success";
        case "C":
          return "table-warning ";
        case "D":
          return "table-danger";
      }
    },
  },
};
</script>
<style scoped>
</style>