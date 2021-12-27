<template>
     <div class="">

            <label for="title1" class="Lname">CSS
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
                      <p><router-link to="/CSS/Day1/Assignment/index" >Assignment-Resume</router-link></p>
                   </div>
                </div>

                <!-- DAY2 -->
                <label for="DAY-2" class="DAY">DAY-2<i class="gg-chevron-down"></i></label>
                <input type="checkbox" id="DAY-2" />
                <div class="content">
                   <label for="DAY-2-Assignment" class="NEST">Assignment<i class="gg-chevron-down"></i></label>
                   <input type="checkbox" id="DAY-2-Assignment" />
                   <div class="content">
                      <p><router-link to="/CSS/Day2/Assignment/site" >Application Basic Layout </router-link></p>
                   </div>
                </div>

                <!-- DAY3 -->
                <label for="DAY-3" class="DAY">DAY-3<i class="gg-chevron-down"></i></label>
                <input type="checkbox" id="DAY-3" />
                <div class="content">
                   <label for="DAY-3-Assignment" class="NEST">Assignment<i class="gg-chevron-down"></i></label>
                   <input type="checkbox" id="DAY-3-Assignment" />
                   <div class="content">
                      <P><router-link to="/CSS/Day3/Assignment/index" >Practice-Task-MenuList </router-link></P>
                   </div>
                </div>

                <!-- DAY4 -->
                <label for="DAY-4" class="DAY">DAY-4<i class="gg-chevron-down"></i></label>
                <input type="checkbox" id="DAY-4" />
                <div class="content">
                   <label for="DAY-4-Assignment" class="NEST">Assignment<i class="gg-chevron-down"></i></label>
                   <input type="checkbox" id="DAY-4-Assignment" />
                   <div class="content">
                      <p><router-link to="/CSS/Day4/Assignment/index" >Assignment-Photo-Album-Gallery</router-link></p>
                   </div>
                </div>
             </div>
          </div>
</template>
<script>
export default {
  name:'Cssnav'
}
</script>
<style>

</style>