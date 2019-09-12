import Vue from 'vue'
import Router from 'vue-router'

import Login from '../pages/Login';
//import ForgotPassword from '../pages/ForgotPassword'
import Index from '../pages/Index'
import Main from '../pages/common/Main'
import ControlUser from '../components/category/ControlUser/ControlUser.vue'

Vue.use(Router);

let routes = [
  {
    path:'/',
    name: 'Index',
    component: () => import('../pages/Index'),
    children: [
      {
        path: '/main',
        name: '主页',
        component: Main
      }
    ]
  },
  
  // 登录
  {
    path: '/login',
    name: 'Login',
    component: () => import('../pages/Login'),
  },
  
  // 忘记密码
  {
    path: '/controluser',/*forgotpassword*/
    name: 'ControlUser',
    component: ControlUser
  }
  
  
];

let router = new Router({
  routes
});


router.beforeEach((to, from, next) => {
  let loginToken = window.sessionStorage.getItem('loginToken');
  // console.log(to.path);
  // console.log(loginToken);
  
  if (loginToken) {
    if (to.path === '/login') {
      router.push('/');
    } else {
      next();
    }
  } else {
    if (to.path === '/login' || to.path === '/controluser') {/*forgotpassword*/
      next();
    } else {
      router.push('/login');
    }
  }
});

export default router;
