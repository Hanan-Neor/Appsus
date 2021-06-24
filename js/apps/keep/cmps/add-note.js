import addNoteTxt from './add-noteTxt.js'


export default {
    // props: ['note'],
    template: `
     <section class="add-note">
       <h1>Add note</h1>
         <div v-if="isShow" @click="isShow=false" >
             <button @click="txt">Text</button>
             <!-- <button @click="img">Img</button>
             <button @click="video">Video</button>
             <button @click="todos">TO-Do</button> -->
             <input type="text" placeholder="Add note">
        </div>


             <div v-else >
                <component :is="noteType" @add="editNote"/>
                <div>
                    <button v-if='isStyling' @click='color'>🎨</button>
                    <input v-else v-model="bgcStyle" @change="color" type="color">
                        <!-- <button @click="img">img</button>
                        <button @click="todos">ToDo</button> -->
                        <button @click="txt">Text</button>
                        <button title="Add" @click="addNote">➕</button>
                </div>
             </div>
           <!-- <form @submit.prevent="addNote"> -->
               <!-- <input type="text" v-model="val" placeholder="Enter your text"> -->
               <!-- < type="text" v-model="val" placeholder="Enter your text"> -->
               <!-- <textarea  autofocus  v-model="val" placeholder="Enter your text" ></textarea>
               <button></button>
           </form>
            <button @click="setType('noteTxt')">T</button>
            <button @click="setType('noteImg')"></button> -->
            <!-- <button @click="setType('noteTodos')">+</button> -->
            <!-- <button @click="setType('noteVideo')">+</button> -->
           
<!-- <select v-modal="noteType">
<option value="textNote"></option>
</select>
<button @click="addNote">Add</button> -->
</section>
`,

    data() {
        return {
            note: null,
            isShow: true,
            isStyling: true,
            bgcStyle: null,
            noteType: 'add-noteTxt',
            // val: '',
            // type: 'noteTxt',

        }
    },




    methods: {

        addNote() {
            const color = this.bgcStyle
            const newNote = { note: this.note, color }
                // notesService.addNote(this.note,color)
            this.$emit('addNote', newNote)
            this.isShow = true

        },

        // addNote() {
        //     const newNote = {

        //         type: this.type,
        //         isPinned: false,
        //         info: {
        //             txt: this.val
        //         },
        //         style: {
        //             backgroundColor: "#F6B6B4"
        //         }

        //     };
        //     this.$emit('addNote', newNote)

        //     this.val = '';

        // const newNote = keepService.getEmptyNote()


        // setType(type) {
        //     this.type = type;
        // },


        // img(){
        //     this.noteType = 'add-noteImg'
        // },

        // todos(){
        //     this.noteType = 'add-noteTodos'
        // },

        color() {
            this.isStyling = !this.isStyling
        },

        txt() {
            this.noteType = 'add-noteTxt'
        },
        editNote(note) {
            this.note = note;
        },


    },


    components: {
        addNoteTxt,
        // addNoteImg,
        // addNoteTodos,
    },
}