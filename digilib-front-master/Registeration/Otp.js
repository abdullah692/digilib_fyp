import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
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
      <View style={styles.logo}>
        <Image
          style={{width: 150, height: 150}}
          source={require('../assets/notification.png')}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.register}>VERIFICATION</Text>
      <Text style={{color: '#000', fontSize: 15}}>Enter the 4 digit code</Text>
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
          <Text style={styles.btn}> VERIFY </Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', margin: 15}}>
        <Text>Didn't recieve an OTP?</Text>
        <TouchableOpacity>
          <Text style={{color: '#74b1e0', marginHorizontal: 10}}>
            Resend OTP
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Otp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginTop: -70,
  },
  register: {
    fontSize: 30,
    margin: 10,
    color: '#000',
  },
  btn: {
    fontSize: 25,
    borderRadius: 5,
    backgroundColor: '#74b1e0',
    color: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },

  input: {
    width: '60%',
    borderColor: '#74b1e0',
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
