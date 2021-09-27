<template>
  <b-row>
    <b-col cols='12'>
      <b-container>
        <figure class='text-center'>
          <img class='rounded img-fluid mx-auto d-flex' src='https://storage.googleapis.com/ennes/imobiliaria/imobiliaria.png' alt='My real estate api page'>
          <figcaption>Real Estate GraphQL API</figcaption>
        </figure>       

        <h1 class='display-2 my-5 text-center'>Imobiliária</h1>

        <p class='lead text-center'>An express.js GraphQL API to a real estate business</p>

        <strong class='subtitle text'> Overview </strong>


        <!-- paragraph -->
        <p class='text'>
          This GraphQL API is the back-end of a real estate management project that aims to make 
          the real estate admin's life more easy. The real estate ideia is just the first thing 
          that came to my mind when thinking about start a new project to learn a new technology 
          that i was curious about.
        </p>

        <strong class='subtitle text'> BACK-end </strong>

        <p class='text'>
          In the back-end side (and in the front-end, later), I was curious about GraphQL. 
          What this thing does and why it's relevant. "GraphQL is a query language for your API, 
          and a server-side runtime for executing queries using a type system you define for 
          your data", is the quote in the GraphQL 
          <a href='https://graphql.org/learn/' class='link'>'Introduction to GraphQL'</a> 
          site. After spending a lot of time debuging and testing a REST API, the new 
          syntax (at least to me), all the possibilities and the one time access returning 
          all that you need in your page or element was the 
        </p>

        <!-- section divider -->

        <strong class='subtitle text'> The handsome query syntax</strong>

        <!-- code  -->
        <pre>
            <highlightjs autodetect code='   
              mutation{
                signIn(
                  type: "admin",
                  input:{
                    name: "Gustavo Ennes",
                    password: "simplePassword"
                    phone: "18 1913856134",
                    username: "kratosKhan",
                    cellphone: "18 0294384783",
                    address_street: "17",
                    address_number: 212,
                    address_district: "SP",
                    address_city: "Ilha Solteira",
                    address_zip: "15.385-000"
                  }
                ){
                  isSigned
                  username
                }
              }
              '
            />
              
        </pre>


        <figure class='text-center'>
          <img class='rounded img-fluid mx-auto d-flex' src='https://storage.googleapis.com/ennes/imobiliaria/tests.png' alt='My real estate tests'>
          <figcaption>Some tests</figcaption>
        </figure>       

        <p class='text'>
          Until now, the api has 70+ tests passing between unit and integrations tests. The 
          API is desingned to validate scanned documents and put them to validation by some 
          admin. The purpose is to automate the sending and receiving of documents
        </p>


        <strong class='subtitle text'> FRONT-end</strong>


        <figure class='text-center'>
          <img class='rounded img-fluid mx-auto d-flex' src='https://storage.googleapis.com/ennes/imobiliaria/quasar.png' alt='Quasar framework'>
          <figcaption>Quasar Framework</figcaption>
        </figure>  



        <p class='text'>
          The front-end part I didn't start yet, so that's nothing to show. The technology 
          choosed was Quasar, because it's based in Vue.js, has a great suport for 
          mobile browsers and a strong comunity, regular release cycle and covers 
          the intire development process and all platforms(mobile, desktop, web) with 
          all types(iOS, android, windows, mac).

        </p>



        <section class='mt-5 text'>
          <b-row align-h='around' class='text-center'>
            <b-col cols='4'><span class='tech'>Node.js</span></b-col>
            <b-col cols='4'><span class='tech'>MongoDB</span></b-col>
            <b-col cols='4'><span class='tech'>GraphQL</span></b-col>
            <b-col cols='4'><span class='tech'>Express.js</span></b-col>
            <b-col cols='4'><span class='tech'>express-graphQL</span></b-col>
            <b-col cols='4'><span class='tech'>Quasar</span></b-col>
            <b-col cols='4'><span class='tech'>Vue</span></b-col>
            <b-col cols='4'><span class='tech'>Mocha ~ Chai</span></b-col>
          </b-row>
        </section>


        <i class="far fa-arrow-alt-circle-left text" @click='$router.push("/")'> Go back</i>

      </b-container>
    </b-col>
  </b-row>
</template>
<script>
  export default {
    name: "Imobiliaria"
  }
</script>