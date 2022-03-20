import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Error from './Error';
import Home from '../Components/Home_Screens/Home';
import {createStackNavigator} from '@react-navigation/stack';
import axios from 'axios';

function Password(props) {
  const {navigation, route} = props;
  const [user, setUser] = useState(route.params || {});
  const [password, setPassword] = useState('');
  const [cnfrmPassword, setCnfrmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = () => {
    const body = {...user};
    body.password = password;
    if (password === '' || cnfrmPassword === '') {
      setError('Please ! Enter your Password');
    } else if (password != cnfrmPassword) {
      setError('The Password you enter is not matched');
    } else {
      axios
        .post('http://10.0.2.2:8080/api/setPassword', body)
        .then(res => {
          setPassword('');
          setCnfrmPassword('');
          setError('');
          setShowPass(false);
          const result = res.data;
          if (!result.success) return setError('Invalid request');
          navigation.navigate('Home') || navigation.popToTop();
        })
        .catch(err => console.log(err));
    }
  };
  const handleNext = () => {
    handleSubmit();
    // navigation.navigate('Home') || navigation.popToTop();
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={{width: 150, height: 160}}
          source={require('../assets/lock.png')}
          resizeMode="contain"
        />
      </View>
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
        <TouchableOpacity onPress={() => handleNext()}>
          <Text style={styles.btn}> SUBMIT </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Password;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    alignItems: 'center',
    marginTop: 50,
  },
  btn: {
    fontSize: 25,
    borderRadius: 10,
    backgroundColor: '#74b1e0',
    color: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },

  text: {
    borderBottomWidth: 2,
    margin: 10,
    marginVertical: 10,
    padding: 10,
    width: 250,
    borderColor: '#74b1e0',
    color: '#000',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});
