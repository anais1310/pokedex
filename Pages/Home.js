import { StyleSheet, Text, View } from 'react-native';
import ListePokemons from '../Components/ListePokemons';


export default function Home(props) {

    const { navigation, ...restProps } = props;

  return (
    <View style={styles.container}>
        <ListePokemons navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
