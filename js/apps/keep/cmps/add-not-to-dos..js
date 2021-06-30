export default {
    // name: "add - not - todos",
    template: `
    <section class="add-noteToDos space-between">
                <!-- <h2>Add Note:</h2> -->
                <div>
                    <label for="title">
                        <input name="title" v-model="note.info.label" @blur="add" type="text" placeholder="Title"  autocomplete="off" onfocus="this.placeholder = ''"> 
                        <!-- <button title="Pin" @click="pin">📍</button> -->
                    </label>
                    <input ref="task" type="text" v-model="task.txt" placeholder="Enter tesk">
                    <button @click="addTask">Add</button>
                </div>
                <textarea name="note" v-model="note.info.todos.txt" @blur="add" placeholder="Text"  onfocus="this.placeholder = ''"rows="6" cols="50">
                </textarea> 
                <button title="Add" @click="addNote"><i class="far fa-save"></i></button>
    </section>
    `,

    data() {
        return {
            note: {
                type: 'noteToDos',
                id: null,
                isPinned: false,
                info: {
                    label: null,
                    todos: []
                },
                style: {
                    backgroundColor: "#C1C1C1",
                },
            },
            task: {
                txt: null,
                id: null,
                doneAt: null,
            },
            isTasksPrev: false,
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