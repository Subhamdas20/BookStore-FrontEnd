import React from 'react';
import './Mainpage.scss'
import logo from '../../logo/logo.png'
function Mainpage() {
    return (<div>
        <div className='home-container'>
            <div className='left-image'>
                <img className="mainLogo" src={logo} alt="this is logo"></img>
                <div className='logoname'>ONLINE BOOK SHOPPING</div>
                <div className='loginsignin'>
                    <div className='login' >
                        LOGIN
                    </div>
                    <div className='signup'  >
                        SIGNUP
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Mainpage;
