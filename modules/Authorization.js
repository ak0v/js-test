import React from 'react'
import Firebase from 'firebase';
import FireabaseUI from 'firebaseui';

class Authorization extends React.Component{
    render(){


        var uiConfig = {
            signInOptions: [
                Firebase.auth.GoogleAuthProvider.PROVIDER_ID, 
                Firebase.auth.EmailAuthProvider.PROVIDER_ID
            ]
        }
        
        var ui = new FireabaseUI.auth.AuthUI(Firebase.auth());

        ui.start('#firebaseui-auth-container',uiConfig);

        return(
            <div>
            <h1>Authorization section to follow!</h1>
            <div id="firebaseui-auth-container"></div>
            </div>
        )
    }

}

export default Authorization