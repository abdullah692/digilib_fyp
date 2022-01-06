import React from 'react'
import {StyleSheet} from 'react-native'
import AboutUs from './Components/AboutUs'
import ContactUs from './Components/ContactUs'
import Home from './Components/Home'
import Login from './Registeration/Login'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'


const Drawer=createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
<Drawer.Navigator initialRouteName="Home">
  <Drawer.Screen  name="Home" component={Home}/> 
  <Drawer.Screen  name="Login" component={Login}/> 
  <Drawer.Screen  name="About Us" component={AboutUs}/> 
  <Drawer.Screen  name="Contact Us" component={ContactUs}/> 
  </Drawer.Navigator>
</NavigationContainer> 
  )
}

export default App

const styles=StyleSheet.create({
  container:
  {
    flex:1,
    textAlign:'center',
    justifyContent:'center',
    backgroundColor:'#fff'
  }
})