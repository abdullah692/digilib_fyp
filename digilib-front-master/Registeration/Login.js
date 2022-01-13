import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import Error from './Error';
import { Picker } from '@react-native-picker/picker';
import Otp from './Otp';
// import Register from './Register';

function Login(props) {
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
    if (email === '') {
      setError('Please enter your email');
    }
    if (portal === '') {
      setError('Please enter your portal-id');
    }
    if (email === '' && portal === '') {
      setError('Please fill your credentials');
    }
    else (email && portal)
    {
      setAllEntry([users, ...allEntry])
      console.log(users);
      console.log(allEntry);
      setEmail('')
      setPortal('')
      console.log('Success..!!');
    }
  };

  const handleNext = () => {
    handleSubmit();
    navigation.navigate('Otp');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.register}>USER LOGIN</Text>

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
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleNext()}
      >
        <Text style={styles.btn}>NEXT</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8d8d8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  register: {
    color: '#0F9E90',
    textAlign: 'center',
    fontSize: 45,
    fontWeight: 'bold',
    fontFamily: 'sans',
    marginBottom: 20,

  },
  text: {
    borderBottomWidth: 2,
    margin: 10,
    marginVertical: 10,
    padding: 10,
    width: 250,
    borderColor: '#0F9E90',
    color: '#000'
  },
  error: {
    alignItems: 'center',
    marginTop: 20,
  },
  btn:
  {
    borderWidth: 2,
    borderColor: '#0F9E90',
    padding: 5,
    fontSize: 30,
    width: 150,
    textAlign: 'center',
    fontFamily: 'sans-serif',
    borderRadius: 10,
    color: '#fff',
    backgroundColor: '#82BABC'
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

  }
});
