import React, {Component} from 'react';
import {StyleSheet, Text, View, AppRegistry} from 'react-native';

class Flex extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.box]}/>
        <View style={[styles.box, {flex:2,alignSelf:'flex-end'}]}/>
        <View style={[styles.box]}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: '#e76e63',
    margin: 10,
    flex: 1
  }
})

export default Flex;