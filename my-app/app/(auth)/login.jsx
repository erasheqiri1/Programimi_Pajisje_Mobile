
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../../firebaseConfig";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState("");

  const handleLoginEmail = async () => {
    setError("");

    const trimmedEmail = email.trim();

    if (!trimmedEmail || !password) {
      setError("Mbush të gjitha fushat.");
      return;
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, trimmedEmail, password);
      router.replace("/(auth)/welcome");
    } catch (err) {
      console.log(err);
      if (err.code === "auth/user-not-found") {
        setError("Ky email nuk ekziston.");
      } else if (err.code === "auth/wrong-password") {
        setError("Password i gabuar.");
      } else {
        setError("Nuk u bë login. Provo prapë.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLoginGoogle = async () => {
    setError("");

    if (Platform.OS !== "web") {
      setError("Google Sign-In punon vetëm në web.");
      return;
    }

    try {
      setLoading(true);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.replace("/(auth)/welcome");
    } catch (err) {
      console.log(err);
      setError("Google login dështoi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={handleLoginEmail}
        disabled={loading}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.replace("/(auth)/signup")}>
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>

      <View style={{ height: 24 }} />

      <TouchableOpacity
        style={[styles.googleButton, loading && styles.googleButtonDisabled]}
        onPress={handleLoginGoogle}
        disabled={loading}
      >
        <View style={styles.googleContent}>
          <AntDesign name="google" size={20} style={styles.googleIcon} />
          <Text style={styles.googleText}>Continue with Google</Text>
        </View>
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
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    height: 48,
    borderRadius: 6,
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  button: {
    height: 48,
    borderRadius: 6,
    backgroundColor: PINK,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
    marginBottom: 12,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  linkText: {
    textAlign: "center",
    color: PINK,
    fontWeight: "500",
  },
  error: {
    color: "red",
    marginBottom: 8,
    textAlign: "center",
  },
  googleButton: {
    height: 48,
    borderRadius: 6,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  googleButtonDisabled: {
    opacity: 0.7,
  },
  googleContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  googleIcon: {
    marginRight: 8,
  },
  googleText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#000",
  },
});



