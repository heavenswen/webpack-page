/**
 * @file 用来管理通用的数据
 * 免去了底层取参的麻烦。
 * @author qiu(423822728@qq.com)
 */
'use strict'
import Vue from 'vue' //vue
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
//移动端检测
var mobile = !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/);

export default new Vuex.Store({
    strict: debug,
    //全局状态 不允许直接修改 app.$store.state
	state: {
		mobile, //判断
		//产品名称
		title: "DCUI",
		//用户名
		user: "DC-Qiu",
		path: null,
	},
    //计算属性
	getters: {

	},
    //事件 function(state,data) 调用 store.commit([name],data)
	mutations: {
        //当前路径
		setNowPath(state, value) {
			return (state.path = value)
		},
		setMark(state, value) {
			//设置数据加载 视图
			return (state.mark = value)
		}
	},
	actions: {
		//异步 提交 mutations 例function(content){context.commit('function')} 触发store.dispatch('function')
	}

})