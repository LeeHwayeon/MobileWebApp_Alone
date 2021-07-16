<template>
  <div id="best">
    
    <!-- Header Area Start -->
    <Header></Header>

    <!-- Content Area Start -->
    <router-view></router-view>
    <h1>베스트</h1>

    <!-- Footer Area Start -->
    <Footer></Footer>

  </div>
</template>

<script>
import Header from '../components/component/Header.vue'
import Footer from '../components/component/Footer.vue'

export default {
  name : 'Best',
  components : {
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>