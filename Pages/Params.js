import { View, Text, Image, ImageBackground, Switch, StyleSheet } from "react-native";
import React, { useState } from "react";

export default function Params() {

    const [isEnabledOne, setIsEnabledOne] = useState(false);
    const [isEnabledTwo, setIsEnabledTwo] = useState(false);
    const [isEnabledThree, setIsEnabledThree] = useState(false);
    const toggleSwitchOne = () => setIsEnabledOne(previousState => !previousState);
    const toggleSwitchTwo = () => setIsEnabledTwo(previousState => !previousState);
    const toggleSwitchThree = () => setIsEnabledThree(previousState => !previousState);

    return (
        // <ImageBackground source={require('../assets/pokeballSearch.jpg')} resizeMode="cover" style={styles.image}>
            <View style={styles.container}>
                <Text style={styles.title}>Accès aux droits du téléphone :</Text>
                <View style={styles.containerSwitch}>
                    <Text style={styles.center}>Activé l'orientation de l'écran</Text>
                    <View style={styles.switch}>
                        <Text style={styles.no}>Non</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "red" }}
                            thumbColor={isEnabledOne ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchOne}
                            value={isEnabledOne}
                        />
                        <Text style={styles.yes}>Oui</Text>
                    </View>
                </View>
                <View style={styles.containerSwitch}>
                    <Text style={styles.center}>Activé l'accès à la caméra</Text>
                    <View style={styles.switch}>
                        <Text style={styles.no}>Non</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#f5dd4b" }}
                            thumbColor={isEnabledTwo ? "red" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchTwo}
                            value={isEnabledTwo}
                        />
                        <Text style={styles.yes}>Oui</Text>
                    </View>
                </View>
                <View style={styles.containerSwitch}>
                    <Text style={styles.center}>Activé l'accès à la galerie d'images de votre téléphone</Text>
                    <View style={styles.switch}>
                        <Text style={styles.no}>Non</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "red" }}
                            thumbColor={isEnabledThree ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitchThree}
                            value={isEnabledThree}
                        />
                        <Text style={styles.yes}>Oui</Text>
                    </View>
                </View>
                <Image source={require('../assets/pikachu.png')} style={styles.image} />
            </View>
        // </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
    },
    switch: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10%",
    },
    no: {
        marginRight: "10%",
    },
    yes: {
        marginLeft: "10%",
    },
    center: {
        textAlign: "center",
        fontWeight: "bold",
    },
    title: {
        marginTop: "10%",
        fontWeight: "bold",
        fontSize: 25,
    },
    containerSwitch: {
        marginTop: "10%",
    },
    image: {
        width: "100%",
        height: "50%",
        flex: 1,
        justifyContent: "center",
    }
  });