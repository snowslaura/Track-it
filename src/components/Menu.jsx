import styled from "styled-components"
import { Link } from "react-router-dom";
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Menu(){
    const percentage = 40;
    return( <>
        
        <Content>
            <Link to="/habitos"><p>Hábitos</p></Link>
            <Link to="/historico"><p>Histórico</p></Link>
        </Content>
        <Bar style={{width: 100, height:50 }}>
                <CircularProgressbar value={percentage}
                    text="hoje"
                    background
                    backgroundPadding={6}
                    valueStart={0}
                    valueEnd={percentage}
                    duration={1.4}
                    styles={buildStyles({
                    backgroundColor: "#52B6FF",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent"
                })} />
            </Bar>
        </>
    )
}

export default Menu;

const Content = styled.div`
    position: absolute;
    bottom:0;
    left:0;
    width: 100vw;
    height: 70px;
    background: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;

    }

`

const Bar = styled.div`
   position: relative;
   top:0;
   right: 0;
`

