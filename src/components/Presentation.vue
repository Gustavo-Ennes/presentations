<template>
   <router-link :to="defineWhere()">
      <section class='projectWrapper'>
        <i class="fas fa-image text-light"> </i>
        <br/>
        <h1 class='text-center'> {{ project }}</h1>
      </section>
    </router-link>
    
</template>

<script>
export default {
  name: 'Presentation',
  props: ['project'],
  methods: {
    defineWhere(){
      return `/${this.project}`
    }
  }

}
</script>

<style>

a {
  color: inherit !important;
  text-decoration: inherit !important;
  cursor: inherit !important;
}

.projectWrapper{
  background-color:rgba(255, 255, 255, 0.1);
  height: 150px;
  margin:15px;
  padding:10px;
  cursor: pointer !important;
  border-radius: 5px;
}
.projectWrapper:hover{
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: -1px 4px 22px 1px rgba(0, 0, 0, 0.05)
}

</style>