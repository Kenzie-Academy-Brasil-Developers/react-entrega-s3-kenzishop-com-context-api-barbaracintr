import { createContext, useState } from "react";

export const CartContext = createContext([])

export const CartProvider = ({ children }) => {
    const [ cart, setCart ] = useState([])

    const addToProdutctsCart = (item) => {
        setCart([...cart, item])
    }

    const removeFromProductsCart = (item) => {
        const newProduct = cart.filter(
            (cart) => cart.id !== item.id
        )
        setCart(newProduct)
    }

    return(
        <CartContext.Provider value={{ cart, addToProdutctsCart, removeFromProductsCart }}>
            {children}
        </CartContext.Provider>
    )
}