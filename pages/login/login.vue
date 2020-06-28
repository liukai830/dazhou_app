<template>
	<view class="zai-box">
		<image src="/static/imgs/zaizai-login/login.png" mode='aspectFit' class="zai-logo"></image>
		<view class="zai-title">LOGO区域</view>
		<view>
				<u-toast ref="uToast" />
			</view>
		<view class="zai-form">
			<input v-model="userId" class="zai-input" placeholder="请输入用户名" />
			<input v-model="password" class="zai-input" password placeholder="请输入密码"/>
			<view class="zai-label"></view>
			<button class="zai-btn" :clicked="isClicked" @click.native="startLogin()">立即登录</button>
		</view>
	</view>
</template>

<script>
	var _this;
	import api from '@/api/login.js'
	export default {
		data() {
			return {
				userId: '',
				password: '',
				isClicked: false
			}
		},
		mounted() {
			_this= this;
			// 自动登录
			this.isLogin();
		},
		methods: {
			isObjEmpty(obj) {
				for(var key in obj) {
					return false;
				}
				return true;
			},
			isLogin(){
				// 判断缓存中是否登录过，直接登录
				try {
					const value = uni.getStorageSync('currentUser');
					if (value && !_this.isObjEmpty(value)) {
						//有登录信息
						_this.$store.commit("setUserData",{currentUser:value}); //存入状态
						uni.reLaunch({
							url: '/pages/index/index',
						});
					}
				} catch (e) {
				}
			},
			startLogin() {
				if(this.isClicked){
					//判断是否加载中，避免重复点击请求
					return false;
				}
				
				if(this.userId.length == "") {
					this.$refs.uToast.show({
						title: '用户名不能为空',
						type: 'error', 
					})
					return;
				}
				if(this.password.length == "") {
					this.$refs.uToast.show({
						title: '密码不能为空',
						type: 'error', 
					})
					return;
				}
				_this.isClicked=true
				setTimeout(function(){
					_this.isClicked=false
				},3000)
				this.$refs.uToast.show({
					title: '登陆中',
					type: 'default'
				})	
				api.login({'userID':this.userId,'password':this.password}).then(res => {
					let resdata = res.data;
					if(!resdata.success) {
						uni.showToast({
							icon: 'none',
							position: 'bottom',
							title: resdata.msg || '接口异常'
						});
						return
					}
					if(!resdata.data || resdata.data.length===0) {
						this.$refs.uToast.show({
							title: '用户名或密码错误',
							type: 'error', 
						})
						return;
					}
					debugger
					let userdata = {
						"userId": resdata.data[0].userID,
						"userName": resdata.data[0].userName,
						"roles": resdata.data[0].roles,
						"rolenames": resdata.data[0].rolenames
					}
					_this.$store.dispatch("setUserDataAsync",{currentUser:userdata}); //存入状态
					try {
						uni.setStorageSync('currentUser', userdata); //存入缓存
					} catch (e)  {
					}
					this.$refs.uToast.show({
						title: '登录成功',
						type: 'success', 
						url: '/pages/index/index',
						duration: 500,
						isTab: false
					})			
				})		
			}
		}
	}
</script>

<style>
	.zai-box{
		padding: 0 100upx;
		position: relative;
	}
	.zai-logo{
		width: 100%;
		width: 100%;
		height: 310upx;
	}
	.zai-title{
		position: absolute;
		top: 0;
		line-height: 360upx;
		font-size: 68upx;
		color: #fff;
		text-align: center;
		width: 100%;
		margin-left: -100upx;
	}
	.zai-form{
		margin-top: 300upx;
	}
	.zai-input{
		background: #e2f5fc;
		margin-top: 30upx;
		border-radius: 100upx;
		padding: 20upx 40upx;
		font-size: 36upx;
	}
	.input-placeholder, .zai-input{
		color: #94afce;
	}
	.zai-label{
		padding: 60upx 0;
		text-align: center;
		font-size: 30upx;
		color: #a7b6d0;
	}
	.zai-btn{
		background: #ff65a3;
		color: #fff;
		border: 0;
		border-radius: 100upx;
		font-size: 36upx;
	}
	.zai-btn:after{
		border: 0;
	}
	/*按钮点击效果*/
	.zai-btn.button-hover{
		transform: translate(1upx, 1upx);
	}
</style>
