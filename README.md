paleta de colores

rojo      #e76d53
amarillo  #FBC36C  
verde     #3BA485
gris      #D3CFCE
menta     #91E0C0
wengue    #292525
gris      #736c6c

colores actuales

#1c0033
#cccccc
#ffffff
#514484
#000000
#ffc93c
#3e006e


import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, } from "react-native";
import { Asset } from "expo-asset";

import { useImages } from "./PhotoContext";
import * as ImagePicker from 'expo-image-picker';

const imageBanner = Asset.fromModule(require("../assets/img/banner.png")).uri;
const imageProfile = Asset.fromModule(require("../assets/img/profile.png")).uri


const Profile = ({selectedImageBanner, setSelectedImageBanner }) => {

  const {selectedImageProfile, updateSelectedImageProfile} = useImages();

  // ********** IMAGEN DEL BANNER **********

  const openImageBanner = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permiso Denegado");
      return;
    };

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.canceled === true) {
      return;
    }

    const {uri} = pickerResult.assets[0];

    setSelectedImageBanner({localUri: uri});
  }

  // ********** IMAGEN DE PERFIL **********

  const openImageProfile = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permiso Denegado");
      return;
    };

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (!pickerResult.canceled) {
      const {uri} = pickerResult.assets[0];
  
      updateSelectedImageProfile( uri );
    }

  }





  return (

    <View style={styles.containerProfile}>
      {/* ********** BANNER ********** */}
      <TouchableOpacity
        onPress={openImageBanner}
        style={styles.containerUserBanner}
      >
        <Image
          source={{
            uri:
              selectedImageBanner !== null
                ? selectedImageBanner.localUri
                : imageBanner,
          }}
          style={styles.imageBanner}
        />
      </TouchableOpacity>

      {/* ********** INFORMACION PERSONAL ********** */}
      <View style={styles.containerInfoUser}>
        <Text style={styles.textNameUser}>Luis Santos</Text>
        <Text style={styles.textProfessionUser}>
          Estudiante de Programación
        </Text>
      </View>

      {/* ********** IMAGEN DE PERFIL ********** */}
      <TouchableOpacity onPress={openImageProfile} style={styles.containerUserProfile} >
        <Image
          source={{ uri: selectedImageProfile !== null ? selectedImageProfile : imageProfile }}
          style={styles.imageProfile}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerProfile: {
    width: "100%",
    height: 250,
    backgroundColor: "#91E0C0"
  },

  containerUserBanner: {
    width: "100%",
    height: 180,
    backgroundColor: "#ccc"
  },

  imageBanner: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  
  containerInfoUser: {
    paddingLeft: 15,
    paddingTop: 5
  },

  textNameUser: {
    fontSize: 25,
    fontWeight: "800",
    color: "#000"
  },

  textProfessionUser: {
    fontSize: 14,
    fontWeight: "400",
    color: "#000"
  },

  containerUserProfile: {
    position: "absolute",
    top: 110,
    right: 25
  },

  imageProfile: {
    backgroundColor: "#fff",
    width: 131,
    height: 131,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: "#e76d53",
  },
});

export default Profile;
