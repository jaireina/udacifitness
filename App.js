import React, {Component} from 'react';
import { 
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Slider,
  Image,
  Picker
} from 'react-native';
import AddEntry from './components/AddEntry';
import ListTest from './components/ListTest';
import FormTest from './components/FormTest';
import Flex from './components/Flex';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';


export default class App extends Component {
  // state = {
  //   value: 0,
  //   language: 'java'
  // }

  // handlePress = ()=>{
  //   alert('hello');
  // }  
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={styles.container}>
        
          {/* <TouchableHighlight
            style={styles.btn}
            onPress={this.handlePress}
            underlayColor='#d4271b'
            >
            <Text style={styles.btnText}>Touchable Highlight</Text>  
          </TouchableHighlight>
          <TouchableOpacity
            style={styles.btn}
            onPress={this.handlePress}
            >
            <Text style={styles.btnText}>Touchable Highlight</Text>  
          </TouchableOpacity>
          <TouchableWithoutFeedback
            onPress={this.handlePress}
            >
            <View style={styles.btn}>
              <Text style={styles.btnText}>Touchable Without Feedback</Text>
            </View>
          </TouchableWithoutFeedback> */}
        
          {/* <Flex /> */}

          {/* <FormTest /> */}
          
          {/* <Picker
            selectedValue={this.state.language}
            onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
          </Picker>
          
          <Image 
            style={styles.img}
            source={require('./gal.jpg')}
          />
          <View style={{margin:50}} />
          <Image 
            style={styles.img} 
            source={{uri:'https://orig00.deviantart.net/1466/f/2017/185/b/f/wonder_woman___gal_gadot_by_raffaelemarinetti-dbf2jjx.jpg'}} 
          /> */}

          <AddEntry />
          
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10, 
    // alignItems: 'center',
    //justifyContent: 'center'
  },
  btn: {
    backgroundColor: '#E53224',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  btnText: {
    color: '#fff'
  },
  img:{
    width: 100,
    height: 100,
    borderRadius: 50
  }
});
