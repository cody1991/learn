<template>
    <div>
        <h3>Count is {{getCount}}</h3>
    </div>
</template>

<script>
    import {getCount} from '../vuex/getters';
    export default{
        vuex:{
            getters:{
                getCount
            }
        },
    }
</script>
