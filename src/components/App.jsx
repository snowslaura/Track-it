import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import  GlobalStyleComponent  from "./global.css";
import "./../assets/css/reset.css"
import Login from "./Login"
import SignUp from "./SignUp";
import Habits from "./Habits";
import Today from "./Today";
import History from "./History"

import isLoadingContext from "../context/IsLoading";
import UserDataContext from "../context/UserDataContext";


function App(){

    

    const [isLoading, setisLoading] = useState(false);
    const [userData, setUserData] = useState({ email:"", password:"" , name:"", image:"" , token:""})
   

    return(
        <BrowserRouter>
            <isLoadingContext.Provider value={{isLoading, setisLoading}} >
            <UserDataContext.Provider value={{userData, setUserData}}>
                    <GlobalStyleComponent />
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/cadastro" element={<SignUp />} />
                        <Route path="/habitos" element={<Habits />} />
                        <Route path="/hoje" element={<Today />} />
                        <Route path="/historico" element={<History />} />
                    </Routes>
            </UserDataContext.Provider>        
            </isLoadingContext.Provider>    
        </BrowserRouter>
       
    )
}

export default App;