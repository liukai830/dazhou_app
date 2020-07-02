<template>
	<view>
		<view v-if="content===''">
			<u-gap height="100" bg-color="#ffffff"></u-gap>
			<u-empty :text="'暂无'+reportName" mode="data"></u-empty>
		</view>
		<view v-else>
			<view class="uni-common-mt" style="background:#FFF; padding:20rpx;">
				<rich-text :nodes="content"></rich-text>
			</view>
		<!-- {{content}} -->
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			content: {
				type: String,
				default: ''
			},
			reportName: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style>
</style>
