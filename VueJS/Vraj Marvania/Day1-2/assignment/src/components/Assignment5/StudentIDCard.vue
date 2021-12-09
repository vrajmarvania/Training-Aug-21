<template>
   <div className="container">
      <div className="card">
        <div className="card-header">
          <Image :image_path=image_path />
        </div>
        <Personal  :FirstName=FirstName :LastName=LastName :Dob=Dob :Id=Id />
        <div className="card-body text-center">
          <College college logo="https://scontent.famd1-1.fna.fbcdn.net/v/t1.6435-9/118594384_100605918448584_8260773858414193290_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ms3MaF0uJu4AX-s_dhm&_nc_ht=scontent.famd1-1.fna&oh=3cef0dcca6f99d5a6510d8f2e096e47d&oe=61CE1BF1" Name="V.V.P. Engineering College" Address="Kalavad Road Virda Vajadi, Rajkot, Gujarat 360005"/>
        </div>
      </div>
    </div>
</template>
<script>
import Image from "./image.vue";
import Personal from "./Personal.vue";
import College from "./College.vue";

// import StudentIDCard from "./StudentIDCard.vue"

export default {
  name: "StudentIDCard",
  components: {
    Image,
    College,
    Personal,
  },
  props:{
    Id:String,
     FirstName:String,
      LastName:String ,
      Dob:String , 
      image_path:String ,
       logo:String ,
        Name:String ,
        Address:String ,
  }
};
</script>

<style >
* {
  box-sizing: border-box;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: #ffffff;
  font-family: "Roboto", sans-serif;
  color: #10182f;
}
.container {
  display: flex;
  width: 1040px;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.card {
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 300px;
}
.card-header img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
}

.tag {
  background: #cccccc;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;
}
.tag-teal {
  background-color: #47bcd4;
}
.tag-purple {
  background-color: #5e76bf;
}
.tag-pink {
  background-color: #cd5b9f;
}

.card-body p {
  font-size: 13px;
  margin: 0 0 40px;
}
.user {
  display: flex;
  margin-top: auto;
}

.user img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.user-info h5 {
  margin: 0;
}
.user-info small {
  color: #545d7a;
}
</style>