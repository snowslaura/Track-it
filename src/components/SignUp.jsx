import logoImagem from "./../assets/img/logo-trackit.png"
import logo from "./../assets/img/TrackIt.png"
import { Link , useNavigate} from "react-router-dom";
import styled from 'styled-components'
import { useContext } from "react";
import axios from "axios"
import {ThreeDots} from 'react-loader-spinner'
import isLoadingContext from "../context/IsLoading";
import UserDataContext from "../context/UserDataContext";


function SignUp(){

 
    const {isLoading, setisLoading} = useContext(isLoadingContext)
    const{userData, setUserData} = useContext(UserDataContext)

    const navigate = useNavigate()

    function handleSubmit(event){
        event.preventDefault();
        setisLoading(true)
        
        const body = {
            email: userData.email,
            name: userData.name,
            image: userData.image,
            password: userData.password
        }

        const URL =`${process.env.REACT_APP_API_URL}/auth/sign-up`
        const promise = axios.post(URL, body)
        promise.then( ({data}) =>{
            navigate("/")
            setisLoading(false)
            setUserData({...userData,email: ""})
            setUserData({...userData, password:""})
            console.log({data})
        })
        promise.catch(({response}) => {
            console.log(response.statusText)
            setisLoading(false)
            setUserData({...userData,email: ""})
            setUserData({...userData, password:""})
            setUserData({ ...userData, name: ""})
            setUserData({...userData, image: ""})
            alert("Dados inválidos")
        })
    }

    return(
        <Content>
            <Image src={logoImagem} alt="imagem-trackit"/>
            <LogoImage src={logo} alt="logo-trackit"/>
                {isLoading?
                <Form onSubmit={handleSubmit}>
                    <input type="email" id="email" value={userData.email} disabled required onChange={e => setUserData({...userData,email: e.target.value})} placeholder="email"></input>
                    <input type="password" id="password" value={userData.password} disabled required onChange={e => setUserData({...userData, password:e.target.value})} placeholder="senha"></input>
                    <input type="text" id="name"  value={userData.name} disabled required onChange={e =>setUserData({ ...userData, name: e.target.value})} placeholder="nome"></input>
                    <input type="url" id="image"  value={userData.image} disabled required onChange={e =>setUserData({...userData, image: e.target.value})}  placeholder="foto"></input>
                    <button isLoading={isLoading} disabled>
                        <ThreeDots
                            height="60"
                            width="60"
                            color='#FFFFFF'
                            ariaLabel='loading'
                        />
                    </button>
                </Form>
                :<Form onSubmit={handleSubmit}>
                    <input type="email" id="email" value={userData.email} required onChange={e => setUserData({...userData,email: e.target.value})} placeholder="email"></input>
                    <input type="password" id="password" value={userData.password} required onChange={e => setUserData({...userData, password:e.target.value})} placeholder="senha"></input>
                    <input type="text" id="name"  value={userData.name} required onChange={e =>setUserData({ ...userData, name: e.target.value})} placeholder="nome"></input>
                    <input type="url" id="image"  value={userData.image} required onChange={e =>setUserData({...userData, image: e.target.value})}  placeholder="foto"></input>
                    <button>Cadastrar</button>
                </Form>}
                
            <Link to="/"><Enter>Já tem uma conta? Faça login!</Enter></Link>
        </Content>
    )
}

export default SignUp;

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
    }
    
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
