<template>
	<view class="express">
		<image class="img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1592231272392&di=f6cdb7b7f4917bf110725d89970da0d5&imgtype=0&src=http%3A%2F%2Fimg.weimob.com%2Fstatic%2F9d%2Fb8%2Fdb%2Fimage%2F20140305%2F20140305113242_25530.jpg"></image>
	<view class="info">
		<view @click="phone">联系电话：176-2804-8040（点击拨打）</view>
		<view>联系地址:绵阳市XXXX</view>
		</view>
		<map class="map" :longitude="longitude" :scale="scale" :latitude="latitude" :markers="covers"></map>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				longitude:104.69373,
				latitude:31.498849,
				//地图的缩放级别
				scale:13,
				covers:[
					{
					longitude:104.69373,
					latitude:31.498849,
					iconPath:'../../static/school.png',
					width:60,
					height:60
					}
				]
			}
		},
		methods:{
			//调用电话
			phone(){
				uni.makePhoneCall({
					phoneNumber:'176-2804-8040'
				})
			}
		}
	}
</script>

<style lang="scss">
	.express{
		.img{
			width: 750rpx;
			height: 340rpx;
		}
		.info{
			padding: 10rpx 20rpx;
			font-size: 30rpx;
			line-height: 80rpx;
			border-bottom:1px solid #eee;
		}
		.map{
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
