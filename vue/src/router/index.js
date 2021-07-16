import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Intro from '../../src/components/Intro.vue'
import Login from '../../src/components/Login.vue'
import Signup from '../../src/components/Signup.vue'
import Trend from '../../src/components/Trend.vue'
import Best from '../../src/components/Best.vue'
import Community from '../../src/components/Community.vue'
import Interior from '../../src/components/Interior.vue'
import Store from '../../src/components/Store.vue'
import Diy from '../../src/components/Diy.vue'
import Product from '../../src/components/Product.vue'
import Eco from '../../src/components/Eco.vue'
import Refur from '../../src/components/Refur.vue'
import Mypage from '../../src/components/Mypage.vue'


Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
   {
      path: '/',
      name: 'Intro',
      component: Intro
   },
   {
    path: '/login',
    name: 'Login',
    component: Login
   },
   {
    path: '/signup',
    name: 'Signup',
    component: Signup
   },
   {
    path: '/trend',
    name: 'Trend',
    component: Trend
   },
   {
    path: '/best',
    name: 'Best',
    component: Best
   },
   {
    path: '/community',
    name: 'Community',
    component: Community
   },
   {
    path: '/interior',
    name: 'Interior',
    component: Interior
   },
   {
    path: '/store',
    name: 'Store',
    component: Store
   },
   {
    path: '/diy',
    name: 'Diy',
    component: Diy
   },
   {
    path: '/product',
    name: 'Product',
    component: Product
   },
   {
    path: '/eco',
    name: 'Eco',
    component: Eco
   },
   {
    path: '/refur',
    name: 'Refur',
    component: Refur
   },
   {
    path: '/mypage',
    name: 'Mypage',
    component: Mypage
   },
 ]
});

export default router;
