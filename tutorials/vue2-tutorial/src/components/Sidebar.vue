<template>
	<div class="panel panel-default">
		<div class="panel-heading">
			<p class="text-center">
				已有时长
			</p>
		</div>
		<div class="panel-body">
			<p class="text-center">
				{{time}} 小时
			</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'sidebar',
		data(){
			return{

			}
		},
		computed:{
			time(){
				return 1;
				// return this.$store.state.totalTime;
			}
		}
	}
</script>

<style lang="less" scoped>
	
</style>