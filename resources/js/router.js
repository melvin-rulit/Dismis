import vueRouter from 'vue-router';
import Vue from 'vue';


Vue.use(vueRouter);

import Index from "./views/Index";
import Blog from "./views/Blog";

const routes = [
    { 
        path: "/Home", 
        component: Index

    },
    {
      path: "/Blog", 
      component: Blog

    },
    {
      path: "/blog", 
      component: Blog

    },
    {
      path: "/blog", 
      component: Blog

    },
    {
      path: "/blog", 
      component: Blog

    },
    {
      path: "/blog", 
      component: Blog

    },
 
  ];


  export default new vueRouter({
    mode: "history",
    // router:router и его облегченная запись
    routes
  });