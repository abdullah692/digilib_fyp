import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Error from './Error';
import Home from '../Components/Home';
import { createStackNavigator } from '@react-navigation/stack';

function Password({ navigation }) {
  const [password, setPassword] = useState('');
  const [cnfrmPassword, setCnfrmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [allEntry, setAllEntry] = useState([]);
  const handleSubmit = () => {
    const pass = {
      password: password,
      confirmPassword: cnfrmPassword
    };
    if (password === '' && cnfrmPassword === '') {
      setError('Please ! Enter your Password');
    } else if (password != cnfrmPassword) {
      setError('The Password you enter is incorrect');
    } else {
      console.log('Success..!!');
    }
    setAllEntry([pass, ...allEntry])
    console.log(pass);
    console.log(allEntry);
  };
  const handleNext = () => {
    handleSubmit();
    navigation.navigate('Home') || navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.register}>Password</Text>

      <TextInput
        style={styles.text}
        placeholder="Enter Password"
        secureTextEntry={!showPass}
        value={password}
        onChangeText={id => setPassword(id.toLowerCase())}
      />
      <TextInput
        style={styles.text}
        placeholder="Confirm Password"
        secureTextEntry={!showPass}
        value={cnfrmPassword}
        onChangeText={id => setCnfrmPassword(id.toLowerCase())}
      />
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={showPass}
          onValueChange={setShowPass}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Password {showPass ? 'Hide' : 'Show'}?</Text>
      </View>
      {/* <CheckBox value={showPass} onValueChange={setShowPass} /> */}

      <View style={styles.error}>
        {error ? <Error message={error} /> : null}
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNext()}
        >
          <Text style={styles.btn}>SET PASSWORD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Password;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d8d8d8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    alignItems: 'center',
    marginTop: 50,
  },
  btn:
  {
    borderWidth: 2,
    borderColor: '#0F9E90',
    padding: 10,
    fontSize: 25,
    width: 250,
    textAlign: 'center',
    fontFamily: 'sans-serif',
    borderRadius: 10,
    color: '#fff',
    backgroundColor: '#82BABC',
    marginBottom: 20
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
  register: {
    color: '#0F9E90',
    textAlign: 'center',
    fontSize: 45,
    fontWeight: 'bold',
    fontFamily: 'sans',
    marginBottom: 20,

  },
  checkboxContainer: {
    flexDirection: 'row',
    marginVertical: 25,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});
