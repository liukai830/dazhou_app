import http from '../common/interface'

const getPointStatus = () => {
	return [
					{name: '磷酸二铵', alarm: false},
					{name: 'PA浓缩B', alarm: false},
					{name: 'PPA反应', alarm: false},
					{name: 'PA反应过滤', alarm: false},
					{name: 'PA浓缩C', alarm: true},
					{name: 'PPA后处理', alarm: false},
					{name: 'PA浓缩A', alarm: false},
					{name: 'PPA预处理', alarm: false},
					{name: '公用工程', alarm: true}
				]
}

const getReports = () => {
	return []
}

export default {
	getPointStatus,
	getReports
}