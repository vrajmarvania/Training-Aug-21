<template>
  <div>
    <h1 class="blue">{{ message }}</h1>
    <div v-if="currentHour >= 5 && currentHour < 12">
      <h1>Good Morning</h1>
    </div>
    <div v-if="currentHour >= 12 && currentHour < 17">
      <h1>Good Afternoon</h1>
    </div>
    <div v-if="currentHour >= 17 && currentHour <= 24">
      <h1>Good Evening</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "Demo",
  data() {
    return {
      message: "Greeting of the Day " + new Date().toDateString(),
      currentHour: new Date().getHours(),
    };
  },
};
</script>
<style scoped>
</style>