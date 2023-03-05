import React from 'react';
import { Platform, StatusBar, View, Text } from 'react-native';

export default function App() {
  const isIOS = Platform.OS === 'ios';

  return (
    <View style={{ flex: 1 }}>
      {isIOS && (
        <StatusBar barStyle="dark-content" networkActivityIndicatorVisible={true} />
      )}
      {!isIOS && (
        <StatusBar barStyle="light-content" backgroundColor="red" />
      )}
      <View style={{ flex: 1, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: "center" }}>
        <Text>This is about Status Bar. Check the top of the screen.</Text>
      </View>
    </View>
  );
}
