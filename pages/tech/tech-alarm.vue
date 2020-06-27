<template>
	<view>
		<ingsysNavbar title="工艺报警" />
	</view>
</template>

<script>
	var _this;
	import ingsysNavbar from "../../components/ingsys_navbar.vue"
	export default {
		components: {
			ingsysNavbar
		},
		data() {
			return {
				flowList: []
			}
		},
		mounted() {
			_this= this;
			_this.getFlowData();
		},
		methods: {
			getFlowData() {
				this.flowList = [{name: '磷酸二铵'}, {name: '磷酸装置'}, {name: '净化磷酸装置'}, {name: '公用工程'}]
			}
		}
	}
</script>

<style>
</style>
