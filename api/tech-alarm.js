import http from '../common/interface'

/* 查询工艺报警信息（单个角色） */
export const getSingleRoleTechAlarmList = (param) => {
    return http.post('Api/Machine/GetTechnologicalProcessList', param)
}

/* 查询工艺报警信息（多个角色） */
export const getMultiRoleTechAlarmList = (paramArray) => {
		const promises = paramArray.map(param => http.post('Api/Machine/GetTechnologicalProcessList',param))
		return Promise.all(promises)
}

/* 处理工艺报警信息 */
export const handleTechAlarm = (param) => {
	return http.post('Api/Machine/HandleProcess', param)
}

export default {
	getSingleRoleTechAlarmList,
	getMultiRoleTechAlarmList,
	handleTechAlarm
}