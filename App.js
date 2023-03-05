import { useState } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DateTimePicker from "@react-native-community/datetimepicker"


export default function App() {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handlePickerChange = (event, selectedDate) => {
    setDate(selectedDate || date);
    hideDateTimePicker();
  };

  const showDateTimePicker = () => {
    setShowPicker(true);
  };

  const hideDateTimePicker = () => {
    setShowPicker(false);
  };

  return (
    <View style={styles.container}>
      {Platform.OS === "ios" ?
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="datetime" // for iOS only
          display="default"
          onChange={handlePickerChange}
        />
        :
        <>
          {showPicker && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"  // for android only
              display="default"
              onChange={handlePickerChange}
            />
          )}
          <TouchableOpacity style={styles.androidPicker} onPress={showDateTimePicker}><Text>{date.toLocaleString()}</Text></TouchableOpacity>
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  androidPicker: {
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderRadius: 5
  }
});
