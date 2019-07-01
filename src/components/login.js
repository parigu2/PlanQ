import React, { Component } from 'react';
import {Input, Icon} from 'react-native-elements'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  static navigationOptions = {
    header: null
  }
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={{fontSize: 35, color: 'white'}}>Plan Q</Text>
          <Text style={{fontSize: 25, color: 'white'}}>Log in</Text>
          <View style={{width: '100%', borderBottomWidth: 0.5, borderColor: '#444'}}/>
        </View>
        <View style={[styles.main, {backgroundColor: 'gray'}]}>
          <View style={styles.inputField}>
            <View style={{width: '100%'}}>
              <Text style={{fontSize: 25, color: 'white'}}>Username</Text>
              <TextInput style={styles.input} onChangeText={username=>this.setState({username})} placeholder="username"/>
            </View>
          </View>
          <View style={[styles.inputField, {marginBottom: 40}]}>
            <View style={{width: '100%'}}>
              <Text style={{fontSize: 25, color: 'white'}}>Password</Text>
              <TextInput style={styles.input} onChangeText={password=>this.setState({password})} placeholder="password" secureTextEntry={true}/>
            </View>
          <Input
            placeholder='INPUT WITH ICON'
            leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
          />

          <Input
            placeholder='INPUT WITH CUSTOM ICON'
            leftIcon={
              <Icon
                name='user'
                size={24}
                color='black'
              />
            }
          />
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('Main')}>
            <Text style={{fontSize: 25, color: 'white'}}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, {backgroundColor: "#B22222"}]} onPress={()=>this.props.navigation.navigate('Home')}>
            <Text style={{fontSize: 25, color: 'white'}}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  title: {
    marginTop: 20,
  },
  main: {
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
    marginTop: 25,
  },
  button: {
    backgroundColor: '#023e73',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5,
    padding: 10
  },
  footer: {

  },
  input: {
    fontSize: 25,
    borderColor: '#aaa',
    width: '70%',
    height: 35,
    borderWidth: 1,
    borderRadius: 5,
    padding: 5
  },
  inputField: {
    marginTop: 40,
    marginLeft: 20,
    alignItems: 'center',
  }
});