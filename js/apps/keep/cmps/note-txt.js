export default {
    props: ['note'],
    template: `
<section class="note-txt" :style="'background-color:' + bgcStyle">
    <h2>{{note.label}}</h2>
    <span><pre>{{note.info.txt}}</pre></span>
    <button @click="remove"><i class="far fa-trash"></i></button>
    <button @click="edit"><i class="far fa-edit"></i></button>
</section>
`,

    data() {
        return {
            bgcStyle: this.note.style.backgroundColor || '#FFFFE0',
        }
    },

    methods: {
        remove() {
            this.$emit('remove', this.note.id)
        }
    },
};