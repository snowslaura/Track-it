import styled from "styled-components"
import { Link } from "react-router-dom";
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function History(){
    const percentage = 40;
    return( <>
        <Main >
            <Top>
                <LogoWritten>TrackIt</LogoWritten>
                <ProfileImage />
            </Top>
            
            <Content>
                <Link to="/habitos"><p>Hábitos</p></Link>
                <Link to="/hoje">
                    <Bar style={{width: 90, /*height:80*/ }}>
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
                </Link>
                <Link to="/historico"><p>Histórico</p></Link>
            </Content>
        </Main>
        </>
    )
}

export default History;

const Top = styled.div`
    position: fixed;
    top:0;
    left:0;
    width: 100vw;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 18px;
`

const LogoWritten = styled.p`
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 49px;
    color: #FFFFFF;
`


const ProfileImage = styled.img`
    width: 51px;
    height: 51px;
    background: url(image.png);
    border-radius: 98.5px;
`
const Main = styled.div`
    background-color: #F2F2F2;
    width: 100vw;
    height: 100vh;
`

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
   bottom:20px;
`