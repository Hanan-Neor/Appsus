export default {
    template: `
    <section class="add-noteTxt space-between">
                <!-- <h2>Add Note:</h2> -->
                <div>
                    <label for="title">
                        <input name="title" v-model="note.label" @blur="add" type="text" placeholder="Title"  autocomplete="off" onfocus="this.placeholder = ''"> 
                        <!-- <button title="Pin" @click="pin">📍</button> -->
                    </label>
                </div>
                <textarea name="note" v-model="note.info.txt" @blur="add" placeholder="Text"  onfocus="this.placeholder = ''"rows="6" cols="50">
                </textarea> 
                <button title="Add" @click="addNote"><i class="far fa-save"></i></button>
    </section>
    `,

    data() {
        return {
            note: {
                type: 'noteTxt',
                id: null,
                isPinned: false,
                label: null,
                info: {
                    txt: null,
                },
                style: {
                    backgroundColor: null,
                },
            },
        }
    },

    methods: {

        add() {
            this.$emit('add', this.note);
        },

        pin() {
            this.note.isPinned = !this.note.isPinned;
        },
        addNote() {
            this.$emit('addNewNote')
        }

    },

    computed: {

    }


};