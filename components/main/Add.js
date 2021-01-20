import React, {Component} from 'react';
import {StyleSheet, View, TouchableHighlight, Text} from 'react-native';
import {RNCamera} from 'react-native-camera';

const Add = (props) => {
  androidCameraPermissionOptions = {
    title: 'Permission to use camera',
    message: 'We need your permission to use your camera',
    buttonPositive: 'Ok',
    buttonNegative: 'Cancel',
  };

  const cameraButtonPressed = async () => {
    if (camera) {
      const options = {
        quality: 0.5,
        base64: true,
        orientation: 'portrait',
        pauseAfterCapture: true,
        fixOrientation: true,
      };
      const data = await camera.takePictureAsync(options);
      console.log(data.uri);
      //   props.onPictureTaken(data.uri);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={(ref) => {
          camera = ref;
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={androidCameraPermissionOptions}
        captureAudio={false}></RNCamera>
      <TouchableHighlight
        style={styles.shutter}
        onPress={() => cameraButtonPressed()}>
        <Text style={styles.shutterText}></Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  preview: {
    justifyContent: 'center',
    flex: 1,
  },
  shutter: {
    borderRadius: 50,
    height: 70,
    width: 70,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    bottom: 50,
    zIndex: 100,
    alignSelf: 'center',
  },
});

export default Add;
