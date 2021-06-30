export default {
    template: `
    <section class="add-noteImg ">
    <div>
                    <label for="title">
                        <input name="title" v-model="note.info.title" @input="add" type="text" placeholder="Enter title" class="input-title"> 
                        <!-- <button title="Pin" @click="pin"></button> -->
                    </label>
                </div>
                <textarea name="note" v-model="note.info.url" @input="add" placeholder="Enter image url" rows="6" cols="50">
                    </textarea> 
                    <button title="Add" @click="addNote"><i class="far fa-save"></i></button>
                    <!-- <button @click="img"><input class="input-img" type="file"><i class="fas fa-image"></i></button> -->
                        <input name="title" v-model="note.label" @blur="add" type="text" placeholder="Title" class="input-title"> 
                         <!-- <button title="Pin" @click="pin">📍</button> --> 
                 
    </section>
    `,


    data() {
        return {
            note: {
                id: null,
                type: 'noteImg',
                isPinned: false,
                label: null,
                info: {
                    url: null,
                    title: ""
                },
                style: {
                    backgroundColor: '#ffb6c1',
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