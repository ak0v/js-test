import React from 'react';
import Countdown from './Countdown';

class TitleBar extends React.Component{
    render() {
        return(
            <header id={this.props.id} className="titlebar">
                <span className="bride-name">Стефка</span>
                <span className="groom-name">&nbsp;
                    <span>+</span>Андрей</span>
                <div className="wedding-date">21<sup>st</sup> APRIL, 2018</div>
                <Countdown></Countdown>
            </header>
        )
    }
}

export default TitleBar