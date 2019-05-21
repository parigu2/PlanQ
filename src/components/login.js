import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

export default class Login extends Component{
  constructor(props){
    super(props);
  }

  static navigationOptions = {
    header: null
  }
  render(){
    return(
      <View>
        <Text>Log in Page</Text>
        <Button 
          title="back to home"
          onPress={()=>this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}