import React from 'react';
import Countdown from './Countdown';

class TitleBar extends React.Component{
    render() {
        return(
            <header className="titlebar">
                <span className="bride-name">Стефка</span>
                <span className="groom-name">&nbsp;
                    <span>&amp;</span>&nbsp;Андрей</span>
                <div className="wedding-date">21<sup></sup> Април, 2018</div>
                <Countdown id="countdown"></Countdown>
            </header>
        )
    }
}

export default TitleBar