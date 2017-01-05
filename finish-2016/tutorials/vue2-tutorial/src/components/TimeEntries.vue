<template>
	<div>
		<router-link 
			v-if="$route.path !== '/time-entries/log-time'"
			to="/time-entries/log-time" 
			class="btn btn-primary">
			创建
		</router-link>

		<div v-if="$route.path === '/time-entries/log-time'">
			<h2>创建</h2>
		</div>

		<hr>

		<div class="time-entries">
			<p v-if="!plans.length">
				还没有任何计划
			</p>
			<div class="list-group">
				<div class="list-group-item" v-for="(plan,index) in plans">
					<div class="row">
						<div class="col-xs-6 user-details">
							<img :src="plan.avatar" class="avatar img-circle img-responsive">
							<p class="text-center">
								{{plan.name}}
							</p>
						</div>
						<div class="col-xs-6 comment-section">
							<p>
								{{plan.comment}}
							</p>
						</div>
					</div>
					<div class="row">
						<div class="col-xs-6 text-center time-block">
							<p class="list-group-item-text total-time">
								{{plan.totalTime}} hours
								|
								{{plan.date}}
							</p>
						</div>
						
						<div class="delButton">
							<button class="btn btn-xs btn-danger delete-button"
							@click="deletePlan(index)">
								X	
							</button>
						</div>
					</div>
				</div>
			</div>
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
				return this.$store.state.list
			}
		},
		methods:{
			deletePlan(idx){
				this.$store.dispatch('decTotalTime',this.plans[idx].totalTime);
				this.$store.dispatch('deletePlan',idx);
			}
		}
	}
</script>

<style scoped lang="less">
	.time-entries{
		font-size:14px;
	}
	.user-details{
		border-right:1px solid #ddd;
		.avatar{
			margin:10px auto;
			max-width: 70px;
		}
	}
	.time-block{
		border-right:1px solid #ddd;
		.label{
			font-size: 12px;
		}
	}
	.comment-section{
		padding-right: 30px;
	}
	.delButton{
		position: absolute;
		top:10px;
		right: 10px;
		text-align: center;
	}

</style>