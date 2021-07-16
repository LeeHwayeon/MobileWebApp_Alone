<template>
  <div id="intro">
    <!-- App Logo -->
    <div class="logo">
      <img src="../assets/intro/intro-logo.png" alt="Intro Logo">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Intro',
    mounted() {
      this.loginMove();
    },
    methods: {
      loginMove(){
        setTimeout(() => {
          this.$router.push('/login')
        }, 5000);
      }
    }
  }
</script>

<style scoped>
  /* App logo */
  #intro .logo {
    position: absolute;
    left: 50%;
    top: 50%;

    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
</style>