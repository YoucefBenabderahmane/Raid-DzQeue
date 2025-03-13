import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace("/owner/dashboard");
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>Login</Text>

      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}

      <TextInput
        placeholder="Email"
        style={{ width: "100%", borderBottomWidth: 1, marginBottom: 10, padding: 8 }}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={{ width: "100%", borderBottomWidth: 1, marginBottom: 10, padding: 8 }}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        onPress={handleLogin}
        style={{ backgroundColor: "blue", padding: 12, width: "100%", alignItems: "center" }}
      >
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={{ color: "#fff" }}>Login</Text>}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/auth/register")} style={{ marginTop: 10 }}>
        <Text style={{ color: "blue" }}>Create an account</Text>
      </TouchableOpacity>
    </View>
  );
}
