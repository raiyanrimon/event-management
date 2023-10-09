// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSSqK4-cqvh48qrYmA8qoJ8Wv-O0_scv8",
  authDomain: "gameon-gala.firebaseapp.com",
  projectId: "gameon-gala",
  storageBucket: "gameon-gala.appspot.com",
  messagingSenderId: "84762731348",
  appId: "1:84762731348:web:64ee1d7e0a14fb4a305ec1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app