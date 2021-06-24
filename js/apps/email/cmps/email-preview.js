
export default {
    props: ['email'],
    template: `
     <router-link :to="'/email/'+email.id">
    <li class="email-preview" v-bind:class="isRead" v-on:mouseover="hovering" v-on:mouseleave="leaving">
    <!-- <li class="email-preview" v-bind:class="isRead"  v-on:mouseout="hovering"> -->
    <!-- <li class="email-preview" v-bind:class="isRead"  v-on:mouseleave="hovering"> -->
    <!-- <li v-bind:class="isRead"> -->
        <div>{{email.from}}</div>
        <div>{{email.subject}}</div>
        <div class ="date-and-buttons">
                    <div v-show="!hover" v-on:mouseover="leaving" v-on:mouseleave="hovering">{{dateToShow}}</div>
                    <div  class="email-buttons" v-show="hover">
                        <button v-on:click.prevent="toggleIsRead">{{envelope}}</button>
                        <button v-on:click.prevent="deleteReview(email.id)">X</button>
                </div>
        </div>
    </li>
</router-link>
          `,
          data(){
              return{
                hover:false,
                envelope:'✉',
              }
          },
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
        hovering(){
            this.hover = 'ok';
        },
        leaving(){
            this.hover = false;
        },
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