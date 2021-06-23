export default {
    props: ['note'],
    template: `
    <section class="note-video" >
        <button @click="remove">X</button>
        <h1>Video</h1>
    </section>
    `,

    data() {
        return {}
    },

    methods: {
        remove() {
            this.$emit('remove', this.note.id)
        }
    },
};