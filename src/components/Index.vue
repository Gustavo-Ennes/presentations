<template>
  <section class='indexWrapper notThree'>
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
    </b-row>
  </section>
</template>

<script>
import Presentation from './Presentation.vue'
import About from './About.vue'

export default {
  name: "Index",
  components:{
    Presentation,
    About
  },
  data(){
    return {
      projects: ['feriapp', 'kratodo', 'portfolio', 'api', 'imobiliaria']
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
    setHeight(){
      const height = window.screen.height + "px"
      const d = document.querySelector('.main')
      d.style.setProperty("min-height", height)
    }
  },
  mounted(){
    this.addHoverAnimation()
    this.setHeight()
  }
}
</script>

<style scoped>


i{
  font-size: 28px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}
.projectsWrapper{
  margin-top: 100px;
}

.main{
  margin-top:100px;
  font-family: 'Fjalla One', sans-serif;
}


</style>