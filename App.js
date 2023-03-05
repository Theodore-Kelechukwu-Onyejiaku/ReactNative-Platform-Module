import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { WebView } from "react-native-webview"

export default function App() {
  return (
    Platform.OS === "ios" ?
      <WebView source={{ uri: "https://blog.openreplay.com/" }} cacheEnabled={true} />
      :
      <WebView source={{ uri: "https://blog.openreplay.com/" }} geolocationEnabled={true} scalesPageToFit={true} domStorageEnabled={true} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
