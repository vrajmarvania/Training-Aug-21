import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from "vue-router";

import Home from './components/Home.vue'
import About from "./components/About.vue";
import Services from "./components/Services.vue";
import Students from "./components/Students.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about/:name",
    name: "About",
    component: About,
    props: true,

  },
  {
    path: "/Services",
    name: "Services",
    component: Services,
  },
  {
    path:"/Students",
    name:"Students",
    component:Students,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
createApp(App).use(router).mount('#app')
