import styled from "styled-components"
import 'react-circular-progressbar/dist/styles.css';
import { useContext } from "react";
import UserDataContext from "../context/UserDataContext";
import Header from "./Header";
import Menu from "./Menu";

function History(){

    const {userData} = useContext(UserDataContext)

    
    return( <>
        <Main >
            <Header src={userData.image}/>
            <Menu />
        </Main>
        </>
    )
}

export default History;

const Main = styled.div`
    background-color: #F2F2F2;
    width: 100vw;
    height: 100vh;
`

