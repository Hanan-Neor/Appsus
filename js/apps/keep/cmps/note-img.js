export default {
    props: ['note'],
    template: `
    <section class="note-img" >
        <button @click="remove"><i class="far fa-teash"></i></button>
        <img :src="note.info.url">
        <p>{{note.info.title}}</p>
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