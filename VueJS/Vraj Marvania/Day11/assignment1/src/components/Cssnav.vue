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
                   <label for="DAY-1Practice" class="NEST">Practice<i class="gg-chevron-down"></i></label>
                   <input type="checkbox" id="DAY-1Practice" />
                   <div class="content">
                      <p><router-link to="/CSS/Day1/Practice/TASK" >All-Practice-Task</router-link></p>
                   </div>
                   <label for="DAY-1-Additional Practice" class="NEST">Additional Practice<i
                         class="gg-chevron-down"></i></label>
                   <input type="checkbox" id="DAY-1-Additional Practice" />
                   <div class="content">
                      <p> <router-link to="/CSS/Day1/Additional Practice/index" >Practice</router-link></p>
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
                   <label for="DAY-2Practice" class="NEST">Practice<i class="gg-chevron-down"></i></label>
                   <input type="checkbox" id="DAY-2Practice" />
                   <div class="content">
                      <p><router-link to="/CSS/Day2/Practice/task" >Practice-Task1</router-link></p>
                      <p><router-link to="/CSS/Day2/Practice/task2" >Practice-Task2</router-link></p>
                      <p><router-link to="/CSS/Day2/Practice/task3" >Practice-Task3</router-link></p>
                   </div>
                   <label for="DAY-2-Practice" class="NEST">Additional Practice<i class="gg-chevron-down"></i></label>
                   <input type="checkbox" id="DAY-2-Practice" />
                   <div class="content">
                      <P><router-link to="/CSS/Day2/Additional Practice/task" > Float,Position,Overflow
                            Properties Practice-Task</router-link>
                      </P>
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
                   <label for="DAY-3-Practice" class="NEST">Practice<i class="gg-chevron-down"></i></label>
                   <input type="checkbox" id="DAY-3-Practice" />
                   <div class="content">
                      <p><router-link to="/CSS/Day3/Prectice/index" >Practice-Task1</router-link></p>
                      <p><router-link to="/CSS/Day3/Prectice/index1" >Practice-Task2</router-link></p>
                      <p><router-link to="/CSS/Day3/Prectice/index2" >Practice-Task3</router-link></p>
                      <p><router-link to="/CSS/Day3/Prectice/index3" >Practice-Task4</router-link></p>
                      <p><router-link to="/CSS/Day3/Prectice/index4" >Practice-Task5</router-link></p>
                      <p><router-link to="/CSS/Day3/Prectice/index5" >Practice-Task6</router-link></p>
                      <p><router-link to="/CSS/Day3/Prectice/index6" >Practice-Task7</router-link></p>
                      <p><router-link to="/CSS/Day3/Prectice/index7" >Practice-Task8</router-link></p>
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
                   <label for="DAY-4Practice" class="NEST">Practice<i class="gg-chevron-down"></i></label>
                   <input type="checkbox" id="DAY-4Practice" />
                   <div class="content">
                      <p><router-link to="/CSS/Day4/Prectice/index1" >Practice-Task1</router-link></p>
                      <p><router-link to="/CSS/Day4/Prectice/index2" >Practice-Task2</router-link></p>
                      <p><router-link to="/CSS/Day4/Prectice/index3" >Practice-Task3</router-link></p>
                      <p><router-link to="/CSS/Day4/Prectice/index4" >Practice-Task4</router-link></p>
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