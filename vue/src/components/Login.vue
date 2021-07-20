<template>
  <div id="login">
    <!-- top-box Area Start -->
    <div class="top-box">
      <router-link to="/"><i class='fa fa-angle-left' aria-hidden='true'></i></router-link>
      <h2>로그인</h2>
    </div>

    <!-- form Area Start -->
    <form action="">
      <div class="form-group">
        <label for="input_id">아이디</label>
        <input type="text" name="id" id="input_id" placeholder="아이디" v-model="id">
      </div>
      <div class="form-group">
        <label for="input_pw">비밀번호</label>
        <input type="password" name="pw" id="input_pw" placeholder="비밀번호" v-model="password">
      </div>
      <p>
        <button id="login_btn" class="btn" v-on:click="login">로그인</button>
      </p>
    </form>

    <!-- bottom-box Area Start -->
    <div class="bottom-box">
      <a href="#">아이디 / 비밀번호 찾기</a>
      <router-link to="/signup">회원가입하기</router-link>

      <!-- fast-login -->
      <div class="fast-login">
        <h3>빠른 로그인</h3>
        <a href="#"><img src="../assets/login/login-naver.png" alt="naver"></a>
        <a href="#"><img src="../assets/login/login-instar.png" alt="inslogin-instar"></a>
        <a href="#" v-on:click="googleLogin"><img src="../assets/login/login-google.png" alt="goologin-google"></a>
        <a href="#"><img src="../assets/login/login-kakao.png" alt="klogin-kakao"></a>
      </div>
    </div>

  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    name: 'Login',
    data() {
      return {
        id: '',
        password: ''
      }
    },
    methods: {
      login(e) {
        firebase.auth().signInWithEmailAndPassword(this.id, this.password)
          .then(user => {
            console.log(user);
            alert('환영합니다 ☺️');

            this.$router.push('/trend');

          }, err => {
            console.log(err.message);
            alert("나홀로집에 회원이 아닙니다. 회원가입부터 진행해주세요!");

            this.$router.push('/signup');

          });
        e.preventDefault();
      },
      googleLogin() {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
          .signInWithRedirect(provider)
          .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...

            this.$router.push('/trend');

          }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;



          });

      }
    }
  }
</script>

<style scoped>
  /* ******************* 공통영역 선언시작 **************** */

  /* *********** btn *********** */
  .btn {
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    font: bold 1.5rem/39px '맑은 고딕', sans-serif;
    color: #fff;
    background-color: #9f5ba6;
    border-radius: 30px;
  }

  .btn:hover {
    background-color: #952fa0;
  }


  /* *********** Login Area Start *********** */
  #login {
    padding: 57px 33px;
  }

  /* top-box */
  #login .top-box {
    width: 100%;
    height: 121px;
    margin-bottom: 57px;
    color: #2d2d2d;
  }

  #login .top-box i {
    font-size: 3rem;
    margin-bottom: 63px;
  }

  #login .top-box h2 {
    font: bold 2rem/27px '맑은 고딕', sans-serif;
  }

  /* form */
  #login form {
    width: 100%;
    height: 174px;
    margin-bottom: 10px;
  }

  #login form .form-group {
    width: 100%;
    height: 20px;
    margin-bottom: 30px;
  }

  #login form .form-group label {
    display: none;
  }

  #login form .form-group input {
    width: 100%;
    border: 0;
    border-bottom: 1px solid #b1b1b1;
    padding: 9px 0;
    font: 400 1.3rem/17px '맑은 고딕', sans-serif;
    color: #7b7979;
  }

  #login form p {
    width: 100%;
    height: 39px;
    margin-top: 52px;
  }

  /* bottom-box */
  #login .bottom-box {
    width: 100%;
    height: 173px;
    text-align: center;
  }

  #login .bottom-box a {
    font: 400 1.2rem/16px '맑은 고딕', sans-serif;
    color: #b1b1b1;
    /* display: inline-lock; */
    margin-right: 46px;
  }

  #login .bottom-box a:nth-child(1) {
    padding-right: 46px;
    border-right: 1px solid #b1b1b1;
  }

  #login .bottom-box a:nth-child(2) {
    margin-right: 0;
  }

  #login .bottom-box a:hover {
    color: #666;
  }

  /* fast-login */
  #login .bottom-box .fast-login {
    width: 100%;
    height: 79px;
    margin: 78px auto 0;
  }

  #login .bottom-box .fast-login h3 {
    font: bold 1.3rem/17px '맑은 고딕', sans-serif;
    color: #2d2d2d;
    margin-bottom: 12px;
  }

  #login .bottom-box .fast-login a {
    width: 52px;
    height: 52px;
    margin-right: 24px;
  }

  #login .bottom-box .fast-login a:nth-child(n+5) {
    margin-right: 0;
  }

  #login .bottom-box .fast-login a img:last-child {
    margin-right: 0;
  }
</style>