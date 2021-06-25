import { emailService } from "../services/email-service.js";
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
       <!-- <div><label>To:</label> <input type="email" v-model="to"></div>
       <div><label>Subject:</label> <input type="text" v-model="subject"></div> -->
       <div class="teaxarea-container"><textarea v-model="body"></textarea></div>
    </form>
</main>
<div class="send-container">
    <button @click="onSubmitEmail">Send</button>
    <button style="background-color:initial" @click="onTrashClick"><i class="far fa-trash"></i></button> 
    
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
            
        },
        onTrashClick(){
            this.$router.push('/email/email-list');

        }
         
     },


    components: {
        
        emailService
    },
    created() {

    },

}