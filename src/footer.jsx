import React, { useState } from 'react';
import './footer.css'

function Footer() {
    const currentYear = new Date().getFullYear();
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(prevState => !prevState);
    };

    return (
        <>
                <footer className="footer">
            <h4 id="margin">© {currentYear} GIGI's development. All rights reserved.</h4>
            <div className="toggle-container">
                <div className="toggle-switch" onClick={handleToggle}>
                    <div className={`switch ${isOn ? 'on' : 'off'}`}>
                        <div className="toggle-circle"></div>
                    </div>
                    <span>{isOn ? 'white' : 'dark'}</span>
                </div>
            </div>
        </footer>
        {isOn && <style>{`
        .footer{
         border-top: 1px solid black;
        }
        main{
        background-image: url('https://raw.githubusercontent.com/GIGIsOtherStuff/reactFacts/main/Media/reactBlue.png');
        color: black;
        }
        body{
        background-color: hsl(0, 0%, 90%);
        transition: background-color 0.5s ease;
        }
        nav li a{
        color: black;
        }
        .footer, header{
        background-color: hsl(0, 0%, 60%);
        color: black;
        transition: color 0.5s ease;
        transition: background-color 0.5s ease;
        }


        `}</style>}
        </>
    )
}

export default Footer;