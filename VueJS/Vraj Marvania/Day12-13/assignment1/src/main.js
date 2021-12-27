import { createApp } from "vue";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";

import Home from "./components/Layout/Home.vue";

import CSS from "./components/Layout/CSS.vue";
import CSSHome from "./components/CSS/CSSHome";

// import d1APindex from "./components/CSS/Day1/Additional Practice/index.vue";
import d1Aindex from "./components/CSS/Day1/Assignment/index.vue";
// import d1PTASK from "./components/CSS/Day1/Practice/TASK.vue";
// import  d2APindex from "./components/CSS/Day2/Additional Practice/index.vue";
// import  d2Asite from "./components/CSS/Day2/Assignment/site.vue";
import d2Atask from "./components/CSS/Day2/Assignment/task.vue";
// import  d2ptask from "./components/CSS/Day2/Practice/task.vue";
// import  d2ptask2 from "./components/CSS/Day2/Practice/task2.vue";
// import  d2ptask3 from "./components/CSS/Day2/Practice/task3.vue";
// import css3Aindex from "./components/CSS/Day3/Assignment/index.vue";

// import  d3pindex from "./components/CSS/Day3/Prectice/index.vue";
// import  d3pindex1 from "./components/CSS/Day3/Prectice/Task1.vue";
// import  d3pindex2 from "./components/CSS/Day3/Prectice/Task2.vue";
// import  d3pindex3 from "./components/CSS/Day3/Prectice/task3.vue";
// import  d3pindex4 from "./components/CSS/Day3/Prectice/Task4.vue";
// import  d3pindex5 from "./components/CSS/Day3/Prectice/task5.vue";
// import  d3pindex6 from "./components/CSS/Day3/Prectice/Task6.vue";
// import  d3pindex7 from "./components/CSS/Day3/Prectice/Task7.vue";
import d4Aindex from "./components/CSS/Day4/Assignment/task1.vue";
import css5Aindex from "./components/CSS/Day3/Assignment/index.vue"
// import  d4pindex1 from "./components/CSS/Day4/Prectice/Task1.vue";
// import  d4pindex2 from "./components/CSS/Day4/Prectice/Task2.vue";
// import  d4pindex3 from "./components/CSS/Day4/Prectice/Task3.vue";
// import  d4pindex4 from "./components/CSS/Day4/Prectice/Task4.vue";
import JsDay3 from "./components/JS/Day3/Assigment/index.vue";
import JsDay2 from "./components/JS/Day2/Assigment/index.vue";
// import Cssnav from "./components/Cssnav.vue";

// import Navbar from "./components/Navbar.vue";

import HTML from "./components/Layout/HTML.vue";
import HtmlHome from "./components/HTML/HtmlHome";
import Form from "./components/HTML/Day1/Assignment/Form.vue";
import Day2_Practice from "./components/HTML/Day2/Practice/Practice.vue";

import JS from "./components/Layout/JS.vue";
import JSHome from "./components/JS/JSHome";
import JsDay1 from "./components/JS/Day1/Assignment/Task1.vue";

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
        path: "",
        name: "HtmlHome",
        component: HtmlHome,
      },
      {
        path: "Form",
        name: "Form",
        component: Form,
      },
      {
        path: "Day2_practice",
        name: "Practice",
        component: Day2_Practice,
      },
    ],
  },

  {
    path: "/CSS",
    name: "CSS",
    component: CSS,
    children: [
      {
        path: "",
        name: "CSSHome",
        component: CSSHome,
      },
      {
        path: "Day1/Assignment/index",
        name: "Day1_A_index",
        component: d1Aindex,
      },
      {
        path: "Day2/Assignment/site",
        name: "task",
        component: d2Atask,
      },
      // {
      //   path: "Day3/Assignment/index",
      //   name: "index",
      //   component: css5Aindex,
      // },
      {
        path: "Day3/Assignment/index",
        name: "index",
        component: css5Aindex,
      },
      {
        path: "Day4/Assignment/index",
        name: "task1",
        component: d4Aindex,
      },
     
    ],
  },
  {
    path: "/JS",
    name: "JS",
    component: JS,
    children: [
      {
        path: "",
        name: "JSHome",
        component: JSHome,
      },
      {
        path: "Day1/assignment/Task1",
        name: "Task1",
        component: JsDay1,
      },
      {
        path: "Day2/assignment/index",
        name: "index",
        component: JsDay2,
      },
      {
        path: "Day3/assignment/index",
        name: "Index",
        component: JsDay3,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App).use(router).mount("#app");
