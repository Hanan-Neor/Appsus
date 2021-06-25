// import { eventBus } from "../../../services/event-bus-service.js";

export default {
    props: ['note'],
    name: 'notVideo',
    template: `
<section class="note-img flex space-between column" v-if="note"  >
    <div>
        <h2 v-if="!edit">{{note.info.title}}</h2>
        <input v-else v-model="note.info.url" class="edit-txt" type="text">
        <iframe class="video-play" :src="formatedUrl" width=100% frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
        <iframe  width="100%" class="note-video" :src="note.info.txt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen

        <button class="btn-save" v-if="edit" @click.stop.prevent="updateNote"><i class="far fa-save"></i></button>
    </div>

    <div class="container-btn">
        <button class="btn-note" v-if="!edit" @click="remove"><i class="far fa-trash"></i></button>
        <button  class="btn-note" v-if="!edit" @click="editToggle"><i class="far fa-edit"></i></button>
        <div class="color">
            <div v-if="!edit" class="color-palete"><i class="fas fa-palette"></i></div> 
            <input class="color-input" type="color" @input="setColor" v-model="note.style.backgroundColor"/>      
         </div>
     </div>
    

</section>
`,

    data() {
        return {
            // note: this.note,
            // bgcStyle: this.note.style.backgroundColor || '#FFFFE0',
            edit: false,

        }
    },



    methods: {

        remove() {
            this.$emit('remove', this.note.id)
        },
        editToggle() {
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
        changeVideo(event) {
            console.log(event)
            this.$emit('updateVideo')
        },
    },

    computed: {
        formatedUrl() {
            let url = this.note.info.url
            let formatedUrl = url.replace('watch?v=', 'embed/')
            return formatedUrl;
        }


    },

    componante: {
        // eventBus
    }


};