import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Error from './Error';
import { Picker } from '@react-native-picker/picker';
import Otp from './Otp';
// import Register from './Register';

function Login(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [portal, setPortal] = useState('');
  const [error, setError] = useState('');
  const [password,setPassword]=useState('');
  const [allEntry, setAllEntry] = useState([]);
  const handleSubmit = () => {
    const users = {
      portal: portal,
      password: password
    };
    if (portal === '' && password==='') {
      setError('Please fill your Credentials');
    }
    else if( portal === '' )
    {
      setError('Please Enter Your Portal-Id');
    }
    else if(password === '')
    {
      setError('Please Enter Your Password')
    }
    else (password && portal)
    {
      setAllEntry([users, ...allEntry])
      console.log(users);
      console.log(allEntry);
      console.log('Success..!!');
    }
  };

  const handleNext = () => {
    handleSubmit();
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.logo}>
          <Image style={{ width:150, height:150 }} source={
                        require('../assets/fyplogo.png') } resizeMode="contain" />
            </View>
        <Text style={styles.register}>WELCOME BACK!</Text>

        <TextInput
          style={styles.text}
          placeholder="Portal_Id"
          value={portal}
          keyboardType="decimal-pad"
          onChangeText={id => setPortal(id.toLowerCase())}

        />
        
        <TextInput
          style={styles.text}
          placeholder="Password"
          value={password}
          onChangeText={pass => setPassword(pass.toLowerCase())}
        />
        <View style={styles.error}>
          {error ? <Error message={error} /> : null}
        </View>

        {/* <View style={[{marginTop: 40}, styles.btn]}>
          <Text style={styles.middle}>Don't have any account yet?</Text>
          <Button title="Register"/>
        </View> */}
        <TouchableOpacity  onPress={() => handleNext()}>
                <Text style={styles.btn}> NEXT </Text>
            </TouchableOpacity>
      <View>
        <Text style={styles.forgot}>
          Create Account    |   Forgot Password
        </Text>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:
  {
      marginTop:-50,
  },
  register: {
   fontSize:30,
   margin:10,
   color:'#000'
  },
  text: {
    borderBottomWidth: 2,
    margin: 10,
    marginVertical: 10,
    padding: 10,
    width: 250,
    borderColor: '#74b1e0',
    color: '#000'
  },
  error: {
    alignItems: 'center',
    marginTop: 20,
  },
  btn:
  {
      fontSize:25,
      borderRadius:5,
      backgroundColor:'#74b1e0',
      color:'#fff',
      paddingHorizontal:20,
      paddingVertical:10,
      marginBottom:20

  },  
  middle: {
    margin: 10,
    textAlign: 'center',
  },
  border:
  {
    borderColor: '#0F9E90',
    borderWidth: 2,
    marginVertical: 30
  },
  picker:
  {
    width: 250,
    height: 50,
    alignItems: 'center',
    color: '#000'
  },
  forgot:
  {
    margin:20,
    fontSize:15
  }
});
