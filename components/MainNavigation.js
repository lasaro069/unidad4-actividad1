import React from "react";
import { Image, Icon } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Publicaciones from "./Publicaciones";
import Fotos from "./Fotos";

/* CONSTANTE QUE PERMITE CAMBIAR ENTRE PANTALLAS */
const Tab = createBottomTabNavigator();

const MainNavigation = () => {

  return(


    <Tab.Navigator
      screenOptions={{
        tabBArShowIcon: false,
        tabBarStyle: {
          backgroundColor: "#3BA485",
          borderTop: 1,
          height: 55,
          borderColor: "#000",
        },
        tabBarActiveTintColor: "#FBC36C",
        tabBarInactiveTintColor: "#D3CFCE",
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: "800"
        }
      }}
    >

      <Tab.Screen 
        name="Publicaciones" 
        component={Publicaciones} 
        options={{
          headerShown: false,
          tabBarLabel: 'Recetas',
          tabBarIcon: ({ color, size }) => (

            <MaterialCommunityIcons name="newspaper-variant" color={color} size={size} />

            // <Image source={require("../assets/img/news.png")} name="news" color={color} size={size}  />
          )
        }}

           />

      <Tab.Screen 
        name="Fotos" 
        component={Fotos} 
        options={{
          headerShown: false,
          tabBarLabel: 'Fotos',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="camera" color={color} size={size} />
            //<Image source={require("../assets/img/camera.png")} name="camera" color={color} size={size}  />
          )
        }} />

    </Tab.Navigator>



  );
};

export default MainNavigation;