<template>
  <label v-if="label">{{ label }}</label>
  <input
    class="field"
    :placeholder="label"
  >
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    }
  }
}
</script>