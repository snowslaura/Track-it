import styled from "styled-components";
import {BsCheckSquareFill} from "react-icons/bs"
import axios from "axios";
import {useContext} from "react"


import UserDataContext from "../context/UserDataContext";



function TodaysCard(props){
    const {
        id, 
        name,
        done,
        currentSequence,    
        highestSequence,
        fetchTodaysHabits} = props

    const {userData} = useContext(UserDataContext)  
               
    function SubmitHabitDone(){       

        const config = {
            headers: {
                "Authorization": `Bearer ${userData.token}`
            }
        }
        
        const promise = axios.post(`${process.env.REACT_APP_API_URL}/habits/${id}/${done?"un":""}check`,{}, config)
        promise.then(() =>fetchTodaysHabits())
        promise.catch(e => console.log(e))
        
        
    }

    return(
       <Content key={id}>
            <div>
            <HabitName >
                    {name}
                </HabitName>
                <DaysSequecies>
                    {currentSequence===highestSequence?                   
                    <>
                        <p>Sequência atual de dias: <Sequencie done={done}>{currentSequence} dias</Sequencie></p>
                        <p>Seu recorde de dias: <Sequencie done={done}>{highestSequence} dias</Sequencie></p>
                    </>:                   
                    <>
                        <p>Sequência atual de dias: <Sequencie done={done}>{currentSequence} dias</Sequencie></p>
                        <p>Seu recorde de dias: <Sequencie >{highestSequence} dias</Sequencie></p>
                    </>
                     }
                </DaysSequecies>
            </div>            
            <Icone onClick={() => SubmitHabitDone()} done={done} ><BsCheckSquareFill/></Icone>
       </Content>
    )
}

export default TodaysCard;

const Content = styled.div`
    width: 90vw;
    min-height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-top: 8px;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;   
`
const HabitName = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
`
const Icone = styled.div`
    color:${props => props.done? "#8FC549":"#EBEBEB"};
    font-size: 70px;
    display: flex;
    justify-content: center;    
`
const DaysSequecies = styled.div`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 12.976px;
    line-height: 16px;
    color: #666666;
`
const Sequencie = styled.span`
color:${props => props.done? "#8FC549":"#666666"};    
`
