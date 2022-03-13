import { View, Text,StyleSheet, ScrollView,Image,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import UserData from './UserData.json'
import Icon from 'react-native-vector-icons/FontAwesome'
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';


export default function UserProfile() {
  const [userdata, setuserData] = useState(UserData);
  console.log(userdata[1]);
  
  
  const printPDF=async()=> {
    const results = await RNHTMLtoPDF.convert({
      html: '<h1>Custom converted PDF Document</h1>',
      fileName: 'test',
      base64: true,
    })

    await RNPrint.print({ filePath: results.filePath })
  }

  return (
    <View style={styles.container}>
       <View>
          <Text style={styles.heading}>User Profile</Text>
            </View>
            <TouchableOpacity>
              <Icon name="file-pdf-o" size={30} style={styles.pdf} onPress={()=>printPDF()  }/>
              </TouchableOpacity>

            <Image style={{ width:300, height:170 ,marginVertical:15 }} source={
                        require('../../assets/person.png')} resizeMode='contain' />
      <ScrollView>
        <View style={styles.border}>
          {userdata.slice(0,1).map((item) => (
            <View>
            <Text style={styles.info}>Batch: {item.Batch}{'\t\t\t\t'} Roll No: {item.roll_no} {'\n'}</Text>
            <Text style={styles.info}>Year: {item.year}{'\n'}</Text>
            <Text style={styles.info}>Name: {item.name}{'\n'}</Text>
            <Text style={styles.info}>Department: {item.Department}
            {'\n'}{'\n'}
            Membership: {item.Membership}
            {'\n'}{'\n'}
            Cell-No: {item.Cell_No}
            {'\n'}{'\n'}
            Email : {item.Email}
            </Text>
            </View>
          ))}
        </View>
      </ScrollView>
      </View>
    


  )
}


const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading:
    {
        fontSize:45,
       textAlign:'center',
        borderColor:'#36B5E4',
        color:'#000',
        borderBottomWidth:3,
        marginHorizontal:70,
        marginVertical:20

    },
    border:
    {
      marginVertical:20,
      marginHorizontal:10,
      padding:10
    },
    info:
    {
      fontSize:20,
      fontFamily:'sans-serif',
      color:'black'
    },
    pdf:
    {
      marginTop:20,
      marginLeft:'60%'
    }
 })