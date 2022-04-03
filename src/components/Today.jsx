import Header from "./Header";
import Menu from "./Menu";
import TodaysCard from "./TodaysCard";

import styled from "styled-components";
import { useContext, useEffect , useState } from "react";
import axios from "axios"

import UserDataContext from "../context/UserDataContext";
import PercentageContext from "../context/PercentageContext";

function Today(){

    const [todaysHabits, setTodaysHabits] = useState([])
    const [HabitsStatus, setHabitsStatus] = useState([])

    const {userData} = useContext(UserDataContext)
    const {percentage, setPercentage} = useContext(PercentageContext)

    useEffect(() => fetchTodaysHabits(), [])    

    function fetchTodaysHabits(){
        const config = {
            headers: {
                "Authorization": `Bearer ${userData.token}`
            }
        }

        const promise = axios.get(`${process.env.REACT_APP_API_URL}/habits/today`, config)
        promise.then( ({data}) =>{
            const selectStatus = data.map((habit) => habit.done)
            const done = selectStatus.filter((status) => status === true)
            const ActualPercentage = ((done.length/selectStatus.length)*100).toFixed(0)
            setTodaysHabits(data)
            setHabitsStatus(selectStatus)        
            setPercentage(ActualPercentage)
        })
        promise.catch ((e)=> console.log(e))
    }  
    
   
  
   
        
    

    return(
        <>
        <Content>
            <Header src={userData.image}/>
            <CurrentDay >
                Sábado, 02/04    
            </CurrentDay >
            {HabitsStatus.includes(true)?
            <Percentage>{percentage}% dos hábitos concluídos</Percentage>:
            <NoHabit>Nenhum hábito concluído ainda</NoHabit>
            }
            <Habits>
                {todaysHabits.map ((habit) =>{
                    return (<TodaysCard key={habit.id}
                        id={habit.id} 
                        name={habit.name}
                        done={habit.done}
                        currentSequence={habit.currentSequence}
                        highestSequence={habit.highestSequence}
                        fetchTodaysHabits={fetchTodaysHabits}
                        />
                        )})
                }
            </Habits>
            <Menu />
        </Content>
        </>
    )
}

export default Today;

const Content = styled.div`
    margin-top:75px;
    background-color: #F2F2F2;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
   
`

const Habits = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const NoHabit = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    padding-left: 17px;
    color: #BABABA;
    margin-bottom: 20px;
`

const Percentage = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #8FC549;
    padding-left: 17px;
    margin-bottom: 20px;
`

const CurrentDay = styled.p`
    margin-top:20px;
    width: 100vw;
    padding-left: 17px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
`

