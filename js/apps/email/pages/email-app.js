import { emailService } from "../services/email-service.js";
import emailList from "../cmps/email-list.js";

export default {
    template: `
        <section class="email-app main-layout flex">
        
            <nav>
                <!-- <router-link to="/email/email-compose"> <button>New +</button></router-link> -->
                <div><router-link to="/email/email-compose"> <button>New message</button></router-link></div>
                <ul class="clean-list">
                    <router-link to="/email/email-list"><li><span>inbox</span></li></router-link>
                    <router-link to=""> <li><span>read</span></li></router-link>
                    <router-link to=""><li><span>unread</span></li></router-link>
                    <router-link to=""> <li><span>sent</span></li></router-link>
                    <router-link to=""> <li><span>sent</span></li></router-link>
                    <router-link to=""><li><span>favorites</span></li></router-link>
                </ul>
            </nav>
            <!-- <article> -->
                <!-- <email-list :emails="emails" /> -->
                <!-- </article> -->
                
                <router-view></router-view>

        </section>
    `,

    data() {
        return {
            emails: [],

        }

    },
    methods: {

    },
    computed: {

    },
    components: {
        emailList
    },

    created() {
        emailService.query()
            .then((emails) => this.emails = emails)

    },

};