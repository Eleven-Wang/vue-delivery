export default {
	totalCount (state) {
		return state.shopCart.reduce((preToal, food) => {
			return preToal + food.count
		}, 0)
	},
	totalPrice (state) {
		return state.shopCart.reduce((preToal, food) => {
			return preToal + food.count * food.price
		}, 0)
	},
	totalOldPrice (state) {
		return state.shopCart.reduce((preToal, food) => {
			return preToal + food.count * (food.oldPrice ? food.oldPrice : food.price)
		}, 0)
	}
}
