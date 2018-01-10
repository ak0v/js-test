import React from 'react';



class Countdown extends React.Component{
    render(){
        let countDownDate = new Date("Apr 21, 2018 16:30:00").getTime();
        let now = new Date().getTime();
        var distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        return(
            
            <div className="countdown">
                <span className="number" >{days}<small>дни</small>&nbsp;</span>
                <span className="number" >{hours}<small>часа</small>&nbsp;</span>
                <span className="number" >{minutes}<small>минути</small>&nbsp;</span>
                <span className="number" >{seconds}<small>секунди</small>&nbsp;</span>
            </div>
        )
    }
}

export default Countdown