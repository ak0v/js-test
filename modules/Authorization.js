import React from 'react'
import firebase from './firebase';   

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
        this.handleCheckboxChange =  this.handleCheckboxChange.bind(this);
        this.handleSubmit =  this.handleSubmit.bind(this);
    }           

    handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

    handleCheckboxChange(e) {
        this.setState({
          [e.target.name]: e.target.checked
        });
      }

      handleSubmit(e) {
        e.preventDefault();
        const guestRef = firebase.database().ref('guest');
        const guest = { firstGuestName : this.state.firstGuestName,
                        firstGuestEmail : this.state.firstGuestEmail, 
                        secondGuestName : this.state.secondGuestName,
                        secondGuestEmail: this.state.secondGuestEmail, 
                        vegetarianYN : this.state.vegetarianYN,
                        vegetarianMenus : this.state.vegetarianMenus,
                        childYN : this.state.childYN,
                        childMenus : this.state.childMenus}
        guestRef.push(guest); 
        const mailOptions = {

        }
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
        const vegetarianYN = this.state.vegetarianYN;
        const childYN = this.state.childYN;

        return( 
            <div id={this.props.id} className="wizard-form" > 
            <form onSubmit={this.handleSubmit}>
                <div className="rsvp-section">
                    <label>Име на гост:</label>
                    <input type="text" name="firstGuestName" placeholder="Вашите имена?" onChange={this.handleChange} value={this.state.firstGuestName} />
                </div>
                <div className="rsvp-section">
                    <label>Електонна поща:</label>
                    <input type="text" name="firstGuestEmail" placeholder="Адрес на електронна поща?" onChange={this.handleChange} value={this.state.firstGuestEmail} />
                </div>
                <div className="rsvp-section">
                    <label>Име на гост:</label>
                    <input type="text" name="secondGuestName" placeholder="Вашите имена?" onChange={this.handleChange} value={this.state.secondGuestName} />
                </div>
                <div className="rsvp-section">
                    <label>Електронна поща</label>
                    <input type="text" name="secondGuestEmail" placeholder="Адрес на елетронна поща?" onChange={this.handleChange} value={this.state.secondGuestEmail} />
                </div>
                <div className="rsvp-section">
                    <label>Желаете ли вегетарианско меню?</label>
                    <input type="checkbox" name="vegetarianYN" onChange={this.handleCheckboxChange} checked={this.state.vegetarianYN}/>
                </div>
                {vegetarianYN === true && <div className="rsvp-section">
                    <input type="number" name="vegetarianMenus" placeholder="0" onChange={this.handleChange} value={this.state.vegetarianMenus}/>
                </div>}
                <div className="rsvp-section">
                    <br/>
                    <label>Желаете ли детско меню?</label>
                    <input type="checkbox" name="childYN" onChange={this.handleCheckboxChange} checked={this.state.childYN}/>
                </div>
                {childYN === true && <div className="rsvp-section">
                    <input type="number" name="childMenus" placeholder="0" onChange={this.handleChange} value={this.state.childMenus}/>
                </div>}
                <br/>
                <button type="submit">Submit</button>
            </form>
            </div>
        )
    }

}

export default Authorization;
