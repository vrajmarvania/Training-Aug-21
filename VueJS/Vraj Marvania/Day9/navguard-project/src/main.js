import { createApp } from 'vue'
import login from './components/login.vue'
import Secure from './components/Secure.vue'
import { createWebHistory, createRouter } from "vue-router";
import App from './App.vue'
import { createStore } from 'vuex'

export const store = createStore({
    state () {
        return {
            authenticated: false
        }
      },
    mutations: {
        setAuthentication(state, status) {
            state.authenticated = status;
        }
    }
})



var routes=[
    {
        path: '/',
        redirect: {
            name: "login"
        }
    },
    {
        path: "/login",
        name: "login",
        component: login,
      },
      {
        path: "/Secure",
        name: "Secure",
        component: Secure,
        beforeEnter: (to, from, next) => {
            if(store.state.authenticated == false) {
                next(false);
            } else {
                next();
            }
        }
      },
      
]
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  createApp(App).use(store).use(router).mount('#app')
  