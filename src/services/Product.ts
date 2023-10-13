import { Products } from "./productsData"

export const getProducts = async (): Promise<Product[]> => {
    return await Products
}

export const getSellingProducts = async (): Promise<ProductSell[]> => {
    return await Products
}