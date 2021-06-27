export default {
    template: `
    <header class="app-header flex space-between align-center">

        <router-link to="/" class= "header-logo"><img src="../img/logo.png"/></router-link>
        <i @click="togglingMenu" style="cursor:pointer" class="fas fa-bars"></i>
        <nav v-show="toggleMenu">
        <a href="https://hanan-neor.github.io/books-vue/#/book"><div @click="togglingMenu"><img src="./img/books.png"/></div></a>
            <router-link to="/keep"><div @click="togglingMenu"><img src="./img/notes.png" /></div></router-link>
            <router-link to="/email/email-list"><div  @click="togglingMenu"><img src="./img/email.png"/></div></router-link>
        </nav> 
    </header>
    `,
    data() {
        return {
            toggleMenu: false,
        }
    },
    methods: {
        togglingMenu() {
            this.toggleMenu = !this.toggleMenu;
        }
    },
    // mounted() {
    //     document.addEventListener('click', this.close)
    // },
    // beforeDestroy() {
    //     document.removeEventListener('click', this.close)
    // },
    // components: {}
}