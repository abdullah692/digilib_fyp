import React from 'react'
import {View , Text ,StyleSheet} from 'react-native'

function Home() {
    return (
        <View  style={styles.container}>  
            <Text style={styles.text}>Home Screen</Text>
            </View>
    )
}

export default Home
const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d8d8d8',
        justifyContent: 'center',
        alignItems: 'center',
      },
    
    text:
    {
        fontSize:50,
        color:"#0F9E90"
    }
    
})
