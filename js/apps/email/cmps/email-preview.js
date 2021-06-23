
export default {
    props: ['email'],
    template: `
     <router-link :to="'/email/'+email.id">
    <li class="email-preview">
        <div>{{email.from}}</div>
        <div>{{email.subject}}</div>
        <div>{{email.sentAt}}</div>
    </li>
</router-link>
          `,
    computed:{
        // dateToShow(){
        // //    return new Date(+this.review.date).toLocaleString()
        //    return new Date(+this.review.date).toLocaleDateString()
        // }
    },
    methods:{
        // onDeleteReview(){
            
        // }
    },
    created(){
// console.log(this.email);
    }

}