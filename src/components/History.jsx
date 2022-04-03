import styled from "styled-components"
import 'react-circular-progressbar/dist/styles.css';
import Header from "./Header";
import Menu from "./Menu";

function History(){    
    return( <>
        <Main >
            <Header />           
            <Title >
                <p>Histórico</p>
            </Title >
            <Subtitle>
                Em breve você poderá ver o histórico dos seus hábitos aqui!
            </Subtitle>                          
        </Main>
        <Menu /> 
        </>
    )
}

export default History;

const Main = styled.div`
    background-color: #F2F2F2;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;   
`
const Title = styled.div`
    margin-top:95px;
    width: 100vw;
    padding-left: 5vw;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
`
const Subtitle = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    padding-left: 5vw;
    color: #BABABA;
    margin-bottom: 20px;
    margin-top: 18px;
`

