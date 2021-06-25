export default {
    template:`
    <section class="email-filter flex">
        <button @click="filterAll">All</button>
        <button @click="filterRead">Read</button>
        <button @click="flterUnread">Unread</button>
        <input class="search-input" type="search" v-model="searchInput" @input="searchEmail" placeholder="Type to search">
        <button>Oldest first</button>
</section>
        
        
    `,
    data(){
        return {
            searchInput:null
        }
    },
    methods:{
        searchEmail(){
            this.$emit('searchEmail',this.searchInput)
        },
        filterAll(){
            this.$emit('filterState',null)
        },
        filterRead(){
            this.$emit('filterState',true)
            
        },
        flterUnread(){
            this.$emit('filterState',false)

        }

    }



}