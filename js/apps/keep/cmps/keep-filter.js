export default {
    template: `
    <section class="keep-filter"> 
        
        <input class="filter" @input="filter" type="text"  v-model="filterBy" placeholder="Search note..." />

    </section>
    `,
    data() {
        return {
            filterBy: '',
        };
    },

    methods: {
        filter() {
            this.$emit('filtered', this.filterBy);
        }
    }
};