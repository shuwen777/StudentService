<!-- <template>
    <view>
        <view class="grace-header-cate">
            <scroll-view class="grace-tab-title grace-center" scroll-x="true" id="grace-tab-title">
                <view v-for="(cate, index) in categories" :key="index" :data-cateid="cate.cateId" :data-index="index" :class="[cateCurrentIndex == index ? 'grace-tab-current' : '']" @tap="tabChange">{{cate.name}}</view>
            </scroll-view>
        </view>
        <view style="height:50px;"></view>
        <!-- 文章内容区 -->
        <view class="grace-news-list">
            <block v-for="(item, index) in artList" :key="index">
                <!-- 一张图 -->
                <navigator v-if="item.art_content.length < 3" open-type="navigate" :url="'../info/info?artid='+item.art_id">
                    <view class="grace-news-list-img-news">
                        <view class="grace-news-list-title-main">{{item.art_title}}</view>
                        <view class="grace-news-list-img-big"><image :src="item.art_content[0]" mode="widthFix"></image></view>
                    </view>
                </navigator>
                <!-- 三张图 -->
                <navigator v-if="item.art_content.length >= 3" :url="'../info/info?artid='+item.art_id">
                    <view class="grace-news-list-img-news">
                        <view class="grace-news-list-title-main">{{item.art_title}}</view>
                        <view class="grace-news-list-imgs">
                            <view class="imgs"><image :src="item.art_content[0]" mode="widthFix"></image></view>
                            <view class="imgs"><image :src="item.art_content[1]" mode="widthFix"></image></view>
                            <view class="imgs"><image :src="item.art_content[2]" mode="widthFix"></image></view>
                        </view>
                    </view>
                </navigator>
            </block>
        </view> 
		   
    </view>
</template>
<script>
var _self, cate = 0, page = 1;
export default {
    data() {
        return {
            categories:[{cateId : 0, name : "全部"}],
            cateCurrentIndex : 0,
            artList:[]
        }
    },
	  onLoad() {
	        _self = this;
	        // 加载文章分类
	        uni.request({
	            url: this.apiServer+'category&m=index',
	            method: 'GET',
	            success: res => {
	                if(res.data.status == 'ok'){
	                    // 把数据格式整理为 picker 支持的格式 ['分类名', ...]
	                    var categories = res.data.data;
	                    for(var k in categories){
	                        _self.categories.push({cateId : k, name : categories[k]});
	                    }
	                    // 记录分类信息
	                    _self.catiesFromApi = categories;
	                }
	            }
	        });
			// this.getNewsList();
		 },
		 methods:{
			  getNewsList : function(){
				   uni.showLoading({'title':"加载中..."});
				              uni.request({
				                  url: this.apiServer + 'art&m=getList&cate='+cate+'&page='+page,
				                  method: 'GET',
				                  success: res => {
									  console.log(res);
									if(res.data.status == 'empty'){
										uni.showToast({
											title:"已经加载全部新闻",
											icon: "none"
										});
									}else if(res.data.status == 'ok'){
										//整理新闻信息  
									var newsList = res.data.data;
									for(var i = 0; i < newsList.length; i++){
										// 把图片分离出来
										var imgs = [];
										var content = newsList[i].art_content;
										content = JSON.parse(content);
										for(var ii = 0; ii < content.length; ii++){
											if(content[ii].type == 'image'){
												imgs.push(content[ii].content);
											}
										}
										newsList[i].art_content = imgs;
									}
									 _self.artList = _self.artList.concat(newsList);
									                        uni.hideLoading();
									                        page++;
						}
					 }
				 });
			  }
		 }
	}
</script> -->
//源码
<template>
	<view class="world">
		<image  @click="box1" class="ball" :style="'left:'+(moveX == 0 & x>0? x+'%':moveX+'px')+';top:'+(moveY == 0 & y>0? y+'%':moveY+'px')"	 
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
					url:'../message/message'
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