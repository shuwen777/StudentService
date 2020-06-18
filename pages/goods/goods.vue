<template>
	<view class="goods_list">
		<goods-list :goods="goods"></goods-list>
		<view class="isOver" v-if="flag">-----我是有底线的-----</view>
	</view>
</template>

<script>
	import goodsList from'../../components/goods-list/goods-list.vue'
	export default {
		data() {
			return {
				pageindex:1,
				goods:[],
				flag:false
			}
		},
		components:{"goods-list":goodsList},
		methods: {
			//获取商品列表的数据
			async getGoodList(callBack) {
				const res = await this.$myRuquest({
					url:'/api/getgoods?pageindex='+this.pageindex
				})
				this.goods = [...this.goods,...res.data.message]
				callBack && callBack()
			}
		},
		onLoad() {
			this.getGoodList()
		},
		onReachBottom() {
			console.log(this.goods.length)
			if(this.goods.length<this.pageindex*10) return this.flag = true
			console.log('好机会')
			this.pageindex++
			this.getGoodList()
		},
		onPullDownRefresh() {
			console.log('可以吗')
			this.pageindex=1
			this.goods = []
			this.flag = false
			setTimeout(()=>{
				this.getGoodList(()=>{
					uni.stopPullDownRefresh()
				})
			},1000)
		}
	}
</script>

<style lang="scss">
	.goods_list{
		background: #eee;
	}
	.isOver{
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		// background: #fff;
		font-size: 28rpx;
	}
</style>
