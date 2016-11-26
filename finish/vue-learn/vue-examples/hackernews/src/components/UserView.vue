<template>
    <div id="user-view" v-show="user">
        <ul>
            <li><span class="label">user:</span>{{user.id}}</li>
            <li><span class="label">created:</span>{{user.created | fromNow}}</li>
            <li><span class="label">karma:</span>{{user.karma}}</li>
            <li>
                <span class="label">about:</span>
                <div class="about">
                    {{{user.about}}}
                </div>
            </li>
        </ul>
        <p class="links">
            <a :href="'https://news.ycombinator.com/submitted?id=' + user.id">submissions</a><br>
            <a :href="'https://news.ycombinator.com/threads?id=' + user.id">comments</a>
        </p>
    </div>
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