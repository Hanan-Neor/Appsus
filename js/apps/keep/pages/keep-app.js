import { keepService } from '../services/keep-service.js';
import keepList from '../cmps/keep-list.js'
import addNote from '../cmps/add-note.js'
// import keepPreview from '../cmps/keep-preview.js'

export default {
    template: `
    <section class="keep-app">
       <h1>Keep-Page</h1> 
       <add-note @addNote="creatNote"/>
       <!-- <keep-details v-if/> -->
        <keep-list v-if="notes" :notes="notes" @remove="remove"/>
        </section>
    </section>
    `,

    data() {
        return {
            notes: [],
        }
    },

    created() {
        this.loadNotes();
        console.log(this.notes)
            // keepService.query()
            //     .then(notes => {
            //         this.notes = notes
            //         console.log(notes);
            //     })
    },


    methods: {
        loadNotes() {
            keepService.query().then(notes => (this.notes = notes))
        },

        remove(noteId) {
            keepService.remove(noteId).then(() => {
                this.loadNotes();
            })
        },
        creatNote(newNote) {

            keepService.save(newNote)
        }

    },

    computed: {


    },
    components: {
        keepList,
        addNote
    }


};