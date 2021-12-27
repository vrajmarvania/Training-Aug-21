<template>
  <div class="grid-container mx-4 px-4 pt-4" style="padding-right: 6.5rem!important; padding-left: 6.5rem!important;">
   
    <div class="row">
       <div class="col m-1 p-4 boxs">
      <router-link class="nav-link" to="/HTML">
        <img id='logo' src="@/assets/images/html_logo.png"  />
        
      </router-link>
    </div>
    <div class="col m-1 p-4 boxs">
      <router-link class="nav-link" to="/CSS">
        <img id='logo' src="@/assets/images/CSS_logo.png" /></router-link>
    </div>
    <div class="col m-1 p-4 boxs">
      <router-link class="nav-link" to="/JsIndex">
        <img id='logo' src="@/assets/images/Jsimg.png" 
      /></router-link>
    </div>
   
    </div>
  </div>
  
</template>

<script>
export default {
  name: "Home",
};


</script>
<style >
body{
  /* background-color: #e4e4e4; */
}
.boxs{
  width:670px;
      box-shadow: 0 0 15px #00000054;

}

.boxs:hover{
      box-shadow: 0 0 3px #00000054;

}
#logo{
  height:180px;
  
}
* {
  margin: 0;
  font-family: belleza;
}

/* navbar */
a {
  color: white;

  text-decoration: none;
}

a:hover {
  color: rgb(0, 49, 155);
}

.grid-nav-container {
  display: grid;
  grid-template-columns: auto auto;
  background-color: #000000;
  justify-items: end;
  align-items: center;
  justify-content: space-between;
  
}

.grid-nav-item {
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 25px;
  justify-items: center;
  text-align: center;
  padding: 0px 32px;
  color: white;
}

.Itms-nav-container {
  display: grid;
  grid-template-columns: auto auto auto auto auto;
}

.Itms-nav-container > a:hover {
  color: rgb(0, 0, 0);
}
a:hover{
    color: rgb(0, 4, 255);

}
.item2 input + .content {
  display: none;
}

.item2 input:checked + .content {
  display: block;
}

.item2 input {
  display: none;
}

.content > li {
  padding: 2px;
  background-color: rgb(255, 255, 255);
  text-align: center;
}

.content > a {
  padding: 4px 90px;
}

.content {
  padding: 0px;
}

.content > UL {
  padding-left: 10px;
}

.content > p {
  text-align: center;
  padding: 8px 22px;
  margin: 0 0 1px 0;
  cursor: pointer;
  background: #ffba08;
  border-radius: 3px;
  color: rgb(0, 0, 0);
  margin-left: 12px;
}

.LNAME {
  background-color: #6a040f;
}

.DAY {
  margin-left: 3px;
  text-align: center;
  background-color: #6a040f;
  color: rgb(255, 255, 255);
}

.NEST {
  margin-left: 6px;
  text-align: center;
  background-color: #dc2f02;
  color: rgb(255, 255, 255);
}

/* HOVER */
label.Lname:hover {
  background-color: rgb(59, 0, 0);
}

.DAY:hover {
  background-color: #7f2b33;
}

.NEST:hover {
  text-align: center;
  background-color: #a42100;
  color: rgb(255, 255, 255);
}

Ul.main-nav {
  margin: 0px;
}

.gg-chevron-down {
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  transform: scale(var(--ggs, 1));
  height: 18px;
  left: 4px;
  align-items: center;
  border: 2px solid transparent;
  border-radius: 100px;
}

.gg-chevron-down::after {
  content: "";
  display: block;
  box-sizing: border-box;
  position: absolute;
  width: 10px;
  height: 10px;
  border-bottom: 2px solid;
  border-right: 2px solid;
  transform: rotate(45deg);
  left: 4px;
  top: 2px;
}

.item2 label {
  text-align: center;
  display: block;
  padding: 8px 22px;
  margin: 2px 0 1px 0;
  cursor: pointer;
  background: #03071e;
  border-radius: 3px;
  color: #fff;
  transition: cubic-bezier(0, 2.22, 0.18, 1.45) 0.5s;
}

/* <!----------------------------->--> */

.grid-container {
  display: grid;
  grid-template-columns: auto auto;
    justify-content: center;

  grid-gap: 5px;
  height: 100%;
  background-color: #ffffff;
}

.grid-container > div {
  text-align: center;
  font-size: 30px;
}

.item1 {
  grid-area: 1 / span 2;
}

.item3 {
  padding: 20px;
}

.item4 {
  color: white;
  padding: 20px;
}

.item5 {
  color: white;
}

.img {
  text-align: center;
}
/* 
@media only screen and (max-width: 605px) {
  .Itms-nav-container {
    padding: 5px;
    display: grid;
    grid-template-columns: auto;
  }

  .item2 {
    grid-column: 1 / span 2;
  }
  .item3 {
    grid-column: 1 / span 2;
    grid-row: 4/5;
    padding: 20px;
  }
  .item4 {
    grid-column: 1 / span 2;
    grid-row: 5/6;
    padding: 20px;
  }
  .item5 {
    grid-column: 1 / span 2;
    grid-row: 6/7;
    padding: 20px;
  }
}
@media only screen and (max-width: 768px) {
  .grid-nav-container {
    grid-template-columns: auto;
    justify-content: center;
    justify-items: center;
  }

  .grid-nav-item {
    padding: 0px 25px;
  }
} */
/* .item2,
.item3,
.item4,
.item5 {
  padding: 15px;
  margin: 4px;
  border: 2px solid black;
} */
/* .item2:hover,
.item3:hover,
.item4:hover,
.item5:hover {
  background-color: rgba(12, 32, 0, 0.418);
  border: 2px solid rgba(12, 32, 0, 0.418);
} */
.item3  {
    background-color: rgb(255, 255, 255);
}
.active {
  color: chartreuse;
}
</style>
