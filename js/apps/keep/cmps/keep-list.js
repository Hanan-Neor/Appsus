import keepPreview from './keep-preview.js'

export default {
    props: ['notes'],
    name: 'keep-list',
    template: `
    <section  class="keep-list-container justify-contect-center wrap ">
        <ul class="notes flex wrap ">
            <li v-for="note in notes" :key="note.id" class="note clean-list"  >
            <!-- :style="{ 'background-color' : note.style.backgroundColor }" --> 
                <keep-preview :note="note" @remove="remove" />
            </li>
        </ul>

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

    created() {
        // eventBus.$on('removeNote', (id) => {
        //     this.emitRemove(id);
        // });
        // console.log(this.notes);
    },
    components: {
        keepPreview,
    },
}