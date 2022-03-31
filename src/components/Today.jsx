import Header from "./Header";
import Menu from "./Menu";
import styled from "styled-components";

function Today(){
    return(
        <>
        <Content>
            <Header />
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

