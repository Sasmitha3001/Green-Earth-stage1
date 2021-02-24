import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native';
import firebase from 'firebase'
import {Card} from 'react-native-elements'
import MyHeader from '../components/Header'
import db from '../config'

export default class WelcomeScreen extends Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            username:'',
            contact:''
        }

    }

    userLogin=(email,password)=>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        alert('User logged in')
        this.props.navigation.navigate('IssuesScreen')

        .catch(function(error){})
    }

    userSignIn=(email,password)=>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        alert('User Signed in')
        
        .catch(function(error){})
    }


    render(){
      return (
      <ScrollView style={styles.container}>
    <MyHeader title={'Green Earth'}/>

    <TextInput
    style={styles.input}
    placeholder={'Enter Email'}
    keyboardType={'email-address'}
    onChangeText={text=>{this.setState({email:text})}}
    value={this.state.email}
    />

    <TextInput
    style={styles.input}
    placeholder={'Enter Password'}
    secureTextEntry={true}
    onChangeText={text=>{this.setState({email:text})}}
    value={this.state.password}
    />

    <TouchableOpacity
    style={styles.loginButton}
    onPress={()=>{this.userLogin(this.state.email,this.state.password)}}
    >
        <Text>Login</Text>
    </TouchableOpacity>

    <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, }} />

    
    <Card>
    <TextInput
    style={styles.input}
    placeholder={'Enter Email'}
    keyboardType={'email-address'}
    onChangeText={text=>{this.setState({email:text})}}
    value={this.state.email}
    />

    <TextInput
    style={styles.input}
    placeholder={'Enter Password'}
    secureTextEntry={true}
    onChangeText={text=>{this.setState({email:text})}}
    value={this.state.password}
    />

    <TextInput
    style={styles.input}
    placeholder={'Enter Username'}
    onChangeText={text=>{this.setState({email:text})}}
    value={this.state.username}
    />

    <TextInput
    style={styles.input}
    placeholder={'Enter Contact Number'}
    keyboardType={'numeric'}
    onChangeText={text=>{this.setState({email:text})}}
    value={this.state.contact}
    />

    <TouchableOpacity
    style={styles.signInButton}
    onPress={()=>{this.userSignIn(this.state.email,this.state.password)}}
    >
        <Text>Sign In</Text>
    </TouchableOpacity>
    </Card>

      </ScrollView>
    )
    }
   
  }
  
  