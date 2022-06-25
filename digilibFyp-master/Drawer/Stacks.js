import React from 'react';
import {View  ,Image,StyleSheet} from 'react-native'
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
import Icon from 'react-native-vector-icons/FontAwesome';
import Contact from '../Components/Contact_Screens/ContactUs';
import Scanner from '../Components/Bar_Code_Scanner/Scanner';
import Isbn from '../Components/Bar_Code_Scanner/Isbn';

const Stack = createStackNavigator();

function HeaderImage({navigation}){
  return(
    <View style={styles.header}>
      
        { <Icon name="bars" size={20} style={{marginTop:10}} 
        onPress={() =>navigation.openDrawer()}/> }
      
      <Image  style={{ width:150, height:50 ,marginHorizontal:100}} source={
         require('../assets/digilib.jpeg') } resizeMode="contain"/>
    </View>
  )
}


function StackHome() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{headerShown :false}}/>
      <Stack.Screen name="Lending" component={Landing} options={{headerShown :true}}/>
      <Stack.Screen name="Reference" component={Reference} options={{headerShown :false}}/>
      <Stack.Screen name="Digital Library" component={DigLib} options={{headerShown :false}}/>
    </Stack.Navigator>
  );
}

function StackRegisteration() {
    return (
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main}  options={{headerShown :false}}/>
        <Stack.Screen name="SignUp" component={SignUp}  options={{headerShown :false}}/>
        <Stack.Screen name="Otp" component={Otp}  options={{headerShown :false}}/>
        <Stack.Screen name="Password" component={Password} options={{headerShown :false}}/>
        <Stack.Screen name="Welcome" component={Welcome}  options={{headerShown :false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown :false}}/>
      </Stack.Navigator>
    );
  }


  function StackAbout() {
    return (
      <Stack.Navigator initialRouteName="AboutUs" >
        <Stack.Screen name="About Us" component={AboutUs} options={{headerShown :false}}/>
        <Stack.Screen name="Donation" component={Donation} options={{headerShown :true}}/>
        <Stack.Screen name="Staff Directory" component={StaffDirect} options={{headerShown :false}}/>
      </Stack.Navigator>
    );
  }
  function StackContact() {
    return (
      <Stack.Navigator initialRouteName="Contact Us" >
        <Stack.Screen name="Contact Us" component={Contact}  options={{headerShown :false}} />
      </Stack.Navigator>
    );
  }

  function StackScanner() {
    return (
      <Stack.Navigator initialRouteName="Scanner" >
        <Stack.Screen name="Scanner" component={Scanner}  options={{headerShown :false}} />
        <Stack.Screen name="Isbn" component={Isbn}  options={{headerShown :true}} />
      </Stack.Navigator>
    );
  }

  // function StackUserProfile() {
  //   return (
  //     <Stack.Navigator initialRouteName="User Profile" >
  //       <Stack.Screen name="User Profile" component={UserProfile}  options={{headerShown :false}} />
  //     </Stack.Navigator>
  //   );
  // }


export  {StackHome,StackRegisteration ,StackAbout,StackContact,StackScanner};

const styles=StyleSheet.create({
  header:
  {
    flex:1,
    flexDirection:'row'
  }
})
