import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/css/style.css"
import "./assets/css/reset.css"
import Login from "./Login"
import SignUp from "./SignUp";
import Habits from "./Habits";
import Today from "./Today";

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<SignUp />} />
                <Route path="/habitos" element={<Habits />} />
                <Route path="/hoje" element={<Today />} />
            </Routes>
        </BrowserRouter>
       
    )
}

export default App;