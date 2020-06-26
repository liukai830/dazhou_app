import http from '../common/interface'

export const login = (params) => {
    return http.post('base/userQuery/v1',params)
}

// 默认全部导出  import api from '@/common/http.api.js'
export default {
	login
}