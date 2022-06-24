import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity,Image } from 'react-native'
export default function StaffDirect({navigation}) {
   return (
      <ScrollView>
         <View style={styles.container}>


            <View style={styles.btns}>
            <TouchableOpacity onPress={()=>navigation.navigate('Donation')}>
                  <Text style={styles.txt}>Donation Policy</Text>
               </TouchableOpacity>

               <TouchableOpacity onPress={()=>navigation.navigate('Staff Directory')}>
                  <Text style={styles.txt}>Staff Directory</Text>
               </TouchableOpacity>
            </View>
        
            <Text style={styles.heading}>Staff Directory</Text>
            <View style={styles.img}> 
            <Image 
            style={{ width: 380, height: 400,marginHorizontal:8 }} 
            source={require('../../assets/staff1.png') } resizeMode="contain"/>
             <Image 
            style={{ width: 380, height: 400,marginTop:-28,marginLeft:12 }} 
            source={require('../../assets/staff2.png') } resizeMode="contain"/> 
              <Image 
            style={{ width:400, height: 400,marginTop:-5,marginRight:25 }} 
            source={require('../../assets/staff3.png') } resizeMode="stretch"/>
             <Image 
            style={{ width:390, height: 400,marginTop:-130,marginLeft:4}} 
            source={require('../../assets/staff4.png') } resizeMode="contain"/>
            </View>
            <Text>{"\n"}{"\n"}</Text>
            </View>
            </ScrollView>
)
}

const styles=StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: '#fff',
    },
    btns:
    {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical:15
    },
    txt:
    {
        marginHorizontal: 10,
        fontSize: 16,
        color: '#74b1e0'
    },
    heading:
   {
      fontSize: 32,
      color: '#000',
      textAlign: 'center',
      marginTop: 20,
   },
}
)