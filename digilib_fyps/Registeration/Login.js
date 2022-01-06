import { createStackNavigator } from '@react-navigation/stack';
import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, Button} from 'react-native';
 import Error from './Error'
import Otp from './Otp';
// import Register from './Register';



function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [portal,setPortal]=useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    const user = {
      email,
      portal
    };
    if (email === '' ) {
      setError('Please enter your email');
    }
    if(portal === '')
    {
      setError('Please enter your portal-id')
    } 
    if(email==='' && portal ==='')
    {
      setError('Please fill your credentials')
    }
    else {
      console.log('Success..!!');
    }
  };
  return (
    <View style={styles.container}>
      
      <View>
      <Text style={styles.register}>User Login</Text>
      
        <TextInput
          style={styles.text}
          placeholder="Portal_Id"
          value={portal}
          keyboardType='decimal-pad'
          onChangeText={id => setPortal(id.toLowerCase()) }
        />
        <TextInput
          style={styles.text}
          placeholder="Email Address"
          value={email}
          onChangeText={email => setEmail(email.toLowerCase())}
        />

        <View style={styles.btn}>
          {error ? <Error message={error} /> : null}
          <Button title="Next" style={[{with:50}]} onPress={() => handleSubmit(),navigation.navigate("Otp")} />
        </View>

        {/* <View style={[{marginTop: 40}, styles.btn]}>
          <Text style={styles.middle}>Don't have any account yet?</Text>
          <Button title="Register"/>
        </View> */}
       
      </View>
    </View>
  );
}


export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  register: {
      textAlign:'center',
    fontSize: 35,
    fontFamily: 'sans',
    marginBottom: 10,
  },
  text: {
    borderBottomWidth: 2,
    margin:10,
    marginVertical:10,
    padding: 10,
    width:250,
  },
  btn: {
    alignItems: 'center',
    marginTop:20,
  },
  middle: {
    margin: 10,
    textAlign: 'center',
  },
});
