<template>
	<view class="wrap">
		<view>
			<ingsysNavbar title="质量报警处理" />
		</view>
		<view>
			<u-toast ref="uToast" />
		</view>
			
		<u-divider>报警信息</u-divider>
		<u-form :model="item" ref="uForm" :errorType="errorType">
			<u-form-item label-width="200" label="报警编号">{{item.v2}}</u-form-item>
			<u-form-item label-width="200" label="拟票人/时间">{{item.v3}}/{{item.date1}}</u-form-item>
			<u-form-item label-width="200" label="装置名称">{{item.v13}}</u-form-item>
			<u-form-item label-width="200" label="样品名称">{{item.v4}}</u-form-item>
			<u-form-item label-width="200" label="样品编号">{{item.v5}}</u-form-item>
			<u-form-item label-width="200" label="采样点">{{item.v10}}</u-form-item>
			<u-form-item label-width="200" label="分析项目">{{item.v1}}</u-form-item>
			<u-form-item label-width="200" label="分析值">{{item.uDF3}}</u-form-item>
			<u-form-item label-width="200" label="生产日期"></u-form-item>
			<u-form-item label-width="200" label="班次">{{item.v6}}}</u-form-item>
			<u-form-item label-width="200" label="样品类型">{{item.v14}}</u-form-item>
			<u-form-item label-width="200" label="上下限"><text space="emsp">{{item.uDF1}} - {{item.uDF2}}</text></u-form-item>
			<u-form-item label-width="200" label="异常级别">{{item.v7}}</u-form-item>
			
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
	import api from "@/api/tech-alarm.js"
	
	let _this;
	export default {
		components: {
			ingsysNavbar
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
					
					api.handleTechAlarm(params).then(res => {
						_this.loading = false;
						if(res.data.success) {
							this.$refs.uToast.show({
								title: '处理成功',
								type: 'success'
							})
							setTimeout(() => {
								uni.$emit('updateTechAlarmData')
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
			hour2Minutes(hour) {
				if(!hour) {
					return hour
				}
				let min = hour*60;
				if(hour > 1) {
					return hour + '小时'
				} else if(min >= 1) {
					return Math.floor(min) + '分'
				} else {
					return Math.floor(min*60) + '秒'
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.wrap {
		padding: 30rpx;
	}
</style>
