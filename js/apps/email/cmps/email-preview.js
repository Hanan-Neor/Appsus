
export default {
    props: ['email'],
    template: `
     <!-- <router-link :to="'/email-app/'+email.id"> -->
    <li class="email-preview">
        {{email.from}} |
        {{email.subject}} |
        {{email.sentAt}}
    </li>
<!-- </router-link> -->
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
    }
}