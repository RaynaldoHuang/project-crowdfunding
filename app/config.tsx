// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA21VnDMwi4dh9zkMl_kX2Gj8iHXOpi3Pw",
  authDomain: "sedekah-d267d.firebaseapp.com",
  projectId: "sedekah-d267d",
  storageBucket: "sedekah-d267d.appspot.com",
  messagingSenderId: "689409304446",
  appId: "1:689409304446:web:88389f4cb8443fbe17b52f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)

export { storage }