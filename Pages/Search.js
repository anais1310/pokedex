import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, Image, Text, TouchableOpacity, View } from "react-native";
import { getPokemons } from "../Components/api/PokeApi";
import ImageSearch from "../assets/pokeballSearch.jpg"

function Search(props){
  const { navigation, ...restProps } = props;
  const [text, onChangeText] = useState(null);
  const [searchPokemon, setSearchPokemon] = useState({});
  const buttonEnter = () => {
    getPokemons("https://pokeapi.co/api/v2/pokemon/"+text.toLowerCase())
      .then((pokemonDatas) =>
        {
          setSearchPokemon(pokemonDatas);
        }
      )
}

  return (
    <SafeAreaView>
      <Image source={require('../assets/pikachu.png')} style={styles.image} />
      <Text style={styles.titre}>Chercher un pokémon</Text>
      <TextInput
        style={styles.input}
        value={text} 
        onChangeText={onChangeText}
        onSubmitEditing={buttonEnter}
      />
      <Button onPress={() => buttonEnter()} title="Rechercher un pokémon" />
      {(searchPokemon === undefined) ?
        <View style={styles.containerImage}>
            <Text style={styles.texte}>Ce Pokémon n'existe pas !</Text>
            <Image style={styles.image}  source={ ImageSearch } />
          </View>
          : (searchPokemon.id) ?
          <TouchableOpacity onPress={() => navigation.navigate('PokemonDetail', { pokemonDatas: searchPokemon })}>
            <View style={styles.containerImage}>
              <Image style={styles.image} source={{ uri: searchPokemon.sprites.front_default }}/>
              <Text style={styles.texte}>{searchPokemon.name}</Text>
            </View>
          </TouchableOpacity> :
          <View style={styles.containerImage}>
            <Text style={styles.texte}>Pas de Pokémon recherché pour le moment...</Text>
            <Image style={styles.image}  source={ ImageSearch } />
          </View>
        }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop: 30,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: "auto",
    marginLeft: "auto",
    padding: 100,
  },
  texte: {
    textAlign: "center",
    marginTop: "10%",
  },
  containerImage: {
    backgroundColor: "#fff",
    paddingBottom: "10%",
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "10%",
    borderRadius: 15,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    padding: "3%",
  },
  titre: {
    textAlign: "center",
    paddingTop: "10%",
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: "5%"
  },
});

export default Search;