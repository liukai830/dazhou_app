<template>
	<view>
		<ingsysNavbar title="流程监控" />
		<view>
			<u-toast ref="uToast" />
		</view>
		<u-cell-group>
			<u-cell-item v-for="(item,index) in flowList" :title="item.name" value="查看详情" :key="index" @click="itemClick(item.key)"></u-cell-item>
		</u-cell-group>
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
				flowList: [
					{name: '磷酸二铵(测试)', key: 'VIEW000003'},
					{name: '磷酸二铵', key: 'LSEA'},
					{name: '磷酸装置', key: 'PAZZ'}, 
					{name: 'PPA装置', key: 'JHLS'},
					{name: '公用工程', key: 'GYGC'}
				]
			}
		},
		mounted() {
			_this= this;
		},
		methods:{
			itemClick(key){
				if(key) {
					this.$u.route({
						url: 'pages/process/process-item?key=' + key
					})
				} else {
					this.$refs.uToast.show({
						title: '未配置流程对应的key，请联系管理员',
						type: 'error'
					})
				}
			}
		},
		onBackPress(options) {
			uni.navigateTo({
			    url: '/pages/index/index'
			});
			return true;
		}
	}

</script>

<style >
</style>
