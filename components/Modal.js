import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TextInput, ScrollView } from "react-native";
import { Asset } from "expo-asset";


import * as ImagePicker from 'expo-image-picker';


const imagePost = Asset.fromModule(require("../assets/img/imagen.png")).uri;

const leftBack = Asset.fromModule(require("../assets/img/leftArrow.png")).uri;



const ModalPublicaciones = ({selectedImagePost, setSelectedImagePost, modalVisible, closeModal, addPost}) => {


  const [inputTextReceta, setInputTextReceta] = useState("");
  const [inputTextIngredientes, setInputTextIngredientes] = useState("");
  const [inputTextPreparacion, setInputTextPreparacion] = useState("");



  const openImagePost = async () => {
    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permiso Denegado");
      return;
    };

    const pickerResult = await ImagePicker.launchImageLibraryAsync();

    if (pickerResult.canceled == true) {

      return;
    }
    
    const {uri} = pickerResult.assets[0];
    setSelectedImagePost({localUri: uri});

  }

  /* ********** ARRAY ENCARGADO DE ALMACENAR LAS PUBLICACIONES ********** */
  
  const handleAddPost = () => {

    if (inputTextReceta || inputTextIngredientes || inputTextPreparacion || selectedImagePost?.localUri) {
      const newPost = { textreceta: inputTextReceta, textingredientes: inputTextIngredientes, textpreparacion: inputTextPreparacion, imageUri: selectedImagePost?.localUri };

      addPost(newPost);
      /* reseteamos los valores del modal */
      setInputTextReceta("");
      setInputTextIngredientes("");
      setInputTextPreparacion("");
      setSelectedImagePost(null);
      closeModal()
    }
  }


  


  return(
    <Modal animationType="slide" visible={modalVisible} onRequestClose={closeModal} >

    <View style={{flex: 1, backgroundColor: "#91E0C0"}} >

      {/* BOTON PARA CERRAR EL MODAL, SIN CAMBIOS */}
  
      <View style={{borderBottomWidth: 3, borderBottomColor: "#e76d53", padding: 15 }} >
        <TouchableOpacity onPress={closeModal} style={{flexDirection: "row", alignItems: "center", gap: 10}} >
          <Image source={{uri: leftBack}} style={{width: 30, height: 30}} />
          <Text style={{color: "#fff", fontSize: 20, fontWeight: "700"}} >Regresar</Text>

        </TouchableOpacity>
      </View>

        {/* CAJON DE LA PUBLICACION */}
      <ScrollView>


      {/* CAJON QUE CONTIENE LA FOTO Y NOMBRE DE LA RECETA */}
      <View style={{flexDirection: "row", padding: 25, gap: 15}}>

        {/* imagen de la receta */}
        <TouchableOpacity onPress={openImagePost} >
          <Image source={{uri: selectedImagePost !== null ? selectedImagePost.localUri : imagePost}} style={{width: 120, height: 120,  borderWidth: 5, borderColor: "#e76d53"}} />
        </TouchableOpacity>

        {/* nombre de la receta */}
        <TextInput 
          style={{color: "#000", fontSize: 20, fontWeight: "800", borderWidth: 2, borderColor: "black", maxWidth: 220}}
          placeholder="Título de tu Receta" 
          placeholderTextColor={"#736c6c"}
          multiline={true}
          value={inputTextReceta}
          onChangeText={setInputTextReceta}
        />

      </View>


      {/* ENTRADA DE TEXTO DE LOS INGREDIENTES */}
      <View style={{paddingHorizontal: 15, gap: 0, borderWidth: 2, borderColor: "black"}}>
        <TextInput
         placeholder="Ingredientes:"
         placeholderTextColor={"#736c6c"}
         multiline={true}
         style={{color: "#000", fontWeight: "600"}}
         value={inputTextIngredientes}
         onChangeText={setInputTextIngredientes}
         />

        
        {/* ENTRADA DE TEXTO DE LA PREPARACION */}
        <TextInput
         placeholder="Preparación:"
         placeholderTextColor={"#736c6c"}
         multiline={true}
         style={{color: "#000", fontWeight: "600"}}
         value={inputTextPreparacion}
         onChangeText={setInputTextPreparacion}
         />

         {/* VALIDACION PARA UBICAR EL BOTON DE SELECCIONAR IMAGEN */}
      </View>

      </ScrollView>




      {/* BOTON DE PUBLICAR */}
      <TouchableOpacity onPress={handleAddPost} style={{backgroundColor: "#e76d53", padding: 10, width: 250, borderRadius: 125, marginHorizontal: 80, marginTop: 20, flexDirection: "row", justifyContent: "center"}} >
        <Text style={{color: "#fff", fontSize: 20, fontWeight: "800"}}>Publicar</Text>
      </TouchableOpacity>


    </View>

  </Modal>

  );
};


export default ModalPublicaciones;