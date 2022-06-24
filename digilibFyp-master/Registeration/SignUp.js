import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Error from './Error';
import { Picker } from '@react-native-picker/picker';
import Otp from './Otp';
// import Register from './Register';


function SignUp(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [portal, setPortal] = useState('');
  const [error, setError] = useState('');
  const [picker, setPicker] = useState('Both Department');
  const [allEntry, setAllEntry] = useState([]);
  

  const handleSubmit = () => {
    const users = {
      email: email,
      portal: portal,
      picker: picker
    };    

    if (email === '' && portal === '') {
      setError('Please fill your Credentials');
    }
    else if (portal === '') {
      setError('Please Enter Your Portal-Id');
    }
    else if (email === '') {
      setError('Please Enter Your Email');
    }
    else (email && portal)
    {
      setAllEntry([users, ...allEntry])
      const JSONdata=JSON.stringify(users);
      console.log(JSONdata);
      console.log(allEntry);
      console.log('Success..!!');
    }
  };



  const handleNext = () => {
    handleSubmit();
    navigation.navigate('Otp');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image style={{ width: 150, height: 150 }} source={
          require('../assets/fyplogo.png')} resizeMode="contain" />
      </View>

      <Text style={styles.register}>CREATE ACCOUNT</Text>

      <TextInput
        style={styles.text}
        placeholder="Portal_Id"
        value={portal}
        keyboardType="decimal-pad"
        onChangeText={id => setPortal(id.toLowerCase())}

      />
      <TextInput
        style={styles.text}
        placeholder="Email Address"
        value={email}
        onChangeText={email => setEmail(email.toLowerCase())}
      />
      <View style={styles.border}>
        <Picker
          selectedValue={picker}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue) => setPicker(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Both Department" value="both" />
          <Picker.Item label="Book Bank Department" value="bookbank" />
          <Picker.Item label="Circulation Department" value="circulation" />
        </Picker>
      </View>

      <View style={styles.error}>
        {error ? <Error message={error} /> : null}
      </View>

      {/* <View style={[{marginTop: 40}, styles.btn]}>
          <Text style={styles.middle}>Don't have any account yet?</Text>
          <Button title="Register"/>
        </View> */}


      <TouchableOpacity onPress={() => handleNext()}>
        <Text style={styles.btn}> NEXT </Text>
      </TouchableOpacity>

      <View style={{flexDirection:'row' , margin:15}}>
        <Text >
          Already have an account?
        </Text>
        <TouchableOpacity>
          <Text style={{ color: '#74b1e0'  ,marginHorizontal:10}} onPress={() => navigation.navigate('Login')}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:
  {
    marginTop: -70,
  },
  register: {
    fontSize: 30,
    margin: 10,
    color: '#000'
  },
  text:
  {
    borderBottomWidth: 2,
    marginVertical: 5,
    padding: 10,
    width: 250,
    borderColor: '#74b1e0',
    color: '#000'
  },
  error: {
    alignItems: 'center'
  },
  btn:
  {
    fontSize: 25,
    borderRadius: 5,
    backgroundColor: '#74b1e0',
    color: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom:20

  },
  middle: {
    margin: 10,
    textAlign: 'center',
  },
  border:
  {
    borderColor: '#74b1e0',
    borderWidth: 2,
    marginVertical: 20
  },
  picker:
  {
    width: 280,
    color: '#000'
  },
  acount:
  {
  },
});
