import React, { useRef, useState } from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Password from './Password';



function Otp({navigation}) {

    const pin1Ref = useRef(null);
    const pin2Ref = useRef(null);
    const pin3Ref = useRef(null);
    const pin4Ref = useRef(null);

    const [pin1, setPin1] = useState("");
    const [pin2, setPin2] = useState("");
    const [pin3, setPin3] = useState("");
    const [pin4, setPin4] = useState("");


    return (
        <View style={styles.container}>
            <Text style={styles.text}>OTP VERIFICATION</Text>
            <View style={styles.textinputs}>
                <TextInput
                    ref={pin1Ref}
                    maxLength={1}
                    value={pin1}
                    keyboardType='number-pad'
                    onChange={(pin) => {
                        setPin1(pin);
                        if (pin1 !=="") {
                            pin2Ref.focus();
                        }
                    }}
                    style={styles.input}
                />
                <TextInput
                    ref={pin2Ref}
                    maxLength={1}
                    value={pin2}
                    keyboardType='number-pad'
                    onChange={(pin) => {
                        setPin2(pin)
                        if (pin2 != "") {
                            pin3Ref.focus();
                        }
                    }}
                    style={styles.input}
                />
                <TextInput
                    ref={pin3Ref}
                    maxLength={1}
                    value={pin3}
                    keyboardType='number-pad'
                    onChange={(pin) => {
                        setPin3(pin)
                        if (pin3 != "") {
                            pin4Ref.focus();
                        }
                    }}
                    style={styles.input}
                />
                <TextInput
                    ref={pin4Ref}
                    maxLength={1}
                    value={pin4}
                    keyboardType='number-pad'
                    onChange={(pin) => {
                        setPin4(pin)
                    }}
                    style={styles.input}
                />
            </View>


            <View style={styles.btn}>
                <Button title="Verify Otp" style={[{ with: 100 }]}
                onPress={()=>navigation.navigate("Password")} />
            </View>

        </View>
    )
}

export default Otp

const styles = StyleSheet.create({

    container:
    {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#fff',

    },
    input:
    {
        width: 50,
        borderColor: '#000',
        borderWidth: 3,
        flexDirection: 'column',
        alignContent: 'center',
        fontSize: 25,
        textAlign:'center'

    },
    textinputs:
    {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    text:
    {
        textAlign: 'center',
        marginBottom: 50,
        fontFamily: 'sans-serif',
        fontSize: 25,
    },
    btn: {
        alignItems: 'center',
        marginTop: 50,
    }
})
