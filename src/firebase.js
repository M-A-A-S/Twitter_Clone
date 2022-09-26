import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCUJvnCNwNA0TjssyjAbwZiR_0Rr5mCVww",
    authDomain: "twitter-clone-226a1.firebaseapp.com",
    projectId: "twitter-clone-226a1",
    storageBucket: "twitter-clone-226a1.appspot.com",
    messagingSenderId: "20711830374",
    appId: "1:20711830374:web:c98950236b791db9260ea7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;