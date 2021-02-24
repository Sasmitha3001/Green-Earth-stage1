import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements'

export default class MyHeader extends Component{
    render(){
        return(
            <Header
            centerComponent={{
                text:this.props.title,
                style:{color:'#E2F0CB'}
            }}
            />
        )
    }
}
