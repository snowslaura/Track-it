import Header from "./Header";
import Menu from "./Menu";
import TodaysCard from "./TodaysCard";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br'
import updateLocale from 'dayjs/plugin/updateLocale'

import styled from "styled-components";
import { useContext, useEffect , useState } from "react";
import axios from "axios"

import PercentageContext from "../context/PercentageContext";

function Today(){

    const [todaysHabits, setTodaysHabits] = useState([])
    const [HabitsStatus, setHabitsStatus] = useState([])

    const {percentage, setPercentage} = useContext(PercentageContext)

    const userDataLocalStorage = localStorage.getItem("userData")
    const unserializedData = JSON.parse(userDataLocalStorage)
    const tokenStorage = unserializedData.token

    useEffect(() => fetchTodaysHabits(), [])    

    function fetchTodaysHabits(){
        const config = {
            headers: {
                "Authorization": `Bearer ${tokenStorage}`
            }
        }

        const promise = axios.get(`${process.env.REACT_APP_API_URL}/habits/today`, config)
        promise.then( ({data}) =>{
            const selectStatus = data.map((habit) => habit.done)
            const done = selectStatus.filter((status) => status === true)
            const ActualPercentage = ((done.length/(selectStatus.length || 1))*100).toFixed(0)
            setTodaysHabits(data)
            setHabitsStatus(selectStatus)        
            setPercentage(ActualPercentage)
        })
        promise.catch ((e)=> console.log(e))
    } 
    dayjs.extend(updateLocale)
        dayjs.updateLocale('pt-br', {
            weekdays: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
        })
    
    
    return(
        <>
        <Content>
            <Header />       
            
            <CurrentDay >
                {dayjs().locale('pt-br').format('dddd, DD/MM')}   
            </CurrentDay >

            {HabitsStatus.includes(true)?
            <Percentage>{percentage}% dos hábitos concluídos</Percentage>:
            <NoHabit>Nenhum hábito concluído ainda</NoHabit>}

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
        </Content>
        <Menu />
        </>
    )
}

export default Today;

const Content = styled.div`
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
`
const CurrentDay = styled.p`
    margin-top: 91px;
    width: 100vw;
    padding-left: 5vw;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
`
const NoHabit = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    padding-left: 5vw;
    color: #BABABA;
    margin-bottom: 20px;
`
const Percentage = styled.p`
    display: flex;
    justify-content: flex-start;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    padding-left: 5vw;
    color: #8FC549;
    margin-bottom: 20px;
`
const Habits = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`





