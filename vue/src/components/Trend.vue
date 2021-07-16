<template>
  <div id="trend">
    
    <!-- Header Area Start -->
    <Header></Header>

    <!-- Content Area Start -->
    <h1>트렌드</h1>
    <router-view></router-view>

    <!-- Footer Area Start -->
    <Footer></Footer>

  </div>
</template>

<script>
import Header from '../components/component/Header.vue'
import Footer from '../components/component/Footer.vue'

export default {
  name : 'Trend',
  components : {
    Header,
    Footer
  }
}
</script>

<style>

</style>