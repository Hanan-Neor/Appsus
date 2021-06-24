import emailPreview from "./email-preview.js";
import { emailService } from "../services/email-service.js";
import emailFilter from "./email-filter.js";
export default {
    // props: ['emails'],
    template: `
<section class="email-list  email-children-layout" v-if="emails" @searchEmail="setFilter">
    <email-filter></email-filter>
<ul class=" clean-list"  >
    <email-preview  v-for="email in emails" :key="email.id" :email="email" 
        @deleted="removeEmail" 
          @toggleIsRead="togglingIsRead"/>
    </ul>
</section>

     `,
     data(){
         return{
             emails:null,
             filterBy:'',
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
        setFilter(filterBy) {
            this.filterBy = filterBy;
        }
        
     },
     computed: {
        emailsToShow() {
            // return this.books
            if (!this.filterBy) return this.emails;
            const searchStr = this.filterBy.toLowerCase();
            const emailsToShow = this.emails.filter(email => {
                return email.from.toLowerCase().includes(searchStr);
            });
            return emailsToShow;
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