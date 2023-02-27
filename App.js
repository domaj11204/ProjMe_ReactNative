import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';

import * as ImagePicker from 'expo-image-picker';
import HttpExample from './components/http';
import Input from './components/Input';
const background = require('./assets/001.png');
export default function App() {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
    } else {
      alert('You did not select any image.');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={{color:'#000'}}>Open up App.js to start working on your app!</Text>
      <Text> OO </Text>
      <StatusBar style="auto" />
      <View style = {styles.container}>
        <Text> PPP </Text>
        <View style = {styles.imageContainer}>
          <ImageViewer imagePlace={background} />
        </View>
        <View style={styles.footerConter}>
          <Button label="選照片" theme="primary" onPress={pickImageAsync}/>
          <Button label="選擇！" />
          <HttpExample/>
        </View>
        <Input/>
      </View> 
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  container2:{
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 20,
    height: 40,
    borderRadius: 18,
  },
  footerConter:{
    flex: 1/3,
    alignItems: 'center',
  }
});