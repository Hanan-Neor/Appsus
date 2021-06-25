export default {
    template: `
    <section class="add-noteImg ">
    <div>
                    <label for="title">
                        <input name="title" v-model="note.info.url" @input="add" type="text" placeholder="Enter  image Url" class="input-title"> 
                        <!-- <button title="Pin" @click="pin"></button> -->
                    </label>
                </div>
                <!-- <textarea name="note" v-model="note.info.txt" @input="add" placeholder="Take a note..." rows="6" cols="50">
                    </textarea>  -->
                    <!-- <button @click="img"><input class="input-img" type="file"><i class="fas fa-image"></i></button> -->
                <!-- <h2>Add Note:</h2> -->
                <!-- <div>
                    <label for="title">
                        <input name="title" v-model="note.label" @blur="add" type="text" placeholder="Title" class="input-title"> 
                         <button title="Pin" @click="pin">📍</button> -->
                    <!-- </label> -->
                <!-- </div> -->
                <!-- <textarea name="note" v-model="note.info.txt" @blur="add" placeholder="Take a note..." rows="6" cols="50"> -->
                    <!-- </textarea>  --> 
                    <!-- <input type="file" ref="file"  @change="filePicked"/> -->
                    <!-- <button title="Add" @click="addNote"><i class="far fa-save"></i></button> -->
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

    },

    computed: {

    }


};