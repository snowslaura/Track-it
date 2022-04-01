import styled from "styled-components";

function Header({src}){

    return(
        <Top>
            <LogoWritten>TrackIt</LogoWritten>
            <ProfileImage src={src} />
        </Top>
    )
}

export default Header;

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