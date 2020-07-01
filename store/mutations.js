const mutations = {
	setUserData(state, payload) {
		state.currentUser = payload.currentUser
	},
	
	setAlarmTechItem(state, payload) {
		state.currentTechAlarmItem = payload.item
	}
}

export default mutations