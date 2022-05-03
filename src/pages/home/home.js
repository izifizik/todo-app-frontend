import React from "react";

import logo from "../../static/logo.png";
import "./home.css"
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className='home'>
            <div className='logo-bg'>
                <div className='logo'>
                    <img src={logo}
                         alt='logo'
                         style={{width: "100px", height: "100px"}}
                    />
                </div>
            </div>
            <div className='button'>
                <Link to={"/login"}>
                    <button>
                        LOGIN
                    </button>
                </Link>
            </div>
            <div className='button'>
                <Link to={"/register"}>
                    <button>
                        REGISTRATION
                    </button>
                </Link>
            </div>
        </div>
    )
        ;
}

export default Home;