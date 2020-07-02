<template>
	<view>
		<u-navbar title="dazhou-app" :background="background" back-icon-name="list" :is-back="false" >
			<view class="map-wrap">
				<u-icon name="list" size="36" class="wrap" color="rgb(96, 98, 102)"></u-icon>
			</view>
		</u-navbar>
		<u-grid :col="6" :border="false">
			<u-grid-item @click="menuClick('/pages/process/process-monitoring')">
				<view class="iconfont" style="color: #55aaff; font-size: 66rpx;">&#xe685</view>
				<view class="grid-text">流程监控</view>
			</u-grid-item>
			<u-grid-item @click="menuClick('/pages/tech/tech-alarm')">
				<view class="iconfont" style="color: #00aa00; fontSize: 66rpx">&#xe600</view>
				<view class="grid-text">工艺报警</view>
			</u-grid-item>
			<u-grid-item>
				<view class="iconfont" style="color: #78b3ff; fontSize: 66rpx">&#xe611</view>
				<view class="grid-text">质量报警</view>
			</u-grid-item>
			<u-grid-item @click="menuClick('/pages/quality-check/quality-check')">
				<view class="iconfont" style="color: #ff7d7d; fontSize: 66rpx">&#xe62f</view>
				<view class="grid-text">质检数据</view>
			</u-grid-item>
			<u-grid-item @click="menuClick('/pages/store/store')">
				<view class="iconfont" style="color: #ffb367; fontSize: 66rpx">&#xe62c</view>
				<view class="grid-text">库存查询</view>
			</u-grid-item>
			<u-grid-item>
				<view class="iconfont" style="color: #00aa00; fontSize: 66rpx">&#xe6ac</view>
				<view class="grid-text">代办事项</view>
			</u-grid-item>
		</u-grid>
		<u-gap height="10" bg-color="#ffffff"></u-gap>
		<u-line color="#4ca2f9" />
		<u-grid :col="3" :border="true" >
			<u-grid-item v-for="(item,index) in items" :key="index">
				<u-tag :text="item.name" :type="item.alarm | alarmType" />
			</u-grid-item>
		</u-grid>
		<u-line color="#4ca2f9" />
		<u-gap height="10" bg-color="#ffffff"></u-gap>
		<!-- 班报、日报、月报 -->
		<u-tabs :list="tabNames" :is-scroll="false" :current="currentTab" @change="tabChange"></u-tabs>
		<u-gap height="10" bg-color="#ffffff"></u-gap>
		<ingsysReport :content="reports[currentTab]" :reportName="tabNames[currentTab].name"></ingsysReport>
		
	</view>
</template>

<script>
	import ingsysReport from "@/components/ingsys_report.vue"
	export default {
		onLoad() {

		},
		components: {
			ingsysReport
		},
		data() {
			return {
				background: {
					// 渐变色
					backgroundImage: 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
				},
				items: [
					{name: '磷酸二铵', alarm: false},
					{name: 'PA浓缩B', alarm: false},
					{name: 'PPA反应', alarm: false},
					{name: 'PA反应过滤', alarm: false},
					{name: 'PA浓缩C', alarm: true},
					{name: 'PPA后处理', alarm: false},
					{name: 'PA浓缩A', alarm: false},
					{name: 'PPA预处理', alarm: false},
					{name: '公用工程', alarm: true}
				],
				tabNames: [{name: '班报'}, {name: '日报'}, {name: '月报'}],
				currentTab: 0,
				reports: ['这是班报','这是日报','这是月报']
			}
		},
		methods: {
			tabChange(index) {
				this.currentTab = index;
			},
			menuClick(url) {
				uni.navigateTo({
				    url: url
				});
			}
		},
		filters: {
			alarmType(alarm) {
				return alarm ? 'error': 'success';
			}
		}
	}
</script>

<style scoped lang="scss">
	.wrap {
		padding: 24rpx;
	}
	.slot-wrap {
		display: flex;
		align-items: center;
		/* 如果您想让slot内容占满整个导航栏的宽度 */
		/* flex: 1; */
		/* 如果您想让slot内容与导航栏左右有空隙 */
		/* padding: 0 30rpx; */
	}
</style>
