import http from '@/common/interface'

/* 查询待办事项（单个角色） */
/* {"roleGId":"42","userID":"system"} */
export const getSingleRoleTodoList = (param) => {
    return http.post('Api/Machine/GetToDoList', param)
}

/* 查询待办事项（多个角色） */
/* {"roleGId":"42","userID":"system"} */
export const getMultiRoleTodoList = (paramArray) => {
		const promises = paramArray.map(param => http.post('Api/Machine/GetToDoList',param))
		return Promise.all(promises)
}

/* 处理待办事项 */
export const handleTodoInfo = (param) => {
	return http.post('Api/Machine/HandleProcess', param)
}

export default {
	getSingleRoleTodoList,
	getMultiRoleTodoList,
	handleTodoInfo
}
