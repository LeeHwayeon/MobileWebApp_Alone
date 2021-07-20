import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// })


//실시간 인증 체크 함수
let app;

firebase.auth().onAuthStateChanged(user => {
  
  // !거짓이라면
  if (!app) {
    new Vue({
      el: '#app',
      router,
      render: h => h(App)
    });
  }
});