import React, { useState } from 'react';
import { View, Switch, Platform, StyleSheet } from 'react-native';

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      {Platform.OS === 'ios' ?
        <Switch
          trackColor={{ false: 'orange', true: 'green' }}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="red" // only available for ios and not for android
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        :
        <View style={styles.container}>
          <Switch
            trackColor={{ false: 'red', true: 'green' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  }
})