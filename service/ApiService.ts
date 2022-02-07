import axios, {AxiosRequestConfig} from "axios";

export const ApiService = () => {
    const options: AxiosRequestConfig = {
        baseURL: 'https://fakestoreapi.com'
    }

    return axios.create(options);
}
