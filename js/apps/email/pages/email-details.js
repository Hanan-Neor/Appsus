import { emailService } from "../services/email-service.js";

export default {
    template: `
        <section class="email-details email-children-layout" v-if="email">
        <header>
WOW HEADER
</header>
       <div class="subject"><h1>{{email.subject}}</h1></div>
       <hr>
       <div class="from-date flex space-between">
           <div><span style="color:rgb(168, 167, 167)">from:</span> <b>{{email.from}}</b></div>
           <div>{{dateToShow}}</div>
       </div>
       <div class="body"><pre>{{email.body}}</pre></div>
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
            // return new Date(+this.email.sentAt).toLocaleDateString()
            return new Date(+this.email.sentAt).toLocaleString()
         }

    },
    components: {

    }


};