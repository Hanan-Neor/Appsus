import { keepService } from '../services/keep-service.js';
import keepList from '../cmps/keep-list.js'

export default {
    template: `
        <section class="keep-app main-layout">
        Keep-Page
        <keep-list :notes:="notes" />
        </section>
    `,

    data() {
        return {
            notes: [{
                    type: "noteTxt",
                    isPinned: true,
                    info: {
                        txt: "Fullstack Me Baby!"
                    }
                },
                {
                    type: "noteImg",
                    info: {
                        url: "http://some-img/me",
                        title: "Me playing Mi"
                    },
                    style: {
                        backgroundColor: "#00d"
                    }
                },
                {
                    type: "noteTodos",
                    info: {
                        label: "How was it:",
                        todos: [
                            { txt: "Do that", doneAt: null },
                            { txt: "Do this", doneAt: 187111111 }
                        ]
                    }
                }
            ]
        }
    },

    created() {
        // keepService.getNotes()
        //     .then(notes => {
        //         this.notes = notes
        //     })


    },
    methods: {


    },
    computed: {


    },
    components: {
        keepService,
        keepList,

    }


};