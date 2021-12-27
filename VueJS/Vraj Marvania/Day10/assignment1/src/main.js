import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from "vue-router";

import Home from './components/Home.vue'

import CSS from "./components/CSS.vue";
import CSSHome from "./components/CSS/CSSHome";

import d1APindex from "./components/CSS/Day1/Additional Practice/index.vue";
import d1Aindex from "./components/CSS/Day1/Assignment/index.vue";
import d1PTASK from "./components/CSS/Day1/Practice/TASK.vue";
import  d2APindex from "./components/CSS/Day2/Additional Practice/index.vue";
import  d2Asite from "./components/CSS/Day2/Assignment/site.vue";
import  d2Atask from "./components/CSS/Day2/Assignment/task.vue";
import  d2ptask from "./components/CSS/Day2/Practice/task.vue";
import  d2ptask2 from "./components/CSS/Day2/Practice/task2.vue";
import  d2ptask3 from "./components/CSS/Day2/Practice/task3.vue";
import  d3Aindex from "./components/CSS/Day3/Assignment/index.vue";
import  d3pindex from "./components/CSS/Day3/Prectice/index.vue";
import  d3pindex1 from "./components/CSS/Day3/Prectice/Task1.vue";
import  d3pindex2 from "./components/CSS/Day3/Prectice/Task2.vue";
import  d3pindex3 from "./components/CSS/Day3/Prectice/task3.vue";
import  d3pindex4 from "./components/CSS/Day3/Prectice/Task4.vue";
import  d3pindex5 from "./components/CSS/Day3/Prectice/task5.vue";
import  d3pindex6 from "./components/CSS/Day3/Prectice/Task6.vue";
import  d3pindex7 from "./components/CSS/Day3/Prectice/Task7.vue";
import  d4Aindex from "./components/CSS/Day4/Assignment/task1.vue";
import  d4pindex1 from "./components/CSS/Day4/Prectice/Task1.vue";
import  d4pindex2 from "./components/CSS/Day4/Prectice/Task2.vue";
import  d4pindex3 from "./components/CSS/Day4/Prectice/Task3.vue";
import  d4pindex4 from "./components/CSS/Day4/Prectice/Task4.vue";

// import Cssnav from "./components/Cssnav.vue";

// import Navbar from "./components/Navbar.vue";

import HTML from "./components/HTML.vue";
import HtmlHome from "./components/HTML/HtmlHome";
import Demo from "./components/HTML/Day1/Additional Practice/Demo.vue"
import Form from "./components/HTML/Day1/Assignment/Form.vue"
import Practice from "./components/HTML/Day1/Practice/Practice.vue"
import  Day2_Practice from "./components/HTML/Day2/Practice/Practice.vue"

import JS from "./components/JS.vue";
import JSHome from "./components/JS/JSHome";
import d1Task1 from "./components/JS/Day1/Assignment/Task1.vue";
// import J1PPractice from  "./components/JS/Day1/Practice/Practice.vue";
// import J1pTask1 from  "./components/JS/Day1/Practice/Task1.vue";
// import J1pTask2 from  "./components/JS/Day1/Practice/Task2.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/HTML",
    name: "HTML",
    component: HTML,
    children: [
      {
        path:"",
        name:"HtmlHome",
        component:HtmlHome,
      },
      {
        path:"Form",
        name:"Form",
        component:Form,
      },{
        path:"Demo",
        name:"Demo",
        component:Demo,
      },{
        path:"Practice",
        name:"Practice",
        component:Practice,
      },{
        path:"Day2_practice",
        name:"Practice",
        component:Day2_Practice
      }
    ],
  },
  
  {
    path: "/CSS",
    name: "CSS",
    component: CSS,
    children: [
      {
        path:"",
        name:"CSSHome",
        component:CSSHome,
      },
      {
        path:"Day1/Assignment/index",
        name:"Day1_P_index",
        component:d1APindex,
      }, {
        path:"Day1/Practice/TASK",
        name:"Day1_A_index",
        component:d1Aindex,
      } ,{
        path:"Day1/Additional Practice/index",
        name:"Day1_P_Task",
        component:d1PTASK,
      }
      ,{
        path:"Day2/Additional%20Practice/task",
        
        name:"index",
        component:d2APindex,
      }
      ,{
        path:"Day2/Assignment/site",
        name:"site",
        component:d2Asite,
      },{
        path:"Day2/Assignment/task",
        name:"task",
        component:d2Atask,
      },{
        path:"Day2/Practice/task",
        name:"task",
        component:d2ptask,
      },{
        path:"Day2/Practice/task2",
        name:"task2",
        component:d2ptask2,
      },{
        path:"Day2/Practice/task3",
        name:"task3",
        component:d2ptask3,
      },{
        path:"Day3/Assignment/index",
        name:"index",
        component:d3Aindex,
      },
      {
        path:"Day3/Prectice/index",
        name:"index",
        component:d3pindex,
      }
      ,{
        path:"Day3/Prectice/index1",
        name:"index1",
        component:d3pindex1,
      }
      ,{
        path:"Day3/Prectice/index2",
        name:"index2",
        component:d3pindex2,
      },{
        path:"Day3/Prectice/index3",
        name:"index3",
        component:d3pindex3,
      },{
        path:"Day3/Prectice/index4",
        name:"index4",
        component:d3pindex4,
      },{
        path:"Day3/Prectice/index5",
        name:"index5",
        component:d3pindex5,
      },{
        path:"Day3/Prectice/index6",
        name:"index6",
        component:d3pindex6,
      },{
        path:"Day3/Prectice/index7",
        name:"index7",
        component:d3pindex7,
      }
      ,{
        path:"Day4/Assignment/index",
        name:"index",
        component:d4Aindex,
      },{
        path:"Day4/Prectice/index1",
        name:"index1",
        component:d4pindex1,
      },{
        path:"Day4/Prectice/index2",
        name:"index2",
        component:d4pindex2,
      },{
        path:"Day4/Prectice/index3",
        name:"index3",
        component:d4pindex3,
      }
      ,{
        path:"Day4/Prectice/index4",
        name:"index4",
        component:d4pindex4,
      }




    ],
  },
  {
    path:"/JS",
    name:"JS",
    component:JS,
    children:[ {
      path:"",
      name:"JSHome",
      component:JSHome,
    },{
      path:"Day1/Assignment/Task1",
      name:"Task1",
      component:d1Task1,
    },
//   {
// path:'Day1/Practice/Practice',
// name:"Practice",
// component:J1PPractice,

//   },
//   {
// path:'Day1/Practice/Task1',
// name:"Task1",
// component:J1pTask1,

//   },
//   {
// path:'Day1/Practice/Task2',
// name:"Task2",
// component:J1pTask2,

//   }
]
  }
  
];



const router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App).use(router).mount('#app')
