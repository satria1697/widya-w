import axios, {AxiosRequestConfig} from "axios";
import {getJwt} from "../utils/credential";

export const ApiService = () => {
    const options: AxiosRequestConfig = {
        baseURL: 'http://localhost:5000',
        headers: {
            'x-header': getJwt() ?? '',
        }
    }

    return axios.create(options);
}
