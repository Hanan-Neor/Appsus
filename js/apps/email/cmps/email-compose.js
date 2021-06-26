import { emailService } from "../services/email-service.js";
import { eventBus } from "../../../services/event-bus-service.js";
export default {
    template: `
    <section class="email-compose email-children-layout flex">
        <header>
New message
</header>
<main>
        <form @submit="onSubmitEmail">
       <div class="flex align-center"><span>To: </span><input type="email" v-model="to"></div>
       <div class="flex align-center"><span>Subject: </span><input type="text" v-model="subject"></div>
       <div class="teaxarea-container"><textarea v-model="body"></textarea></div>
    </form>
</main>
{{to}}
<div class="send-container">
    <button @click="onSubmitEmail">Send</button>
    <button style="background-color:initial" @click="onTrashClick"><i class="far fa-trash"></i></button> 
    
</div>
</section>
     `,
    data() {
        return {
            to: '',
            subject: null,
            body: null,

        }
    },


    methods: {
        onSubmitEmail() {
            const newEmail = {
                from: 'Hanan',
                subject: this.subject,
                body: this.body,
                isRead: false,
                sentAt: Date.now(),
            }
            emailService.save(newEmail);
            this.$router.push('/email/email-list');

        },
        onTrashClick() {
            this.$router.push('/email/email-list');
        },
        replying(replyedEmail) {
            this.to = replyedEmail.from;
            this.subject = 'Re: ' + replyedEmail.subject;
        },


    },


    components: {

        emailService
    },
    created() {
        // this.to = '',
        // this.subject= null,
        // this.body= null,

        
        eventBus.$on('reply', (replyedEmail) => {
            setTimeout(() => {
                this.replying(replyedEmail);
                console.log(replyedEmail);

            }, 1000)
        })
    },
    // destroyed(){
    //     eventBus.$off('reply');
    // }

}