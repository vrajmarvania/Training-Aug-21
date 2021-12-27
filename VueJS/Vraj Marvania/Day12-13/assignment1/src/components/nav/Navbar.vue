<template>

        <!-- <div class="item1">
            <div class="grid-nav-container">
                <div class="grid-nav-item"><img src="@/assets/images/logo_radix.png"></div>
                <div class="Itms-nav-container">
                    <div class="grid-nav-item "><router-link to="/">HOME</router-link></div>
               <div class="grid-nav-item "><router-link to="/HTML"  class="active">HTML</router-link></div>
               <div class="grid-nav-item "><router-link to="/CSS">CSS</router-link></div>
               <div class="grid-nav-item "><router-link to="/BOOTSTRAP">BOOTSTRAP</router-link></div>
               <div class="grid-nav-item "><router-link to="/JS">JS</router-link></div>
                </div>
            </div>
        </div> -->

<nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="    background-color: #000000!important;">
  <div class="container-fluid">
                    <div class="grid-nav-item"><img src="@/assets/images/logo_radix.png"></div>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex-row" id="navbarScroll" style="justify-content: flex-end">
      <!-- <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Link</a>
        </li>
      </ul> -->
    <div class="d-flex">
      <div class="grid-nav-item "><router-link to="/"  v-bind:class="HOME" >HOME</router-link></div>
               <div class="grid-nav-item "><router-link to="/HTML"  v-bind:class="HTML" >HTML</router-link></div>
               <div class="grid-nav-item "><router-link to="/CSS"  v-bind:class="CSS" >CSS</router-link></div>
               <!-- <div class="grid-nav-item "><router-link to="/BOOTSTRAP">BOOTSTRAP</router-link></div> -->
               <div class="grid-nav-item "><router-link to="/JS"  v-bind:class="JS" >JS</router-link></div>
</div>      
    </div>
  </div>
</nav>
</template>
<script>

export default ({
   name:'Navbar',
   data(){return{
     HOME:'',
     HTMl:'',
     CSS:'',
     JS:'',
      activenav(name){
      switch(name){
          case  "HOME" :{this.HOME="active";break;}
          case  "HTML" :this.HTML="active";break;
          case  "CSS"  : this.CSS="active";break;
          case  "JS"   : this.JS="active";break;
      }
   this.activenav("HOME")
     },}
}})
</script>
 