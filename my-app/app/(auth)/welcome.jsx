import { useRouter } from "expo-router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../../firebaseConfig";

export default function Welcome() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.replace("/(auth)/login");
      } else {
        setUserEmail(user.email);
      }
      setChecking(false);
    });

    return unsub;
  }, [router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.replace("/(auth)/login");
    } catch (err) {
      console.log(err);
    }
  };

  if (checking) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="#ff2d55" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        {userEmail ? `Welcome, ${userEmail}` : "Welcome"}
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const PINK = "#ff2d55";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 32,
    backgroundColor: "#fff",
  },
  welcomeText: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 24,
    color: PINK,
    fontWeight: "600",
  },
  button: {
    height: 48,
    borderRadius: 6,
    backgroundColor: PINK,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
