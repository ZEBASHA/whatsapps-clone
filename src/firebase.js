import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';
import 'firebase/firestore';


const firebaseConfig = {

    apiKey: "AIzaSyArLp-1g0ZMn8SYvSCmIjjh0i6ldMhdm_M",
    authDomain: "whatsapp-firebase-64422.firebaseapp.com",
    projectId: "whatsapp-firebase-64422",
    storageBucket: "whatsapp-firebase-64422.appspot.com",
    messagingSenderId: "781604002980",
    appId: "1:781604002980:web:0e779769c88701dcf0da31"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore(); 
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
