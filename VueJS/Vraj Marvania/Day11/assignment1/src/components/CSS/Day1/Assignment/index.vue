<!-- Create personalized resume, which must be attractive. Use all the HTML tags and apply CSS which we have learned so far.
   Add one short video of your project done into resume. -->

<template>
   


      
     
         <DIV CLASS="LSID">
            <DIV CLASS="left">
               <DIV>
                  <h2 id="name">Vraj <br>Marvania</h2>
                  <H3>Aspiring Software Engineer</H3>
               </DIV>
               <DIV ID="SKILL">
                  <hr />
                  <H2>PERSIONAL INFO</H2>
                  <hr />
               </DIV>
               <DIV>
                  <H2>Phone No</H2>
                  <p>99999-43454</p>
                  <H2>Email</H2>
                  <p>vraj.marvania@gmail.com</p>
                  <H2>WWW</H2>
                  <p><a href="https://vrajmarvania.github.io/cv/">vraj marvania.com</a></p>
                  <H2>Linkdin</H2>
                  <p><a href="https://www.linkedin.com/in/vraj-marvania111/">linkedin.com/in/vraj-marvania111</a></p>
               </DIV>
               <hr />
               <DIV ID="SKILL">
                  <H2>S K I L L S </H2>
               </DIV>
               <hr />
               <DIV>
                  <label for="file">PYTHON</label><br />
                  <progress id="file" value="86" max="100"> </progress><br />
                  <label for="file">JAVA</label><br />
                  <progress id="file" value="80" max="100"> </progress><br />
                  <label for="file">DJANGO</label><br />
                  <progress id="file" value="90" max="100"> </progress><br />
                  <label for="file">SQL</label><br />
                  <progress id="file" value="90" max="100"> </progress><br />
                  <label for="file">BOOTSTRAP</label><br />
                  <progress id="file" value="80" max="100"> </progress><br />
                  <label for="file">GIT</label><br />
                  <progress id="file" value="90" max="100"> </progress><br />
                  <label for="file">HTML</label><br />
                  <progress id="file" value="85" max="100"> </progress><br />
                  <label for="file">CSS</label><br />
                  <progress id="file" value="80" max="100"> </progress><br />
               </DIV>
            </DIV>
         </DIV>
         <DIV class="RSID">
            <DIV>
               <ul>
                  <hr />
                  <H2>E D U C A T I O N</H2>
                  <hr />
                  <li>
                     <H2>Computer Engineering, (B.E)</H2>
                     <p>Shri Labhubhai Trivedi Institute of Engineering
                        and Technology,Rajkot (GTU)<br />
                        08/2017 - 07/2021,
                     </p>
                  </li>
                  <li>
                     <H2> 12th Board, GSHSEB (Gujarat board)</H2>
                     <p>Akshar School
                        06/2015 - 05/2017,
                     </p>
                  </li>
                  <li>
                     <H2>10th Board, GSEB (Gujarat board)</H2>
                     Rosary High School<br />
                     06/2014 - 05/2015,
                  </li>
                  </ul>
            </DIV>
            <DIV>
               <ul>
                  <hr />
                  <h2>PERSONAL PROJECTS</h2>
                  <hr />
                  <li>
                     <h2>Shelter
                        (Accommodation booking)
                     </h2>
                     <p>This Project Is Specially For Book all type of Accommodation. Nowadays people Facing Problem To
                        Find A Accommodation
                        To Stay In City. So We Make Better For That.. - (Python &
                        Django Framework)
                     </p>
                  </li>
                  <li>
                     <h2> Manage Resto
                        (Restaurant Management)
                     </h2>
                     <p>
                        This Project Is especially for the owner they have multiple
                        restaurants they manage easily using this and they analyzing
                        restaurant revenue, Top buying food dish, invoice (Python &
                        Django Framework)
                     </p>
                  </li>
                  <li>
                     <h2>Blogs&News
                        (Blog & News App)
                     </h2>
                     <p>
                        This project contains website created using python and
                        Django And RESTAPI which have created using 'NEWSAPI' as
                        well as blog listing in which user can customize own blogs.
                        (Python & Django Framework)
                     </p>
                  </li>
                  <li>
                     <h2>Covid-19 Info
                        (Covid-19 Live Data info)
                     </h2>
                     <p>
                        display live covid-19 data using live API(Rapidapi) in (Python
                        & Django Framework)
                     </p>
                  </li>
               </ul>
            </DIV>
            
            <DIV>
               <ul>
                  <hr/>
                  <h2>
                     C E R T I F I C A T E S
                     </h2>
                        <hr />
                        <li>
                           <h5>Python Certificate by Hackerrank (03/2021)</h5>
                        </li>
                        <li>
                           <h5>It covers topics like Scalar Types, Operators and Control Flow, Strings,
                              Collections and Iteration, Modularity, Objects and Types and Classes Develop A Covid-19 Live
                              Web App With Python Django
                              (03/2021)
                           </h5>
                        </li>
                        <li>
                           <h5>This course display live covid-19 data using live API
                           </h5>
                        </li>
                        <li>
                           <h5>Java tutorial for beginners by Udemy (04/2020)
                           </h5>
                        </li>
                        <li>
                           <h5>Career Edge by Tcs (04/2020)</h5>
                        </li>
               </ul>
            </DIV>
         </DIV>     
</template>
<script>
export default {
   name:"Day1_A_index"
}
</script>



<style>
*{font-family:"belleza";}

.LSID{
    padding-bottom: 36%;
    background-color: rgba(0, 0, 80, 0.849);
    width: 25%; 
    float: left;
}
.RSID{
    width:75%; 
    float:right;
}

a{color:white}
.left
{
padding: 5%;
 text-align: left;
 color: white;
}

.name{
    font-weight: bolder;
}
aside.right{
    text-align: left;

    background-color:rgb(255, 255, 255);

}


</style>