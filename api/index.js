import http from '../common/interface'

const getPointStatus = () => {
	return http.post('Api/Machine/GetRealTimeDataList')
}

const getReports = () => {
	return []
}

export default {
	getPointStatus,
	getReports
}