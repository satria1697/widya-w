import {LoginRequest, LogoutRequest, RegisterRequest} from "../entities/request/auth";
import {ApiService} from "../service/ApiService";
import {IResponse} from "../entities/Response";

export const login = async (payload: LoginRequest) => {
    let result = null
    try {
        const res = await ApiService().post<IResponse<any>>(`auth/login/`, payload)
        result = res.data.message === 'success'
    } catch (e) {
        console.log(e)
    }
    return result
}

export const logout = async (payload: LogoutRequest) => {
    let result = null
    try {
        const res = await ApiService().post<IResponse<any>>(`auth/logout/`, payload)
        result = res.data.message === 'success'
    } catch (e) {
        console.log(e)
    }
    return result
}

export const register = async (payload: RegisterRequest) => {
    let result = null
    try {
        const res = await ApiService().post<IResponse<any>>(`auth/register/`, payload)
        result = res.data.message === 'success'
    } catch (e) {
        console.log(e)
    }
    return result
}
