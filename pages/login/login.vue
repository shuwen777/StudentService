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
				<navigator url="../localhost/localhost">登录</navigator>
				<!-- <button @click="gerenzhongxin">登录呀</button> -->
			</view>
			<view class="forgotBtn">
				<text>注册</text>
			</view>
		</view>
	</view>
		
</template>

<script>
	export default{
		onLoad() {
			
		},
		methods:{
			gerenzhongxin(){
				uni.switchTab({
					url:'../localhost/localhost'
				})
			}
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
</style>