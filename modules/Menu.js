import React from 'react';
import Scroll from 'react-scroll'; 

let Link = Scroll.Link;
class Menu extends React.Component {

    render() {
        let key=0;
        return (
        <nav id={this.props.id} className="menu"> 
            <ul>{
                this.props.items.map(function(element) {
                    key++;
                    return(<li key={key}><Link to={element.href} style={{ cursor: 'pointer' }} spy={true} smooth={true} duration={500}>{element.label}</Link></li>)
                })
            }
            </ul>
        </nav> 
        )
    }
}

export default Menu