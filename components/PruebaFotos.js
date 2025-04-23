import React, { useState } from "react";
import { View, StyleSheet, Image, ScrollView, Text, TouchableOpacity, Modal } from "react-native";
import { useImages } from "./PhotoContext";

const Fotos = () => {
  const { images } = useImages(); // Supongamos que 'images' contiene objetos con 'uri' y 'name'
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar la visibilidad del modal
  const [selectedImage, setSelectedImage] = useState(null); // Estado para almacenar la imagen seleccionada

  const openModal = (image) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#91E0C0" }}>
      <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 2, justifyContent: "flex-start" }}>
        {images.map((image, index) => (
          <TouchableOpacity key={index} style={styles.imageContainer} onPress={() => openModal(image)}>
            <Image 
              source={{ uri: image.uri }} 
              style={styles.image} 
            />
            <Text style={styles.imageName}>{image.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedImage && (
              <>
                <Image 
                  source={{ uri: selectedImage.uri }} 
                  style={styles.modalImage} 
                />
                <Text style={styles.modalText}>Nombre: {selectedImage.name}</Text>
              </>
            )}
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.closeButton}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    margin: 2,
    alignItems: "center",
  },
  image: {
    width: 190,
    height: 190,
    resizeMode: "cover",
  },
  imageName: {
    marginTop: 5,
    fontSize: 16,
    color: "#333",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  modalImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  closeButton: {
    fontSize: 16,
    color: "blue",
  },
});

export default Fotos;