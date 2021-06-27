import { emailService } from "../services/email-service.js";
import { eventBus } from "../../../services/event-bus-service.js";
import emailList from "../cmps/email-list.js";

export default {
    template: `
        <section class="email-app main-layout flex">
        
            <nav>
                <div><router-link to="/email/email-compose"> <button>New message</button></router-link></div>
                <ul class="clean-list">
                    <router-link to="/email/email-list"><li><span>inbox</span></li></router-link>
                    <!-- <router-link to="/email/email-list"><li @click="read"><span>read</span></li></router-link> -->
                    <!-- <router-link to="/email/email-list"><li @click="unRead"><span>unread</span></li></router-link> -->
                     <!-- <li style="cursor:default"><span>sent</span></li>
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
        read(){
        eventBus.$emit('isRead', true);
        },
        unRead(){
        eventBus.$emit('isRead', false);
        }
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