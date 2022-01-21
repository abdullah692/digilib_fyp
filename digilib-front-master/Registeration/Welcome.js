import { View, Text,StyleSheet ,Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Welcome({navigation}) {
  return (
    <View style={styles.contianer}>
       <View style={styles.logo}>
          <Image style={{ width:300, height:250 }} source={
                        require('../assets/congrats.png') } resizeMode="contain" />
            </View>
            <Text style={styles.txt}>WELCOME TO HOMEPAGE</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <Text style={styles.btn}> NEXT </Text>
            </TouchableOpacity>
     <View style={styles.footer}>
          <Image style={{ width:360, height:200 }} source={
                        require('../assets/abdulkalam.png') } resizeMode="contain" />
          </View>
    </View>
  );
}

const styles=StyleSheet.create({
    contianer:
    {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    logo:
    {
        marginTop:30,
    
    },
    txt:
    {
        marginVertical:40,
        fontSize:25,
        color:'#000'
    },
    btn:
    {
        fontSize:30,
        borderRadius:60,
        backgroundColor:'#74b1e0',
        color:'#fff',
        paddingHorizontal:30,
        paddingVertical:10

    },
    footer:
    {
        marginTop:80
    }
})
