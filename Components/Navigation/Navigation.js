
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Pages/Home';
import PokemonDetail from '../../Pages/PokemonDetail';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';  
import Search from '../../Pages/Search';
import Team from '../../Pages/Team';
import Params from '../../Pages/Params';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function PokemonStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={Home} />
            <Stack.Screen name="PokemonDetail" component={PokemonDetail} />
            <Stack.Screen name="Search" component={Search} />
            <Stack.Screen name="Team" component={Team} />
            <Stack.Screen name="Params" component={Params} />
        </Stack.Navigator>
    )
}

export default function Navigation(){
    return(
        <>
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen options={{
                    title: "POKÉDEX", 
                    headerTintColor: "white", 
                    headerStyle: {backgroundColor: "red"}, 
                    // headerShown: false,
                    tabBarIcon:({tintColor})=>(  
                        <Icon name="home" size={25}/>  
                    ),  
                }}
                name="Home"
                component={PokemonStack} />
                <Tab.Screen options={{
                    title: "Recherche", 
                    headerTintColor: "white", 
                    headerStyle: {backgroundColor: "red"},
                    tabBarIcon:({tintColor})=>(  
                        <Icon name="search1" size={25}/>  
                    ),  
                }}
                name="Search"
                component={Search} />
                <Tab.Screen options={{
                    title: "Équipe", 
                    headerTintColor: "white", 
                    headerStyle: {backgroundColor: "red"},
                    tabBarIcon:({tintColor})=>(  
                        <Icon name="team" size={25}/>  
                    ), 
                }}
                name="Team"
                component={Team}
                />
                <Tab.Screen options={{
                    title: "Paramètres", 
                    headerTintColor: "white", 
                    headerStyle: {backgroundColor: "red"},
                    tabBarIcon:({tintColor})=>(  
                        <Icon name="setting" size={25}/>  
                    ), 
                }}
                name="Paramètres"
                component={Params}
                />
            </Tab.Navigator>
        </NavigationContainer>
        </>
    
    )
}