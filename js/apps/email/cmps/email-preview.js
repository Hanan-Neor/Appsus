
export default {
    props: ['email'],
    template: `
     <router-link :to="'/email/'+email.id">
    <li class="email-preview" v-bind:class="isRead">
    <!-- <li v-bind:class="isRead"> -->
        <div>{{email.from}}</div>
        <div>{{email.subject}}</div>
        <div>{{dateToShow}}</div>
        <div>
            <button v-on:click.prevent="toggleIsRead">✉</button>
            <button v-on:click.prevent="deleteReview(email.id)">X</button>
    </div>
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
                read:this.email.isRead
            }
        }
    },
    methods:{
        toggleIsRead(){
            this.email.isRead = !this.email.isRead;
            this.$emit('toggleIsRead', this.email);

        },
        deleteReview(emailId){
            this.$emit('deleted', emailId);
        }
    },
    created(){
// console.log(this.email);
    }

}