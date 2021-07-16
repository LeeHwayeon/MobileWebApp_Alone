import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyBR6-RpR-0Tsdftv9hcxG7_dbm8LOu8l4A",
  authDomain: "mobile-webapp-6a337.firebaseapp.com",
  projectId: "mobile-webapp-6a337",
  storageBucket: "mobile-webapp-6a337.appspot.com",
  messagingSenderId: "991895991706",
  appId: "1:991895991706:web:cbb380dc739772bc5ef623"
};

 // Initialize Firebase
 const firebaseapp = firebase.initializeApp(firebaseConfig);

 export default firebaseapp.firestore();