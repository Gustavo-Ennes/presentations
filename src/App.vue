<template>
  <div class='layer'>
    <transition
    mode="out-in"
    enter-active-class="animate__animated animate__fadeIn"
    leave-active-class="animate__animated animate__bounceOut animate__fast"
    >
      <keep-alive class='bg-dark'>
        <router-view id="app">   
        </router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.layer{
  background-color:#222
}
</style>

