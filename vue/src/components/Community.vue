<template>
  <div id="community">
    
    <!-- Header Area Start -->
    <Header></Header>

    <!-- Content Area Start -->
    <h1>커뮤니티</h1>
    <router-view></router-view>

    <!-- Footer Area Start -->
    <Footer></Footer>

  </div>
</template>

<script>
import Header from '../components/component/Header.vue'
import Footer from '../components/component/Footer.vue'

export default {
  name : 'Community',
  components : {
    Header,
    Footer
  }
}
</script>

<style>

</style>