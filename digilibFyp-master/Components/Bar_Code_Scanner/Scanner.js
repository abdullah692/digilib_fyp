import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner'
import Isbn from './Isbn';


const Scanner = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned')



  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, [scanned]);


  // What happens when we scan the bar code
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data)
    console.log('Type: ' + type + '\nData: ' + data)
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission</Text>
      </View>)
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={{ margin: 10 }}>No access to camera </Text>
        {/* <Button title={'Allow Camera'} onPress={() => askForCameraPermission()} /> */}
      </View>)
  }

  // Return the View
  return (
    <View style={styles.container}>
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }} />
      </View>
      <View style={styles.isbn}>
        <Text style={styles.maintext}>{text}</Text>
        {scanned && <Button title={'Scan again?'} onPress={() => (setScanned(false))} color='tomato' />
        }
        {/* {
        scanned && <Button title={'Verify'}  onPress={()=>navigation.navigate("Isbn",{isbn:text})}  />
      } */}
        <TouchableOpacity >
          <Text style={styles.verify} onPress={() => navigation.navigate("Isbn", { isbn: text }, setText('Not yet Scanned'))}>
            Check the value
          </Text>
          {/* <View>
          <Isbn isbn={text}/>
        </View> */}
        </TouchableOpacity>
      </View>
    </View>
  );

}


export default Scanner

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  maintext: {
    fontSize: 20,
    fontFamily: 'monospace',
    textAlign: 'center',
    marginTop: 50,
    margin: 15
  },
  isbn:
  {
    marginBottom: '30%',

  },
  barcodebox: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 400,
    width: 300,
    overflow: 'hidden',
    borderRadius: 30,
  },
  verify:
  {
    borderWidth: 1,
    color: 'white',
    backgroundColor: 'purple',
    alignItems: 'center',
    marginTop: 15,
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 25

  }


})