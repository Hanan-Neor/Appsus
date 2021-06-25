export default {
    props: ['unReadCnt'],
    template:`
    <section class="email-filter flex">
        <button @click="filterAll">All</button>
        <button @click="filterRead">Read</button>
        <button @click="flterUnread">Unread ({{unReadCnt}})</button>
        <input class="search-input" type="search" v-model="searchInput" @input="searchEmail" placeholder="Type to search">
        <select v-model="sortBy" @change="sortEmails">
        <option>Oldest first</option>
        <option>Newest first</option>
        </select>
</section>
        
        
    `,
    data(){
        return {
            searchInput:null,
            sortBy:'Oldest first'
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

        },
        sortEmails(){
            console.log(this.sortBy);
            this.$emit('sortBy',this.sortBy)
        }

    }



}