<template>
	<view>
		<view class="iconfont" :style="[menuStyle]">{{icon}}</view>
		<view class="grid-text">{{menuName}}</view>
	</view>
</template>

<script>
	export default {
		props: {
			menuName: String,
			icon: String,
			color: {
				type: String,
				default: '#55aaff'
			},
			size: {
				type: [String, Number],
				default: '66'
			}
		},
		computed: {
			menuStyle() {
				let style = {};
				style.color = this.color;
				style.fontSize = this.size + 'rpx';
				return style;
			}
		}
	}
</script>

<style>
</style>
