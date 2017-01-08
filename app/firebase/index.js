import firebase from 'firebase';

try {
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDdCESNW8Z3Shi5CC5YdhXcUdqHoDMQi_g",
    authDomain: "todo-app-eeaf6.firebaseapp.com",
    databaseURL: "https://todo-app-eeaf6.firebaseio.com",
    storageBucket: "todo-app-eeaf6.appspot.com",
    messagingSenderId: "427749927434"
  };
  firebase.initializeApp(config);
} catch (e) {
    console.log(e);
}

export const firebaseRef = firebase.database().ref();
export default firebase;
