<template>
	<div id="app">
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
		<FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
	</div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
	name: 'app',
	data () {
		return {
			data: {}
		}
	},
	components: {
		FooterGuide
	},
	created () {
		this.$store.dispatch('getAddress')
	}
}
</script>

<style lang="stylus">
#app
	width 100%
	height 100%
	background #f5f5f5
	position relative
</style>
