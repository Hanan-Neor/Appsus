
export default {
    props: ['email'],
    template: `
     <router-link :to="'/email/'+email.id">
    <li class="email-preview" v-bind:class="{read:this.email.isRead}">
        <div>{{email.from}}</div>
        <div>{{email.subject}}</div>
        <div>{{dateToShow}}</div>
        <button v-on:click.prevent="deleteReview(email.id)">X</button>
    </li>
</router-link>
          `,
    computed:{
        dateToShow(){
           return new Date(+this.email.sentAt).toLocaleDateString()
        //    return new Date(+this.email.sentAt).toLocaleString()
        },
        isRead(){
            return{
                read:this.email.isRead,
            }
        }
    },
    methods:{
        deleteReview(emailId){
            this.$emit('deleted', emailId);
        }
    },
    created(){
// console.log(this.email);
    }

}