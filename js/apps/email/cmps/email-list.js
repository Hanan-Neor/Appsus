import emailPreview from "./email-preview.js";
import { emailService } from "../services/email-service.js";
import emailFilter from "./email-filter.js";
import { eventBus } from "../../../services/event-bus-service.js";
export default {
    // props: ['emails'],
    template: `
<section class="email-list  email-children-layout" v-if="emails">
        <!-- <email-filter :unReadCnt="unReadCnt"  @searchEmail="loadEmails" -->
        <email-filter :unReadCnt="unReadCnt"  @searchEmail="setFilterBy"
                        @filterState="filterByStatus"
                        @sortBy="sortEmails"></email-filter>
<ul class="clean-list"  >
    <email-preview  v-for="email in emails" :key="email.id" :email="email" 
        @deleted="removeEmail" 
          @toggleIsRead="togglingIsRead"/>
    </ul>
</section>

     `,
    data() {
        return {
            emails: null,
            viewStatus: null,
            unReadCnt: null,
            filterBy: null,
            sortBy:null,
        }
    },
    methods: {
        sortEmails(sortBy){
                this.sortBy = sortBy;
                // console.log(this.viewStatus);
                this.filterByStatus(this.viewStatus);
        },
        // loadEmails(filterBy) {
        //     emailService.filter(filterBy)
        //         .then((emails) => {
        //             this.emails = emails;
        //             this.unReadCnt = emails.filter(email => {
        //                 return !email.isRead
        //             }).length
        //         })
        // },
        setFilterBy(filterBy) {
            this.filterBy = filterBy;
            this.filterByStatus(this.viewStatus);
        },

        filterByStatus(status) {
            emailService.query()
                .then(emails => {
                    //============= duplicated from loadEmails =============
                    this.unReadCnt = emails.filter(email => {
                        return !email.isRead
                    }).length;
                    //======================================================
                        // console.log(status);
                    
                    if (status === null) {
                        this.viewStatus = status;
                        this.emails = emailService.filter(emails, this.filterBy);

                        this.emails = emailService.sort(this.emails,this.sortBy);
                        return
                    }else{
                    this.emails = emails.filter(email => {
                        return email.isRead === status;
                    })
                
                    this.emails = emailService.filter(this.emails, this.filterBy);
                    this.emails = emailService.sort(this.emails,this.sortBy);

                    this.viewStatus = status;

                }
                })
        },
        togglingIsRead(email) {
            // this.viewStatus = email.isRead;
            emailService.save(email)
                .then(() => {
                    this.filterByStatus(this.viewStatus);
                    // this.loadEmails();

                })
        },

        removeEmail(id) {
            emailService.remove(id)
                .then(() => {
                    this.filterByStatus(this.viewStatus);
                    // this.loadEmails();

                    // const msg = {
                    //     txt: 'Deleted successfuly',
                    //     type: 'success'
                    // };
                    // eventBus.$emit('show-msg', msg);

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
        // this.loadEmails();
        this.filterByStatus(null)
        eventBus.$on('deleted' , (emailId) =>{
            this.removeEmail(emailId);
        })
    },

}