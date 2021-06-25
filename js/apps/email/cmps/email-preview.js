
export default {
    props: ['email'],
    template: `
     <router-link :to="'/email/'+email.id">
    <li class="email-preview" v-bind:class="isRead" v-on:mouseover="hovering" v-on:mouseleave="leaving">
    <!-- <li class="email-preview" v-bind:class="isRead"  v-on:mouseout="hovering"> -->
    <!-- <li class="email-preview" v-bind:class="isRead"  v-on:mouseleave="hovering"> -->
    <!-- <li v-bind:class="isRead"> -->
        <div>{{email.from}}</div>
        <div>{{email.subject}} - <span class="email-body-inlist">{{email.body}}</span></div>
        <div class ="date-and-buttons">
                    <div v-show="!hover" v-on:mouseover="leaving" v-on:mouseleave="hovering">{{dateToShow}}</div>
                    <div v-show="hover" class="email-buttons" >
                        <!-- <button v-on:click.prevent="toggleIsRead">{{envelops}}</button> -->
                        <!-- <button v-on:click.prevent="toggleIsRead"><i v-if="hover === true" class="far fa-envelope-open"></i><i v-else class="far fa-envelope-open"></i></button> -->
                        <button  v-on:click.prevent="toggleIsRead">
                            <i v-if="isRead2" class="far fa-envelope"></i>
                            <i v-else class="far fa-envelope-open"></i>
                        </button>
                        <button v-on:click.prevent="deleteEmail(email.id)"><i class="far fa-trash"></i></button>
                </div>
        </div>
    </li>
</router-link>
          `,
          data(){
              return{
                hover:false,
                // envelope:'✉',
              }
          },
    computed:{
        isRead2(){
            if(this.email.isRead) return true
            else return false
        },
        // envelops(){
        //     if (this.email.isRead) return  '✉';
        //     else return '📨'
        // },
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
        deleteEmail(emailId){
            this.$emit('deleted', emailId);
        }
    },
    created(){
// console.log(this.email);
    }

}