import logoImagem from "./../assets/img/logo-trackit.png"
import logo from "./../assets/img/TrackIt.png"
import { Link, useNavigate  } from "react-router-dom";
import styled from 'styled-components';
import {ThreeDots} from 'react-loader-spinner';
import { useContext } from "react";
import axios from "axios";

import isLoadingContext from "../context/IsLoadingContext";
import UserDataContext from "../context/UserDataContext";

function Login(){

    const {isLoading, setisLoading} = useContext(isLoadingContext)
    const {userData, setUserData} = useContext(UserDataContext)

    const navigate = useNavigate()

    function handleLogin(event){
        event.preventDefault();
               
        setisLoading(true)

        const body = {
            email: userData.email,
            password: userData.password
        }

        const URL =`${process.env.REACT_APP_API_URL}/auth/login`
        const promise = axios.post(URL, body)
        promise.then(({data}) =>{
            setUserData({...userData, email:data.email, password:data.password , name:data.name, image:data.image , token: data.token })
            const serializedDataString = JSON.stringify({token: data.token, image:data.image})
            localStorage.setItem("userData", serializedDataString)
            navigate("/hoje")
            setisLoading(false)
        })
        promise.catch(({response}) => {
            console.log(response)
            setisLoading(false)
            setUserData({...userData,email:"", password:"" , name:"", image:"" , token:""})
            alert("Login ou senha inválidos")
        })          
    }

    return(
        <>
        <Content>
            <Image src={logoImagem} alt="imagem-trackit"/>
            <LogoImage src={logo} alt="logo-trackit"/>
            {isLoading?
                <Form onSubmit={handleLogin}>
                    <Input type="email" id="email" value={userData.email} disabled required onChange={e => setUserData({...userData,email: e.target.value})} placeholder="email"></Input>
                    <Input type="password" id="password" value={userData.password} disabled required onChange={e => setUserData({...userData, password:e.target.value})} placeholder="senha"></Input>
                    <Button disabled>
                        <ThreeDots
                            height="60"
                            width="60"
                            color='#FFFFFF'
                            ariaLabel='loading'
                        />
                    </Button>
                </Form>
                :<Form onSubmit={handleLogin}>
                    <input type="email" id="email" value={userData.email} required onChange={e => setUserData({...userData,email: e.target.value})} placeholder="email"></input>
                    <input type="password" id="password" value={userData.password} required onChange={e => setUserData({...userData, password:e.target.value})} placeholder="senha"></input>
                    <button>Entrar</button>
                </Form>}
            <Link to="/cadastro"><Enter>Não tem uma conta? Cadastre-se!</Enter></Link>
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
const Input = styled.input`
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 303px;
    height: 45px;
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    margin-bottom:6px;
    padding: 10px;
    background-color: ${props => props.disabled ? "#F2F2F2":"#FFFFFF"};
    
    ::placeholder {
        color: ${props => props.disabled ? "#AFAFAF":"#DBDBDB"}
    }

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
        color: #666666;
        margin-bottom:6px;
        padding: 10px;
        ::placeholder {color:#DBDBDB};
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
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }    
`
const Button = styled.button`
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
        display: flex;
        justify-content: center;
        align-items: center;
        opacity:${props => props.disabled ? "0.5" : ""};  
`

const Enter = styled.p`
    margin-top:25px;
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
`