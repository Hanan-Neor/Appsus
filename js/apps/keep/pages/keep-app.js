import { keepService } from '../services/keep-service.js';
import keepList from '../cmps/keep-list.js'

export default {
    template: `
        <section class="keep-app main-layout">
        Keep-Page
        <keep-list :notes="notes" />
        </section>
    `,

    data() {
        return {
            notes :[],
        }
    },

    created() {
        keepService.query()
            .then(notes => {
                this.notes = notes
                // console.log(notes);
            })


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