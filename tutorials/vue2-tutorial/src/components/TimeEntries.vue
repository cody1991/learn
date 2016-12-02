<template>
	<div>
		<router-link 
			v-if="$route.path !== '/time-entries/log-time'"
			to="/time-entries/log-time" 
			class="btn btn-primary">
			创建
		</router-link>

		<div v-if="$route.path === '/time-entries/log-time'">
			<p>创建</p>
		</div>

		<router-view></router-view>
	</div>
</template>

<script>
	export default{
		name:'time-entries',
		data(){
			return{

			}
		},
		computed:{
			plans(){
				// return this.$store.state.list
			}
		},
		methods:{
			deletePlan(idx){
				this.$store.dispatch('decTotalTime',this.plans[idx].totalTime);
				this.$store.dispatch('deleePlan',idx);
			}
		}
	}
</script>

<style scoped lang="less">
	
</style>