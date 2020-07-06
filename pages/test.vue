<template>
	<view>
		
		<u-card v-for="(item,index) in showList" :title="item.departMent" :sub-title="item.v5+' '+item.v12" :key="index">
			<view class="" slot="body">
				<view>
					<view><text space='ensp'>开始时间：{{item.date2}}  等级：<text style="color: red;">{{item.v7}}</text></text></view>
					<view><text space='ensp'>结束时间：{{item.date3}}  时长：{{item.uDF1}}</text></view>
				</view>
			</view>
		</u-card>
		
		<u-loadmore :status="status" />
		<u-back-top :scroll-top="scrollTop"></u-back-top>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				allList: null,
				showList: null,
				scrollTop: 0,
				status: 'loadmore',
				size: 20,
				page: 0
			}
		},
		onLoad() {
				this.loadData()
		},
		methods: {
			onPageScroll(e) {
				this.scrollTop = e.scrollTop;
			},
			loadData() {
				const result = [];
				for(let i=1;i<=100;i++) {
					result.push({
						departMent: '第'+i+'个元素',
						v5: '石膏再浆槽出口压力',
						v12: '上限报警',
						date2: '2020-07-01 13:54:11',
						date3: '2020-07-03 13:54:11',
						v7: 'A级',
						uDF1: '584小时'
					})
				}
				
				
				this.allList = result
				this.showList = this.allList.slice(0,this.size)
				if(this.allList.length < this.size) {
					this.status = 'nomore';
				}
			},
			onReachBottom() {
				let start = (this.page+1)*this.size;
				let end = (this.page+2)*this.size;
				if(start > this.allList.length) {
					return
				}
				this.status = 'loading';
				this.page = ++ this.page;
				this.showList = this.showList.concat(this.allList.slice(start,end))
				if(end > this.allList.length) {
					this.status = 'nomore';
				} else {
					this.status = 'loadmore';
				}
				// setTimeout(() => {
					
				// }, 1000)
			}
		}
	}
</script>

<style>
</style>
