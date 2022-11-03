import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBB-yrvHHiZn0sZxEsmHjYES2Wzii5U8cE",
    authDomain: "e-commerce-41692.firebaseapp.com",
    projectId: "e-commerce-41692",
    storageBucket: "e-commerce-41692.appspot.com",
    messagingSenderId: "471136289850",
    appId: "1:471136289850:web:a6c85d04cfb6da6b176103",
    measurementId: "G-CRPGGTEDH6"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  export const Auth = getAuth(app)
  export const db = getFirestore(app)
  

  