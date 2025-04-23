import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, TextInput, ScrollView } from "react-native";
import { Asset } from "expo-asset";

import Publicaciones from "./Publicaciones";

import * as ImagePicker from 'expo-image-picker';



const ModalRecetas = () => {



    return(

     <Modal animationType="slide" visible={modalVisible} onRequestClose={closeModal} >

      {/* BOTON PARA CERRAR EL MODAL, SIN CAMBIOS */}
      <View style={{borderBottomWidth: 2, borderBottomColor: "#e76d53", padding: 15 }} >
        <TouchableOpacity onPress={closeModal} style={{flexDirection: "row", alignItems: "center", gap: 10}} >
          <Image source={{uri: leftBack}} style={{width: 30, height: 30}} />
          <Text style={{color: "#fff", fontSize: 20, fontWeight: "700"}} >Regresar</Text>

        </TouchableOpacity>
      </View>

    </Modal>

    )
}



export default ModalRecetas;