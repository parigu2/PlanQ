import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import LoginNavigator from './LoginNavigator';
// import Home from './src/components/home';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <LoginNavigator/>
      // <View style={styles.container}>
      //   <View style={styles.title}>
      //     <Text style={{fontSize: 35, color: 'white'}}>Plan Q</Text>
      //     <Text style={{fontSize: 25, color: 'white'}}>Beta Test for trip in 2019</Text>
      //   </View>
      //   <Image style={styles.mainImg} source={require("./img/seoul.jpg")}/>
      //   <View style={styles.footer}>
      //     <TouchableOpacity style={styles.button}><Text style={{fontSize: 25, color: 'white'}}>Log In</Text></TouchableOpacity>
      //     <TouchableOpacity style={[styles.button, {backgroundColor: "#023e73"}]}><Text style={{fontSize: 25, color: 'white'}}>Sign up</Text></TouchableOpacity>
      //   </View>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
    // backgroundColor: '#F5FCFF',
  },
  title: {
    height: '10%'
  },
  mainImg: {
    height: '65%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
    marginTop: 25,
  },
  button: {
    backgroundColor: 'gray',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 5,
    padding: 10
  },
  footer: {
    height: '15%',
  }
});
