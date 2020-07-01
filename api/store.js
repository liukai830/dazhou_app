import http from '../common/interface'

export const getStoreList = (paramArray) => {
    return http.post('Api/Machine/GetStorageList')
}

export default {
	getStoreList
}