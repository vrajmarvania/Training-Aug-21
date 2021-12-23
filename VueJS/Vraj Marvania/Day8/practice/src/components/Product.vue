<template>
  <table>
    <tr border="3" v-for="item in productList" :key="item.ID">
      <td>{{ item.ID }}</td>
      <td>{{ item.Name }}</td>
      <td>
        <button v-on:click="addtocart(item)" value="Add to cart">
          AddtoCart
        </button>
      </td>
    </tr>
  </table>
</template>
<script>
export default {
  name: "Product",
  data() {
    return {
      productList: [
        { ID: 1, Name: "keyboard", Price: 600 },
        { ID: 2, Name: "Mouse", Price: "700" },
        { ID: 3, Name: "headphone", Price: 500 },
      ],
      cartlist: [],
    };
  },
  methods:{
     addtocart(item){
        this.cartlist.push(item)
        this.$emit("cartnotify",this.cartlist)
     }
  }
};
</script>
