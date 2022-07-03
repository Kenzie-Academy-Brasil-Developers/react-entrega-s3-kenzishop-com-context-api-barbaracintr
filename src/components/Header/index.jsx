import { useHistory } from "react-router-dom"
import { useState } from "react"

import imgCart from "../../assets/img/imgCart.png"
import imgLogin from "../../assets/img/imgLogin.png"
import imgHome from "../../assets/img/imgHome.png"

import "./styles.js"

import { 
    Headerr,
    DivHeader,
    H1,
    DivBtn,
    Btn,
    Img
} from "./styles.js";

export const Header = () => {

    const history = useHistory()

    const [ btnHome, setBtnHome ] = useState(false)

    const cartProducts = () => {
        setBtnHome(true)
        history.push("/cart")
    }

    const returnHome = () => {
        setBtnHome(false)
        history.push("/")
    }

    return (
        <>
            <Headerr>
                <DivHeader>
                    <H1>Kenzie Shop</H1>
                    <DivBtn>
                        <Btn 
                        onClick={cartProducts}>
                            <Img 
                                src={imgCart} 
                            />
                            Carrinho
                        </Btn>
                        <Btn>
                            <Img 
                                src={imgLogin} 
                            />
                            Entrar
                        </Btn>
                        {
                            btnHome === true &&
                        <Btn 
                        className="btn-login"
                        onClick={returnHome}>
                            <Img 
                                src={imgHome} 
                            />
                            Home
                        </Btn>
                        }
                    </DivBtn>
                </DivHeader>
            </Headerr>
        </>
    )
}