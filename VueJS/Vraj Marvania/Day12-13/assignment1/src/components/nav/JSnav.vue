<template>
      <div class="">
            <label for="title1" class="Lname">JS
               <i class="gg-chevron-down"></i>
            </label>
            <input type="checkbox" id="title1" />
            <div class="content">
               <!-- DAY1 -->
               <label for="DAY-1" class="DAY">DAY-1 <i class="gg-chevron-down"></i>
               </label>
               <input type="checkbox" id="DAY-1" />
               <div class="content">
                  <label for="DAY-1-Assignment" class="NEST">Assignment<i class="gg-chevron-down"></i></label>
                  <input type="checkbox" id="DAY-1-Assignment" />
                  <div class="content">
                     <p><router-link to="/JS/Day1/assignment/Task1" >Task1</router-link></p>
                  </div>
<!-- 
                  <label for="DAY-1Practice" class="NEST">Practice<i class="gg-chevron-down"></i></label>
                  <input type="checkbox" id="DAY-1Practice" />
                  <div class="content">
                     <p> <router-link to="/JS/Day1/Practice/Practice" >Practice</router-link></p>
                     <p><router-link to="/JS/Day1/Practice/Task1" >Task1</router-link></p>
                      <p> <router-link to="/JS/Day1/Practice/Task2" >Task2</router-link></p>
                  </div> -->
                 
<!-- 
                  <label for="DAY-1-Additional Practice" class="NEST">Additional Practice<i
                        class="gg-chevron-down"></i></label>
                  <input type="checkbox" id="DAY-1-Additional Practice" />
                  <div class="content">
                     <p> <router-link to="/JS/Day1/Practice/Task" >JS-Practice</router-link></p>
                  </div> -->
               </div>
                <!-- DAY2 -->
              <label for="DAY-2" class="DAY">DAY-2<i class="gg-chevron-down"></i></label>
               <input type="checkbox" id="DAY-2" />
               <div class="content">
               <label for="DAY-2-Assigment" class="NEST">Assigment<i class="gg-chevron-down"></i></label>
                  <input type="checkbox" id="DAY-2-Assigment" />
                  <div class="content">
                     <P><router-link to="/JS/Day2/assignment/index">index</router-link></P>
                  </div>
                  <!-- <label for="DAY-2-Practice" class="NEST">Practice<i class="gg-chevron-down"></i></label>
                  <input type="checkbox" id="DAY-2-Practice" />
                  <div class="content">
                     <P><router-link to="/JS/Day2/Practice/Practice" >Practice-Task1</router-link></P>
                      <P><router-link to="/JS/Day2/Practice/Task" >Practice-Task1</router-link></P>
                  </div> -->
               </div>
                 <!-- DAY2 -->
              <label for="DAY-3" class="DAY">DAY-3<i class="gg-chevron-down"></i></label>
               <input type="checkbox" id="DAY-3" />
               <div class="content">
               <label for="DAY-3-Assigment" class="NEST">Assigment<i class="gg-chevron-down"></i></label>
                  <input type="checkbox" id="DAY-3-Assigment" />
                  <div class="content">
                     <P><router-link to="/JS/Day3/assignment/index">index</router-link></P>
                  </div>
                  <!-- <label for="DAY-2-Practice" class="NEST">Practice<i class="gg-chevron-down"></i></label>
                  <input type="checkbox" id="DAY-2-Practice" />
                  <div class="content">
                     <P><router-link to="/JS/Day2/Practice/Practice" >Practice-Task1</router-link></P>
                      <P><router-link to="/JS/Day2/Practice/Task" >Practice-Task1</router-link></P>
                  </div> -->
               </div>
            </div>
      </div>
</template>
<script>

export default ({
   name:'Sidenav'
})
</script>

<style >

</style>