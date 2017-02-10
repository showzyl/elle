'use strict'

import store from './q.store'

export default {

	toggleCollect(data, cb) {
		// product_id
		const me = this;
		if (data.is_wish) {
			data.route = 'mapi/wishlist/delete';
		} else {
			data.route = 'mapi/wishlist/add';
		}
		data.format = 'jsonp';
		this.$http.jsonp(
			window.q.interfaceHost + 'index.php?',
			{
				params: data
			}).then(res => {
			//console.log(res)
			let data = res.body;
			if (data.code + '' === '0') {
				cb && cb(data);
			} else {
				// 无数据
				cb && cb('no data');
			}
		}, err => {
			cb && cb('err');
		})
	},

	isLogin(){
		if (store.get('customer_id') && store.get('mobile_token')) {
			return true;
		} else {
			return false;
		}
	},

	getEl(el, tagName) {
		return document.querySelector(el);
		// # id . class tag
		// var first = el.substr(0, 1);
		// console.log(first);

		// if (first === '#') {
		//   return document.getElementById(el.substr(1, el.length))
		// }

		// if (first === '.') {
		//   return document.getElementsByClassName(el.substr(1, el.length))
		// }
	},

	rmEl(el) {
		const oParent = el.parentNode;
		if (oParent) {
			oParent.removeChild(el);
		}
	},

	// 判断页面滚动方向 (有问题)
	scrollFunc() {
		let scrollAction = {x: 0, y: 0}, scrollDirection;
		var diffX = scrollAction.x - window.pageXOffset;
		var diffY = scrollAction.y - window.pageYOffset;
		//console.log(diffX, diffY)
		if (diffX < 0) {
			// Scroll right
			scrollDirection = 'right';
		} else if (diffX > 0) {
			// Scroll left
			scrollDirection = 'left';
		} else if (diffY < 0) {
			// Scroll down
			scrollDirection = 'down';
		} else if (diffY > 0) {
			// Scroll up
			scrollDirection = 'up';
		} else {
			// First scroll event
			//console.log(11111)
			scrollDirection = '';
		}
		scrollAction.x = window.pageXOffset;
		scrollAction.y = window.pageYOffset;
		//console.log(scrollAction, scrollDirection)
		return scrollDirection;
	},

	// 文档高度
	getDocumentTop() {
		var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
		if (document.body) {
			bodyScrollTop = document.body.scrollTop;
		}
		if (document.documentElement) {
			documentScrollTop = document.documentElement.scrollTop;
		}
		scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
		return scrollTop;
	},

	// 可视窗口高度
	getWindowHeight() {
		var windowHeight = 0;
		if (document.compatMode == "CSS1Compat") {
			windowHeight = document.documentElement.clientHeight;
		} else {
			windowHeight = document.body.clientHeight;
		}
		return windowHeight;
	},

	// 滚动条滚动高度
	getScrollHeight() {
		var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
		if (document.body) {
			bodyScrollHeight = document.body.scrollHeight;
		}
		if (document.documentElement) {
			documentScrollHeight = document.documentElement.scrollHeight;
		}
		scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
		return scrollHeight;
	},

	// 隐藏显示头部  
	scrollToggleCommonNav(beforeFn, el){
		var beforeScrollTop = document.body.scrollTop;
		window.onscroll = () => {
			let bGoon = beforeFn();
			if (!bGoon) return;
			var afterScrollTop = document.body.scrollTop,
				delta = afterScrollTop - beforeScrollTop;
			if (delta === 0) {
				return false;
			}
			let el = el || this.getEl('.commonNav');
			if (delta > 0) {
				// 向上
				el.style.display = "none";
				el.style.top = '2rem';
			} else {
				el.style.display = "block";
				el.style.top = 0;
			}
			if (afterScrollTop === 0) {
				el.style.top = '2rem';
			}
			beforeScrollTop = afterScrollTop;
		}
	},

	// 请求接口 统一封装
	fetchInterface(me, code, data, cb){
		data.format = 'jsonp';
		me.$http.jsonp(
			window.q.interfaceHost + 'index.php',
			{
				params: data
			}
		).then(res => {
			let data = res.body;
			if ((code === 0) && (data.code + '' === '0')) {
				cb && cb(data.data, data.code);
			} else {
				cb && cb('notMatch');
			}
		}, err => {
			cb && cb('error');
		})
	},

	isAndroid(){
		return /android/i.test(navigator.userAgent);
	},

	//判断是否为ipad平台
	isIpad(){
		return /ipad/i.test(navigator.userAgent);
	},

	//判断是否为iphone平台
	isIphone(){
		return /iphone/i.test(navigator.userAgent);
	},

	//判断是否为微信平台
	isWeixin(){
		return /MicroMessenger/i.test(navigator.userAgent);
	},

	//判断是否为微信平台
	isWeiBo(){
		return /WeiBo/i.test(navigator.userAgent);
	},

	download(){
		// 只有微博下的ios提示浏览器打开
		if ( (this.isIphone() && this.isWeiBo() ) || (this.isIpad() && this.isWeiBo() )) {
			//显示在浏览器打开
			this.getEl('#iphoneTip').className = 'iphone-tip';
			return;
		}
		location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=cn.com.elleshop';
	}

}

