<template>
	<view>
		<view>
			<ingsysNavbar title="待办事项" />
		</view>
		<u-notice-bar mode="vertical" :volume-icon="false" type="success" :list="noticeMsg"></u-notice-bar>
		<view>
			<u-toast ref="uToast" />
		</view>
		
		<view v-if="todoList != null && todoList.length === 0">
			<u-gap height="100"></u-gap>
			<u-empty text="暂无待办事项" mode="list"></u-empty>
		</view>
		<view v-else>
			<u-card v-for="(item,index) in todoList" :title="item.departMent" :sub-title="item.v5+' '+item.v12" :key="index" @click="cardClick(item)">
				<view class="" slot="body">
					<view>
						<view><text space='ensp'>开始时间：{{item.date2}}  等级：<text style="color: red;">{{item.v7}}</text></text></view>
						<view><text space='ensp'>结束时间：{{item.date3}}  时长：{{item.uDF1 | hour2Minutes}}</text></view>
					</view>
				</view>
			</u-card>
			<u-divider v-if="todoList != null && todoList.length > 0">没有更多了</u-divider>
		</view>
		
		<u-back-top :scroll-top="scrollTop"></u-back-top>
		
	</view>
</template>

<script>
	var _this;
	import ingsysNavbar from "@/components/ingsys_navbar.vue"
	import api from "@/api/todo.js"
	export default {
		components: {
			ingsysNavbar
		},
		data() {
			return {
				scrollTop: 0,
				noticeMsg: [],
				todoList: null
			}
		},
		mounted() {
			_this= this;
			_this.loadTodoList();
			uni.$on('updateTodoData',() => {_this.loadTodoList()});
		},
		methods:{
			onPageScroll(e) {
				this.scrollTop = e.scrollTop;
			},
			onPullDownRefresh() {
				// 监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次
				_this.loadTodoList();
			},
			loadTodoList(){
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
						userID: userId
					}
					api.getSingleRoleTodoList(params).then(res =>{
						res.data.data.forEach(d => {d['queryRoleGId'] = res.config.data.roleGId})
						_this.todoList = res.data.data;
						_this.noticeMsg = ['查询时间：'+res.data.lastTime + ', 共'+res.data.code+'条数据!'];
						
						uni.hideLoading();
						uni.stopPullDownRefresh();
					})
				} else {
					const paramArray = roleArray.map(role => ({roleGId: role, userID: userId, processID: 'GYBJ_Process'}));
					api.getMultiRoleTodoList(paramArray).then(results => {
						const list = [];
						// 多角色需要加上查询时候的角色ID，以便后续处理使用
						results.forEach(res => {
							res.data.data.forEach(d => {d['queryRoleGId'] = res.config.data.roleGId})
						})
						results.forEach(res => {
							list.push.apply(list,res.data.data)
						})
						
						_this.todoList = list;
						_this.noticeMsg = ['查询时间：'+results[0].data.lastTime + ', 共'+list.length+'条数据!'];
						
						uni.hideLoading();
						uni.stopPullDownRefresh();
					})
				}
			}
		}
	}
</script>

<style>
</style>
