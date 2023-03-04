import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {Platform.OS === "ios" ?
        <Text style={styles.text}>Styling Specific Platforms using the Platform Module (For iOS).</Text>
        : <Text style={styles.text}>Styling Specific Platforms using the Platform Module (For android)</Text>
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS === "ios" ? "grey" : "white",
    alignItems: 'center',
    justifyContent: Platform.select({
      ios: "center",
      android: 'flex-end',
    }),
    padding: 20,
    textAlign: 'center',
  },
  text: {
    color: Platform.OS === "android" ? "black" : "white",
    fontSize: 36,
  },
});