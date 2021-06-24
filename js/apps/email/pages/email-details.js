import { emailService } from "../services/email-service.js";

export default {
    template: `
        <section class="email-details email-children-layout" v-if="email">
       <div><h1>{{email.subject}}</h1></div>
       <div class="flex space-between">
           <div>{{email.from}}</div>
           <div>{{dateToShow}}</div>
       </div>
       <div><pre>{{email.body}}</pre></div>
       <!-- <div>{{email.body}}</div> -->
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
        .then(email => {
            this.email = email;
            this.email.isRead = true;
            emailService.save(this.email);
                                })
    },
    methods: {

    },
    computed: {
        dateToShow(){
            return new Date(+this.email.sentAt).toLocaleDateString()
         //    return new Date(+this.email.sentAt).toLocaleString()
         }

    },
    components: {

    }


};