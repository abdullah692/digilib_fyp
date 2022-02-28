
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
import MyTabs, { AboutTabs, ContactTabs } from './TabNavigator';
import { HomeTabs } from './TabNavigator';
import Icon from 'react-native-vector-icons/FontAwesome'

const Drawer = createDrawerNavigator();

export default function DrawerContainer() {
  function HeaderImage(){
    return(
      <View style={styles.header}>
        <Image  style={{ width:150, height:50 ,marginHorizontal:55}} source={
           require('../assets/digilib.jpeg') } resizeMode="contain"/>
      </View>
    )
  }
  
  return (
    
    
      <Drawer.Navigator initialRouteName="Home"  drawerContent={props => <CustomDrawer {...props}/>}>       
        <Drawer.Screen name="Home" component={HomeTabs} options={{headerTitle:()=>(<HeaderImage/> )}}/>
        <Drawer.Screen name="Registration" component={StackRegisteration} options={{headerTitle:()=>(<HeaderImage/> )}}/>
        <Drawer.Screen name="About Us" component={AboutTabs} options={{headerTitle:()=>(<HeaderImage/> )}}/>
        <Drawer.Screen name="Contact Us" component={ContactTabs} options={{headerTitle:()=>(<HeaderImage/> )}}/>
      </Drawer.Navigator>      
  );
}


const styles=StyleSheet.create({
  header:
  {
    flex:1,
    flexDirection:'row'
  }
})
