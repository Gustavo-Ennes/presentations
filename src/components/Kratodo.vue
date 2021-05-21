<template>

  <b-row>
    <b-col cols='12'>
      <b-container>

        <figure class='text-center'>
          <img class='rounded img-fluid mx-auto d-flex' src='https://storage.googleapis.com/ennes/kratodo/login.png' alt='kratodo login page'>
          <figcaption>Kratodo login page</figcaption>
        </figure>       

        <h1 class='display-2 my-5 text-center'>KRATODO</h1>

        <p class='text lead text-center'>A simple to-do app</p>

        <strong class='text subtitle'>Description</strong>

        <p class='text'>
          Kratodo was not designed to be an awesome featureful app. 
          The kratodo main goal is the learning process itself, of to implement and deploy an intire app 
          by myself, consuming my own api, while learning a different tech stack.
        </p>

        <strong class='text subtitle'>Login</strong>

        <p class='text'>
          As the picture above shows, login page is very simple and user sessions is handled by my own api 
          with express-session
        </p>

        <figure class='text-center'>
          <img class='rounded img-fluid mx-auto d-flex' src='https://storage.googleapis.com/ennes/kratodo/create_user.png' alt='create user page'>
          <figcaption>Create user page</figcaption>
        </figure>   

        <strong class='text subtitle'>Create user</strong>

        <p class='text'>
          The data is stored in backend using mongoDB through mongoose, axios is used to communicate with api. 
          Very simple e-mail and password verification. Button create is enabled after form validated.
        </p>  

        <figure class='text-center'>
          <img class='rounded img-fluid mx-auto d-flex' src='https://storage.googleapis.com/ennes/kratodo/create.png' alt='create todo page'>
          <figcaption>Create todo component</figcaption>
        </figure>   

        <strong class='text subtitle'>Create To-do</strong>

        <p class='text'>
          Takes the to-do title and an optional descriptions to follow it. A spinner shows up when 
          sending request and processing response. If everything is ok, the new to-do is added to 
          'Todos' section.
        </p> 

        <figure class='text-center'>
          <img class='rounded img-fluid mx-auto d-flex' src='https://storage.googleapis.com/ennes/kratodo/panel.png' alt='Kratodo panel'>
          <figcaption>App panel</figcaption>
        </figure>   

        <strong class='text subtitle'>Panel</strong>

        <p class='text'>
          This panel shows the quantity of unfinished and finished to-do's, updating itself accordingly.
        </p>      

        <figure class='text-center'>
          <img class='rounded img-fluid mx-auto d-flex' src='https://storage.googleapis.com/ennes/kratodo/todos.png' alt='kratodo todos'>
          <figcaption>To-do's</figcaption>
        </figure>   

        <strong class='text subtitle'>To-do's</strong>

        <p class='text'>
          The placeholder for all unfinished to-do's of a logged user. Every to-do inside this section 
          can be dragged and have it's order changed. The thumb-up icon, if clicked, turns an unfinished 
          to-do a finished one, and it wont belong to this section anymore. Every to-do has a button to 
          deletion and another one to edit. If edit is clicked, the input plaintext property is deactivated 
          and you can alter the to-do as the under image shows.
        </p>      

        <figure class='text-center'>
          <img class='rounded img-fluid mx-auto d-flex' src='https://storage.googleapis.com/ennes/kratodo/todo_edit.png' alt='kratodo todos edition'>
          <figcaption>To-do edition</figcaption>
        </figure>   


        <figure class='text-center'>
          <img class='rounded img-fluid mx-auto d-flex' src='https://storage.googleapis.com/ennes/kratodo/dones.png' alt='kratodo todos'>
          <figcaption>To-do's</figcaption>
        </figure>   

        <strong class='text subtitle'>Finished</strong>

        <p class='text'>
          Where the finished to-do's stays. The trash restore icon restore the to-do to a 
          unfinished state, transfering it to Todos container.
        </p>    

        <strong class='subtitle text'>Technologies</strong>
        <section class='mt-5 text'>
          <b-row align-h='around'>
            <b-col cols='4'>Node</b-col>
            <b-col cols='4'>Vue</b-col>
            <b-col cols='4'>MongoDB</b-col>
            <b-col cols='4'>Sass</b-col>
            <b-col cols='4'>Bootstrap</b-col>
            <b-col cols='4'>Animate.css</b-col>
          </b-row>
        </section>

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
  name: "Kratodo",
  components:{
    Footer
  }
  
}
</script>