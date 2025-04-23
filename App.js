import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { ImageProvider } from "./components/PhotoContext";

import Profile from "./components/Profile";
import MainNavigation from "./components/MainNavigation";


//funcion que renderiza la App
const App = () => {
  /* ********** ACTUALIZADOR DE IMAGENES ********** */

  // ********** IMAGEN DEL BANNER **********
  const [selectedImageBanner, setSelectedImageBanner] = useState(null);

  // ********** MODAL **********

  return (
    <ImageProvider>
      <NavigationContainer>

        {/* Barra superior del menú del telefono */}
        <View style={{ width: "100%", height: 35, backgroundColor: "#000" }} ></View>

        <ScrollView style={{ backgroundColor: "#91E0C0" }}>
          {/* ************  SECCION PERIFL DEL USUARIO ***************** */}
          <Profile
            selectedImageBanner={selectedImageBanner}
            setSelectedImageBanner={setSelectedImageBanner}
          />

          {/* contenedor de   las publicaciones */}
          <View style={{width: "100%", height: 585 }}>

            {/* liea divisoria de info de perfil y las publicaciones */}
            <View style={{ width: "100%", height: 2, backgroundColor: "#e76d53" }} ></View>
            <MainNavigation />
          </View>

        </ScrollView>
      </NavigationContainer>

    </ImageProvider>
  );
};

export default App;
