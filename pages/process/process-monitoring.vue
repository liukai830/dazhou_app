<template>
	<view>
		<ingsysNavbar title="流程监控" />
		<u-cell-group>
			<u-cell-item v-for="(item,index) in flowList" :title="item.name" value="查看详情" :key="index"></u-cell-item>
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
				flowList: []
			}
		},
		onLoad() {
			_this= this;
			_this.getFlowListData();
		},
		methods: {
			getFlowListData() {
				this.flowList = [{name: '磷酸二铵'}, {name: '磷酸装置'}, {name: '净化磷酸装置'}, {name: '公用工程'}]
			}
		}
	}

</script>

<style >
</style>
