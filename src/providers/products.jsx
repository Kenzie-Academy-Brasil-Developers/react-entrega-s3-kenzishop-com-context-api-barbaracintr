import { createContext, useState } from "react";

export const ProductsContext = createContext([])

export const ProductsProvider = ({ children }) => {

    const [ products, setProducts ] = useState([
        { id: 1, name: "Echo Dot", price: 279.00, image: "https://s2.glbimg.com/mkkhc7f10soW1JUH_6kMrx4tXdo=/284x0:1642x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/A/7/3ig3UQTKGPx5atpBhraA/a31.jpg"},
        { id: 2, name: "Kindle Paperwhite", price: 499.00, image: "https://m.media-amazon.com/images/I/61m1Dot5KCL._AC_SX522_.jpg"},
        { id: 3, name: "Samsung S 22", price: 7000.00, image: "https://s2.glbimg.com/QAGIEFy-ZKnxA2e7-ee-NUl7NtY=/0x0:680x680/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/k/V/SxEBZlSZi41rYAkI5DOQ/cgbj0ga-huiaoaqraaantg8ow7g750.png680x680.jpg"}      
    ])

    return(
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}