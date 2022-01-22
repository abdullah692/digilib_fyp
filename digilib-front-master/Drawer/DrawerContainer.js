
import React from 'react';
import { StyleSheet ,Image,View} from 'react-native';
import ContactUs from '../Components/Contact_Screens/ContactUs'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { StackAbout,StackRegisteration,StackHome } from './Stacks';
import Main from '../Registeration/Main';
import CustomDrawer from './CustomDrawer';
import Welcome from '../Registeration/Welcome';
import Login from '../Registeration/Login';



const Drawer = createDrawerNavigator();

export default function DrawerContainer() {

  function HeaderImage(){
    return(
      <View>
        <Image  style={{ width:100, height:50 ,marginHorizontal:80 }} source={
           require('../assets/digilib.jpeg') } resizeMode="contain"/>
      </View>
    )
  }
  
  return (
    
    
      <Drawer.Navigator initialRouteName="Home"  drawerContent={props => <CustomDrawer {...props}/>}>       
        <Drawer.Screen name="Home" component={StackHome} />
        <Drawer.Screen name="Registration" component={StackRegisteration} />
        <Drawer.Screen name="About Us" component={StackAbout} />
        <Drawer.Screen name="Contact Us" component={ContactUs} options={{ headerTitle:(props) => <HeaderImage {...props}  /> , headerStyle:{height:80}}} />
      </Drawer.Navigator>      
  );
}
