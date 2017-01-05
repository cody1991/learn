<template>
	<div class="form-horizontal">
		<div class="form-group">			
			<div class="col-sm-6">
				<label for="date">日期</label>
				<input type="date" 
					class="form-control"
					v-model="date"
					placeholder="Date"
					id="date">
			</div>
			<div class="col-sm-6">
				<label for="totalTime">时间</label>
				<input type="number"
					class="form-control"
					v-model="totalTime"
					placeholder="Hours"
					id="totalTime">
			</div>
		</div>
		<div class="form-group">
			<div class="col-sm-12">
				<label for="comment">备注</label>
				<textarea 
					class="form-control"
					v-model="comment"
					placeholder="comment"
					id="comment">
				</textarea>
			</div>
		</div>
		<button class="btn btn-primary" @click="save()">保存</button>
		<router-link to="/time-entries" class="btn btn-danger">取消</router-link>
		<hr>
	</div>
</template>

<script>
	export default{
		name:'log-time',
		data(){
			return{
				date:'',
				totalTime:'',
				comment:''
			}
		},
		methods:{
			save(){
				const plan = {
					name:'cody',
					avatar:'https://avatars3.githubusercontent.com/u/3488257?v=3&s=460',
					date:this.date,
					totalTime:this.totalTime,
					comment:this.comment
				};

				this.$store.dispatch('savePlan',plan)
				this.$store.dispatch('addTotalTime',this.totalTime)
				this.$router.go(-1)

			}
		}
	}
</script>

<style scoped lang="less"></style>