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
            
            <div>
                <span>{days}<small>days</small></span>
                <span>{hours}<small>hours</small></span>
                <span>{minutes}<small>minutes</small></span>
                <span>{seconds}<small>seconds</small></span>
            </div>
        )
    }
}

export default Countdown