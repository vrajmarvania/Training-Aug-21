// Create a student Model interface with field( ID,Name,Age,Average,grade,Active
) // StudentList Component will create an array of student type.Display an array
with NGFor in table. Grade wise color should be given using ngSwitch and ngClass
or ngStyle. Only active should displayed using ngIf.

<template>
  <div class="container">
    <h1>Module 3</h1>
    <p>
      StudentList Component will create an array of student type.Display an
      array with NGFor in table. Grade wise color should be given using ngSwitch
      and ngClass or ngStyle. Only active should displayed using ngIf.
    </p>
    <hr />
    <table class="table">
      <thead>
        <tr class="bg-primary">
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">grade</th>
          <th scope="col">Active</th>
        </tr>
      </thead>
      <tbody v-for="student in student" :key="student.ID">
        <tr
          v-if="student.Active == true"
          v-bind:class="classObject(student.grade)"
        >
          <td>{{ student.ID }}</td>
          <td>{{ student.Name }}</td>
          <td>{{ student.Age }}</td>
          <td>{{ student.grade }}</td>
          <td>{{ student.Active }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      student: [
        {
          ID: 100,
          Name: "person1",
          Age: 23,
          Average: 97,
          grade: "A",
          Active: true,
        },
        {
          ID: 101,
          Name: "person2",
          Age: 33,
          Average: 98,
          grade: "B",
          Active: true,
        },
        {
          ID: 103,
          Name: "person3",
          Age: 23,
          Average: 67,
          grade: "C",
          Active: true,
        },
        {
          ID: 104,
          Name: "person4",
          Age: 23,
          Average: 47,
          grade: "D",
          Active: false,
        },
        {
          ID: 105,
          Name: "person5",
          Age: 23,
          Average: 47,
          grade: "D",
          Active: true,
        },
      ],
    };
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
<style scoped></style>
