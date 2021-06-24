import { emailService } from "../services/email-service.js";
export default {
    template: `
    <section class="email-compose email-children-layout flex">
        <header>
WOW HEADER
</header>
<main>
        <form @submit="onSubmitEmail">
       <div><label>To:</label> <input type="email" v-model="to"></div>
       <div>Subject: <input type="text" v-model="subject"></div>
       <div class="teaxarea-container">Message: <textarea v-model="body"></textarea></div>
    </form>
</main>
<div>
    <button @click="onSubmitEmail">Send</button>
    
</div>
</section>
     `,
     data(){
         return{
             to:'',
             subject:'',
             body:'',

         }
     },

// function _createEmail(id, from, subject, body, isRead, sentAt = Date.now()) {

     methods:{
        onSubmitEmail(){
            const newEmail = {
                from:'Hanan',
                subject: this.subject,
                body: this.body,
                isRead:false,
                sentAt: Date.now(),
            }
            emailService.save(newEmail);
            this.$router.push('/email/email-list');
            
        }
         
     },


    components: {
        
        emailService
    },
    created() {

    },

}