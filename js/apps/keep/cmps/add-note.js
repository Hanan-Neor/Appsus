import addNoteTxt from './add-noteTxt.js'
import addNoteImg from './add-noteImg.js'
import addNoteVideo from './add-note-video.js'
import addNoteToDos from './add-not-to-dos..js'
// import noteImg from './note-img.js'



export default {
    // props: ['note'],
    template: `
     <section class="add-note ">
         <div class="add-note-input" v-if="isOpen" @click="isOpen=false" >
             <button @click="txt"><i class="fas fa-text"></i></button>
              <button @click="img"><i class="fas fa-image"></i></button>
              <!-- <button @click="img"><input class="input-img" type="file" ref="file" @change=chosenImg><i class="fas fa-image"></i></button> -->
              <button @click="video"><i class="fab fa-youtube"></i></button>
             <!-- <button @click="todos"><i class="fal fa-ballot"></i> -->

</button> 
             <input type="text" placeholder="Take a note..">
        </div>


             <div v-else >
                <component :is="noteType" @add="editTypeNote" @addNewNote="addNote"/>
                <div class="btn-add-note">

                </div>
             </div>
       </section>
`,

    data() {
        return {
            note: null,
            isOpen: true,
            isStyling: true,
            bgcStyle: null,
            noteType: 'add-noteTxt',
            // val: '',
            // type: 'noteTxt',

        }
    },




    methods: {

        chosenImg() {
            console.log('chooose')
        },

        addNote() {
            const color = this.bgcStyle
            const newNote = { note: this.note, color }
                // notesService.addNote(this.note,color)
            this.$emit('addNote', newNote)
            this.isOpen = true

        },


        img() {
            this.noteType = 'add-noteImg'
        },
        video() {
            this.noteType = 'add-noteVideo'
        },

        todos() {
            this.noteType = 'add-Note-To-dos'
        },

        color() {
            this.isStyling = !this.isStyling
        },

        txt() {
            this.noteType = 'add-noteTxt'
        },


        editTypeNote(newTypENot) {
            this.note = newTypENot;
            console.log(this.note)
        },


    },


    components: {
        addNoteTxt,
        addNoteImg,
        addNoteVideo,
        // noteImg
        addNoteToDos,
    },
}