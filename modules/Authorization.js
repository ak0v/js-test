import React from 'react'
import Firebase from 'firebase';
import FireabaseUI from 'firebaseui';

class Authorization extends React.Component{
    render(){
        var config = {
            apiKey: "AIzaSyDUZr5cXYcaxpNNprzWUadEkm4_wbNycjk",
            authDomain: "js-training-1.firebaseapp.com",
            databaseURL: "https://js-training-1.firebaseio.com",
            projectId: "js-training-1",
            storageBucket: "js-training-1.appspot.com",
            messagingSenderId: "1020111315819"
          };

        Firebase.initializeApp(config);

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