// export default {
//     props: ['note'],
//     template: `
//     <section class="note-todos" >
//         <button @click="remove">X</button>
//         <h2>{{note.info.label}}</h2>
//         <ul v-for="todo in note.info.todos">
//             <li>{{todo.txt}}</li>
//         </ul>
//     </section>
//     `,

//     data() {
//         return {}
//     },

//     methods: {
//         remove() {
//             this.$emit('remove', this.note.id)
//         }
//     },

// };