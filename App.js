import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const App = () => {
  const [sliderState, setSliderState] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Value: {sliderState}</Text>
      <Slider
        style={{ width: 300, height: 40 }}
        minimumValue={0}
        maximumValue={100}
        step={25}
        value={sliderState}
        minimumTrackTintColor='#151fe8'
        maximumTrackTintColor='#87878a'
        onValueChange={(value) => setSliderState(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight:'bold', 
    fontSize: 28, 
    color:'#151fe8'
  }
});

export default App;
