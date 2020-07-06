<template>
	<view>
		<ingsysNavbar title="流程监控详情" />
		<view>
			<u-toast ref="uToast" />
		</view>
		<web-view :src="getFullUrl" />
	</view>
</template>

<script>
	var _this;
	import ingsysNavbar from "@/components/ingsys_navbar.vue"
	export default {
		components: {
			ingsysNavbar
		},
		data() {
			return {
				key: null,
				url: 'http://baidu.com'
			}
		},
		computed:{
			getFullUrl(){
				return 'http://www.hzingsys.com:60/svg.html?key='+this.key
			}
		},
		onLoad(option) {
			this.key = option.key
		},
		onBackPress(options) {  
			uni.navigateTo({
			    url: '/pages/process/process-monitoring'
			});
			return true;
		}
	}
</script>

<style>
</style>
