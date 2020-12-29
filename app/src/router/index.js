/*
	路由器对象模块
*/

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('../views/Msite/Msite'),
			meta: {
				showFooter: true
			}
		},
		{
			path: '/search',
			name: 'search',
			component: () => import('../views/Search/Search'),
			meta: {
				showFooter: true
			}
		},
		{
			path: '/order',
			name: 'order',
			component: () => import('../views/Order/Order'),
			meta: {
				showFooter: true
			}
		},
		{
			path: '/profile',
			name: 'profile',
			component: () => import('../views/Profile/Profile'),
			meta: {
				showFooter: true
			}
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('../views/Login/Login')
		},
		{
			path: '/shop',
			component: () => import('../views/Shop/Shop'),
			children: [
				{
					path: 'goods',
					name: 'shop_goods',
					component: () => import('../views/Shop/ShopGoods/ShopGoods.vue')
				},
				{
					path: 'ratings',
					name: 'shop_ratings',
					component: () => import('../views/Shop/ShopGoods/ShopRatings.vue')
				},
				{
					path: 'info',
					name: 'shop_info',
					component: () => import('../views/Shop/ShopGoods/ShopInfo.vue')
				}
			]
		}
	],
	scrollBehavior: () => ({ y: 0 })
})
export default router
