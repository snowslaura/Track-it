import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios"

import  GlobalStyleComponent  from "./global.css";
import "./../assets/css/reset.css"
import Login from "./Login"
import SignUp from "./SignUp";
import Habits from "./Habits";
import Today from "./Today";
import History from "./History"

import isLoadingContext from "../context/IsLoadingContext";
import UserDataContext from "../context/UserDataContext";
import UserHabitsContext from "../context/UserHabitsContext";
import PercentageContext from "../context/PercentageContext";

import TodaysHabitsContext from "../context/TodaysHabitsContext";
import HabitsStatusContext from "../context/HabitsStatusContext";

function App(){

    const [isLoading, setisLoading] = useState(false);
    const [userData, setUserData] = useState({ email:"", password:"" , name:"", image:"" , token:""})
    const [userHabits, setUserHabits] = useState([])
    const [percentage, setPercentage] = useState(0);
    const [todaysHabits, setTodaysHabits] = useState([])
    const [HabitsStatus, setHabitsStatus] = useState([])

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
   

    return(
        <BrowserRouter>
            <isLoadingContext.Provider value={{isLoading, setisLoading}} >
                <UserDataContext.Provider value={{userData, setUserData}}>
                    <UserHabitsContext.Provider value={{userHabits, setUserHabits}}>
                        <PercentageContext.Provider value={{percentage, setPercentage}}>
                            <TodaysHabitsContext.Provider value={{todaysHabits, setTodaysHabits}}>
                                <HabitsStatusContext.Provider value={{HabitsStatus, setHabitsStatus}}>
                                    <GlobalStyleComponent />
                                        <Routes>
                                            <Route path="/" element={<Login />} />
                                            <Route path="/cadastro" element={<SignUp />} />
                                            <Route path="/habitos" element={<Habits fetchTodaysHabits={fetchTodaysHabits} />} />
                                            <Route path="/hoje" element={<Today fetchTodaysHabits={fetchTodaysHabits} />} />
                                            <Route path="/historico" element={<History />} />
                                        </Routes>
                                    </HabitsStatusContext.Provider>
                            </TodaysHabitsContext.Provider>
                        </PercentageContext.Provider>
                    </UserHabitsContext.Provider>    
                </UserDataContext.Provider>        
            </isLoadingContext.Provider>    
        </BrowserRouter>       
    )
}

export default App;