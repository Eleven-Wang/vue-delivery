<template>
	<div class="msite">
		<!--首页头部-->
		<headerTop :title="address.name">
			<router-link slot="search" :to="{name: 'search'}" class="header_search">
				<i class="iconfont icon-sousuo"></i>
			</router-link>
			<router-link slot="login" :to="{name: 'login'}" class="header_login">
				<span class="header_login_text">登录|注册</span>
			</router-link>
		</headerTop>
		<!-- <header class="msite_header">
			<span class="header_search">
				<i class="iconfont icon-sousuo"></i>
			</span>
			<span class="header_title">
				<span class="header_title_text ellipsis">昌平区北七家宏福科技园(337省道北)</span>
			</span>
			<span class="header_login">
				<span class="header_login_text">登录|注册</span>
			</span>
		</header> -->
		<!--首页导航-->
		<nav class="msite_nav">
			<div class="swiper-container" v-if="categorysArr.length">
				<div class="swiper-wrapper">
					<div v-for="(smallArr, index) in categorysArr" :key="index" class="swiper-slide">
						<a v-for="(category, index2) in smallArr" :key="index2" href="javascript:;" class="link_to_food">
							<div class="food_container">
								<img :src="imgBaseUrl + category.image_url">
							</div>
							<span>{{category.title}}</span>
						</a>
					</div>
				</div>
				<!-- Add Pagination -->
				<div class="swiper-pagination"></div>
			</div>
		</nav>
		<!--首页附近商家-->
		<div class="msite_shop_list">
			<div class="shop_header">
				<i class="iconfont icon-xuanxiang"></i>
				<span class="shop_header_title">附近商家</span>
			</div>
			<ShopList/>
		</div>
	</div>
</template>

<script>
import Swiper from 'swiper'
import { mapState } from 'vuex'
import 'swiper/css/swiper.css'
import ShopList from '../../components/ShopList/ShopList.vue'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
	// mounted () {
	// 	const mySwiper = new Swiper('.swiper-container', {
	// 		loop: true,
	// 		pagination: {
	// 			el: '.swiper-pagination'
	// 		}
	// 	})
	// 	//此时可能数据还没有拿到，所以会出现swiper不起作用的情况
	// 	console.log(this.$store.categorys)
	// 	console.log(mySwiper)
	// },
	name: 'msite',
	data () {
		return {
			shops: [
				{
					name: 'hello'
				}
			],
			imgBaseUrl: 'https://fuss10.elemecdn.com'
		}
	},
	computed: {
		...mapState(['address', 'categorys']),
		categorysArr () {
			const max = 8
			const arr = []
			const { categorys } = this
			let smallArr = []
			categorys.forEach((el, index) => {
				smallArr.push(el)
				if (smallArr.length === max) {
					arr.push(smallArr)
					smallArr = []
				}
			})
			return arr
		}
	},
	components: {
		HeaderTop,
		ShopList
	},
	created () {
		this.$store.dispatch('getCategorys')
		this.$store.dispatch('getShops')
	},
	watch: {
		categorys () {
			this.$nextTick(() => {
				const newSwiper = new Swiper('.swiper-container', {
					loop: true,
					pagination: {
						el: '.swiper-pagination'
					}
				})
				// 数据得到后视图更新好，一定拿到div节点数据的时候，swiper一定工作
				// console.log(this.$store.state.categorys)
				console.log(newSwiper)
			})
		}
	}
}
</script>

<style lang="stylus" >

.msite  //首页
	width 100%
	.header
		background-color #02a774
		position fixed
		z-index 100
		left 0
		top 0
		width 100%
		height 45px
		.header_search
			position absolute
			left 15px
			top 50%
			transform translateY(-50%)
			width 10%
			height 50%
			.iconfont
				font-size 22px
				color #fff
		.header_title
			position absolute
			top 50%
			left 50%
			transform translate(-50%, -50%)
			width 50%
			color #fff
			font-size 22px
			text-align center
	.msite_nav
		bottom-border-1px(#e4e4e4)
		padding-top 45px
		height 200px
		background #fff
		.swiper-container
			width 100%
			height 100%
			.swiper-wrapper
				width 100%
				height 100%
				.swiper-slide
					display flex
					justify-content center
					align-items flex-start
					flex-wrap wrap
					.link_to_food
						width 25%
						.food_container
							display block
							width 100%
							text-align center
							padding-bottom 10px
							font-size 0
							img
								display inline-block
								width 50px
								height 50px
						span
							display block
							width 100%
							text-align center
							font-size 13px
							color #666
			.swiper-pagination
				>span.swiper-pagination-bullet-active
					background #02a774
	.msite_shop_list
		top-border-1px(#e4e4e4)
		margin-top 10px
		background #fff
		.shop_header
			padding 10px 10px 0
			.shop_icon
				margin-left 5px
				color #999
			.shop_header_title
				color #999
				font-size 14px
				line-height 20px
</style>
