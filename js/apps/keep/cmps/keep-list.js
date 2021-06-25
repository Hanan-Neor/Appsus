import keepPreview from './keep-preview.js'

export default {
    props: ['notes'],
    name: 'keep-list',
    template: `
    <section  class="keep-list-container justify-contect-center wrap ">
        <ul class="notes flex wrap ">
            <li v-for="note in notes" :key="note.id" class="note clean-list" :style="{ 'background-color' : note.style.backgroundColor }"  >
            <!-- :style="{ 'background-color' : note.style.backgroundColor }" --> 
                <keep-preview :note="note" @remove="remove" @update="updateNote" @change="changeColor"/>
                <!-- @changeImg="changeImg -->
            </li>
        </ul>

    </section>
    
    `,

    methods: {
        remove(noteId) {
            this.$emit('remove', noteId)
        },
        updateNote(updateNote) {
            this.$emit('updateNote', updateNote)
        },
        changeColor(noteUpdateColor) {
            this.$emit('change', noteUpdateColor)
        },
        // changeImg(updateImg) {
        //     this.$emit('changeImg', updateImg)

        // }
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