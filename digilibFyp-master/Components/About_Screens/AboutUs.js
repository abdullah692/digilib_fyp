import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
function AboutUs({ navigation }) {
   return (
      <ScrollView>
         <View style={styles.container}>
            <View style={styles.btns}>
               <TouchableOpacity onPress={() => navigation.navigate('Donation')}>
                  <Text style={styles.txt}>Donation Policy</Text>
               </TouchableOpacity>

               <TouchableOpacity onPress={() => navigation.navigate('Staff Directory')}>
                  <Text style={styles.txt}>Staff Directory</Text>
               </TouchableOpacity>
            </View>
            
            <Text style={styles.heading}>Library Campuses</Text>
            <Image style={{ width: 300, height: 180 ,marginHorizontal:30 }} source={
               require('../../assets/campus.png')} resizeMode="contain" />
            
               <Text style={styles.text}>
                  From its humble beginning in 1922 the Engr. Abul Kalam Library has become the largest library in the field of engineering, science and technology in Pakistan.
                  The library is equipped with state-of-art systems and technologies such as Computerized Library Management System, Library Security System, Library OPAC, Library Website and Library Portal Services.{"\n"}{"\n"}
                  Engr. Abul Kalam Library comprises of two buildings adjacent to each other.
                  The reference and administration building consists of three floors with spacious reading halls having a capacity of 800 users at a time.
                  The building adjacent to this comprises of two floors with Circulation section on the ground and the Book Bank and Duty society on the first floor.{"\n"}{"\n"}
                  Departmental libraries have also been set up in the remote campuses, City campus and LEJ campus as well as in the main campus.{"\n"}{"\n"}
                  The library is committed to providing calm, quiet, peaceful and pleasant user- oriented learning environment for its users.{"\n"}{"\n"}
                  </Text>
                  
                  <View>
                  
                     <Image style={{ width: 350, height: 400,marginHorizontal:22 }} source={
                        require('../../assets/timing.png')} resizeMode="contain" />
                  </View>
               
                  
         
         </View>
      </ScrollView>
   )
}

export default AboutUs

const styles = StyleSheet.create({
   container:
   {
      flex: 1,
      backgroundColor: '#fff',
   },
   btns:
   {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginVertical: 15
   },
   txt:
   {
      marginHorizontal: 10,
      fontSize: 16,
      color: '#74b1e0'
   },
   text:
   {
      fontSize: 15,
      color: "#000",
      marginVertical: 10,
      marginHorizontal: 15,

   },
   subheading:
   {
      fontSize: 22,
      color: '#000',
   },
   heading:
   {
      fontSize: 32,
      color: '#000',
      textAlign: 'center',
      marginTop: 20,
   },
})

