import "react-native-gesture-handler";
import React, { useRef, useState } from "react";
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Platform,
} from "react-native";
import { Drawer } from "react-native-drawer-layout"

const App = () => {
  const [open, setOpen] = React.useState(false);

  // create navigation view for android
  const navigationView = () => (
    <View style={styles.container}>
      <Text >I'm the Drawer!</Text>
    </View>
  );

  return (
    <>
      {/* Select for os */}
      {Platform.OS === "ios" ?
        <Drawer
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          renderDrawerContent={() => {
            return <View style={styles.container}>
              <Text>I'm the Drawer!</Text>
            </View>;
          }}
        >
          <View style={styles.container}>
            <Text>Swipe from the left (Drawerlayout for iOS)</Text>
          </View>
        </Drawer>
        :
        <DrawerLayoutAndroid
          drawerWidth={300}
          renderNavigationView={navigationView}>
          <View style={styles.container}>
            <Text style={styles.paragraph}>
              Swipe from the left (Drawerlayout for Android)
            </Text>
          </View>
        </DrawerLayoutAndroid>
      }
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
});

export default App;