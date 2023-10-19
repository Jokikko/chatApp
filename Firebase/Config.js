import { initializeApp } from "firebase/app";
import {getFirestore, collection, addDoc, serverTimestamp, querySnapshot} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB60eB-JxeMyT9tm-aXxZftz49t9Fgt5so",
  authDomain: "chat-b41f4.firebaseapp.com",
  projectId: "chat-b41f4",
  storageBucket: "chat-b41f4.appspot.com",
  messagingSenderId: "566178101181",
  appId: "1:566178101181:web:905c3668e641dba23984d4"
};

initializeApp(firebaseConfig);

const firestore = getFirestore();

const MESSAGES = 'messages';

export {
  firestore,
  MESSAGES,
  addDoc,
  collection,
  serverTimestamp,
};