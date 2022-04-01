import Header from "./Header";
import Menu from "./Menu";
import styled from "styled-components";
import { useContext } from "react";
import UserDataContext from "../context/UserDataContext";

function Today(){

    const {userData} = useContext(UserDataContext)

    return(
        <>
        <Content>
            <Header src={userData.image}/>
            <Menu />
        </Content>
        </>
    )
}

export default Today;

const Content = styled.div`
    background-color: #F2F2F2;
    width: 100vw;
    height: 100vh;
`

