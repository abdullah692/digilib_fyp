
import React,{useState,useEffect} from 'react';
import { StyleSheet, Image, View ,ActivityIndicator} from 'react-native';
import ContactUs from '../Components/Contact_Screens/ContactUs'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackUserProfile, StackRegisteration } from './Stacks';
import CustomDrawer from './CustomDrawer';
import MyTabs, { AboutTabs, ContactTabs,ScannerTab,UserProfileTabs } from './TabNavigator';
import { HomeTabs } from './TabNavigator';
import { useDispatch, useSelector } from 'react-redux';
import UserProfile from '../Components/User_Profile/UserProfile';

const Drawer = createDrawerNavigator();

export default function DrawerContainer() {
  const userToken = useSelector((state) => state.auth.userToken)


  function HeaderImage() {
    return (
      <View style={styles.header}>
        <Image style={{ width: 150, height: 50, marginHorizontal: 55 }} source={
          require('../assets/digilib.jpeg')} resizeMode="contain" />
      </View>
    )
  }

  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={HomeTabs} options={{ headerTitle: () => (<HeaderImage />) }} />
      <Drawer.Screen name="Registration" component={StackRegisteration} options={{ headerTitle: () => (<HeaderImage />) }} />
      <Drawer.Screen name="About Us" component={AboutTabs} options={{ headerTitle: () => (<HeaderImage />) }} />
      <Drawer.Screen name="Contact Us" component={ContactTabs} options={{ headerTitle: () => (<HeaderImage />) }} />
      {/* <Drawer.Screen name="Bar Code Scanner " component={ScannerTab} options={{ headerTitle: () => (<HeaderImage />) }} /> */}
     {userToken && 
      <Drawer.Screen name="User Profile" component={UserProfile} options={{ headerTitle: () => (<HeaderImage />) }} />
     }
     
    </Drawer.Navigator>
  );
}
const styles = StyleSheet.create({
  header:
  {
    flex: 1,
    flexDirection: 'row'
  }
})
