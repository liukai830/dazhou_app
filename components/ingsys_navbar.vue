<template>
	<view>
		<u-navbar back-text="返回" :title="title" :background="background">
		</u-navbar>
	</view>
</template>


<script>
	export default {
		props: {
			title: String
		},
		data() {
			return {
				background: {
					// 渐变色
					backgroundImage: 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
				}
			}
		}
	}

</script>

<style>
</style>
