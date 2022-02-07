import {ApiService} from "../service/ApiService";
import {Product} from "../entities/Product";

export const getAllProducts = async () => {
    let result: Array<Product> = []
    try {
        const res = await ApiService().get<Array<Product>>('products')
        result = res.data
    } catch (e) {
        console.log(e)
    }
    return result
}

export const getOneProduct = async (id: number) => {
    let result = null
    try {
        const res = await ApiService().get<Product>(`products/${id}`)
        result = res.data
    } catch (e) {
        console.log(e)
    }
    return result
}
