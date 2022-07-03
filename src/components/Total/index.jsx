import { TotalSum, Btn, Title, Text } from "./styles.js"

export const TotalProducts = ( {cart} ) => {

    const sum = cart.reduce((acc, currCart) => {
        return acc + currCart.price
    }, 0)

    return(
        <TotalSum>
            <Title>Resumo da compra</Title>
            <Text>Total: {sum.toFixed(2)}</Text>
            <Btn>Finalizar Pedido</Btn>
        </TotalSum>
    )
}