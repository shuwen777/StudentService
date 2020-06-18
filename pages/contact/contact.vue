<template>
	<view class="world" @click="box1">
		<image  class="ball" :style="'left:'+(moveX == 0 & x>0? x+'%':moveX+'px')+';top:'+(moveY == 0 & y>0? y+'%':moveY+'px')"	 
				@touchstart="drag_start" @touchmove.prevent="drag_hmove" :src="image"  mode="aspectFit">
		</image>
		
			<view class="world_item">
				<image src="../../static/user/yanglin.jpg" mode=""></image>
				<view class="right">
					<view class="name">
						杨林
					</view>
					<view class="time">
						<text>6月17日</text>
					</view>
				</view>
			</view>
			<view class="down">
				<view class="down1">
					今天心情很好，弄个帅气的自拍照，我很喜欢，你会喜欢我吗？难受~
				</view>
					<image src="../../static/user/yanglin.jpg" mode="img1"></image>
			</view>
			
			<view class="world">
				<view class="world_item">
					<image src="../../static/user/yanglin.jpg" mode=""></image>
					<view class="right">
						<view class="name">
							杨林
						</view>
						<view class="time">
							<text>6月17日</text>
						</view>
					</view>
				</view>
				<view class="down">
					<view class="down1">
						今天心情很好，弄个帅气的自拍照，我很喜欢，你会喜欢我吗？难受~
					</view>
						<image src="../../static/user/yanglin.jpg" mode="img1"></image>
				</view>
			</view>
			
	</view>
</template>
<script>
	export default {
		props: {
			x: {
				type: Number,
				default:80
			},
			y: {
				type: Number,
				default:80
			},
			image:{
				type:String,
				default: ''
			}
		},
		data() {
			return {
				start:[0,0],
				moveY:0,
				moveX:0,
				windowWidth:'',
				windowHeight:'',
			}
		},
		mounted() {
			const { windowWidth, windowHeight } = uni.getSystemInfoSync();	
			this.windowWidth = windowWidth
			this.windowHeight = windowHeight
		},
		methods: {
			drag_start(event){
				this.start[0]= event.touches[0].clientX-event.target.offsetLeft;
				this.start[1]= event.touches[0].clientY-event.target.offsetTop;
			},
			box1(){
				uni.navigateTo({
					url:'../contact_uploading/contact_uploading'
				})
			},
			drag_hmove(event){
					let	 tag 	 = event.touches;
					if(tag[0].clientX < 0 ){
						tag[0].clientX = 0
					}
					if(tag[0].clientY < 0 ){
						tag[0].clientY = 0
					}
					if(tag[0].clientX > this.windowWidth ){
						tag[0].clientX = this.windowWidth
					}
					if(tag[0].clientY > this.windowHeight ){
						tag[0].clientY = this.windowHeight
					}
					this.moveX	 = tag[0].clientX-this.start[0];
					this.moveY	 = tag[0].clientY-this.start[1];
			}
		}}
</script>
 
<style lang="scss">
	.world{
		border-bottom: 1px solid $shop-color;
		.world_item{
			display: flex;
			padding: 10rpx 20rpx;
			border-bottom: 1px;
			image{
				min-width: 100rpx;
				max-width: 100rpx;
				height: 75rpx;
				}
				.right{
					margin-left: 15rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.naem{
						font-size: 33rpx;
					}
					.time{
						font-size: 20rpx;
					}
				}
			}
			.down{
				.down1{
					
					font-size: 25rpx;
				}
				image{
					margin-left: 10rpx;
					height: 500rpx;
					width: 400rpx;
				}
			}
	}
	.ball{
		width: 70upx;height: 70upx;
		background:linear-gradient(to bottom, #F8F8FF,#87CEFA);
		border-radius: 50%;
		box-shadow: 0 0 15upx #87CEFA;
		color: #fff;
		font-size: 30upx;
		display: flex;justify-content: center;align-items: center;
		position: fixed !important;
		z-index: 1000000;
	}
</style>
//源码
<!-- <template>
	<view class="world">
		<view class="world_item">
			<image src="../../static/user/yanglin.jpg" mode=""></image>
			<view class="right">
				<view class="name">
					杨林
				</view>
				<view class="time">
					<text>6月17日</text>
				</view>
			</view>
		</view>
		<view class="down">
			<view class="down1">
				今天心情很好，弄个帅气的自拍照，我很喜欢，你会喜欢我吗？难受~
			</view>
				<image src="../../static/user/yanglin.jpg" mode="img1"></image>
		</view>
		
		<view class="world">
			<view class="world_item">
				<image src="../../static/user/yanglin.jpg" mode=""></image>
				<view class="right">
					<view class="name">
						杨林
					</view>
					<view class="time">
						<text>6月17日</text>
					</view>
				</view>
			</view>
			<view class="down">
				<view class="down1">
					今天心情很好，弄个帅气的自拍照，我很喜欢，你会喜欢我吗？难受~
				</view>
					<image src="../../static/user/yanglin.jpg" mode="img1"></image>
			</view>
		</view>
		
		
			
	</view>
</template>

<script>
	
</script>

<style lang="scss">
	.world{
		border-bottom: 1px solid $shop-color;
		.world_item{
			display: flex;
			padding: 10rpx 20rpx;
			border-bottom: 1px;
			image{
				min-width: 100rpx;
				max-width: 100rpx;
				height: 75rpx;
				}
				.right{
					margin-left: 15rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					.naem{
						font-size: 33rpx;
					}
					.time{
						font-size: 20rpx;
					}
				}
			}
			.down{
				.down1{
					
					font-size: 25rpx;
				}
				image{
					margin-left: 10rpx;
					height: 500rpx;
					width: 400rpx;
				}
			}
		}
</style> -->
