import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackAbout, StackContact, StackHome, StackScanner } from './Stacks';
import { useDispatch, useSelector } from 'react-redux';
import Scanner from '../Components/Bar_Code_Scanner/Scanner';

const Tab = createMaterialBottomTabNavigator();

function HomeTabs() {


  const dispatch = useDispatch()
  const userToken = useSelector((state) => state.auth.userToken)
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f3f3f3"
      barStyle={{ backgroundColor: '#74b1e0' }}
    >
      <Tab.Screen
        name="Home"
        component={StackHome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icons name='home' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="About Us"
        component={StackAbout}
        options={{
          tabBarLabel: 'About Us',
          tabBarIcon: ({ color }) => (
            <Icons name="people" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Scanner"
        component={StackScanner}
        options={{
          tabBarLabel: 'Scanner',
          tabBarIcon: ({ color }) => (
            <Icons name="md-qr-code-sharp" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact Us"
        component={StackContact}
        options={{
          tabBarLabel: 'Contact Us',
          tabBarIcon: ({ color }) => (
            <Icon name="phone" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function AboutTabs() {
  return (
    <Tab.Navigator
      initialRouteName="About Us"
      activeColor="#f3f3f3"
      barStyle={{ backgroundColor: '#74b1e0' }}
    >
      <Tab.Screen
        name="Home"
        component={StackHome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icons name='home' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="About Us"
        component={StackAbout}
        options={{
          tabBarLabel: 'About Us',
          tabBarIcon: ({ color }) => (
            <Icons name="people" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Scanner"
        component={StackScanner}
        options={{
          tabBarLabel: 'Scanner',
          tabBarIcon: ({ color }) => (
            <Icons name="md-qr-code-sharp" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact Us"
        component={StackContact}
        options={{
          tabBarLabel: 'Contact Us',
          tabBarIcon: ({ color }) => (
            <Icon name="phone" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function ContactTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Contact Us"
      activeColor="#f3f3f3"
      barStyle={{ backgroundColor: '#74b1e0' }}
    >
      <Tab.Screen
        name="Home"
        component={StackHome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icons name='home' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="About Us"
        component={StackAbout}
        options={{
          tabBarLabel: 'About Us',
          tabBarIcon: ({ color }) => (
            <Icons name="people" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Scanner"
        component={StackScanner}
        options={{
          tabBarLabel: 'Scanner',
          tabBarIcon: ({ color }) => (
            <Icons name="md-qr-code-sharp" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact Us"
        component={StackContact}
        options={{
          tabBarLabel: 'Contact Us',
          tabBarIcon: ({ color }) => (
            <Icon name="phone" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function ScannerTab() {
  return (
    <Tab.Navigator
      initialRouteName="Scanner"
      activeColor="#f3f3f3"
      barStyle={{ backgroundColor: '#74b1e0' }}
    >
      <Tab.Screen
        name="Home"
        component={StackHome}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icons name='home' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="About Us"
        component={StackAbout}
        options={{
          tabBarLabel: 'About Us',
          tabBarIcon: ({ color }) => (
            <Icons name="people" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Scanner"
        component={StackScanner}
        options={{
          tabBarLabel: 'Scanner',
          tabBarIcon: ({ color }) => (
            <Icons name="md-qr-code-sharp" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact Us"
        component={StackContact}
        options={{
          tabBarLabel: 'Contact Us',
          tabBarIcon: ({ color }) => (
            <Icon name="phone" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export {HomeTabs,AboutTabs,ContactTabs,ScannerTab};