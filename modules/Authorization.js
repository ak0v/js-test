import React from 'react'
import Firebase from 'firebase';
import FireabaseUI from 'firebaseui';

class Authorization extends React.Component{
    constructor(){
        super();
        this.state={firstGuestName : '',
                    firstGuestEmail : '', 
                    secondGuestName : '',
                    secondGuestEmail: '', 
                    vegetarianYN : false,
                    vegetarianMenus : 0,
                    childYN : false,
                    childMenus : 0}

        this.handleChange =  this.handleChange.bind(this);
        this.handleSubmit =  this.handleSubmit.bind(this);
    }           

    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

      handleSubmit(e) {
        e.preventDefault();
        const guestRef = Firebase.database().ref('guest');
        const guest = { firstGuestName : '',
                        firstGuestEmail : '', 
                        secondGuestName : '',
                        secondGuestEmail: '', 
                        vegetarianYN : false,
                        vegetarianMenus : 0,
                        childYN : false,
                        childMenus : 0}
        guestRef.push(guest);
        this.setState({ firstGuestName : '',
                        firstGuestEmail : '', 
                        secondGuestName : '',
                        secondGuestEmail: '', 
                        vegetarianYN : false,
                        vegetarianMenus : 0,
                        childYN : false,
                        childMenus : 0});
      }

    render(){
        
        return(
            <div id={this.props.id} className="wizzard-form" >
            <h1>Authorization section to follow!</h1>
            <form onSubmit={this.handleSubmit}>
                <div id="firstGuestName" className="rsvp-section">
                    <label>firstGuestName</label>
                    <input type="text" name="firstGuestName" placeholder="What's your name?" onChange={this.handleChange} value={this.state.firstGuestName} />
                </div>
                <div id="firstGuestEmail" className="rsvp-section">
                    <label>firstGuestEmail</label>
                    <input type="text" name="email" placeholder="What's your email address?" onChange={this.handleChange} value={this.state.firstGuestEmail} />
                </div>
                <div id="secondGuestName" className="rsvp-section">
                    <label>secondGuestName</label>
                    <input type="text" name="secondGuestName" placeholder="What's your name?" onChange={this.handleChange} value={this.state.secondGuestName} />
                </div>
                <div id="secondGuestEmail" className="rsvp-section">
                    <label>secondGuestEmail</label>
                    <input type="text" name="email" placeholder="What's your email address?" onChange={this.handleChange} value={this.state.secondGuestEmail} />
                </div>
                <div className="rsvp-section">
                    <label>Vegetarian?</label>
                    <input type="checkbox" name="vegetarianYN" onChange={this.handleChange} value={this.state.vegetarianYN}/>
                </div>
                {this.state.vegetarianYN === true && <div className="rsvp-section">
                    <input type="number" name="vegetarianMenus" placeholder="0" onChange={this.handleChange} value={this.state.vegetarianMenus}/>
                </div>}
                <div className="rsvp-section">
                    <label>Child?</label>
                    <input type="checkbox" name="childYN" onChange={this.handleChange} value={this.state.childYN}/>
                </div>
                {this.state.childYN === true && <div className="rsvp-section">
                    <input type="number" name="childMenus" placeholder="0" onChange={this.handleChange} value={this.state.childMenus}/>
                </div>}
                <button>Submit</button>
            </form>
            </div>
        )
    }

}

export default Authorization