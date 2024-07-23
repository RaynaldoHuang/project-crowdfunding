// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCx2j8i-_K8aqpc7KAqCp3B1LpudPHq7ao",
  authDomain: "sedekah-78091.firebaseapp.com",
  projectId: "sedekah-78091",
  storageBucket: "sedekah-78091.appspot.com",
  messagingSenderId: "233668492220",
  appId: "1:233668492220:web:9a8356a1d95c98224f49b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)

export { storage }