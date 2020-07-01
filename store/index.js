import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)

const state = {
	currentUser: null,
	currentTechAlarmItem: null
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

// 导出store对象
export default store