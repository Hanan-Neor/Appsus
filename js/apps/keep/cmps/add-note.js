export default {
    props: [''],
    template: `
     <section class="add-note">
       <h1>Add note</h1>
         <div>
           <form @submit.prevent="addNote">
               <input type="text" v-model="val" placeholder="Enter your text">
           </form>
            <button @click="setType('noteTxt')">+</button>
            <button @click="setType('noteImg')">+</button>
            <button @click="setType('noteTodos')">+</button>
            <button @click="setType('noteVideo')">+</button>
        </div>
<!-- <select v-modal="noteType">
<option value="textNote"></option>
</select>
<button @click="addNote">Add</button> -->
</section>
`,

    dats() {
        return {
            val: '',
            type: 'noteText',

        }
    },




    methods: {


        addNote() {
            const newNote = {

                type: this.type,
                isPinned: false,
                info: {
                    txt: this.val
                },
                style: {
                    backgroundColor: "#F6B6B4"
                }

            };
            this.$emit('addNote', newNote)

            this.val = '';
            // const newNote = keepService.getEmptyNote()
        },

        setType(type) {
            this.noteData.type = type;
        },
    }

}