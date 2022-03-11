
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Pages/Home';
import PokemonDetail from '../../Pages/PokemonDetail';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function PokemonStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={Home} />
            <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
        </Stack.Navigator>
    )
}

export default function Navigation(){
    return(
        <>
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen options={{title: "Pokedex", headerTintColor: "white", headerStyle: {backgroundColor: "red"}}}
                name="Home"
                component={PokemonStack} />
                <Tab.Screen options={{title: "Recherche", headerTintColor: "white", headerStyle: {backgroundColor: "red"}}}
                name="Home2"
                component={PokemonStack} />
                <Tab.Screen options={{title: "Pokemon", headerTintColor: "white", headerStyle: {backgroundColor: "red"}}}
                name="Home3"
                component={PokemonStack}
                />
            </Tab.Navigator>
        </NavigationContainer>
        </>
    
    )
}