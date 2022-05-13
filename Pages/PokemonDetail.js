import { View, Text, Image, Button } from "react-native";
import { StyleSheet } from "react-native"
import React, { useState, useEffect } from "react";
import { retrieveData, storeData } from "./Utils/localStorage";

export default function PokemonDetail(props) {

    const { route, ...restProps } = props;  
    const pokemonDatas = props.route.params.pokemonDatas;
    const types = [];
    const typesPokemon = pokemonDatas.types
    const [ team, setTeam ] = useState([]);

    // console.log(pokemonDatas)

    typesPokemon.forEach((data) => {
      types.push(<Text key="data.type.name">{data.type.name}</Text>)
    })

    const addPokemon = () => {
      console.log("poke ajout équipe")
      let myTeam = [pokemonDatas, ...team];
      setTeam(myTeam);
      storeData("team", JSON.stringify(myTeam))
    }

    useEffect( () => {

      retrieveData("team").then((res) => {
        if (res){
          let blabla = JSON.parse(res);
          setTeam(blabla);
        }
      })

    }, [])


    const deletePokemon = () => {
      console.log("poke supp équipe")
      let myTeam = team.filter((pokemon) => {
        return(pokemon.name != pokemonDatas.name)
      });
      setTeam(myTeam);
      storeData("team", JSON.stringify(myTeam))
    }

    return (
      <>
        <Text style={styles.titre}>Détails de {pokemonDatas.name}</Text>
        
        <View style={styles.containerImage}>
          <View>
              <Image style={styles.image} source={{ uri : pokemonDatas.sprites.front_default}} />
              <Image style={styles.image} source={{ uri : pokemonDatas.sprites.back_default}} />
          </View>
          <View>
              <Image style={styles.image} source={{ uri : pokemonDatas.sprites.front_shiny}} />
              <Image style={styles.image} source={{ uri : pokemonDatas.sprites.back_shiny}} />
          </View>
        </View>

        <Text style={styles.titre}>Abilités</Text>
          <Text style={styles.center}>{pokemonDatas.abilities[0].ability.name}</Text>
          <Text style={styles.center}>{pokemonDatas.abilities[1].ability.name}</Text>

        <Text style={styles.titre}>Types</Text>
          <Text style={styles.center}>{types}</Text>
          <View style={styles.containerButton}>
            {
              team.find((pokemon) => pokemon.name == pokemonDatas.name) == undefined ? (
                team.length >= 6 ? (
                  <Text style={styles.centerRed}>Désolé mais vous ne pouvez ajouter que 6 pokémons à votre équipe...</Text>
                ) : (
                  <Button 
                    onPress={() => addPokemon()}
                    title="Ajouter ce pokémon à votre équipe"
                    accessibilityLabel="Ajouter un pokémon dans votre équipe"
                  />
                )
              ) : (
                <Button 
                  onPress={() => deletePokemon()}
                  title="Supprimer ce pokémon de votre équipe"
                  color="red"
                  accessibilityLabel="Supprimer un pokémon dans votre équipe"
                />
              )
            }
          </View>
      </>
    );
  }

  const styles = StyleSheet.create({
    containerImage:{
      marginTop: "10%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 15,
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 0.1,
      shadowRadius: 10,
      padding: "3%",
      backgroundColor: "#fff",
      width: "60%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    image: {
      width: 100,
      height: 100,
    },
    titre: {
      textAlign: "center",
      paddingTop: "10%",
      fontWeight: "bold",
      fontSize: 25,
      marginBottom: "5%"
    },
    center: {
      textAlign: "center",
    },
    centerRed: {
      textAlign: "center",
      color: "red",
    },
    containerButton: {
      marginTop: "10%",
    }
});
