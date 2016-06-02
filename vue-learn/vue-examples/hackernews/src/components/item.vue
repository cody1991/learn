<template>
    <div class="item">
        <span class="index">{{index}}.</span>
        <p>
            <a class="title" :href="href" target="_blank">{{{item.title}}}</a>
            <span class="domain" v-show="showDomain">
                ({{item.url | domain}})
            </span>
        </p>
        <p class="subtext">
            <span v-show="showInfo">
                {{item.score}} points by
                <a :href="'#/user/' + item.by">{{item.by}}</a>
            </span>
            {{item.time | fromNow}} ago
            <span class="comments-link" v-show="showInfo">
                | <a :href="'#/item/' + item.id">{{item.descendants}} {{item.descendants | pluralize 'comment'}}</a> 
            </span>
        </p>
    </div>
</template>

<script>
    export default{
        name:'item',
        props:{
            item:Object,
            index:Number
        },
        computed:{
            href(){
                return this.item.url || ('#/item/' + this.item.id)
            },
            showInfo(){
                return this.item.type === 'story' || this.item.type === 'poll'
            },
            showDomain(){
                return this.item.type === 'story'
            }
        }
    }
</script>