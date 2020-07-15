<template>
	<view class="content">
		<view class="avatarWrapper">
			<view class="avatar">
				<image class="img" src="../../static/18.png" mode="widthFix"></image>
			</view>
		</view>
		<view class="form">
			<view class="inputWrapper">
				<input class="input" type="text" value=""  placeholder="账号"/>
			</view>
			<view class="inputWrapper">
				<input class="input" type="password" value=""  placeholder="密码"/>
			</view>
			<view class="loginBtn">
				<navigator url="../HM-PersonalCenter/HM-PersonalCenter">登录</navigator>
				<!-- <button @click="gerenzhongxin">登录呀</button> -->
			</view>
			<view class="forgotBtn">
				<text>注册</text>
			</view>
		</view>
		
		<view class="">
			<!-- #ifdef MP-WEIXIN -->
			<button class="weixin" size="mini" type="default" style="display:block;margin:10 auto" open-type="getUserInfo" @getuserinfo="getUserInfo">微信登录</button>
			<!-- #endif -->
		</view>
		
	</view>
		
</template>

<script>
	var _self,session_key, openid,pageOptions;
	var sign = require('../../commons/sign.js');
	export default{
		data(){
			return{
				
			};
		},
		methods:{
			getUserInfo:function(info){
			 info = info.mp.detail.userInfo;
			 var sign = uni.getStorageSync('sign');
				uni.request({
					url: _self.apiServer+'member&m=login',
					method: 'POST',
					 header: {'content-type' : "application/x-www-form-urlencoded"},
					data: {
						openid : openid,
						name   : info.nickName,
						face   : info.avatarUrl,
						sign   : sign
					},
					success: res => {
						res = res.data;
						    uni.showToast({title:"登录成功"});
						    uni.setStorageSync('SUID' , res.data.u_id + '');
						    uni.setStorageSync('SRAND', res.data.u_random + '');
						 	uni.setStorageSync('SNAME', res.data.u_name + '');
						    uni.setStorageSync('SFACE', res.data.u_face + '');
						     // 跳转
						    if(pageOptions.backtype == 1){
						    uni.redirectTo({url:pageOptions.backpage});
						    }else{
						     uni.switchTab({url:pageOptions.backpage});
						    }
					},
					fail: (e) => {
						console.log(e);
					}
				});
			}
		},
		onLoad:function(options){
			sign.sign(this.apiServer);
			pageOptions = options;
			_self = this;
			
			//微信
			// #ifdef MP-WEIXIN
			uni.login({
				success: function(res){
					uni.request({
						url: _self.apiServer+'member&m=codeToSession&code='+res.code,
						method:'GET',
						success: (res) => {
							session_key = res.data.session_key;
							openid      = res.data.openid;
						}
					});
				}
				
			});
			
			
			// #endif
			console.log(options);
			//app
			// #ifdef APP-PLUS
			uni.login({
				provider:'weixin',
				success: (res) => {
					uni.getUserInfo({
						success:function(info){	
							console.log(JSON.stringify(info));
							 var sign = uni.getStorageSync('sign');
							uni.request({
								url: _self.apiServer+'member&m=login',
								method: 'POST',
								 header: {'content-type' : "application/x-www-form-urlencoded"},
								data: {
									 openid : info.userInfo.openId,
									 name   : info.userInfo.nickName,
									 face   : info.userInfo.avatarUrl,
									 sign   : sign
								},
								success: res => {
									console.log(JSON.stringify(res));
									res = res.data;
									if(res.status == 'ok'){
										 uni.showToast({title:"登录成功"});
										 uni.setStorageSync('SUID' , res.data.u_id + '');
										 uni.setStorageSync('SRAND', res.data.u_random + '');
										  uni.setStorageSync('SNAME', res.data.u_name + '');
										 uni.setStorageSync('SFACE', res.data.u_face + '');
										// 跳转
										 if(options.backtype == 1){
										 uni.redirectTo({url:options.backpage});
										  }else{
										   uni.switchTab({url:options.backpage});
										 }
									}else{
										uni.showToast({title:res.data});
									}
								},
								fail: (res) => {
									console.log(res);
								},
								complete: () => {}
							});
						},
						fail:function(){
							uni.showToast({title:"微信登录授权失败",icon:"none"});
						}
					})
				},
				fail: () => {
					uni.showToast({title:"微信登录授权失败",icon:"none"});
				}
			})
			// #endif
		}
	}
</script>

<style>
	.content{
		background: #007AFF;
		width: 100vw;
		height: 100vh;
	}
	.avatarWrapper{
		height: 30vh;
		width: 100vw;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}
	.avatar{
		width: 300upx;
		height: 240upx;
		overflow: hidden;
	}
	.avatar .img{
		width: 100%;
	}
	.form{
		padding: 0 100upx;
		margin-top: 80px;
	}
	.inputWrapper{
		width: 100%;
		height: 80upx;
		background: #FFFFFF;
		border-radius: 20px;
		box-sizing: border-box;
		padding: 0 20px;
		margin-top: 25px;
	}
	.inputWrapper .input{
		width: 100%;
		height: 100%;
		text-align:center;
		font-size: 15px;
	}
	.loginBtn{
		width: 100%;
		height: 80upx;
		background: #77B3D7;
		border-radius: 50upx;
		margin-top: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.loginBtn .btnValue{
		color: white;
	}
	.forgotBtn{
		text-align: center;
		color: #EAF6F9;
		font-size: 15px;
		margin-top: 20px;
	}
	.weixin{
		margin-top: 40px;
	}
</style>