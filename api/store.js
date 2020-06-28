import http from '../common/interface'

export const getStoreList = () => {
    return http.post('Api/Machine/GetStorageList')
}

export default {
	getStoreList
}