<template>
    <div class="hint" :class="{'hint-failure':hint.colorRed}">
        {{hint.info}}
    </div>
</template>

<script>
    import {getHint} from '../vuex/getters';
    export default{
        vuex:{
            getters:{
                hint:getHint
            }
        }
    }
</script>
