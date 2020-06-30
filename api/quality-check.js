import http from '../common/interface'

export const getQaCheckList = params => {
	 return http.post('Api/Machine/GetSampleRecordList', params)
}

export default {
	getQaCheckList
}