export default {
    props: ['note'],
    template: `
<section class="note-txt flex column space-between" v-if="note"  >
    <div class="container-btn">
        
        <button class="btn-note" v-if="!edit" @click="remove"><i class="far fa-trash"></i></button>
        <button  class="btn-note" v-if="!edit" @click="editOn"><i class="far fa-edit"></i></button>
        <div class="color">
            <div v-if="!edit" class="color-palete"><i class="fas fa-palette"></i></div> 
            <input class="color-input" type="color" @input="setColor" v-model="note.style.backgroundColor"/>
         </div>
     </div>
    <div>

        <h2 v-if="!edit">{{note.label}}</h2>
        <input v-else v-model="note.label" class="edit-txt" type="text">
        <span v-if="!edit"><pre>{{note.info.txt}}</pre></span>
        <input v-else v-model=note.info.txt type="text" class="edit-txt">
        <button v-if="edit" @click.stop.prevent="updateNote"><i class="far fa-save"></i></button>
    </div>


</section>
`,

    data() {
        return {
            // note: this.note,
            // bgcStyle: this.note.style.backgroundColor || '#FFFFE0',
            edit: false
        }
    },



    methods: {
        remove() {
            this.$emit('remove', this.note.id)
        },
        editOn() {
            this.edit = true
        },
        updateNote() {

            this.$emit('update', this.note)
            this.edit = false
        },
        setColor() {
            console.log(this.note)
            this.$emit('change', this.note)
        }



    },
};