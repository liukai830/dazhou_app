<template>
	<view class="wrap">
		<view>
			<ingsysNavbar title="工艺报警处理" />
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
		
<!-- 		<button type="primary" size="medium">确认</button>
		<button type="default" size="medium">取消</button>
		<u-row gutter="16">
			<u-col span="5">
				<button type="primary" size="medium">确认</button>
			</u-col>
			<u-col span="5">
				<button type="default" size="medium">取消</button>
			</u-col>
		</u-row> -->
		
	</view>
</template>

<script>
	import ingsysNavbar from "@/components/ingsys_navbar.vue"
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
					_this.loading = true;
					setTimeout(function() {
					  _this.loading = false;
					}, 2000);
					
					
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
