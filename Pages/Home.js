import { StyleSheet, Text, View } from 'react-native';
import ListePokemons from '../Components/ListePokemons';


export default function Home(props) {

    const { navigation, ...restProps } = props;

  return (

    <>
      {/* <Text style={styles.titre}>POKÉDEX</Text> */}
      <View style={styles.container}>
        <ListePokemons navigation={navigation} />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titre: {
    //textAlign: "center",
    paddingTop: "10%",
    paddingBottom: "10%",
  }
});
