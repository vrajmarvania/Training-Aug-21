<!-- Create Students Array of 3 students with field Image,Id,FirstName,LastName,DOB,CollegeName,Address and CollegeLogo and pass it as Object to the StudentIDCardComponent.-->
<template>
  <div>
    <h1>====-Assignment5====</h1>
   <div v-for="item in data_array" :key="item.Id">
      <!-- <StudentIDCard :item/> -->
    <StudentIDCard :Id=item.ID  :FirstName=item.FirstName :LastName=item.LastName :Dob=item.Dob :image_path=item.image_path :logo=item.lgo :Name=item.Name :Address=item.Address />

   </div>
  </div>
</template>
<script>
import StudentIDCard from "./StudentIDCard.vue"

export default {
  name: "Assignment2",
   components: {
     StudentIDCard
  },
  data(){
    return{

  data_array : [
    {
      ID: 232,
      FirstName: "Vraj",
      LastName: "Marvania",
      Dob: "2000-20-10",
      image_path:
        "https://png.pngtree.com/png-clipart/20200224/original/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_5233396.jpg",
      logo: "https://scontent.famd1-1.fna.fbcdn.net/v/t1.6435-9/118594384_100605918448584_8260773858414193290_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ms3MaF0uJu4AX-s_dhm&_nc_ht=scontent.famd1-1.fna&oh=3cef0dcca6f99d5a6510d8f2e096e47d&oe=61CE1BF1",
      Name: "V.V.P. Engineering College",
      Address: "Kalavad Road Virda Vajadi, Rajkot, Gujarat 360005",
    },
    {
      ID: 252,
      FirstName: "brijen",
      LastName: "doshi",
      Dob: "2000-02-10",
      image_path:"https://png.pngtree.com/png-clipart/20190516/original/pngtree-man-avatar-icon-professional-man-character-business-man-avatar-carton-symbol-png-image_3669490.jpg",
      logo: "https://scontent.famd1-1.fna.fbcdn.net/v/t1.6435-9/118594384_100605918448584_8260773858414193290_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ms3MaF0uJu4AX-s_dhm&_nc_ht=scontent.famd1-1.fna&oh=3cef0dcca6f99d5a6510d8f2e096e47d&oe=61CE1BF1",
      Name: "V.V.P. Engineering College",
      Address: "Kalavad Road Virda Vajadi, Rajkot, Gujarat 360005",
    },
    {
      ID: 333,
      FirstName: "shreyash",
      LastName: "soni",
      Dob: "2004-05-15",
      image_path:"https://png.pngtree.com/png-clipart/20200224/original/pngtree-male-avatar-simple-cartoon-design-png-image_5230556.jpg",
      logo: "https://scontent.famd1-1.fna.fbcdn.net/v/t1.6435-9/118594384_100605918448584_8260773858414193290_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ms3MaF0uJu4AX-s_dhm&_nc_ht=scontent.famd1-1.fna&oh=3cef0dcca6f99d5a6510d8f2e096e47d&oe=61CE1BF1",
      Name: "V.V.P. Engineering College",
      Address: "Kalavad Road Virda Vajadi, Rajkot, Gujarat 360005",
    },
  ]
  }}
 
};
</script>

<style>


</style>