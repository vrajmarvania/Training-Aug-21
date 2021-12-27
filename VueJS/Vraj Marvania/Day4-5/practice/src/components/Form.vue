<template>
  <h1>Text</h1>
  <input v-model="message" placeholder="edit me" />
  <h1>{{ message }}</h1>
  <span>Multiline message is:</span>
  <p style="white-space: pre-line">{{ message }}</p>
  <br />
  <textarea v-model="message" placeholder="add multiple lines"></textarea>

  <input type="checkbox" id="checkbox" v-model="checked" />
  <label for="checkbox">{{ checked }}</label>

  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames" />
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
  <label for="mike">Mike</label>
  <br />
  <span>Checked names: {{ checkedNames }}</span>
  <hr />
  <label for="one">male</label>
  <input type="radio" value="male" v-model="gender" />

  <label for="one">female</label>
  <input type="radio" value="female" v-model="gender" />

  <label for="one">other</label>
  <input type="radio" value="other" v-model="gender" />
  <br />
  <span>gender : {{ gender }}</span>
  <hr />
  <select v-model="selected1">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ selected1 }}</span>
  <hr />
  <!-- Multiple select (bound to Array): -->

  <select v-model="selected3" multiple>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <br />
  <span>Selected: {{ selected3 }}</span>

  <select v-model="selected4">
    <option v-for="option in options"  v-bind:key="option.Id" v-bind:value="option.value">
      {{ option.text }}
    </option>
  </select>
  <span>Selected: {{ selected4 }}</span>

</template>

<script>
export default {
  data() {
    return {
      message: "",
      checked: "",
      checkedNames: [],
      getComputedStyle,
      gender: "",
      Selected: "",
      Selected1: "",
      selected3: "",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" },
      ],
      selected4:'',
      
    };
  },
};
</script>
<style >
</style>
