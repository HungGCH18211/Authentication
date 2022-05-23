import { StyleSheet, Text, View } from "react-native";
import React from "react";
import axios from "axios";

const API_KEY = "AIzaSyD4CwuSkBOLcpB05RNs4LRurWF64rfqMz8";

async function createUser(email, password) {
  const res = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=" +
      API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}

export default createUser;
