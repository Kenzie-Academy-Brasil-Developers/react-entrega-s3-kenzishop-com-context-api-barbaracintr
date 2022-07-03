import { useContext } from "react"

import { ProductsContext } from "../../providers/products"
import { Product } from "../Product";

import "./styles.js"
import { Vitrine } from "./styles.js";

export const ProductList = () => {
    const { products } = useContext(ProductsContext) 

    return(
        <Vitrine>
        {
                products.map(product => 
                    <Product key={product.id} product={product}/>)
        }
        </Vitrine>
    )
}