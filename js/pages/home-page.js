 export default {
     template: `
    <section class="home-page main-layout flex">
        <div class="welcome">
            <div class="logo">
              <img src="./img/logo-homepage.png"/>
            </div>
            <div class="links flex">
        <a href="https://hanan-neor.github.io/books-vue/#/book"><div><img src="./img/books.png"/></div></a>
            <router-link to="/keep"><div><img src="./img/notes.png"/></div></router-link>
            <router-link to="/email/email-list"><div><img src="./img/email.png"/></div></router-link>
 </div>
        </div>
    </section>
    `
 }