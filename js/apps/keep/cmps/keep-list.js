import keepPreview from './keep-preview.js'

export default {
    props: ['notes'],
    template: `
    <section  class="keep-list justify-contect-center wrap ">
        <ul class="flex wrap justify-content-center">
            <li v-for="note in notes" :key="note.id" class="clean-list" :style="{ 'background-color' : note.style.backgroundColor }" >
                <keep-preview :note="note" @remove="remove" />
            </li>
        </ul>

    </section>
    
    `,
    components: {
        keepPreview,
    },

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
    }
}