import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';

const App = () => {
  const [sliderState, setSliderState] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{fontWeight:'bold', fontSize: 28, color:'#151fe8'}}>Value: {sliderState}</Text>
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

export default App;
