export default {
    props: ['todo'],
    template: `
    <section class="add-todoPrev">
                <p>{{todo.txt}}</p> <button @click="remove(todo.id)"><i class="far fa-trash"></i></button>
    </section>
    `,


    methods: {
        remove(taskId) {
            this.$emit('remove', taskId)
        }
    }


};