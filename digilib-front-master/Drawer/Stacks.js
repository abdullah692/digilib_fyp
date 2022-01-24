import React from 'react';
import {View  ,Image} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import Home from '../Components/Home_Screens/Home';
import Landing from '../Components/Home_Screens/Landing';
import Reference from '../Components/Home_Screens/Reference';
import DigLib from '../Components/Home_Screens/DigLib';
import Login from '../Registeration/Login';
import Otp from '../Registeration/Otp';
import Password from '../Registeration/Password';
import AboutUs from '../Components/About_Screens/AboutUs';
import Donation from '../Components/About_Screens/Donation';
import StaffDirect from '../Components/About_Screens/StaffDirect';
import SignUp from '../Registeration/SignUp';
import Main from '../Registeration/Main';
import Welcome from '../Registeration/Welcome';

const Stack = createStackNavigator();

function HeaderImage(){
  return(
    <View>
      <Image  style={{ width:100, height:50 ,marginHorizontal:125}} source={
         require('../assets/digilib.jpeg') } resizeMode="contain"/>
    </View>
  )
}

function StackHome() {
  return (
    <Stack.Navigator initialRouteName="Home" >
      <Stack.Screen name="Home" component={Home}   options={{ headerTitle:(props) => <HeaderImage {...props} /> }} />
      <Stack.Screen name="Lending" component={Landing}  />
      <Stack.Screen name="Reference" component={Reference} options={{headerShown:false}} />
      <Stack.Screen name="Digital Library" component={DigLib} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

function StackRegisteration() {
    return (
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} options={{ headerTitle:(props) => <HeaderImage {...props} />}} />
        <Stack.Screen name="SignUp" component={SignUp}  />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    );
  }


  function StackAbout() {
    return (
      <Stack.Navigator initialRouteName="AboutUs" >
        <Stack.Screen name="About Us" component={AboutUs}  options={{ headerTitle:(props) => <HeaderImage {...props} /> }} />
        <Stack.Screen name="Donation" component={Donation} options={{headerShown:true}}/>
        <Stack.Screen name="Staff Directory" component={StaffDirect} options={{headerShown:false}}/>
      </Stack.Navigator>
    );
  }


export  {StackHome,StackRegisteration ,StackAbout ,HeaderImage};
