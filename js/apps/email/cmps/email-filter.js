export default {
    template:`
<input class="search-input" type="search" v-model="searchInput" @input="searchEmail">
    
    
    
    `,
    data(){
        return {
            searchInput:null


        }
    },
    methods:{
        searchEmail(searchInput){
            this.$emit('searchEmail',searchInput)
        }
    }



}