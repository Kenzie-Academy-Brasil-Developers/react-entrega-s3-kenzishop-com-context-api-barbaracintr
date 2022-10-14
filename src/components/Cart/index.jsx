import { useContext } from "react";

import { CartContext } from "../../providers/cart";
import { TotalProducts } from "../Total";

import "./styles.js";

import {
  ContainerCart,
  ListCart,
  ListItem,
  TitleCart,
  Img,
  Btn,
  Text,
} from "./styles.js";

export const Cart = () => {
  const { cart, addToProdutctsCart, removeFromProductsCart } =
    useContext(CartContext);

  return (
    <>
      <TitleCart>Carrinho de Produtos</TitleCart>
      <ContainerCart>
        <ListCart>
          {cart.length !== 0 &&
            cart.map((cart, index) => (
              <ListItem key={index}>
                <Text>{cart.name}</Text>
                <Text>R$ {cart.price.toFixed(2)}</Text>
                <Img src={cart.image} />
                <Btn id={index} onClick={() => removeFromProductsCart(cart)}>
                  Remover do carrinho
                </Btn>
              </ListItem>
            ))}
        </ListCart>
        <TotalProducts cart={cart} />
      </ContainerCart>
    </>
  );
};
