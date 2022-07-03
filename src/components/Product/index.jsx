import { useContext } from "react";
import { CartContext } from "../../providers/cart.jsx";

import { 
    Img,
    ItemList,
    Text,
    Btn
 } from "./styles.js";

 import { toast } from 'react-toastify';


export const Product = ({ product }) => {
    const { cart, addToProdutctsCart, removeFromProductsCart } = useContext(CartContext)

    const addToCart = () => {
        toast.success("Produto adicionado ao carrinho")
        addToProdutctsCart(product);
    }

    return(
        <ItemList key={product.id}>
                    <Img
                        src={product.image}
                    />
                    <Text>{product.name}</Text>
                    <Text>R$ {product.price.toFixed(2)}</Text>
                    <Btn 
                        onClick={addToCart}
                        >
                        Adicionar ao carrinho
                    </Btn>
        </ItemList>
    )
}