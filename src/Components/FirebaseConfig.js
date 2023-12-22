import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCQNLLU7De90mZPLdTy4fCBm6h4OV7gjH0",
  authDomain: "emailpasswordlogin-3ce90.firebaseapp.com",
  projectId: "emailpasswordlogin-3ce90",
  storageBucket: "emailpasswordlogin-3ce90.appspot.com",
  messagingSenderId: "53565847216",
  appId: "1:53565847216:web:97f25da6570eb560312d75"
};


const app = initializeApp(firebaseConfig);
export const database = getAuth (app)