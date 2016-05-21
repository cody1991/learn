<template>
    <div id="user-view" v-show="user"></div>
</template>


<script>
    import store from '../store'

    export default {
        name:'UserView',
        data(){
            return {
                user:{

                }
            }
        },
        route:{
            data({to}){
                document.title = 'Profile: ' + to.params.id + ' | Vue.js HN Clone';
                return {
                    user:store.fetchUser(to.params.id)
                }
            }
        }
    }
</script>