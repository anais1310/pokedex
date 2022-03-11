import { TouchableOpacity, View, Image, Text } from "react-native"
import { useState } from "react"
import {getPokemons} from "../Components/api/PokeApi"
import baseImage from "../assets/pokeball.png"
import { StyleSheet } from "react-native"
import Navigation from "./Navigation/Navigation"

export default function CardPokemon(props){
    const{ navigation, url, name, ...restProps} = props

    const[pokemonDatas, setPokemonDatas] = useState([])
    const[pokemonImg, setPokemonImg] = useState(null)

    if (pokemonDatas.length === 0){
        getPokemons(url).then(data => {
            console.log(data)
            setPokemonDatas(data)
            setPokemonImg(data.sprites.front_default)
        })
    }

    return(
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('PokemonDetail')}>

        <View style={styles.containerImage}>
            { pokemonImg ?
                (<Image style={styles.image} source={{ uri : pokemonImg}} />) :
                (<Image style={styles.image}  source={ baseImage } />)    
        }
        </View>

        <View style={styles.containerInfo}>
            <Text style={styles.text}>{name}</Text>
        </View>

        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "space-between",
        width: "33.33%",
        maxWidth: 200,
        height: 150,
        padding: 5,
        marginBottom: 10,
        borderRadius: 5
    },
    containerInfo: {
        display: "flex",
        justifyContent: "space-between",
    },
    text: {
        height: 20,
        textAlign: "center"
    },
    containerImage: {
        height: "80%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderRadius: 15,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowColor: "black"

    },
    image: {
        width: "100%",
        height: "100%"
    }
});

  