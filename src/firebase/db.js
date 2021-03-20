import firebase from 'firebase';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA2rczLjUqTi1GIaj4zTWvHcEZz62WIiB8",
    authDomain: "vue-todo-4ddf9.firebaseapp.com",
    projectId: "vue-todo-4ddf9",
    storageBucket: "vue-todo-4ddf9.appspot.com",
    messagingSenderId: "304911303772",
    appId: "1:304911303772:web:21cfe2c18a7ed6bacd9299"
};
// Initialize Firebase
export const db = firebase.initializeApp(firebaseConfig).firestore();