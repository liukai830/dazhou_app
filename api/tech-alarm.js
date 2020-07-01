import http from '../common/interface'

export const getSingleRoleTechAlarmList = (param) => {
    return http.post('Api/Machine/GetTechnologicalProcessList', param)
}

export const getMultiRoleTechAlarmList = (paramArray) => {
		const promises = paramArray.map(param => http.post('Api/Machine/GetTechnologicalProcessList',param))
		return Promise.all(promises)
}

export default {
	getSingleRoleTechAlarmList,
	getMultiRoleTechAlarmList
}