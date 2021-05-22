<template>
  <b-row>
      <b-col cols='12'>
        <b-container>

          <figure class='text-center'>
            <img class='rounded img-fluid mx-auto d-flex' src='https://storage.googleapis.com/ennes/api/api.png' alt='My Api page'>
            <figcaption>Api</figcaption>
          </figure>       

          <h1 class='display-2 my-5 text-center'>Portfolio API</h1>

          <p class='lead text-center'>An Express.js REST API to serve my dreadful purposes</p>

          <strong class='subtitle text'> Overview </strong>

          <p class='text'>
            The first projects that i've made were with front-end attached to the back-end, 
            in intention of just learn node.js and vue.js at the same time. I've finished 
            these projects, heroku deploy. After the basics of these technologies 
            were learnt, I thought in to separate this two projects in three.
          </p>
          <p class='text'>
            One of these is a REST API. I've wanted to create an api to serve all my already done 
            projects and all future projects that fits the same requirements. The two others are kratodo, 
            the quoted above simple todo app and my portfolio, both Vue apps.            
          </p>
          <p class='text'>
            Let's take a look at my api.         
          </p>

          <strong class='subtitle text'> Models </strong>

          <p class='text'>
            This API, until now, works with 3 types of schemas: a project schema, 
            freely consumed by my portfolio vue app; and Todo and User schemas consumed 
            by Kratodo Vue app with authentication.
          </p>
          
          <pre>
            <highlightjs autodetect code="         
              const ProjectSchema = new mongoose.Schema(
                {
                  name: {type: String, required: true, unique: true},
                  title: {type: String, required: true},
                  subTitle: String,
                  imagesUrls: [String],
                  videoUrl: String,
                  usedTechs: [String],
                  projectLink: String,
                  repo:String,    
                },
                {timestamps: true}
              );" 
            />
              
          </pre>


          <strong class='subtitle text my-5'> Middlewares </strong>

          <p class='text'>
            The Kratodo app contains two middleware to help with user authentication and register: 
            one to validate the data sended in case of new user, already validated by front-end but 
            just in case; and another one to handle users authentication when manipulating their to-do's. 
          </p>

          <pre>
            <highlightjs autodetect code="     
                app.use('/', indexRouter);
                app.use('/portfolio/', portfolioProjectsRouter);
                app.use('/kratodo/', kratodoIndexRouter);
                app.use('/kratodo/todos/',authMiddleware, kratodoTodosRouter);
            " 
            />
          </pre>
          <strong class='subtitle text my-5'> Routes </strong>

          <p class='text'>
            The /kratodo routes are for serving to-do specific methods, /portfolio routes are 
            project related and in the root just one route to send e-mails.
          </p>
          <pre>
            <highlightjs lang='javascript' code="
              router
                .get('/', async (req, res) => {
                    res.send({message: 'Welcome to my API!'})
                })
                // parameter received in req.body.to must be a array of strings
                .post('/send-mail/', async (req, res) => {   

                    const to = req.body.to
                    const from = req.body.from || null
                    const html = getTemplate(req.body.html)
                    const text = req.body.text
                    const subject = req.body.subject
                    
                    try{
                        let result = await sendMail(to, from, subject, html, text)
                        res.send(result)
                    }catch(err){
                        console.log(err)
                    }
                })
              " />
          </pre>


          <i class="far fa-arrow-alt-circle-left text" @click='$router.push("/")'> Go back</i>


        </b-container>
      </b-col>
      <b-col cols='12'>
        <Footer />
      </b-col>
      
  </b-row>    
</template>
<script>
  import Footer from './Footer.vue'
  export default {
    name: "Api",
    components: {
      Footer,
    },
  }
</script>