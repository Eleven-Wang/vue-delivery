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
import Vue from 'vue'

export default {
	[RECEIVE_ADDRESS] (state, { address }) {
		state.address = address
	},
	[RECEIVE_CATEGORYS] (state, { categorys }) {
		state.categorys = categorys
	},
	[RECEIVE_SHOPS] (state, { shops }) {
		state.shops = shops
	},
	[RECEIVE_USER_INFO] (state, { userInfo }) {
		state.userInfo = userInfo
	},
	[RECEIVE_SHOP_GOODS] (state, { goods }) {
		state.goods = goods
	},
	[RECEIVE_SHOP_RATINGS] (state, { ratings }) {
		state.ratings = ratings
	},
	[RECEIVE_SHOP_INFO] (state, { info }) {
		state.info = info
	},
	[DECREMENT_FOOD_COUNT] (state, { food }) {
		if (food.count) {
			food.count--
			if (food.count === 0) {
				state.shopCart.splice(state.shopCart.indexOf(food), 1)
			}
		}
	},
	[INCREMENT_FOOD_COUNT] (state, { food }) {
		if (!food.count) {
			Vue.set(food, 'count', 0)
			state.shopCart.push(food)
		}
		food.count++
		console.log(state.shopCart)
	},
	[CLEAR_CART] (state) {
		state.shopCart.forEach(food => {
			food.count = 0
		})
		state.shopCart = []
	},
	[RECEIVE_SEARCH_SHOPS] (state, { searchShops }) {
		state.searchShops = searchShops
	}
}
