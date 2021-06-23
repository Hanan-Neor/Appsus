import { keepService } from '../services/keep-service.js';
import keepList from '../cmps/keep-list.js'
import keepPreview from '../cmps/keep-preview.js'

export default {
    template: `
        <section class="keep-app main-layout">
       <h1>Keep-Page</h1> 
       <!-- <add-keep/> -->
        <keep-list :notes="notes" @remove="remove"/>
        </section>
    `,

    data() {
        return {
            notes: [],
        }
    },

    created() {
        keepService.query()
            .then(notes => {
                this.notes = notes
                    // console.log(notes);
            }),
            // eventBus.$on('removeNote', (id) => {
            //     this.emitRemove(id);
            // });
            console.log(this.notes);
    },


    methods: {
        remove(noteId) {
            this.$emit('remove', noteId)
            console.log('notId', noteId)
                // keepService.remove(noteId);
        }


    },
    computed: {


    },
    components: {
        keepService,
        keepList,
        keepPreview

    }


};