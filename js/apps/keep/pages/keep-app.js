import { keepService } from '../services/keep-service.js';
import keepList from '../cmps/keep-list.js'
import addNote from '../cmps/add-note.js'
import keepFilter from '../cmps/keep-filter.js'
import { eventBus } from '../../../services/event-bus-service.js'

export default {
    name: 'keep-app',
    template: `
    <section class="keep-app">
       <keep-filter @filtered="setFilter"/>
       <add-note @addNote="creatNote" />
        <keep-list v-if="notes" :notes="notesToShow" @remove="remove" @update="updateNote" @change="updateColor" @changeDone="updateNote" />
        <!-- @changeImg="updateImg -->
        </section>
    </section>
    `,

    data() {
        return {
            notes: [],
            filterBy: ''
        }
    },

    created() {
        this.loadNotes();
        console.log(this.notes)
        eventBus.$on('updateImg', (data) => {
            console.log(data)
            changeImg(data)
        });
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

        updateNote(note) {
            keepService.update(note).then(() => {
                this.loadnotes()
            })

        },
        updateColor(updateNoteColor) {
            keepService.update(updateNoteColor).then(() => {
                // this.loadnotes()
            })
        },

        changeImg(data) {
            keepService.update(data).then(() => {
                this.loadnotes()
            })
        },
        setFilter(filterBy) {
            this.filterBy = filterBy
        }

    },


    destroyed() {
        eventBus.$off('updateImg');
    },

    computed: {
        notesToShow() {
            if (!this.filterBy) return this.notes;
            const searchStr = this.filterBy.toLowerCase();
            const notesToShow = this.notes.filter(note => {
                if (note.type === "noteTxt")
                    return note.label.toLowerCase().includes(searchStr);
            });
            return notesToShow;
        }


    },
    components: {
        keepList,
        addNote,
        eventBus,
        keepFilter
    }


};