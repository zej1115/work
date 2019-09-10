import Vue from 'vue'
import Router from 'vue-router'

/* login begin */
// import Login from '../views/login'
/* login end */

/* Home begin */
/*import Home from '../views/home'*/
/* Home end */


Vue.use(Router);

let routes = [
  /*{
		path: '/',
		component: Index,
		children: [
			{
				path: '/',
				name: '欢迎页面',
				component : () => import('../views/home')
			}
		]
	},*/
  
  /* 消息系统 begin */
  {
    path: '/',
    component: () => import('../pages/index'),
    children: [
      {
        path: '/',
        name: '消息系统欢迎页面',
        component: () => import('../pages/Home/home')
      },
    ]
  },
  
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/login'),
  },
  
  {
    path: '/forgot',
    name: 'login',
    component: () => import('../pages/login'),
  },
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
    if (to.path === '/login' || to.path === '/forgot-password') {
      next();
    } else {
      router.push('/login');
    }
  }
});

export default router;
