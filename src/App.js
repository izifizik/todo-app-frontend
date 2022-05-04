import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home"
import Register from "./pages/registration/register";
import Login from "./pages/login/login";
import Main from "./pages/main/main";

const App = () => {
    return (
        <BrowserRouter>
            <div className='App'>
                <Routes>
                    <Route path={"/"} element={<Home/>}></Route>
                    <Route path={"/register"} element={<Register/>}></Route>
                    <Route path={"/login"} element={<Login/>}></Route>

                    <Route path={"/task/home"} element={<Main/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
