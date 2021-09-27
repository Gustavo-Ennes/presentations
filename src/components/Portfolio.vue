<template>

  <b-row>
    <b-col cols='12'>
      <b-container>

        <figure class='text-center'>
          <img class='rounded img-fluid mx-auto d-flex' src='https://storage.googleapis.com/ennes/portfolio/title.png' alt='My portfolio page'>
          <figcaption>Portfolio</figcaption>
        </figure>       

        <h1 class='display-2 my-5 text-center'>PORTFOLIO</h1>

        <p class='text lead text-center'>A vue.js portfolio app</p>

        <strong class='text subtitle'>HI!</strong>

        <p class='text'>
          This projects is a simple Vue.js application for my portfolio. It consumes my api to fetch the projects, 
          to store messages from clients and send e-mails. The buttons brings a smooth scroll effect to navigate the page.
        </p>

        <figure class='text-center'>
          <img class='rounded img-fluid mx-auto d-flex' src='https://storage.googleapis.com/ennes/portfolio/description.png' alt='my portfolio description'>
          <figcaption>Description section</figcaption>
        </figure>   

        <strong class='text subtitle'>Description</strong>

        <p class='text'>
          The description section, like this intire project, is animated by animate.css and typed.js
        </p>  

        <figure class='text-center'>
          <img class='rounded img-fluid mx-auto d-flex' src='https://storage.googleapis.com/ennes/portfolio/project.png' alt='my portfolio project'>
          <figcaption>Projects</figcaption>
        </figure>   

        <strong class='text subtitle'>Projects</strong>

        <p class='text'>
          The projects are fetched using axios to consume my own api, displaying each one animatedly 
          with all relevant data in cards.
        </p> 

        <figure class='text-center'>
          <img class='rounded img-fluid mx-auto d-flex' src='https://storage.googleapis.com/ennes/portfolio/send.png' alt='my portfolio mail sender'>
          <figcaption>Contact section</figcaption>
        </figure>   

        <strong class='text subtitle'>Contact</strong>

        <p class='text'>
          Nodemailer takes care of e-mail sending task, sending two e-mails each time: 
          One for the client with relevant information and greetings and another to me, 
          warning me that a client send me a message. After the message was sent, an animation 
          with Rick and Morty characters thanks the client.
        </p>      


        <strong class='subtitle text'>Technologies</strong>
        <section class='mt-5 text'>
          <b-row align-h='around'>
            <b-col cols='4'><span class='tech'>Node</span></b-col>
            <b-col cols='4'><span class='tech'>Vue</span></b-col>
            <b-col cols='4'><span class='tech'>MongoDB</span></b-col>
            <b-col cols='4'><span class='tech'>Sass</span></b-col>
            <b-col cols='4'><span class='tech'>Bootstrap</span></b-col>
            <b-col cols='4'><span class='tech'>Animate.css</span></b-col>
            <b-col cols='4'><span class='tech'>Node Mailer</span></b-col>
          </b-row>
        </section>

        <i class="far fa-arrow-alt-circle-left text" @click='$router.push("/")'> Go back</i>

        

      </b-container>
    </b-col>
  </b-row>
</template>

<script>

export default {
  name: 'Portfolio'

}
</script>