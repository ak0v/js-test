import React from 'react';

class TopicContainer extends React.Component{
    render(){
        return(
        <div id={this.props.id} className="topic-wrapper">
          <section>
            <h1>{this.props.title}</h1>
            <div>{this.props.children}</div>
          </section>
        </div>
        )
    }
}

export default TopicContainer