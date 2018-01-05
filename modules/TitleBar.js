import React from 'react';

class TitleBar extends React.Component{
    render() {
        return(
            <header id={this.props.id} className="titleBar">
                <span className="name1">Name1</span>
                <span className="name2"><span>+</span>Name2</span>
                <div className="date1">Date</div>
                <div className="counter">Counter</div>
            </header>
        )
    }
}

export default TitleBar