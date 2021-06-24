export default {
    props: ['note'],
    template: `
<section class="note-txt">
    <button @click="remove">X</button>
    <h2>{{note.label}}</h2>
    <span>{{note.info.txt}}</span>
</section>
`,

    methods: {
        remove() {
            this.$emit('remove', this.note.id)
        }
    },
}