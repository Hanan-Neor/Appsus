export default {
    template: `
    <header class="app-header flex space-between align-center">

        <router-link to="/" class= "header-logo"><img src="../../img/logo.png"/></router-link>
        <nav>
                <router-link to="/email/email-list" >Email</router-link> |
                <router-link to="/keep">Keep</router-link> |
                <a href="https://hanan-neor.github.io/books-vue/#/book">Book</a>
        </nav> 
    </header>
    `,
    components: {}
}