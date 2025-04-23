import React, {useState} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { Asset } from "expo-asset";

import { useImages } from "./PhotoContext";
import ModalPublicaciones from "./Modal";

const imagePost = Asset.fromModule(require("../assets/img/imagen.png")).uri


const Publicaciones = () => {

  const [selectedImagePost, setSelectedImagePost] = useState(null);
  const { addImage } = useImages();
  const [posts, setPosts] = useState([]);

  // ********** MODAL **********

  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  }

  const closeModal = () => {
    setModalVisible(false);
  }



  /* ********** ARRAY ENCARGADO DE ALMACENAR LAS PUBLICACIONES ********** */

  const addPost = (newPost) => {

    const currentData = new Date();
    const updateDate = `${currentData.getDate()}/${currentData.getMonth()+1}/${currentData.getFullYear()}`;

    const postWithDate = {...newPost, date: updateDate};

    setPosts([...posts, postWithDate]);

    if (newPost.imageUri) {
      addImage(newPost.imageUri);
    };

  }




  return(

    

      <View style={styles.containerPost}>

          {/* ********** CONTENEDOR DE LAS PUBLICACIONES */}
          <ScrollView style={{width: "100%", height: "100%", paddingHorizontal: 10 }}>
            {posts.length > 0 ? (
              posts.slice().reverse().map((post, index) => (

                // PUBLICACION
                <View key={index} style={{width: "100%", padding: 10, backgroundColor: "#3BA485", borderRadius: 15, marginTop: 10 }}>
                  
                  {/* CONTENEDOR DEL TEXTO DE LA PUBLICACION */}


                  {/* CONTENEDOR DE LA INFORMACION DE LA RECETA */}
                  <View>

                    <View style={{flexDirection: "row"}} >

                      {/* FOTO DE LA RECETA */}
                      {post.imageUri ? <Image source={{uri: post.imageUri}} style={{width: 120, height: 100, borderRadius: 10, borderWidth: 2, borderColor: "#e76d53"}} /> : <Image source={{uri: imagePost}} style={{width: 120, height: 100}} /> }
                      
                      {/* NOMBRE DE LA RECETA */}
                      <View style={{flexDirection: "column", justifyContent: "center", marginLeft: 10, width: 220 }}>

                        <Text style={{color: "#fff", fontSize: 20, fontWeight: 600, }}>{post.textreceta}</Text>
                        <Text style={{color: "#fff", fontSize: 13, fontWeight: 500, }}></Text>
                        <Text style={{color: "#fff", fontSize: 13, fontWeight: 600, }}>Fecha Publicación:</Text>
                        <Text style={{color: "#fff", fontSize: 14, fontWeight: 500, }}>{post.date}</Text>

                      </View>
                    </View>

                  </View>

                  <Text style={{color: "#fff", fontSize: 16,fontWeight: "400", marginTop: 10}}>{post.textingredientes}</Text>
                  <Text style={{color: "#fff", fontSize: 16,fontWeight: "400", marginTop: 10}}>{post.textpreparacion}</Text>

                  {/* CONTENEDOR DE LA IMAGEN DE LA PUBLICACION */}
                </View>
              ))) : (
                <View style={{width: "100%", height: 455, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                  <Text style={{color: "#fff", fontSize: 20, fontWeight: "800", }}>Sin Recetas aún</Text>
                </View>
              ) }




          </ScrollView >


        {/* BOTON PARA AGREGAR PUBLICACIONES */}
        <TouchableOpacity onPress={openModal} style={{position: "absolute", top: 450, zIndex: 100, right: 15,  width: 50, height: 50, backgroundColor: "#e76d53", borderRadius: 25, flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
          <Text style={{color: "#fff", fontSize: 36, fontWeight: "800"}}>+</Text>
        </TouchableOpacity>

        <ModalPublicaciones 
          selectedImagePost = {selectedImagePost}
          setSelectedImagePost = {setSelectedImagePost}
          modalVisible = {modalVisible}
          closeModal = {closeModal}
          addPost = {addPost}
        />


      </View>
    
    


    

  );
};

const styles = StyleSheet.create({
  containerPost: {
    flex: 1,
    backgroundColor: "#91E0C0",
  },
});

export default Publicaciones;