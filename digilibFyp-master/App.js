import React, {useEffect, useReducer, useState} from 'react';
import {StyleSheet, StatusBar, View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import DrawerContainer from './Drawer/DrawerContainer';
import SplashScreen from 'react-native-splash-screen';
<<<<<<< HEAD:digilib-front-master/App.js
import {store} from './store';
import {Provider} from 'react-redux';

function App() {
  useEffect(() => {
=======
import { store } from './store'
 import { Provider } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';

 function App() {
  useEffect(()=>{
>>>>>>> 0c51cf98cd13a0bade8a7b99bb01cf32168719a7:digilibFyp-master/App.js
    SplashScreen.hide();
  });

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={'#fff'} barStyle="dark-content" />
        <DrawerContainer />
      </NavigationContainer>
    </Provider>
  );
}
{
  /* <Drawer.Navigator initialRouteName="Home" >       
        <Drawer.Screen name="Home" component={StackHome} />
        <Drawer.Screen name="Registration" component={StackRegisteration} />
        <Drawer.Screen name="About Us" component={StackAbout} />
        <Drawer.Screen name="Contact Us" component={ContactUs} />
        <Drawer.Screen name="Main Screen" component={Main} />
      </Drawer.Navigator>       */
}

export default App;

const styles = StyleSheet.create({
  drawer: {
    backgroundColor: '#232b2b',
  },
});
