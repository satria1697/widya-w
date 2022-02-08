import axios, {AxiosRequestConfig} from "axios";

export const ApiService = () => {
    const options: AxiosRequestConfig = {
        baseURL: 'http://localhost:5000'
    }

    return axios.create(options);
}
