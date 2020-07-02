<template>
	<view>
		<ingsysNavbar title="库存查询" />
		<u-notice-bar mode="vertical" :volume-icon="false" type="success" :list="lastTime"></u-notice-bar>
		<view>
			<u-toast ref="uToast" />
		</view>
		<u-table>
			<u-tr>
				<u-th width="35%">NC编号</u-th>
				<u-th width="40%">产品名称</u-th>
				<u-th width="15%">库存</u-th>
				<u-th width="10%">单位</u-th>
			</u-tr>
			<u-tr v-for="(item,index) in storeList" :key="index">
				<u-td width="35%">{{item.materialID}}</u-td>
				<u-td width="40%">{{item.materialName}}</u-td>
				<u-td width="15%">{{item.number}}</u-td>
				<u-td width="10%">{{item.eUnitName}}</u-td>
			</u-tr>
		</u-table>
	</view>
</template>

<script>
	let _this;
	import ingsysNavbar from "@/components/ingsys_navbar.vue"
	import api from "@/api/store.js"
	
	export default {
		onLoad() {
			_this = this
			_this.getStoreData();
		},
		components: {
			ingsysNavbar
		},
		data() {
			return {
				lastTime: [],
				storeList: []
			}
		},
		onPullDownRefresh() {
		  //监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次
			_this.getStoreData();
		  setTimeout(function () {
				uni.stopPullDownRefresh();  //停止下拉刷新动画
		  }, 2000);
		 },
		methods: {
			getStoreData() {
				uni.showLoading({
				  title: '加载中'
				});
				api.getStoreList().then(res => {
					let resdata = res.data;					
					_this.storeList = resdata.data;
					_this.lastTime = ['查询时间：'+resdata.lastTime+'，共 '+_this.storeList.length+' 条数据'];
					uni.hideLoading()
					uni.stopPullDownRefresh();  //停止下拉刷新动画
				})
			}
		}
	}
</script>

<style>
</style>
