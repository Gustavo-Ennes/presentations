<template>
   <b-row align-h='center'>
      <b-col cols='12'>
        <div class='main container-fluid'>
          <b-row align-h='around'>
            <b-col cols='12'>
              <h1 class='display-2 mb-5 text-center'>PRESENTATIONS</h1>
            </b-col>
            <b-col cols='12'>
              <About />
            </b-col>
            <b-col cols='12'>
              <div class='projectsWrapper'>
                <b-row align-h='center'>
                  <b-col cols='12' md='6' lg='4' xl='3' v-for='project in projects' :key='project._id'>

                    <Presentation :project='project' />
                   
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-col>
      <b-col cols='12'>
        <Footer />
      </b-col>
    </b-row>
</template>

<script>
import axios from 'axios'
import Footer from './Footer.vue'
import Presentation from './Presentation.vue'
import About from './About.vue'

export default {
  name: "Index",
  components:{
    Footer,
    Presentation,
    About
  },
  data(){
    return {
      projects: null
    }
  },
  methods: {
    addHoverAnimation(animation='pulse'){
      try{
        const els = document.querySelectorAll('.projectWrapper')
        const prefix = "animate__"
        els.forEach(el => {

          el.style.setProperty('--animate-duration', '0.4s')

          el.addEventListener('mouseenter', () => {
            el.classList.add(`${prefix}animated`)
            el.classList.add(`${prefix}${animation}`)

            el.addEventListener('mouseleave', () => {
              el.classList.remove(`${prefix}animated`)
              el.classList.remove(`${prefix}${animation}`)
            })
          })
        })
      }catch(err){
        console.log({err})
      }      
    },
    async fetchProjects(){
      try{
        const res = await axios({
          method: 'get',
          url:'https://api.ennes.dev/portfolio/project'
        })
        this.projects = res.data.projects
      }catch(err){
        console.log({error: `Impossible fetch projects:\n${err}`})
      }      
    },
    setHeight(){
      const height = window.screen.height + "px"
      const d = document.querySelector('.main')
      d.style.setProperty("min-height", height)
    }
  },
  async mounted(){
    await this.fetchProjects()
    this.addHoverAnimation()
    this.setHeight()
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #82bf46;
  color: #f89500;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2)
}
i{
  font-size: 28px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}
.projectsWrapper{
  margin-top: 100px;
}

.main, .footer{
  margin-top:100px;
  font-family: 'Fjalla One', sans-serif;
}

</style>