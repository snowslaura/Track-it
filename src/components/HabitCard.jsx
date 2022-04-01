import styled from "styled-components";
import {BsTrash} from "react-icons/bs"

const daysArray = [
    { id:0, name:"D" },
    { id:1, name:"S" },
    { id:2, name:"T" },
    { id:3, name:"Q" },
    { id:4, name:"Q" },
    { id:5, name:"S" },
    { id:6, name:"S" }
]


function HabitCard(props){

    const {name, days} = props

    return(
        <Content>
            <Top>
                <Description>
                    {name}
                </Description>
                <BsTrash />
            </Top>
            <Days>
            {daysArray.map((day)=>{ return(
                days.includes(day.id)?
                <SpanDay color={false}  key={day.id}>{day.name}</SpanDay>:
                <SpanDay color={true} key={day.id}>{day.name}</SpanDay>
            )
            })
            }
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
    padding: 10px;
`

const Top = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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

const SpanDay = styled.span`
    margin-top: 8px;
    width: 30px;
    height: 30px;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
    margin-right: 4px;
    display:flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: ${ props => props.color ? "#DBDBDB" : "#FFF"};
    background-color: ${ props => props.color ? "#FFF" : "#CFCFCF"};
    
`