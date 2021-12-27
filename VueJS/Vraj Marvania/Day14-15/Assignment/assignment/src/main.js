import { createApp } from 'vue'
import App from './App.vue'
import { createWebHistory, createRouter } from "vue-router";

import Student_Form from './components/Student_Form.vue'
import Students from './components/Students.vue'
import Student_Update from './components/Student_Update.vue'

const routes = [
    {
      path: "/",
      name: "Students",
      component: Students,
      
    },
    {
        path: "/Student_Form",
        name: "Student_Form",
        component: Student_Form,
      },
      {
        path: "/Student_Update/:_id",
        name: "Student_Update",
        component: Student_Update,
        props: true
      },
]

const router = createRouter({
    history: createWebHistory(),routes});
createApp(App).use(router).mount('#app')
