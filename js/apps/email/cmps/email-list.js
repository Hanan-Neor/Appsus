import emailPreview from "./email-preview.js";
import { emailService } from "../services/email-service.js";
import emailFilter from "./email-filter.js";
export default {
    // props: ['emails'],
    template: `
<section class="email-list  email-children-layout" v-if="emails">
    <email-filter></email-filter>
<ul class=" clean-list"  >
          <email-preview  v-for="email in emails" :key="email.id" :email="email" @deleted="removeEmail" @toggleIsRead="togglingIsRead"/>
    </ul>
</section>

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
        togglingIsRead(email){
            emailService.save(email)
        },
        
     },


    components: {
        emailPreview,
        emailFilter
    },
    created() {
        this.loadEmails();
        // emailService.query()
        //     .then((emails) => {this.emails = emails})

    },

}