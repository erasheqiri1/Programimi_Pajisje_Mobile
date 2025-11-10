# Firebase Google Authentication (Expo Web) 
This project is a simple **React Native (Expo Web)** app built using **Firebase Authentication** for user signup and login.
The app supports:
- Sign up with **email & password**
- Login with **email & password**
- Login with **Google**
- A **Welcome page** that displays the logged-in user's name
--------------------------------------------------------------------------------
## Set up instuctions
1. Clone the repository
    ```bash
    git clone https://github.com/erasheqiri1/Programimi_Pajisje_Mobile.git
   cd Programimi_Pajisje_Mobile
   ```
2.Install depencendies
```bash
   npm install
   ```
3. Clone the repository
   -Go to [Firebase Console](https://console.firebase.google.com/)
   -Create a **new Firebase project**
   -Navigate to **Authentication → Sign-in Method**
   - Enable **Email/Password**
   - Enable **Google**
   -Go to **Project Settings → General → Your apps → Web App**
   - Copy your Firebase configuration object
   -In your project, create a file named **firebaseConfig.ts** and paste your config inside it:
   ```bash
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
   ```
4.Run the app in web mode
```bash
npm run rweb
```
--------------------------------------------------------------
In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
