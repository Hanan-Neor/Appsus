export default {
    props: ['note'],
    template: `
<section class="note-todos flex space-between column" v-if="note"  >
    <div>
   
        <ul>
            <h2 v-if="!edit">{{note.info.label}}</h2>

            <input v-if="edit" v-model="note.info.label" class="edit-label" type="text">
            <li class="todo"  v-for=" (item ,idx) in note.info.todos">
                <p @click="changeTodo(idx)" :class="isDone(item)"> {{item.txt}}</p>  
            </li>
            <form @submit=addToDo() v-if="edit"> 
            <input  v-if="edit" v-model=newToDo type="text" class="edit-txt" placeholder="Add todo">
            </form>
            <button class=btn-save v-if="edit" @click.stop.prevent="updateNote"><i class="far fa-save"></i></button>
        </ul>
    </div>

    <div class="container-btn">
        
        <button class="btn-note" v-if="!edit" @click="remove"><i class="far fa-trash"></i></button>
        <button  class="btn-note" v-if="!edit" @click="editOn"><i class="far fa-edit"></i></button>
        <div class="color">
            <div v-if="!edit" class="color-palete"><i class="fas fa-palette"></i></div> 
            <input class="color-input" type="color" @input="setColor" v-model="note.style.backgroundColor"/>
         </div>
     </div>


</section>
`,

    data() {
        return {
            // note: this.note,
            // bgcStyle: this.note.style.backgroundColor || '#FFFFE0',
            edit: false,
            newToDo: "",
        }
    },

    methods: {
        addTodo() {

            this.note.info.todos.txt.push({ todo: this.newTodo, doneAt: null });
            notesService.saveTodos(this.note.info.todos).then(updateTodos => {
                this.note.info.todos = updateTodos;
                this.newTodo = ''
            })
        },
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
        },
        isDone(todo) {
            if (todo.doneAt) return 'styleTodo';
        },
        changeTodo(idx) {
            if (this.note.info.todos[idx].doneAt) this.info.note.todos[idx].doneAt = null
            else this.note.info.todos[idx].doneAt = Date.now();
            this.$emit('changeDone', this.note)
                // notesService.saveTodos(this.todos).then(updateTodos => {
                //     this.todos = updateTodos;
                // })
        },
    },
};