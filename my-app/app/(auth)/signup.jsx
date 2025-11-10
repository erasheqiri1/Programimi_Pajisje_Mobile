// app/(auth)/signup.jsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";
import { auth } from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async () => {
    setError("");
    const trimmedEmail = email.trim();

    if (!trimmedEmail || !password) {
      setError("Mbush të gjitha fushat.");
      return;
    }

    if (!trimmedEmail.includes("@") || !trimmedEmail.includes(".")) {
      setError("Email jo valid.");
      return;
    }

    if (password.length < 6) {
      setError("Password duhet të ketë min. 6 karaktere.");
      return;
    }

    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, trimmedEmail, password);
      router.replace("/(auth)/welcome");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        setError("Ky email është i regjistruar.");
      } else {
        setError("Diçka shkoi keq. Provo prapë.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>

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
        onPress={handleSignup}
        disabled={loading}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.replace("/(auth)/login")}>
        <Text style={styles.linkText}>Already have an account? Log In</Text>
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
    color: PINK,
  },
  input: {
    height: 48,
    borderRadius: 6,
    backgroundColor: "#ffe6ef",
    paddingHorizontal: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#ffc2d6",
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
});
