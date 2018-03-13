/**
 * @file 用来管理通用的数据,免去了底层上层取参的麻烦。
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
		todos: [
			{ id: 1, text: '...', done: true },
			{ id: 2, text: '...', done: false }
		]
	},
	//计算属性(对状态的处理) 会暴露为 $store.getters[name] 对象,派生出一些状态
	getters: {
		doneTodos: state => {
			return state.todos.filter(todo => todo.done)
		},
		// Getter 也可以接受其他 getter 作为第二个参数：
		doneTodosCount: (state, getters) => {
			return getters.doneTodos.length
		}
	},
	//事件 function(state,data) 调用 this.$store.commit([name],data)
	mutations: {
		//当前路径
		setNowPath(state, value) {
			state.path = value
		},
		setTitle(state, value) {
			state.title = value
		}

	},
	actions: {
		//异步 提交 mutations 例function(content){context.commit('function')} 触发store.dispatch('function')
		
	}

})