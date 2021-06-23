import emailPreview from "./email-preview.js";
import { emailService } from "../services/email-service.js";
export default {
    // props: ['emails'],
    template: `
      <ul class="email-list clean-list"  v-if="emails">
          <email-preview  v-for="email in emails" :key="email.id" :email="email"/>
    </ul>
     `,
     data(){
         return{
             emails:null,
         }
     },


    components: {
        emailPreview
    },
    created() {
       
        emailService.query()
            .then((emails) => {this.emails = emails})

    },

}