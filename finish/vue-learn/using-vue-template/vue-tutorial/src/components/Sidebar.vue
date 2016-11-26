<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <div class="text-center">
                已有时长
            </div>
        </div>
        <div class="panel-body">
            <div class="text-center">
                {{time}}小时
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        props:['time']
    }
</script>
