<template>
	<div class="footer_guide border-1px">
		<div class="guide_item" @click="goto('/')" :class="{on:isCurrent('/')}">
			<span class="item_icon">
				<i class="iconfont icon-waimai"></i>
			</span>
			<span>外卖</span>
		</div>
		<div class="guide_item" @click="goto('/search')" :class="{on:isCurrent('/search')}">
			<span class="item_icon">
				<i class="iconfont icon-search"></i>
			</span>
			<span>搜索</span>
		</div>
		<div class="guide_item" @click="goto({name:'order'})" :class="{on:isCurrent('/order')}">
			<span class="item_icon">
				<i class="iconfont icon-dingdan"></i>
			</span>
			<span>订单</span>
		</div>
		<div class="guide_item" @click="goto({name:'profile'})" :class="{on:isCurrent('/profile')}">
			<span class="item_icon">
				<i class="iconfont icon-geren"></i>
			</span>
			<span>我的</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'footer-guide',
	data () {
		return {
		}
	},
	methods: {
		goto (path) {
			this.$router.replace(path).catch(err => { console.log(err) })
		},
		isCurrent (path) {
			return this.$route.path === path
		}
	}
}
</script>

<style lang="stylus" >
	@import "../../common/stylus/mixins.styl"
	.footer_guide  //footer
		top-border-1px(#e4e4e4)
		position fixed
		z-index 100
		left 0
		right 0
		bottom 0
		background-color #fff
		width 100%
		height 50px
		display flex
		.guide_item
			display flex
			flex 1
			text-align center
			flex-direction column
			align-items center
			margin 5px
			color #999999
			&.on
				color #02a774
			span
				font-size 12px
				margin-top 2px
				margin-bottom 2px
				.iconfont
					font-size 22px
</style>
