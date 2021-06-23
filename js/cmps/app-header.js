export default {
    template: `
    <header class="app-header flex space-between">
        
        <router-link to="/" class= "header-logo">Appsus</router-link>

        <nav>
                <router-link to="/email">Email</router-link>
                <router-link to="/keep">Keep</router-link>
                <router-link to="/book">Book</router-link>
        </nav>   
    </header>
    `,
    components: {}
}