<template>
	<view class="wrap">
		<view>
			<ingsysNavbar title="工艺报警处理" />
		</view>
		<view>
			<u-toast ref="uToast" />
		</view>
			
		<u-divider>报警信息</u-divider>
		{{item.v13}}
		<u-form :model="item" ref="uForm" :errorType="errorType">
			<u-form-item label-width="150" label="装置名称">{{item.departMent}}</u-form-item>
			<u-form-item label-width="150" label="指标名称">{{item.v5}}</u-form-item>
			<u-form-item label-width="150" label="指标位号">{{item.v4}}</u-form-item>
			<u-form-item label-width="150" label="指标类别">{{item.v7}}</u-form-item>
			<u-form-item label-width="150" label="班组">{{item.v6}}</u-form-item>
			<u-form-item label-width="150" label="报警类型">{{item.v12}}</u-form-item>
			<u-form-item label-width="150" label="指标范围">{{item.v11}}</u-form-item>
			<u-form-item label-width="150" label="工程单位">{{item.v14}}</u-form-item>
			<u-gap height="10" bg-color="#fff"></u-gap>
			<u-divider>处理信息</u-divider>
			<u-form-item label-width="150" label="处理意见" prop="count">
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
	import api from "@/api/tech-alarm.js"
	
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
				item: {
					departMent: null,	// 装置名称
					v5: null,		// 指标名称
					v4: null,		// 指标位号
					v7: null, 	// 指标类别
					v6: null,		// 班组
					v12: null,	// 报警类型
					v11: null,	// 指标范围
					v14: null,	// 工程单位
					count: null,// 处理意见
					roleGId: null,
					tableFlag: null,
					gID: null
				},
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
						roleGId: _this.item.roleGId,
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
					
					api.handleTechAlarm(params).then(res => {
						_this.loading = false;
						if(res.data.success) {
							this.$refs.uToast.show({
								title: '处理成功',
								type: 'success'
							})
							setTimeout(() => {
								uni.$emit('updateTechAlatmData')
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
		}
	}
</script>

<style scoped lang="scss">
	.wrap {
		padding: 30rpx;
	}
</style>
