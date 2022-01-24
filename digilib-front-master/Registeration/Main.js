import React from 'react'
import { View, Text ,StyleSheet, TouchableOpacity ,Image} from 'react-native'

export default function Main( {navigation}) {
    return (
        <View style={styles.container}>
          <View style={styles.logo}>
          <Image style={{ width:200, height:200 }} source={
                        require('../assets/fyplogo.png') } resizeMode="contain" />
            </View>
         <View  stlye={styles.btn}>
         <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
              <Text  style={{fontSize:30,color:'#fff',backgroundColor:'#74b1e0',
            paddingVertical:10,paddingHorizontal:70 ,borderRadius:35,textAlign:'center' ,marginTop:80}}>SIGN UP</Text>
          </TouchableOpacity>
         
         </View>
          
          <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
              <Text  style={{fontSize:30,color:'#fff',backgroundColor:'#74b1e0',
            paddingVertical:10,paddingHorizontal:70 ,borderRadius:35,textAlign:'center', margin:15}} >SIGN IN</Text>
          </TouchableOpacity>
        
          <View style={styles.footer}>
          <Image style={{ width:360, height:200 }} source={
                        require('../assets/abdulkalam.png') } resizeMode="contain" />
          </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    logo:
    {
        marginTop:80,
    
    },
    btn:
    {
        marginTop:50
    },
    footer:
    {
        marginTop:50
    }
})