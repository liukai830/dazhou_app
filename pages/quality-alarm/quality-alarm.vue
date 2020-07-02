<template>
	<view class="wrap">
		<view>
			<ingsysNavbar title="质量报警" />
		</view>
		<u-notice-bar mode="vertical" :volume-icon="false" type="success" :list="noticeMsg"></u-notice-bar>
		<view>
			<u-toast ref="uToast" />
		</view>
		
		<view v-if="qualityAlarmList != null && qualityAlarmList.length === 0">
			<u-empty text="工艺报警数据为空" mode="list"></u-empty>
		</view>
		
		<view v-else>
			<u-card v-for="(item,index) in qualityAlarmList" :title="item.v13" :sub-title="item.v5+item.v12" :key="index" @click="cardClick(item)">
				<view class="" slot="body">
					<view>
						<view><text space='ensp'>开始时间：{{item.date2}}  等级：<text style="color: red;">{{item.v7}}</text></text></view>
						<view><text space='ensp'>结束时间：{{item.date3}}  时长：{{item.uDF1 | hour2Minutes}}</text></view>
					</view>
				</view>
			</u-card>
			<u-divider v-if="qualityAlarmList != null && qualityAlarmList.length > 0">没有更多了</u-divider>
		</view>
		
		<u-back-top :scroll-top="scrollTop"></u-back-top>
		
	</view>
</template>

<script>
	var _this;
	import ingsysNavbar from "../../components/ingsys_navbar.vue"
	import api from "@/api/tech-alarm.js"
	export default {
		components: {
			ingsysNavbar
		},
		data() {
			return {
				scrollTop: 0,
				noticeMsg: [],
				qualityAlarmList: null
			}
		}
	}
</script>

<style scoped lang="scss">
	.wrap {
		padding: 30rpx;
	}
</style>
