import axios, {AxiosRequestConfig} from "axios";

export const ApiService = () => {
    const options: AxiosRequestConfig = {
        baseURL: 'http://localhost:5000',
        headers: {
            "x-header": "jwt",
        }
    }

    return axios.create(options);
}
