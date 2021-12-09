<template>
  <ul>
      <li v-for="item in employeeList" :key="item.Name">
          {{item.Name}}
      </li>

  </ul>
</template>

<script>
export default {
  data() {
    return {
      employeeList: [
        { ID: 1, Name: "Reena", Address: "Ahmedabad" },
        { ID: 2, Name: "Meghna", Address: "Mumbai" },
        { ID: 3, Name: "Ritu", Address: "Pune" },
      ],
    };
  },
};
</script>
