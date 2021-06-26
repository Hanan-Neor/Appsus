export default {
    template: `
    <header class="app-header flex space-between align-center">

        <router-link to="/" class= "header-logo">Appsus</router-link>
        <nav>
                <router-link to="/email/email-list">Email</router-link> |
                <router-link to="/keep">Keep</router-link> |
                <a href="https://hanan-neor.github.io/miss-books2/">Book</a>
        </nav> 
    </header>
    `,
    components: {}
}