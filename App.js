import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './Screens/WelcomeScreen'

export default class App extends Component{
  render(){
    return (
    <View>
      <WelcomeScreen/>
    </View>
      )
  }
 
}

