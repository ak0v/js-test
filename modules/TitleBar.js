import React from 'react';
import Countdown from './Countdown';
import CountdownReact from './CountdownReact';

class TitleBar extends React.Component{ 
    render() {
        return(
            <header className="titlebar">
                <span className="bride-name">Стефка</span>
                <span className="groom-name">&nbsp;
                    <span>&amp;</span>&nbsp;Андрей</span>
                <div className="wedding-date">21<sup></sup> Април, 2018</div>
                <CountdownReact id="countdown"></CountdownReact>
            </header>
        )
    }
}

export default TitleBar