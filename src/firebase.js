
 import { initializeApp } from "firebase/app";
 import { getFirestore } from "@firebase/firestore";
 

 const firebaseConfig = {
    apiKey: "AIzaSyB_VO4S4IrK2iCoCn03dP8S-KCgCLliQ5M",
    authDomain: "clicks-d5c7c.firebaseapp.com",
    projectId: "clicks-d5c7c",
    storageBucket: "clicks-d5c7c.appspot.com",
    messagingSenderId: "690042486296",
    appId: "1:690042486296:web:0d638a7d3cc490e7ad0d6d"
  };
  
 const app = initializeApp(firebaseConfig);
 export const firestore = getFirestore(app);