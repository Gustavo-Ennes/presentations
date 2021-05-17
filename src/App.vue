<template>
  <div id="app" class='container-fluid vh-100 text-center'>
    <b-row>
      <b-col cols='12'>
        <h1 class='display-2 mb-5'>Projects</h1>
      </b-col>
      <b-col v-for='project in projects' :key='project._id'>
        <section class='projectWrapper'>
          <h1>{{ project.title }}</h1>
          <p class='text-light'>{{ project.subTitle }}</p>
        </section>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data(){
    return {
      projects: null
    }
  },
  components: {
    
  },
  async mounted(){
    const res = await axios({
      method: 'get',
      url:'https://api.ennes.dev/portfolio/project'
    })
    this.projects = res.data.projects
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #82bf46;
  color: #F8C500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5)
}
.projectWrapper{
  padding:15px;
  background-color:rgba(255, 255, 255, 0.1);
  height: 150px;
}
</style>
