import React,{useEffect} from 'react';
import { StyleSheet ,StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DrawerContainer from './Drawer/DrawerContainer';
import SplashScreen from 'react-native-splash-screen';


function App() {
  
  useEffect(()=>{
    SplashScreen.hide();
  })

  return (
    <NavigationContainer>
      <StatusBar 
      backgroundColor={"#fff"}
      barStyle='dark-content'
    />

        <DrawerContainer/>
    </NavigationContainer>
  
  ); 
  }
      {/* <Drawer.Navigator initialRouteName="Home" >       
        <Drawer.Screen name="Home" component={StackHome} />
        <Drawer.Screen name="Registration" component={StackRegisteration} />
        <Drawer.Screen name="About Us" component={StackAbout} />
        <Drawer.Screen name="Contact Us" component={ContactUs} />
        <Drawer.Screen name="Main Screen" component={Main} />
      </Drawer.Navigator>       */}
    
  


export default App;

const styles = StyleSheet.create({
  drawer:
  {
    backgroundColor: '#232b2b'
  }
})
