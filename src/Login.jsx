import logoImagem from "./assets/img/logo-trackit.png"
import logo from "./assets/img/TrackIt.png"
import { Link } from "react-router-dom";
import styled from 'styled-components'

function Login(){
    return(
        <>
        <Content>
            <Image src={logoImagem} alt="imagem-trackit"/>
            <LogoImage src={logo} alt="logo-trackit"/>
                <Form>
                    <input type="email" id="email"  required  placeholder="  email"></input>
                    <input type="password" id="password"  required  placeholder="  senha"></input>
                    <button>Entrar</button>
                </Form>
            <Link to="/cadastro"><SignUp>Não tem uma conta? Cadastre-se!</SignUp></Link>
        </Content>
        </>
    )
}

export default Login;

const Image = styled.img`
    margin-top: 68px;
    width:180px;
`
const LogoImage = styled.img`
    margin-top: 10px;
    width:180px;
    margin-bottom:20px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Form = styled.form`
    margin-top: 33px;
    display: flex;
    flex-direction:column;
    box-sizing: border-box;

    input{
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        width: 303px;
        height: 45px;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
        margin-bottom:6px;
    }
   
    button{
        border: none;
        width: 303px;
        height: 45px;
        background: #52B6FF;
        border-radius: 4.63636px;
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
    }
    
`

const SignUp = styled.p`
    margin-top:25px;
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
`