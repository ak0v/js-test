import firebase from 'firebase';


  // Initialize Firebase
const config = {
    apiKey: "AIzaSyDUZr5cXYcaxpNNprzWUadEkm4_wbNycjk",
    authDomain: "js-training-1.firebaseapp.com",
    databaseURL: "https://js-training-1.firebaseio.com",
    projectId: "js-training-1",
    storageBucket: "js-training-1.appspot.com",
    messagingSenderId: "1020111315819" 
  };

firebase.initializeApp(config); 

export default firebase;