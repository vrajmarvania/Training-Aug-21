<!--Call StudentID Card component 3 times and pass different student data using props-->
<template>
  <div>
    <h1>====-Assignment4====</h1>
  
      <StudentIDCard Id="200" FirstName="Vraj" LastName="Marvania" Dob="2000-04-10" image_path="https://png.pngtree.com/png-clipart/20200224/original/pngtree-handsome-young-guy-avatar-cartoon-style-png-image_5233396.jpg" logo="https://scontent.famd1-1.fna.fbcdn.net/v/t1.6435-9/118594384_100605918448584_8260773858414193290_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ms3MaF0uJu4AX-s_dhm&_nc_ht=scontent.famd1-1.fna&oh=3cef0dcca6f99d5a6510d8f2e096e47d&oe=61CE1BF1" Name="V.V.P. Engineering College" Address="Kalavad Road Virda Vajadi, Rajkot, Gujarat 360005"/>
    <StudentIDCard Id="201"  FirstName="brijen" LastName="doshi" Dob="2000-03-13" image_path="https://png.pngtree.com/png-clipart/20190516/original/pngtree-man-avatar-icon-professional-man-character-business-man-avatar-carton-symbol-png-image_3669490.jpg" logo="https://scontent.famd1-1.fna.fbcdn.net/v/t1.6435-9/118594384_100605918448584_8260773858414193290_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ms3MaF0uJu4AX-s_dhm&_nc_ht=scontent.famd1-1.fna&oh=3cef0dcca6f99d5a6510d8f2e096e47d&oe=61CE1BF1" Name="V.V.P. Engineering College" Address="Kalavad Road Virda Vajadi, Rajkot, Gujarat 360005"/>
    <StudentIDCard  Id="202" FirstName="shreyash" LastName="soni" Dob="2000-03-13"  image_path="https://png.pngtree.com/png-clipart/20190516/original/pngtree-man-avatar-icon-professional-man-character-business-man-avatar-carton-symbol-png-image_3669490.jpg" logo="https://scontent.famd1-1.fna.fbcdn.net/v/t1.6435-9/118594384_100605918448584_8260773858414193290_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ms3MaF0uJu4AX-s_dhm&_nc_ht=scontent.famd1-1.fna&oh=3cef0dcca6f99d5a6510d8f2e096e47d&oe=61CE1BF1" Name="V.V.P. Engineering College" Address="Kalavad Road Virda Vajadi, Rajkot, Gujarat 360005"/>


  </div>
</template>
<script>
import StudentIDCard from "./StudentIDCard.vue"

export default {
  name: "Assignment2",
   components: {
     StudentIDCard
  }
 
};
</script>

<style>


</style>