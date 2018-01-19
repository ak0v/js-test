import React from 'react';

class CountdownReact extends React.Component {
    constructor(){
        super();
        this.state = { days:0,
                       hours:0,
                       minutes:0,
                       seconds:0 };  
        this.deadline = new Date("Apr 21, 2018 17:30:00").getTime();
    }

    componentWillMount(){
        this.transformCountdowndate(this.deadline);
    }

    componentDidMount(){
        setInterval(() => this.transformCountdowndate(this.deadline), 1000);
    }
    transformCountdowndate(deadline){
        const distance = deadline - new Date().getTime();
        // Time calculations for days, hours, minutes and seconds
        const d = Math.floor(distance / (1000 * 60 * 60 * 24));
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);
        this.setState({days:d,hours:h,minutes:m,seconds:s});
    }
    render(){
       return(
        <div className="countdown">
            <span className="number" >{this.state.days}<small>&nbsp;дни</small>&nbsp;</span>
            <span className="number" >{this.state.hours}<small>&nbsp;часа</small>&nbsp;</span>
            <span className="number" >{this.state.minutes}<small>&nbsp;минути</small>&nbsp;</span>
            <span className="number" >{this.state.seconds}<small>&nbsp;секунди</small>&nbsp;</span>  
        </div>
       )
    }
} 
export default CountdownReact 