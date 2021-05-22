<template>
  <transition
  mode="out-in"
  enter-active-class="animate__animated animate__fadeIn"
  leave-active-class="animate__animated animate__fadeOut"
  >
    <keep-alive>
      <router-view id="app">   
      </router-view>
    </keep-alive>
  </transition>
</template>

<script>
export default {
  name: 'App'
}
</script>

