import React from 'react';
import {View, Text, Switch, KeyboardAvoidingView} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class FormTest extends React.Component {
  state={
    showInput: false,
    input:'@jaireina'
  }
  handleToggleSwitch = ()=>{
    this.setState(state=>({
      showInput: !state.showInput
    }))
  }

  handleTextChange = (input)=>{
    this.setState({input});
  }
  render(){
    const {showInput, input} = this.state;
    return(
      <KeyboardAvoidingView behavior="padding">
        <Switch 
          value={showInput}
          onValueChange={this.handleToggleSwitch}
        />
        {showInput===true &&(
          <TextInput 
            value={input}
            onChangeText={this.handleTextChange}
          />
        )}
      </KeyboardAvoidingView>
    );
  }
  
}