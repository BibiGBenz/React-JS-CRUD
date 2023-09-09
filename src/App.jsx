import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Components/Home"
import Createuser from "./Components/Createuser"
import User from "./Components/User"
import Edit from "./Components/Edit"

const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Home/>
            <Routes>
                <Route element={<Createuser/>} path="/createuser"/>
                <Route element={<User/>} path="/user"/>
                <Route element={<Edit/>} path="/edit/:abc"/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App