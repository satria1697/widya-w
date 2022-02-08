import {ApiService} from "../service/ApiService";
import {Product} from "../entities/Product";
import {IResponse} from "../entities/Response";
import {ProductEditRequest} from "../entities/request/product";

export const getAllProducts = async () => {
    let result: Array<Product> = []
    try {
        const res = await ApiService().get<IResponse<Array<Product>>>('product')
        result = res.data.data
    } catch (e) {
        console.log(e)
    }
    return result
}

export const getOneProduct = async (id: number) => {
    let result = null
    try {
        const res = await ApiService().get<IResponse<Product>>(`product/${id}`)
        result = res.data.data
    } catch (e) {
        console.log(e)
    }
    return result
}

export const createProduct = async (payload: ProductEditRequest) => {
    let result = false
    try {
        const res = await ApiService().post<IResponse<any>>(`product`, payload)
        result = res.data.message === 'success'
    } catch (e) {
        console.log(e)
    }
    return result
}

export const updateProduct = async (payload: ProductEditRequest) => {
    let result = false
    if (!payload.id) {
        return result
    }
    try {
        const res = await ApiService().patch<IResponse<any>>(`product/${payload.id}`,payload)
        result = res.data.message === 'success'
    } catch (e) {
        console.log(e)
    }
    return result
}

export const deleteProduct = async (payload: ProductEditRequest) => {
    let result = false
    if (!payload.id) {
        return result
    }
    try {
        const res = await ApiService().delete<IResponse<any>>(`product/${payload.id}`)
        result = res.data.message === 'success'
    } catch (e) {
        console.log(e)
    }
    return result
}
