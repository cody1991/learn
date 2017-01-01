<template>
    <div class="news-view" :class="{loading:!items.length}">
        <Item v-for="item in items" :item="item" :index="$index | formatItemIndex" track-by="id"></Item>
        <div class="nav" v-show="items.length > 0">
          <a v-if="page > 1" :href="'#/news/' + (page - 1)">&lt; prev</a>
          <a v-if="page < 4" :href="'#/news/' + (page + 1)">more...</a>
        </div>
    </div>
</template>


<script>
    import store from '../store/'
    import Item from './Item.vue'


    export default{
        name:'NewsView',
        components:{
            Item
        },
        data(){
            return {
                page:1,
                items:[]
            }
        },
        route:{
            data({to}){
                const page = +to.params.page;
                document.title = 'Vue.js HN Clone';
                return store.fetchItemsByPage(page).then(items => ({
                    page,
                    items
                }));
            }
        },
        created(){
            store.on('topstories-updated',this.update);
        },
        destroyed(){
            store.removeListener('topstories-updated',this.update);
        },
        methods:{
            update(){
                store.fetchItemsByPage(this.page).then(items => {
                    this.items = items;
                });
            }
        },
        filters:{
            formatItemIndex(index){
                return (this.page - 1) * store.storiesPerpage + index + 1
            }
        }
    }
</script>