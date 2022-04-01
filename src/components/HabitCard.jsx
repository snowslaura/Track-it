import styled from "styled-components";

function HabitCard(props){

    const {name, days} = props

    return(
        <Content>
            <Description>
                {name}
            </Description>
            <Days>
                {days}
            </Days>
        </Content>
    )
}

export default HabitCard;

const Content = styled.div`
    width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-top: 8px;
`

const Description = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
`

const Days = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`