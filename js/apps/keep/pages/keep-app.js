import { keepService } from '../services/keep-service.js';
import keepList from '../cmps/keep-list.js'
import addNote from '../cmps/add-note.js'
// import keepPreview from '../cmps/keep-preview.js'

export default {
    name: 'keep-app',
    template: `
    <section class="keep-app">
       <h1>Keep-Page</h1> 
       <add-note @addNote="creatNote" />
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
            keepService.save(newNote.note, newNote.color).then(() => {
                    this.loadNotes();
                })
                // keepService.save(newNote).then(() => {
                //     this.loadNotes();
                // })
        },
        keepService(note) {
            notesService.update(note).then(res => {
                this.loadnotes()
            })
        }

    },

    computed: {


    },
    components: {
        keepList,
        addNote
    }


};