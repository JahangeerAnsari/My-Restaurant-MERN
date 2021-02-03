
import axios from 'axios'
import {api} from './urlConfig'
const AxiosInstance = axios.create({
    baseURL:api
})
export default AxiosInstance;