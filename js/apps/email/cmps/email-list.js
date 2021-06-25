import emailPreview from "./email-preview.js";
import { emailService } from "../services/email-service.js";
import emailFilter from "./email-filter.js";
export default {
    // props: ['emails'],
    template: `
<section class="email-list  email-children-layout" v-if="emails">
        <email-filter  @searchEmail="loadEmails"
                        @filterState="filterByStatus"></email-filter>
<ul class="clean-list"  >
    <email-preview  v-for="email in emails" :key="email.id" :email="email" 
        @deleted="removeEmail" 
          @toggleIsRead="togglingIsRead"/>
    </ul>
</section>

     `,
     data(){
         return{
             emails:null,
             viewStatus:null,
         }
     },
     methods:{
        loadEmails(filterBy) {
            emailService.filter(filterBy)
            .then((emails) => {this.emails = emails})
        },

        filterByStatus(status){
            // this.viewStatus = status;
            emailService.query()
                .then(emails => {
                    if (status === null) {
                        this.emails = emails;
                        return}
                    this.emails = emails.filter(email => {
                        return email.isRead === status;
                    })
                })
        },
        togglingIsRead(email){
            // this.viewStatus = email.isRead;
            emailService.save(email);
            // this.filterByStatus(this.viewStatus);

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
     computed: {

    },


    components: {
        emailPreview,
        emailFilter
    },
    created() {
        this.loadEmails();

    },

}