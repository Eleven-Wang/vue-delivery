import Vue from 'vue'
import router from './router'
import App from './App'
import './common/css/reset.css'
import store from './store'
import './mock/mockServer.js'

export default new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
})
