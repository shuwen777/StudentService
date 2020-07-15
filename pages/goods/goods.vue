<template>
	<view class="goods">
		<view class="list" v-for="(item,index) in goods" :key="index">
			<view class="cover">
				<image :src="item.ImgUrl"></image>
			</view>
			<view class="text">
				<view class="cart" @click="add(item)">
				</view>
				<view class="">
					<text class="name">{{item.Name}}</text>
					<text class="price">{{item.Price}}</text>
					<text class="size">元{{item.Size}}个</text>
				</view>
				<view class="des">
					<text>{{item.title}}</text>
				</view>
			</view>
		</view>	
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goods:[],

			}
		},
		onShow() {
			uni.showTabBar();
			// #ifdef  MP-WEIXIN
			uni.request({
				url: 'http://localhost:3000/index', //仅为示例，并非真实接口地址。
				method:"GET",
					success: (res) => {
						this.goods = res.data.goods;
						this.$store.state.goods = this.goods;
					}
			});
			console.log("wx");
			// #endif
			
			// #ifdef  H5
			uni.request({
				url: '/doc/index', //仅为示例，并非真实接口地址。
				method:"GET",
					success: (res) => {
						this.goods = res.data.goods;
						this.$store.state.goods = this.goods;
					}
			});
			console.log("h5");
			// #endif
			
		},
		methods: {
			toPath (goods){
				uni.navigateTo({
					url: "../detail/detail?goods="+goods
				})
			},
			add(item){
				this.$store.commit("add",item);
			}
		}
	}
</script>

<style lang="scss">
.goods{
	width: 90%;
	border-top: 1px solid #b2b2b2;
	margin-top: 20rpx;
	margin-left: 15px;
	.list{
		// border: 1px solid red;
		margin: 50rpx 0;
		box-shadow: 0 4px 4px 0 #BBB;
		border-radius:4px;
		.cover{
			width: 100%;
			height: 198*2rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
		.text{
			padding: 20px 0 0 10rpx;
			.cart{
				width: 60rpx;
				height: 60rpx;
				float: right;
				margin-top: 20rpx;
				margin-right: 20rpx;
				border-radius: 30%;
				box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.10);
				background:url(../../static/20.png) no-repeat;
				background-size:55rpx ;
			}
			.name{
				font-weight: bold;
				font-size: 15px;
				color: #322418;
			}
			.price{
				color: #C69C6D;
				margin-left: 10px;
			}
			.size{
				color: #b2b2b2;
			}
			.des{
				color: #442818;
			}
		}
	}
}
</style>
