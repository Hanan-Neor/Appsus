import noteTxt from './note-txt.js'
import noteImg from './note-img.js'
// import noteToDos from './note-todos.js'
import noteVideo from './note-video.js'



export default {
    props: ['note'],
    name: 'keep-preview',
    template: `
    <section class="keep-preview flex space-between column ">
       <component :is="note.type" :note="note"  class="note-content " @remove="remove" />
       <!-- <button @click="remove(currNote.id)">X</button> -->
       <!-- :info="note.info" -->
    </section>
    
    `,

    methods: {
        remove(noteId) {
            this.$emit('remove', noteId)
        }
        // emitRemove(noteId) {
        //     this.$emit('remove', noteId)
        // },
    },

    components: {
        noteTxt,
        noteImg,
        // noteToDos,
        noteVideo,
    }


}