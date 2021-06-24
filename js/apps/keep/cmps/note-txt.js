export default {
    props: ['note'],
    template: `
<section class="note-txt" :style="'background-color:' + bgcStyle">
    <h2>{{note.label}}</h2>
    <span>{{note.info.txt}}</span>
    <button @click="remove">🗑</button>
    <button @click="edit">🗑</button>
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