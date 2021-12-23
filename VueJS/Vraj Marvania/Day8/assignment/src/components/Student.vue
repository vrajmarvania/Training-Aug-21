<template>
  <button v-on:click="show_data(student)" value="Add to cart" class="btn btn-success">Show data</button>

</template>
<script>
export default {
  name: "Product",
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
    show_data(item) {
      this.$emit("cartnotify", item);
    },
  },
};
</script>
