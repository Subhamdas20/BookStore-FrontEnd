import React from 'react';
import './Mainpage.scss'
import logo from '../../logo/logo.png'
import Login from '../../components/login/Login';

function Mainpage() {
    const [options, setOptions] = React.useState(true)
    const changeOptions = () => {
        setOptions(true)
    }

    return (<div>
        <div className='home-container'>
            <div className='left-image'>
                <img className="mainLogo" src={logo} alt="this is logo"></img>
                <div className='logoname'>ONLINE BOOK SHOPPING</div>
                <div className='loginsignin'>
                    <div className='login' onClick={changeOptions}>
                        LOGIN
                    </div>
                    <div className='signup'  >
                        SIGNUP
                    </div>
                    <div className='loginsignincomponents'>
                    {options ? <Login /> : ""}
                    </div>
                </div>
               

            </div>
        </div>
    </div>);
}

export default Mainpage;
