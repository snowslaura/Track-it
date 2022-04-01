import styled from "styled-components"
// import 'react-circular-progressbar/dist/styles.css';
import { useState, useContext } from "react";
import axios from "axios"
import UserDataContext from "../context/UserDataContext";
import isLoadingContext from "../context/IsLoading";
import {ThreeDots} from 'react-loader-spinner';
import Header from "./Header"
import Menu from "./Menu";

function Habits(){

    const[buttonNewHabit, setButtonNewHabit] = useState(false);
    const [habit, setHabit] = useState("");
    const[howOften, setHowOften] = useState([]);

    const {userData} = useContext(UserDataContext)
    const {isLoading, setisLoading} = useContext(isLoadingContext)

    // setisLoading(false)
    
    
    const promise = axios.get(`${process.env.REACT_APP_API_URL}/habits`)
    promise.then(({data})=>{
        console.log(data)
    })

    const days = [
        { id:0, name:"D", isSelected: false },
        { id:1, name:"S", isSelected: false },
        { id:2, name:"T", isSelected: false },
        { id:3, name:"Q", isSelected: false },
        { id:4, name:"Q", isSelected: false },
        { id:5, name:"S", isSelected: false },
        { id:6, name:"S", isSelected: false }
    ]

    const [selectedDay, setSelectedDay] = useState(days);

    function selectDay(id){
        const selectedDays = selectedDay.map( (day) => {
            if(day.id === id){
                day.isSelected = !day.isSelected
            }
            return day
        })
        setSelectedDay([...selectedDays])

        const daysData = selectedDay.filter((day) => day.isSelected === true)
        const selectedDaysId = daysData.map((day) => day.id)
        setHowOften([...selectedDaysId])
        
    }
    
    function handleSubmit(event){
        event.preventDefault();
        console.log(habit)
        console.log(howOften)
        setisLoading(true)

        const body = {
            name: habit,
            days: howOften,
        }

        const config = {
            headers: {
                "Authorization": `Bearer ${userData.token}`
            }
        }


        const promise = axios.post(`${process.env.REACT_APP_API_URL}/habits`, body, config)
        promise.then(response => { 
            setHabit("")
            setHowOften([])
        })
    }

    return( <>
        <Main >
            <Header src={userData.image}/>

            <MyHabitsBar>
                <p>Meus hábitos</p>
                <button onClick={() => setButtonNewHabit(!buttonNewHabit)}>+</button>
            </MyHabitsBar>

            {!buttonNewHabit?"":
            isLoading?
            <form onSubmit={handleSubmit}>            
                <CreatHabit>
                    <input type="text" value={habit} id="nameHabit" disabled onChange={e => setHabit(e.target.value)} required placeholder="nome do hábito"></input>
                    <Days > 
                        {selectedDay.map((day)=>{
                            return(<SpanDay selected={day.isSelected} key={day.id} onClick={() => selectDay(day.id)}>{day.name}</SpanDay>
                            )
                        })
                        }
                    </Days>
                    <Navi>
                        <Cancel>Cancelar</Cancel>
                        <Button>
                        <ThreeDots
                            height="40"
                            width="40"
                            color='#FFFFFF'
                            ariaLabel='loading'
                            background="#52B6FF"
                        />
                        </Button>
                    </Navi>
                </CreatHabit>
            </form> :
            <form onSubmit={handleSubmit}>            
                <CreatHabit>
                    <input type="text" value={habit} id="nameHabit" onChange={e => setHabit(e.target.value)} required placeholder="nome do hábito"></input>
                    <Days > 
                        {selectedDay.map((day)=>{
                            return(<SpanDay selected={day.isSelected} key={day.id} onClick={() => selectDay(day.id)}>{day.name}</SpanDay>
                            )
                        })
                        }
                    </Days>
                    <Navi>
                        <Cancel>Cancelar</Cancel>
                        <Button >Salvar</Button>
                    </Navi>
                </CreatHabit>
            </form>}

            <NoHabit>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </NoHabit>
            
            <Menu />
        </Main>
        </>
    )
}

export default Habits;

const Main = styled.div`
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    height: 100vh;
`
const MyHabitsBar = styled.div`
    margin-top: 71px;
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding-left: 18px;
    padding-right: 18px;
    width: 100vw;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;

    p{
        margin-top: 18px;
    }

    button{
        margin-top: 18px;
        width: 40px;
        height: 35px;
        background: #52B6FF;
        border-radius: 4.63636px;
        border: none;
        font-weight: 400;
        font-size: 26.976px;
        line-height: 34px;
        text-align: center;
        color: #FFFFFF;
        display: flex;
        align-items:center;
        justify-content: center;
    }
`

const Cancel = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;
    margin-right: 23px;
`

const Button = styled.button`
    border: none;
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CreatHabit = styled.div`
    margin-top: 20px;
    width: 90vw;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    padding:17px;

        input{
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            width: 100%;
            height: 45px;
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #666666;
            margin-bottom:6px;
            padding: 10px;
            ::placeholder {color:#DBDBDB};
        }

       
`

const Navi = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: 50px;
`
const Days = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`

const SpanDay = styled.span`
    
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
    color: ${ props => props.selected ? "#FFFFFF" : "#DBDBDB"};
    background-color: ${ props => props.selected ? "#CFCFCF" : "#FFFFFF"};
    
`

const NoHabit = styled.div`
    margin-top: 20px;
    width: 100vw;
    padding-left: 18px;
    padding-right: 18px;
    height: 74px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #666666;
`





