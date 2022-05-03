import React from "react";
import {Link} from "react-router-dom";
import "./login.css"

const Login = () => {
    return (
        <div className='login'>
            <div className="greeting">
                Welcome Back!
            </div>

            <input type="email"/>
            <input type="password"/>

            <Link to={"/todo/home"}>
                <button>
                    LOGIN
                </button>
            </Link>

            <Link to={"/"}>
                <button>
                    BACK
                </button>
            </Link>

            <div className='forgot-passwd'>
                Forgot password?
            </div>
        </div>
    );
}

export default Login;