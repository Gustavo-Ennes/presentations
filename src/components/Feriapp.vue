<template>
  <b-row>
    <b-col cols='12'>
      <b-container>

          <figure class='text-center'>
            <img class='rounded img-fluid mx-auto d-flex p-2' src='https://storage.googleapis.com/ennes/feriapp/login.png' alt='Feriapp login' />
            <figcaption class='text-light'>Feriapp login page</figcaption>
          </figure>

          <h1 class='display-2 text-center title'>FERIAPP</h1>
          <p class='text lead'>
            Feriapp is, generally speaking, an app to schedule vacations and day-offs. Let's see how it works in details.
          </p>
          <p class='text'>
            The Feriapp project was prototyped to help me in avoiding doing the same shit repeatedly at my work. 
            I was in college and thinking in to create and maintain a project a lit bit bigger and more complex than 
            a simple <a href='https://kratodo.ennes.dev'>to-do app</a> or a simple blog. The ideia was to avoid 
            to build something just-to-learn and make a thing that real people uses, displaying real data (while learning 
            Django). 
          </p>

          <p class='text'>
            The picture above shows feriapp's login page. The logo is my town's coat of arms but this project is not related or supported by city hall.
          </p>

          <figure class='text-center'>
            <img class='rounded img-fluid mx-auto d-flex p-2' src='https://storage.googleapis.com/ennes/feriapp/acesso_rapido.png' alt='Main page' /> 
            <figcaption class='text-light'>Easy access to main functionalities</figcaption>
          </figure>

          <p class='text'>
            The index page shows buttons to all the main functionalities of this app:
          </p>

          <ul>
            <li>
              <strong class='text subtitle'>Requisições</strong>
              <ul class='text'>

                <li class='ml-5'>
                  <strong>Marcar Férias:</strong>
                  <p>
                    Marcar Férias is to schedule vacations. Just needs a worker, a start day and the vacation lenght(max = 30 days).
                  </p>
                </li>

                <li class='ml-5'>
                  <strong> Marcar Licença-Prêmio:</strong>
                  <p>
                    The same as above, except the length that could be more, as the worker accumulates 90 days each 5 years of work.
                  </p>
                </li>

                <li class='ml-5'>
                  <strong>Marcar Abono: </strong>
                  <p>
                    One of 6 yearly day-offs. Just takes the worker and the date.
                  </p>
                </li>

                <li class='ml-5'>
                  <strong>Sexta-Parte: </strong>
                  <p>
                    This is a very special requirement, to be used after 20 years of service, granting 30% salary bonus.
                  </p>
                </li>

                <li class='ml-5'>
                  <strong>Materials: </strong>
                  <p>
                    Generic stuff warehouse requisition
                  </p>
                </li>

              </ul> 
            </li>
            <li>
              <strong class='text subtitle'>Novo</strong>
              <ul class='text'>
                <li>
                  <strong>Trabalhador:</strong>
                  <p>
                    Shows a modal containing the form to create a worker.
                  </p>
                </li>
                <li>
                  <strong >Secretaria:</strong>
                  <p>
                    Just asks for a name to create a brand new department.
                  </p>
                </li>
                <li>
                  <strong>Aviso:</strong>
                  <p>
                    Title, content and some options to create a warning pdf and shows it in screen.
                  </p>
                </li>
              </ul>
            </li>
          </ul>


          <figure class='text-center'>
            <img class='img-fluid mx-auto d-flex' src='https://storage.googleapis.com/ennes/feriapp/form_abono.png' alt='Abono form page' /> 
            <figcaption class='text-light'>Form to create day-offs</figcaption>
          </figure>

          <figure class='text-center'>
            <img class='img-fluid mx-auto d-flex' src='https://storage.googleapis.com/ennes/feriapp/pdf_abono.png' alt='Abono generated pdf' /> 
            <figcaption class='text-light'>Generated pdf</figcaption>
          </figure>

          <strong class='subtitle text'>PDF generation</strong>
          <p class='mt-3 text'>
            Every time you create a new Abono or Férias, a new pdf is processed and shown in page. ReportLab is the 
            tool used to handle this task, processing the request, generating a brand new pdf in their specific 
            path and redirecting the browser to that path.
          </p>

          <strong class='subtitle text'>Banners</strong>
          <p class='mt-3 text'>
            The index page has a carroussel element that displays city hall's campaing images. Those images are 
            scraped from the official website everyday, by a cloud function scheduled once a day after expedient, in 
            Google Cloud Console.
          </p>

          <strong class='subtitle text'>Relatórios</strong>
          <p class='mt-3 text'>
            Another automatizated tasks is to calculate workers extra hours of work. For every worker a line is
            shown containing three fields: the number of extra hours, nightly hours and absense days. 
            Hitting the button at the end of the page will generate a report, one for each department created, 
            containing only the workers that have one non-zero field or more.
          </p>

          <figure class='text-center'>
            <img class='img-fluid mx-auto d-flex' src='https://storage.googleapis.com/ennes/feriapp/horas.png' alt='Calculating extra hours of work' /> 
            <figcaption class='text-light'>Relatórios</figcaption>
          </figure>

          <figure class='text-center'>
            <img class='img-fluid mx-auto d-flex' src='https://storage.googleapis.com/ennes/feriapp/proximas_folgas.png' alt='Calculating extra hours of work' /> 
            <figcaption class='text-light'>Vacation monitoring</figcaption>
          </figure>

          <strong class='subtitle text'>Monitoring</strong>
          <p class='mt-3 text'>
            
            Feriapp monitors all types of vacations, telling you in your index page who are the workers 
            that will enter in a vacation soon, the ones returning, and when. 
          </p>

          <strong class='subtitle text'>Technologies</strong>
          <section class='mt-5 text'>
            <b-row align-h='around'>
              <b-col cols='4'>Python</b-col>
              <b-col cols='4'>Django</b-col>
              <b-col cols='4'>MongoDB</b-col>
              <b-col cols='4'>Sass</b-col>
              <b-col cols='4'>BeautifulSoup4</b-col>
              <b-col cols='4'>ReportLab</b-col>
              <b-col cols='4'>Cloud Functions</b-col>
              <b-col cols='4'>Cloud scheduler </b-col>
              <b-col cols='4'>App Engine</b-col>
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
  name: "Feriapp",
  components:{
    Footer
  }
}
</script>

<style>
.title{
  text-shadow:1px 1px 2px rgba(0, 0, 0, 0.7);
  margin-bottom: 50px;
  padding:20px;
}
.text{
  color:#ddd;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  padding:30px;
  font-size: 30px !important;
}

.subtitle{
  margin-top:30px;
  margin-bottom: 55px;
  padding:10px;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: rgba(53, 43, 1, 0.377);
  margin-left:2rem;
}

figure{
  padding:20px;
}
img{
  box-shadow:2px 2px 12px 4px rgba(0, 0, 0, 0.2);
}

</style>