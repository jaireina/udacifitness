import React from 'react';
import { View, Text, Slider, StyleSheet } from 'react-native';
import { gray } from '../utils/colors';

export default function UdaciSlider ({max, unit, step, value, onChange}){
  return(
    <View style={styles.row}>
       <Slider
          step={step}
          maximumValue={max}
          value={value}
          onValueChange={onChange}
          style={{flex:1}}
          step={1}
          />
        <View style={styles.metricsCounter}>
          <Text style={{fontSize:24, textAlign:'center'}}>{value}</Text>
          <Text style={{fontSize:18, textAlign:'center'}}>{unit}</Text>
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  metricCounter: {
    width: 85,
    justifyContent: 'center',
    alignItems: 'center'
  },
  row:{
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  slider:{
  }

});