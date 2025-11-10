import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCUqDHNjr1BkZSS8cX065OtL7qC-2euAlI",
  authDomain: "auth-detyra-66ebf.firebaseapp.com",
  projectId: "auth-detyra-66ebf",
  storageBucket: "auth-detyra-66ebf.firebasestorage.app",
  messagingSenderId: "513220532941",
  appId: "1:513220532941:web:52cc367f96c9771fe32784"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;