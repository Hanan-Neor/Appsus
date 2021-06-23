import { emailService } from "../services/email-service.js";

export default {
    template: `
        <section class="email-app main-layout flex">
        
            <aside>
                <button>New +</button>
                <ul>
                    <li>inbox</li>
                    <li>sent</li>
                    <li>favorites</li>
                    <li>unread</li>
                </ul>
            </aside>
            <article>
                {{emails}}
            </article>

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

    },

    created() {
        emailService.query()
            .then((emails) => this.emails = emails)

    },

};