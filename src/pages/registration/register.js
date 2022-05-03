import React from "react";
import {Link} from "react-router-dom";
import "./register.css"

const Register = () => {
        return(
            <div className='register'>
                <div className="greeting">
                    Let's GO!
                </div>

                <input type="name"/>
                <input type="email"/>
                <input type="password"/>

                <Link to={"/todo/home"}>
                    <button>
                        SIGNUP
                    </button>
                </Link>
                <p>Already have an account?
                <Link to={"/login"}>
                    LOGIN
                </Link>
                </p>
            </div>
        );
}

export default Register;