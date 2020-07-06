<template>
	<view class="wrap">
		<view>
			<ingsysNavbar title="待办任务处理" />
		</view>
		<view>
			<u-toast ref="uToast" />
		</view>
			
		<u-divider>待办任务信息</u-divider>
		<u-form :model="item" ref="uForm" :errorType="errorType">
			
			<u-form-item label-width="200" label="部门装置名称">{{item.departMent}}</u-form-item>
			<u-form-item label-width="200" label="流程名称">{{item.processID | processType}}</u-form-item>
			<u-form-item label-width="200" label="流程编号">{{item.v2}}</u-form-item>
			<u-form-item label-width="200" label="发起人">{{item.v3}}</u-form-item>
			<u-form-item label-width="200" label="发起时间">{{item.date2}}</u-form-item>
			<u-form-item label-width="200" label="流程状态">{{item.isOld | processStatus}}</u-form-item>
			<u-form-item label-width="200" label="v4" v-if="item.processID==='DDZX_Process'">{{item.v4 || item.v14}}</u-form-item>
			<u-form-item label-width="200" label="v14" v-if="item.processID==='JHTC_Process'">{{item.v14 || item.v4}}</u-form-item>
			
			<u-gap height="10" bg-color="#fff"></u-gap>
			<u-divider>处理信息</u-divider>
			<u-form-item label-width="200" label="处理意见" prop="count">
				<u-input type="textarea" placeholder="请填写处理意见" v-model="item.count" />
			</u-form-item>
			<u-gap height="10" bg-color="#fff"></u-gap>
			<u-form-item>
				<button type="primary" size="mini" :loading="loading" @click="submit">确认</button>
				<button type="default" size="mini" @click="cancel">取消</button>
			</u-form-item>
		</u-form>
		
		
	</view>
</template>

<script>
	import ingsysNavbar from "@/components/ingsys_navbar.vue"
	import api from "@/api/todo.js"
	
	let _this;
	export default {
		components: {
			ingsysNavbar
		},
		mounted() {
			// this.item = this.$store.state.currentTechAlarmItem
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		onLoad(option) {
			_this = this;
			this.item = JSON.parse(decodeURIComponent(option.item));
		},
		data() {
			return {
				item: {},
				rules: {
					count: [
						{
							required: true, 
							message: '输入处理意见'
						}
					]
				},
				errorType: ['message'],
				loading: false
			}
		},
		methods: {
			submit() {
				_this.$refs.uForm.validate(valid => {
					if (!valid) {
						return;
					} 
					if(_this.loading) {
						return;
					}
					
					let currentUser = uni.getStorageSync('currentUser');
					let params = [{
						roleGId: _this.item.queryRoleGId,
						tableFlag: _this.item.tableFlag,
						userID: currentUser.userId,
						userName: currentUser.userName,
						gID: _this.item.gID,
						count: _this.item.count
					}]
					
					_this.loading = true;
					setTimeout(() => {
					  _this.loading = false;
					}, 3000);
					
					api.handleTodoInfo(params).then(res => {
						_this.loading = false;
						if(res.data.success) {
							this.$refs.uToast.show({
								title: '处理成功',
								type: 'success'
							})
							setTimeout(() => {
								uni.$emit('updateTodoData')
								uni.navigateBack()
							}, 500);
						} else {
							this.$refs.uToast.show({
								title: res.data.message || '处理失败，接口返回false',
								type: 'error'
							})
						}
					})
				});
			},
			cancel() {
				uni.navigateBack()
			}
		},
		filters: {
			processStatus(node) {
				let name = node
				switch(node) {
					case 1: name = '审核'; break;
					case 2: name = '结果反馈'; break;
					case 3: name = '知会接收'; break;
				}
				return name
			},
			processType(value) {
				let name = value
				switch(value) {
					case 'DDZX_Process': name = '调度中心'; break;
					case 'JHTC_Process': name = '计划停车'; break;
				}
				return name
			}
		}
	}
</script>

<style scoped lang="scss">
	.wrap {
		padding: 30rpx;
	}
</style>
