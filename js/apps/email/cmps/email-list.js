import emailPreview from "./email-preview.js";
import { emailService } from "../services/email-service.js";
export default {
    // props: ['emails'],
    template: `
      <ul class="email-list clean-list email-children-layout"  v-if="emails">
          <email-preview  v-for="email in emails" :key="email.id" :email="email" @deleted="removeEmail"/>
    </ul>
     `,
     data(){
         return{
             emails:null,
         }
     },
     methods:{
        loadEmails() {
            emailService.query()
            .then((emails) => {this.emails = emails})
        },
        removeEmail(id) {
            emailService.remove(id)
                .then(() => {
                    // const msg = {
                    //     txt: 'Deleted successfuly',
                    //     type: 'success'
                    // };
                    // eventBus.$emit('show-msg', msg);
                    this.loadEmails();
                })
                // .catch(err => {
                //     console.log(err);
                //     const msg = {
                //         txt: 'Error, please try again',
                //         type: 'error'
                //     };
                //     eventBus.$emit('show-msg', msg);
                // });
        },
     },


    components: {
        emailPreview
    },
    created() {
        this.loadEmails();
        // emailService.query()
        //     .then((emails) => {this.emails = emails})

    },

}