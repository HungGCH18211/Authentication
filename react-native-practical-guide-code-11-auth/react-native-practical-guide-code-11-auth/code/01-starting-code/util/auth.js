import { StyleSheet, Text, View } from "react-native";
import React from "react";
import axios from "axios";

const API_KEY = "AIzaSyD4CwuSkBOLcpB05RNs4LRurWF64rfqMz8";

export async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const res = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  if (mode === "signUp") {
    console.log("Signup data:", res.data);
  } else {
    console.log("Login data:", res.data);
  }
}

export async function createUser(email, password) {
  await authenticate("signUp", email, password);
}

export async function login(email, password) {
  await authenticate("signInWithPassword", email, password);
}
