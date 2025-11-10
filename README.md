# Firebase Google Authentication (Expo Web) 👋
This project is a simple **React Native (Expo Web)** app built using **Firebase Authentication** for user signup and login.
The app supports:
- Sign up with **email & password**
- Login with **email & password**
- Login with **Google**
- A **Welcome page** that displays the logged-in user's name


## Demo
![Signup Screen](./assets/foto1.PNG)
![Login Screen](./assets/foto2.PNG)
![Welcome Screen](./assets/foto3.PNG)
![App Overview](./assets/foto4.PNG)

## Setup Instructions
1. **Clone the repository**
   ```bash
   git clone https://github.com/erasheqiri1/Programimi_Pajisje_Mobile.git
   cd Programimi_Pajisje_Mobile


2. Install depecendies
npm install


3. create a firebase config
Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a **new Firebase project**
3. Navigate to **Authentication → Sign-in Method**
   - Enable **Email/Password**
   - Enable **Google**
4. Go to **Project Settings → General → Your apps → Web App**
   - Copy your Firebase configuration object
5. In your project, create a file named **firebaseConfig.ts** and paste your config inside it:

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCUqDHNjr1BkZSS8cX065OtL7qC-2euAlI",
  authDomain: "auth-detyra-66ebf.firebaseapp.com",
  projectId: "auth-detyra-66ebf",
  storageBucket: "auth-detyra-66ebf.firebasestorage.app",
  messagingSenderId: "513220532941",
  appId: "1:513220532941:web:52cc367f96c9771fe32784",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

## Folder Structure

├── app
│   ├── (auth)
│   │   ├── login.jsx        # Login screen (email/password + Google)
│   │   ├── signup.jsx       # Signup screen (email/password)
│   │   └── welcome.jsx      # Welcome screen (shows user name)
│   ├── _layout.jsx          # Main layout that defines Stack navigation for auth screens
│   └── index.jsx            # Redirects user to /auth/login
├── firebaseConfig.ts        # Firebase initialization & auth export
├── package.json
└── README.md
