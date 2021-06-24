import { emailService } from "../services/email-service.js";
import emailList from "../cmps/email-list.js";

export default {
    template: `
        <section class="email-app main-layout flex">
        
            <nav>
                <!-- <router-link to="/email/email-compose"> <button>New +</button></router-link> -->
                <router-link to="/email/email-compose"> <button>New +</button></router-link>
                <ul class="clean-list">
                    <router-link to="/email/email-list"><li>inbox</li></router-link>
                    <router-link to="/email/bibi"> <li>sent</li></router-link>
                    <router-link to=""><li>favorites</li></router-link>
                    <router-link to=""><li>unread</li></router-link>
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