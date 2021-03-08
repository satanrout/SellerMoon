import React from "react";
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
} from "react-native";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return <ViewImageScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
