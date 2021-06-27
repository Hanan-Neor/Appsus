import noteTxt from './note-txt.js'
import noteImg from './/note-img.js'
import noteVideo from './/note-video.js'
import noteToDos from './/note-todos.js'
// import noteToDos from './note-todos.js'



export default {
    props: ['note'],
    name: 'keep-preview',
    template: `
    <section class="keep-preview flex space-between column " :style="note.style">
       <component 
       :is="note.type"
        :note="note" 
         class="note-content "
          @remove="remove"  
          @update="update"
          @change="changeColor"
          @changeDone="changeDoneNote"
          />
          <!-- <button @click="remove(currNote.id)">X</button> -->
          <!-- :info="note.info" -->
          <!-- <button @click="remove"><i class="far fa-trash"></i></button>
          <button @click="edit"><i class="far fa-edit"></i></button> -->
        </section>
        
        `,
    // @updateImg="changeImg"


    // data(){
    //     return{

    //     }
    // }


    methods: {
        remove(noteId) {
            this.$emit('remove', noteId)
        },
        update(updateNote) {
            this.$emit('update', updateNote)
        },
        changeColor(updateNoteColor) {
            this.$emit('change', updateNoteColor)
        },
        changeDoneNote(updateNote) {
            this.$emit('changeDone', updateNote)

        }
        // changeImg(updatImg) {
        //     this.$emit('changeImg', updatImg)
        // }
        // emitRemove(noteId) {
        //     this.$emit('remove', noteId)
        // },
    },

    components: {
        noteTxt,
        noteImg,
        noteToDos,
        noteVideo,
    }


}