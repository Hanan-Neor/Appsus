export default {
    template: `
    <section class="add-noteVideo ">
                <div>
                    <label for="title">
                        <input name="title" v-model="note.info.title" @input="add" autocomplete="off" type="text" placeholder="Enter title" class="input-title" onfocus="this.placeholder = ''"> 
                        <!-- <button title="Pin" @click="pin"></button> -->
                    </label>
                </div>
                <textarea name="note" v-model="note.info.url" @input="add" placeholder="Enter video url" autocomplete="off" onfocus="this.placeholder = ''" rows="6" cols="50">
                    </textarea> 
                    <button title="Add" @click="addNote"><i class="far fa-save"></i></button>
                         <!-- <button title="Pin" @click="pin">📍</button> --> 
           
                    <!-- <input type="file" ref="file"  @change="filePicked"/> -->
                
    </section>
    `,


    data() {
        return {
            note: {
                id: null,
                type: 'noteVideo',
                isPinned: false,
                label: null,
                info: {
                    url: null,
                    title: ""
                },
                style: {
                    backgroundColor: '#cbf0f8',
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