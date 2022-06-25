import React from 'react'
import { View, Text ,StyleSheet, TouchableOpacity ,Image} from 'react-native'

export default function Main( {navigation}) {
    return (
        <View style={styles.container}>
          <View style={styles.logo}>
          <Image style={{ width:150, height:150,marginTop:25 }} source={
                        require('../assets/fyplogo.png') } resizeMode="contain" />
            </View>
         <View  stlye={styles.btn}>
         <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
              <Text  style={{fontSize:25,color:'#fff',backgroundColor:'#74b1e0',
            paddingVertical:10,paddingHorizontal:40 ,borderRadius:5,textAlign:'center' ,marginTop:100}}>SIGN UP</Text>
          </TouchableOpacity>
         
         </View>
          
          <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
              <Text  style={{fontSize:25,color:'#fff',backgroundColor:'#74b1e0',
            paddingVertical:10,paddingHorizontal:45 ,borderRadius:5,textAlign:'center',marginTop:10}} >SIGN IN</Text>
          </TouchableOpacity>
        
          <View style={styles.footer}>
          <Image style={{ width:300, height:80,marginTop:50 }} source={
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
        marginTop:30,
    
    },
    btn:
    {
        marginTop:50
    },
    footer:
    {
        marginTop:120
    }

})