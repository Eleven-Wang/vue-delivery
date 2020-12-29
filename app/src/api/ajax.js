/*
	ajax请求封装函数
	返回值： promise对象（异步返回的数据是： response.data
*/

import axios from 'axios'

// export default function ajax (url = '', data = {}, type = 'GET') {
// 	return new Promise(function (resolve, reject) {
// 		let promise
// 		if (type === 'GET') {
// 			let str = ''
// 			Object.keys(data).forEach(key => {
// 				str += key + '=' + data[key] + '&'
// 			})
// 			if (str) {
// 				str = str.substring(0, str.lastIndexOf('&'))
// 				str = '?' + str
// 			}
// 			promise = axios.get(url)
// 		} else {
// 			promise = axios.post(url, data)
// 		}
// 		promise.then(response => {
// 			resolve(response.data)
// 		}).catch(err => {
// 			reject(err)
// 		})
// 	})
// }

export default function ajax (url = '', data = {}, type = 'GET') {
	return new Promise(function (resolve, reject) {
		let promise
		if (type === 'GET') {
			let str = ''
			Object.keys(data).forEach(key => {
				str += key + '=' + encodeURI(data[key]) + '&'
			})
			if (str) {
				str = str.substring(0, str.lastIndexOf('&'))
				url += '?' + str
			}
			promise = axios.get(url)
		} else {
			promise = axios.post(url, data)
		}
		promise.then(res => {
			resolve(res.data)
		}).catch(err => {
			reject(err)
		})
	})
}
