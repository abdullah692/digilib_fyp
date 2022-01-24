import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Password from './Password';
import {set} from 'react-native-reanimated';
import Error from './Error';
import axios from 'axios';

function Otp(props) {
  const {navigation, route} = props;
  const [user, setUser] = useState(route.params || {});
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const handleNext = () => {
    // navigation.navigate('Password', user);
    setError('');
    const body = {...user};
    body.otp = pin;
    axios
      .post('http://10.0.2.2:8080/api/verifyOtp', body)
      .then(res => {
        const result = res.data;
        console.log('verify opt response', res.data);
        if (!result.success) {
          setError(result.message);
        } else {
          setError('');
          setPin('');
          navigation.navigate('Password', user);
        }
      })
      .catch(err => console.log(err));
    // setPin('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.register}>OTP VERIFICATION</Text>
      <View style={styles.textinputs}>
        <TextInput
          maxLength={4}
          value={pin}
          keyboardType="number-pad"
          placeholder="* * * *"
          onChange={({nativeEvent: {eventCount, target, text}}) => {
            setPin(text);
          }}
          style={styles.input}
        />
      </View>

      <View style={styles.error}>
        {error ? <Error message={error} /> : null}
      </View>

      <View>
        <TouchableOpacity onPress={() => handleNext()}>
          <Text style={styles.btn}>VERIFY OTP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Otp;

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
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'sans',
    marginVertical: '10%',
  },
  btn: {
    borderWidth: 2,
    borderColor: '#0F9E90',
    padding: 5,
    fontSize: 25,
    width: 200,
    textAlign: 'center',
    fontFamily: 'sans-serif',
    borderRadius: 10,
    color: '#fff',
    backgroundColor: '#82BABC',
    marginTop: '20%',
  },
  input: {
    width: '60%',
    borderColor: '#0F9E90',
    borderBottomWidth: 2,
    flexDirection: 'column',
    alignContent: 'center',
    fontSize: 40,
    textAlign: 'center',
    marginVertical: 30,
  },
  textinputs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    textAlign: 'center',
    marginBottom: 50,
    fontFamily: 'sans-serif',
    fontSize: 25,
  },
});
