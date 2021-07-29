<template>
  <div class='layer notThree'>
    <div class='threejs'></div>
    <div class='notThree'>
      <transition
      mode="out-in"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__bounceOut animate__fast"
      >

        <keep-alive class='notThree'>
          <router-view id="app">   
          </router-view>
        </keep-alive>
      </transition>


      <div class='notThree'>
        <Footer />
      </div>

    </div>
  </div>
</template>

<script>
import { init } from './assets/index.js';
import Footer from './components/Footer'

export default {
  name: 'App',
  components:{
    Footer
  },
  mounted(){
    const el = document.querySelector('.threejs')
    init(el)
  }
}
</script>

<style scoped>
.threejs{
  position: fixed !important;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

</style>