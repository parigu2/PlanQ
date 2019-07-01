import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default class Main extends Component {
  static navigationOptions = {
      header: null
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={{fontSize: 35, color: 'white'}}>Plan Q</Text>
          <Text style={styles.text}>Beta Test for trip in 2019</Text>
        </View>
        <View style={styles.main}>
          <Text style={styles.text}>Body</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.text}>Footer</Text>
        </View>
      </View>
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
    height: '10%',
    marginTop: 20,
  },
  main: {
    height: '63%',
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
  },
  text: {
      fontSize: 25,
      color: 'white'
  }
});
