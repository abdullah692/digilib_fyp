import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
function AboutUs() {
   return (
      <View style={styles.container}>
         <Text style={styles.text}>About Us Screen</Text>
      </View>
   )
}

export default AboutUs

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#d8d8d8',
      justifyContent: 'center',
      alignItems: 'center',
   },

   text:
   {
      fontSize: 40,
      color: "#0F9E90"
   }

})

