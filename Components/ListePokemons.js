import { Text, View, StyleSheet, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { getPokemons, getPokemonsImages } from "./api/PokeApi";
import CardPokemon from "./CardPokemon";

export default function ListePokemons(props){

    const { navigation, ...restProps } = props;

    const[nextPage, setNextPage] = useState("https://pokeapi.co/api/v2/pokemon");
    const[listePokemon, setListePokemon] = useState([]);

    const loadPokemon = (url) => {
        getPokemons(url).then(datas => {
            setListePokemon([...listePokemon, ...datas.results])
            console.log(listePokemon)
            setNextPage(datas.next)
        })
    }
    useEffect(() => {
        loadPokemon(nextPage)
    }, []);
  
 
    return(
        <FlatList
          data={listePokemon}
          numColumns={3}
          renderItem={({item}) => 
              <CardPokemon name={item.name} url={item.url} navigation={navigation}></CardPokemon>
        }
          keyExtractor={(item) => item.name}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
              console.log("end")
              loadPokemon(nextPage)
          }}
        />
    );
}
