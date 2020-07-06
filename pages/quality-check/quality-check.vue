<template>
	<view>
		<u-navbar back-text="返回" title="质检数据" :background="background">
			<view class="navbar-right" slot="right">
				<view class="message-box right-item">
					<u-icon name="search" size="38" @click="showPicker = true"></u-icon>
				</view>
			</view>
		</u-navbar>
		
		<view>
			<u-toast ref="uToast" />
		</view>
		
		<mx-date-picker 
			:show="showPicker" 
			type="rangetime" 
			:value="value" 
			:show-tips="true" 
			:begin-text="'开始时间'" 
			:end-text="'结束时间'" 
			:show-seconds="true" 
			@confirm="onSelected" 
			@cancel="onCancel"/>
		
		<view v-if="sampleRecordList === null || sampleRecordList.length === 0">
			<u-empty text="质检数据为空" mode="list"></u-empty>
		</view>
		<view v-else>
<!-- 			<uni-card v-for="(item,index) in sampleRecordList" extra=">" :key="index">
			   <u-row>
					 <u-col span="3"><view class="demo-layout bg-purple">类别:{{item.categoryName}}</view></u-col>
					 <u-col span="5"><view class="demo-layout bg-purple-light">物料:{{item.sampleMaterial}}</view></u-col>
					 <u-col span="4"><view class="demo-layout bg-purple-dark">采样点:{{item.samplingLocation}}</view></u-col>
			  </u-row>
				<u-row>
					 <u-col span="12"><view class="demo-layout bg-purple">开始时间:{{item.planSampleAnalysisStartTime}}</view></u-col>
				</u-row>
				<u-row>
					 <u-col span="12"><view class="demo-layout bg-purple">结束时间:{{item.auditedTime}}</view></u-col>
				</u-row>
			</uni-card> -->
			<u-card v-for="(item,index) in sampleRecordList" :title="item.categoryName" 
			:sub-title="'物料: '+item.sampleMaterial+' 采样点：'+item.samplingLocation" :key="index" @click="cardClick(item)">
				<view class="" slot="body">
					<view>
						<view><text space='ensp'>开始时间：{{item.planSampleAnalysisStartTime}}</text></view>
						<view><text space='ensp'>结束时间：{{item.auditedTime}}</text></view>
					</view>
				</view>
			</u-card>
			<u-divider>没有更多了</u-divider>
		</view>
		
		<u-back-top :scroll-top="scrollTop"></u-back-top>

	</view>
</template>

<script>
	let _this;
	import ingsysNavbar from "@/components/ingsys_navbar.vue"
	import MxDatePicker  from "@/components/mx-datepicker.vue"
	import uniCard from '@/components/uni-card/uni-card.vue'
	import api from "@/api/quality-check.js"


	export default {
		components: {
			ingsysNavbar,
			MxDatePicker,
			uniCard
		},
		onLoad() {
			_this = this;
			// 默认是昨天的08:00 - 当前时间
			if (null === _this.startProductionDate) {
				let today = new Date();
				today.setTime(today.getTime() - 24 * 60 * 60 * 1000); // 设置成昨天
				_this.startProductionDate = _this.$u.timeFormat(today.getTime(), 'yyyy-mm-dd') + ' 08:00:00';
			}
			if(null === _this.endProductionDate) {
				_this.endProductionDate = _this.$u.timeFormat(new Date().getTime(), 'yyyy-mm-dd hh:MM:ss'); 
			}
			_this.value = [_this.startProductionDate,_this.endProductionDate]
			_this.getQaCheckData();
		}, 
		data() {
			return {
				background: {
					// 渐变色
					backgroundImage: 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
				},
				startProductionDate: null,
				endProductionDate: null,
				showPicker: false,
				value: '',
				scrollTop: 0,
				sampleRecordList: []
			}
		},
		onPullDownRefresh() {
			//监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次
			_this.getQaCheckData();
			setTimeout(function() {
				uni.stopPullDownRefresh(); //停止下拉刷新动画
			}, 2000);
		},
		methods: {
			onPageScroll(e) {
				this.scrollTop = e.scrollTop;
			},
			validParams() {
				if (null === _this.startProductionDate || '' === _this.startProductionDate) {
					if(_this.$refs.uToast) {
						_this.$refs.uToast.show({
							title: '请选择生产开始时间',
							type: 'error', 
						})
					}
					return false;
				}
				if (null === _this.endProductionDate || '' === _this.endProductionDate) {
					if(_this.$refs.uToast) {
						_this.$refs.uToast.show({
							title: '请选择生产结束时间',
							type: 'error'
						})
					}
					return false;
				}
				return true;
			},
			getQaCheckData() {
				if (!_this.validParams()) {
					return;
				}
				console.log('fetch data')
				api.getQaCheckList({startProductionDate:_this.startProductionDate,endProductionDate:_this.endProductionDate}).then(res => {
						_this.sampleRecordList = res.data.data
				})
			},
			onSelected(e) {
				this.showPicker = false;
				if(e) {
					_this.startProductionDate = e.value[0];
					_this.endProductionDate = e.value[1];
				}
				_this.getQaCheckData()
			},
			onCancel(e) {
				this.showPicker = false;
			}
		}
	}
</script>

<style  lang="scss" scoped>
.u-demo {
		//height: 200vh;
		height: calc(100% - 44px);
		height: calc(100% - 44px - constant(safe-area-inset-top));
		height: calc(100% - 44px - env(safe-area-inset-top));
	}
	
	.wrap {
		padding: 24rpx;
	}
	
	.navbar-right {
		margin-right: 24rpx;
		display: flex;
	}
	
	.search-wrap {
		margin: 0 20rpx;
		flex: 1;
	}
	
	.right-item {
		margin: 0 12rpx;
		position: relative;
		color: #ffffff;
		display: flex;
	}
	
	.message-box {
		
	}
	
	.slot-wrap {
		display: flex;
		align-items: center;
		flex: 1;
	}
	
	.map-wrap {
		display: flex;
		align-items: center;
		padding: 4px 6px;
		background-color: rgba(240,240, 240, 0.35);
		color: #fff;
		font-size: 22rpx;
		border-radius: 100rpx;
		margin-left: 30rpx;
	}
	
	.map-wrap-text {
		padding: 0 6rpx;
	}
	
	
		.u-card-wrap { 
			background-color: $u-bg-color;
			padding: 1px;
		}
		
		.u-body-item {
			font-size: 32rpx;
			color: #333;
			padding: 20rpx 10rpx;
		}
			
		.u-body-item image {
			width: 120rpx;
			flex: 0 0 120rpx;
			height: 120rpx;
			border-radius: 8rpx;
			margin-left: 12rpx;
		}

</style>
