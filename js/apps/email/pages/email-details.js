import { emailService } from "../services/email-service.js";

export default {
    template: `
        <section class="email-details main-layout" v-if="email">
       <div><h1>{{email.subject}}</h1></div>
       <div class="flex space-between">
           <div>{{email.from}}</div>
           <div>{{email.sentAt}}</div>
       </div>
       <div>{{email.body}}</div>
        </section>
    `,

    data() {
        return {
            email:null,
        }

    },
    created() {
        const { emailId } = this.$route.params;
        emailService.getById(emailId)
            .then(email => {this.email = email})
    },
    methods: {

    },
    computed: {

    },
    components: {

    }


};