<template>
  <section class='footer'>
    <b-row class='text-center'>
      <b-col cols='12' md='6'>
          <div class='projectsWrapper'>
            <b-row align-h='around' align-v='center'>

              <!-- all projects -->
              <b-col cols='12'>
                <h4 class='label'>Projects</h4>
              </b-col>
              <b-col cols='6'>
                <a href="https://feriapp.ennes.dev"><p>Feriapp</p></a>
              </b-col>
              <b-col cols='6'>
                <a href="https://kratodo.ennes.dev"><p>Kratodo</p></a>
              </b-col>
              <b-col cols='6'>
                <a href="https://ennes.dev"><p>Portfolio</p></a>
              </b-col>
              <b-col cols='6'>
                <a href="/"><p>Presentations<small>(this page)</small></p></a>
              </b-col>
            </b-row>
          </div>

      </b-col>
      <b-col cols='12' md='6'>
        <div class='projectsWrapper'>
          <b-row align-h='around' align-v='center'>

            <!-- All contacts -->
            <b-col cols='12'>
              <h4 class='label'>Contact me</h4>
            </b-col>
            
            <b-col cols='12'>
              <a href="https://ennes.dev"><p>My site</p></a>
            </b-col>

            <b-col cols='12'>
              <a href="https://github.com/Gustavo-Ennes"><p>Github</p></a>
            </b-col>

            <b-col cols='12'>
              <a href="https://www.linkedin.com/in/gustavo-ennes/"><p>LinkedIn</p></a>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </section>
</template>

<script>
export default {
  name: "Footer",
  methods:{
    addHoverListeners(){
      const els = document.querySelectorAll('a p')
      els.forEach( el => {

        const prefix = "animate__"

        el.addEventListener('mouseenter', () => {
          el.classList.add(`${prefix}animated`)
          el.classList.add(`${prefix}jello`)
          el.style.setProperty('--animate-duration', '0.1s')
          el.addEventListener('mouseleave', () => {

            el.classList.remove(`${prefix}animated`)
            el.classList.remove(`${prefix}jello`)
          })
        });
      })
    }

  },
  mounted(){
    this.addHoverListeners()
  }

}
</script>

<style scoped>
a{
  text-decoration: none;
  color: #ddd !important;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2) !important;
}
a p:hover{
  color:#bbb !important;
  cursor: pointer !important;
}

.label{
  color:#82bf46;
  text-shadow: 2px 2px 2px rgba(0, 0,0, 0.4);
  margin-bottom:50px;
}
.footer{
  background-color:darkorange;
  z-index: 2;
  position:relative;
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;  
}
.projectsWrapper{
  padding:20px;
  margin:25px;
}

</style>