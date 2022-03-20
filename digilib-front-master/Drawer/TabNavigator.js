import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackAbout, StackContact, StackHome } from './Stacks';
import Contact from '../Components/Contact_Screens/ContactUs';

const Tab = createMaterialBottomTabNavigator();

function HomeTabs() {
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

export {HomeTabs,AboutTabs,ContactTabs};