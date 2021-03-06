// import { eventBus } from "../../../services/event-bus-service.js";

export default {
    props: ['note'],
    name: 'notImg',
    template: `
<section class="note-img flex space-between column" v-if="note"  >
    <div>
        
        <h2 v-if="!edit">{{note.info.title}}</h2>
        <input v-else v-model="note.info.url" class="edit-img"  type="text">
        <input v-if="edit" v-model="note.label" class="edit-title" type="text">
        <img class="note-img"  width=100% :src="note.info.url">
        <button class="btn-save" v-if="edit" @click.stop.prevent="updateNote"><i class="far fa-save"></i></button>
    </div>

    <div class="container-btn">
        <button class="btn-note" v-if="!edit" @click="remove"><i class="far fa-trash"></i></button>
        <button  class="btn-note" v-if="!edit" @click="editOn"><i class="far fa-edit"></i></button>
        <div class="color">
            <div v-if="!edit" class="color-palete"><i class="fas fa-palette"></i></div> 
            <input class="color-input" type="color" @input="setColor" v-model="note.style.backgroundColor"/>
          
         </div>
     </div>
     
</section>
`,



    data() {
        return {
            // bgcStyle: this.note.style.backgroundColor || '#FFFFE0',
            edit: false,

        }
    },



    methods: {

        // chosenImg() {
        //     const file = event.target.files[0]
        //     const fileReader = new FileReader()

        //     fileReader.onload = () => {
        //         this.note.info.url = fileReader.result
        //         this.reportVal()
        //     }

        //     fileReader.readAsDataURL(file)
        //     console.log(file.name)
        //     this.note.info.url = file.name
        //     console.log(this.note.info.url)
        //     console.log(this.note)
        //     eventBus.$emit('updateImg', this.note)
        //         // this.$emit('updateImg', this.note)


        // },

        // previewFiles() {
        //     this.files = this.$refs.myFiles.files
        //     console.log(this.files)
        //     console.log(this.files.name)
        // },


        remove() {
            this.$emit('remove', this.note.id)
        },
        editOn() {
            this.edit = true
        },
        updateNote() {
            this.$emit('update', this.note)
            this.edit = false
        },
        setColor() {
            console.log(this.note)
            this.$emit('change', this.note)
        },
        // changeImg(event) {
        //     console.log(event)
        //     this.$emit('updateImg')
        // }



    },

    computed: {
        // imgUrl() {
        //     const url = this.files.name
        //     console.log(url)
        //     return url

        // }

    },

};


// export default {
//     props: ['note'],
//     template: `



//     <section class="note-img" >
//         <button @click="remove"><i class="far fa-teash"></i></button>
//         <img :src="note.info.url">
//         <p>{{note.info.title}}</p>
//     </section>
//     `,
//     data() {
//         return {}
//     },
//     methods: {
//         remove() {
//             this.$emit('remove', this.note.id)
//         }
//     },
// };