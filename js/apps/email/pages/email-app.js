import { emailService } from "../services/email-service.js";
import emailList from "../cmps/email-list.js";

export default {
    template: `
        <section class="email-app main-layout flex">
        
            <nav>
                <div><router-link to="/email/email-compose"> <button>New message</button></router-link></div>
                <ul class="clean-list">
                    <router-link to="/email/email-list"><li><span>inbox</span></li></router-link>
                     <!-- <li style="cursor:default"><span>read</span></li>
                    <li style="cursor:default"><span>unread</span></li>
                     <li style="cursor:default"><span>sent</span></li>
                    <li style="cursor:default"><span>favorites</span></li> -->
                </ul>
            </nav>
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