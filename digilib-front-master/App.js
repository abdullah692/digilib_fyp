import React from 'react';
import { StyleSheet } from 'react-native';
import AboutUs from './Components/AboutUs';
import ContactUs from './Components/ContactUs';
import Home from './Components/Home';
import StackNavigation from './Registeration/Stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer >
      <Drawer.Navigator initialRouteName="Home" >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Registration" component={StackNavigation} />
        <Drawer.Screen name="About Us" component={AboutUs} />
        <Drawer.Screen name="Contact Us" component={ContactUs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  drawer:
  {
    backgroundColor: '#232b2b'
  }
})
