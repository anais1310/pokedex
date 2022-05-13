import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, View, Text, Button } from "react-native";
import { retrieveData } from "./Utils/localStorage";
import CardPokemon from "../Components/CardPokemon";

export default function Team(props) {
    const { route, navigation, ...restProps } = props;

    const [team, setTeam] = useState([]);

    useEffect(() => {

        retrieveData("team").then((res) => {
            if (res) {
                let datas = JSON.parse(res);
                setTeam(datas);
            }
        });

    }, []);

    return (
        <>
            <View style={styles.containerTeam}>
                <Text style={styles.titre}>Voici la constitution de votre équipe</Text>
                <FlatList
                    data={team}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <CardPokemon name={item.name} url={"https://pokeapi.co/api/v2/pokemon/"+item.id } navigation={navigation}/>
                    )}
                    keyExtractor={(item) => item.name}
                    style={styles.list}
                    onEndReachedThreshold={0.5}
                />
                <Button 
                    onPress={() => retrieveData("team").then((res) => {
                        if (res) {
                            let datas = JSON.parse(res);
                            setTeam(datas);
                        }
                    })}
                    title="Recharger la page"
                    accessibilityLabel="Recharger page"      
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        alignItems: "center",
    },
    titre: {
        textAlign: "center",
        paddingTop: "10%",
        fontWeight: "bold",
        fontSize: 25,
        marginBottom: "5%"
    },
});