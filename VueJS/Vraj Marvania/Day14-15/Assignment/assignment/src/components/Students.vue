<template >

<div class="container ">
  <div class="card">
    <div class="card-header bg-dark d-flex" style="justify-content: space-between">
  <h5 class=" text-light text-start fw-bolder p-1">Manage Students</h5>
   <router-link to="/Student_Form "  class=" btn btn-info"  >+ Add New</router-link>
</div>
   <div class="text-end"> 
    </div>
  <div class="card-body">
    

    <table class="table ">
  <thead class="thead-dark bg-info" >
    <tr>
    
        <th>First</th>
          <th>Middle</th>
          <th>Last</th>
          <th>City</th>
          <th>State</th>
          <th>Country</th>
          <th>Father Name</th>
          <th>Mother Name</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody class="bg-dark text-light">
          <tr v-for="i in sdata" :key=i.Name.Middle>
          <th>{{i.Name.First}}</th>
          <th>{{i.Name.Middle}}</th>
          <td>{{i.Name.Last}}</td>
          <td>{{i.Address.City}}</td>
          <td>{{i.Address.State}}</td>
          <td>{{i.Address.Country}}</td>
          <td>{{i.Father.FullName.First}}</td>
          <td>{{i.Mother.FullName.First}}</td>
          <!-- {{i}} -->
      <td>
      <router-link :to="{ name: 'Student_Update', params: { _id: i._id }}"  class="btn btn-warning" >Edit</router-link>

</td>
      <td><button type="button"  @click="delete_d(i._id)" class="btn btn-danger">Delete</button>
</td>

    </tr>
  </tbody>
  <!-- :{{sdata}} -->
</table>
  </div>
</div>
</div>
</template>
<script>
import student from "../Service/Student"

export default {
      name:"Sudents",
      data(){
          return{
              sdata:[]
          }
      },
  
  mounted(){
       

       student.get_all().then(response => {
        //   this.tutorials = response.data;
            this.sdata=response.data;
        //   console.log(sdata);
        })
        .catch(e => {
          console.log(e);
        });

    },
     methods:{
  delete_d(id){
  student.delete_data(id).then(response => {
      
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });
        alert(id)
  }
},
  }
 
</script>
<style >
body{
background-color: rgba(240, 240, 240, 0.712);
}
</style>