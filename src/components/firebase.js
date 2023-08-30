import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCdBUVYY357zfQfLZGy1cl3tBU6VZE576Q",
  authDomain: "tradexcapital-74108.firebaseapp.com",
  projectId: "tradexcapital-74108",
  storageBucket: "tradexcapital-74108.appspot.com",
  messagingSenderId: "634212085005",
  appId: "1:634212085005:web:47ac7c8fb1aaf06c925444"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;