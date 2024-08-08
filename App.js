import { StatusBar } from 'expo-status-bar';

import { useState } from 'react';

import { StyleSheet, View, Image } from 'react-native';

import ImageViewer from './components/ImageViewer';

import Button from './components/Button';

import * as ImagePicker from 'expo-image-picker';

import CircleButton from './components/BotaoCirculo';

import IconButton from './components/BotaoIcone';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {

  const [showAppOptions, setShowAppOptions] = useState(false);

  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };
  const onReset = () => {
    setShowAppOptions(false);
  };

  const onAddSticker = () => {
    // we will implement this later
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  return (
    <View style={styles.container}>
    <View style={styles.imageContainer}>
      <ImageViewer 
        placeholderImageSource={PlaceholderImage} 
        selectedImage={selectedImage}
      />
      </View>
      {showAppOptions ? (
         <View style={styles.optionsContainer}>
         <View style={styles.optionsRow}>
           <IconButton icon="refresh" label="Reset" onPress={onReset} />
           <CircleButton onPress={onAddSticker} />
           <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
         </View>
       </View>
    ):(
    <View style={styles.footerContainer}>
      <Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
      <Button label="Use this photo" onPress={() => setShowAppOptions(true)}/>
    </View>
    )}
    <StatusBar style="auto" />
  </View>
  );
}

const styles = StyleSheet.create({
  optionsContainer: {
    position: 'absolute',
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  footerContainer:{
    flex:1 / 3,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
