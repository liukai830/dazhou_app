<template>
	<view>
		<view>
			<ingsysNavbar title="工艺报警" />
		</view>
		<u-notice-bar mode="vertical" :volume-icon="false" type="success" :list="noticeMsg"></u-notice-bar>
		<view>
			<u-toast ref="uToast" />
		</view>
		
		<view v-if="techAlarmList != null && techAlarmList.length === 0">
			<u-empty text="工艺报警数据为空" mode="list"></u-empty>
		</view>
		<view v-else>
			<u-card v-for="(item,index) in techAlarmList" :title="item.departMent" :sub-title="item.v5+item.v12" :key="index" @click="cardClick(item)">
				<view class="" slot="body">
					<view>
						<view><text space='ensp'>开始时间：{{item.date2}}  等级：<text style="color: red;">{{item.v7}}</text></text></view>
						<view><text space='ensp'>结束时间：{{item.date3}}  时长：{{item.uDF1 | hour2Minutes}}</text></view>
					</view>
				</view>
			</u-card>
			<u-divider v-if="techAlarmList != null && techAlarmList.length > 0">没有更多了</u-divider>
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
				techAlarmList: null
			}
		},
		mounted() {
			_this= this;
			_this.getTechAlarmData();
			uni.$emit('updateTechAlatmData',_this.getTechAlarmData());
		},
		methods: {
			onPageScroll(e) {
				this.scrollTop = e.scrollTop;
			},
			onPullDownRefresh() {
				uni.stopPullDownRefresh();
				// 监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次
				_this.getTechAlarmData();
			},
			getTechAlarmData() {
				uni.showLoading({
				    title: '加载中'
				});
				setTimeout(function () {
				    uni.hideLoading();
				}, 10000);
				// 先获取当前登录用户id和所有的角色信息
				let currentUser = uni.getStorageSync('currentUser');
				let userId = currentUser.userId;
				let roles = currentUser.roles;
				let roleArray = roles.split(',');
				if(roleArray.length === 1) {
					// 只有一个角色
					let params = {
						roleGId: roles,
						userID: userId,
						processID: 'GYBJ_Process'
					}
					api.getSingleRoleTechAlarmList(params).then(res => {
						_this.techAlarmList = res.data.data;
						_this.noticeMsg = ['查询时间：'+res.data.lastTime + ', 共'+res.data.code+'条数据!'];
						uni.stopPullDownRefresh();  //停止下拉刷新动画
						uni.hideLoading();
					})
				} else {
					const paramArray = roleArray.map(role => ({roleGId: role, userID: userId, processID: 'GYBJ_Process'}));
					api.getMultiRoleTechAlarmList(paramArray).then(results => {
						const list = [];
						const lastTime = null;
						
						// 多角色需要加上查询时候的角色ID，以便后续处理使用
						results.forEach(res => {
							res.data.data.forEach(d => {d['queryRoleGId'] = res.config.data.roleGId})
						})
						results.forEach(res => {
							list.push.apply(list,res.data.data)
						})
						
						_this.techAlarmList = list;
						_this.noticeMsg = ['查询时间：'+results[0].data.lastTime + ', 共'+list.length+'条数据!'];
						uni.stopPullDownRefresh();  //停止下拉刷新动画
						uni.hideLoading();
					})
				}
			},
			cardClick(item){
				let params = {
					v13: item.v13,
					departMent: item.departMent,	// 装置名称
					v5: item.v5,		// 指标名称
					v4: item.v4,		// 指标位号
					v7: item.v7, 	// 指标类别
					v6: item.v6,		// 班组
					v12: item.v12,	// 报警类型
					v11: item.v11,	// 指标范围
					v14: item.v14,	// 工程单位
					roleGId: item.queryRoleGId,
					tableFlag: item.tableFlag,
					gID: item.gID
				}
				
				this.$u.route({
					url: 'pages/tech/tech-alarm-item?item=' + encodeURIComponent(JSON.stringify(params))
				})
			}
		},
		filters: {
			hour2Minutes(hour) {
				if(!hour) {
					return hour
				}
				let min = hour*60;
				if(min >= 1) {
					return Math.floor(min) + '分'
				} else {
					return Math.floor(min*60) + '秒'
				}
			}
		}
	}
</script>

<style>
</style>
