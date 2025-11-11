# Firebase Google Authentication (Expo Web) 
This project is a simple **React Native (Expo Web)** app built using **Firebase Authentication** for user signup and login.
The app supports:
- Sign up with **email & password**
- Login with **email & password**
- Login with **Google**
- A **Welcome page** that displays the logged-in user's name
----------------------------------------------------------------------------------------------------------------
## Screenshots

### Google Sign-In Screen
![Foto 1](assets/foto12.png)

### Welcome Page
![Foto 3](assets/foto3.png)

### Firbase User Console
![Foto 4](assets/foto4.png)

-----------------------------------------------------------------------------------------------------------
##Features














------------------------------------------------------------------------------------------------------------------
## Set up instuctions
###1. Clone the repository
  ```bash
   https://github.com/erasheqiri1/Programimi_Pajisje_Mobile.git
   cd my-app
   ```
###2. Install dependencies
   ```bash
   npm install
   ```
###3. Create e firebase project
 - Go to [Firebase Console](https://console.firebase.google.com/)
 - Create a new Firebase project
 - Navigate to Authentiacation → Sign-in Method
      -Enable **Email/Password**
      -Enabble **Google**
 -Go to Project Settings→ General → Your apps → Web App
      -Copy your Friebase config
 -In your project, create a file name **friebaseCongig.js** and paste your config inside it
    ```bash
   // firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
   ```
----------------------------------------------------------------------------------------------------------------
##4.Run the web in web mode
   ```bash
   npm run web
   ```
---------------------------------------------------------------------------------------------------------------------
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
