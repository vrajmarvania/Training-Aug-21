<template>
<AddStudent></AddStudent>

<h1>Student list</h1>
<table>
    <tr>
        <th>
            ID
        </th>
        <th>
            NAme
        </th><th>
            Address
        </th><th>
            Payment
        </th><th>
            amount
        </th>
        Status
        <th>

        </th>
    </tr>
    <tr v-for="s in student_list" :key=s.ID>
    
    <td> {{s.ID}}</td>
     <td>{{s.Name}}</td>
      <td>{{s.Address}}</td>
    <td>{{s.Fees.PaymentDate}}</td>
    <td>{{s.Fees.Amount}}</td>
      <td>{{s.Fees.Status}}</td>
    </tr>
</table>
</template>
<script>
import student from "../Services/student"
import AddStudent from "./AddStudent.vue"
export default ({
    name:"Student",
    data(){
        return{
            student_list:[]
        }
    },
    components:{
        AddStudent
    },
    mounted(){
       student.get_all().then(response => {
        //   this.tutorials = response.data;
            this.student_list=response.data;
          console.log(response);
        })
        .catch(e => {
          console.log(e);
        });

    },

    methods:{

    }
})
</script>
<style>
</style>