import {
	RECEIVE_ADDRESS,
	RECEIVE_CATEGORYS,
	RECEIVE_SHOPS,
	RECEIVE_USER_INFO,
	RECEIVE_SHOP_GOODS,
	RECEIVE_SHOP_RATINGS,
	RECEIVE_SHOP_INFO,
	DECREMENT_FOOD_COUNT,
	INCREMENT_FOOD_COUNT,
	CLEAR_CART,
	RECEIVE_SEARCH_SHOPS
} from './mutation-types.js'
import {
	reqAddress,
	reqFoodTypes,
	reqShops,
	reqUserInfo,
	reqShopGoods,
	reqShopRatings,
	reqShopInfo,
	reqSearchShops
} from '../api/index.js'

export default {
	async getAddress ({ commit, state }) {
		const geohash = state.latitude + ',' + state.longitude
		const result = await reqAddress(geohash)
		commit(RECEIVE_ADDRESS, { address: result.data })
	},
	async getCategorys ({ commit }) {
		const result = await reqFoodTypes()
		commit(RECEIVE_CATEGORYS, { categorys: result.data })
	},
	async getShops ({ commit, state }) {
		const result = await reqShops(state.latitude, state.longitude)
		commit(RECEIVE_SHOPS, { shops: result.data })
	},
	async getUserInfo ({ commit }) {
		const result = await reqUserInfo()
		commit(RECEIVE_USER_INFO, { userInfo: result.data })
	},
	async getShopGoods ({ commit }) {
		const result = await reqShopGoods()
		commit(RECEIVE_SHOP_GOODS, { goods: result.data })
	},
	async getShopRatings ({ commit }) {
		const result = await reqShopRatings()
		commit(RECEIVE_SHOP_RATINGS, { ratings: result.data })
	},
	async getShopInfo ({ commit }) {
		const result = await reqShopInfo()
		commit(RECEIVE_SHOP_INFO, { info: result.data })
	},
	updateFoodCount ({ commit }, { food, isAdd }) {
		if (isAdd) {
			console.log('isAdd')
			commit(INCREMENT_FOOD_COUNT, { food })
		} else {
			commit(DECREMENT_FOOD_COUNT, { food })
		}
	},
	clearCart ({ commit }) {
		commit(CLEAR_CART)
	},
	async getSearchShops ({ commit, state }, keyword) {
		const geohash = state.latitude + ',' + state.longitude
		const result = await reqSearchShops(geohash, keyword)
		commit(RECEIVE_SEARCH_SHOPS, { searchShops: result.data })
	}
}
