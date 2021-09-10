import { ThemeProvider } from 'styled-components/native';
import { Text,View } from 'react-native'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { theme } from './src/infrastructure/theme';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from './src/components/utility/safeArea.component';
import {Ionicons} from '@expo/vector-icons';
import { LocationContextProvider } from "./src/components/services/location/location.context";
import { RestaurantsContext, RestaurantsContextProvider } from './src/components/services/restaurants.context';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as useLato,
  Lato_400Regular,
} from '@expo-google-fonts/lato';


const Tab = createBottomTabNavigator();

const TAB_ICON={
  Restaurants:'md-restaurant',
  Map:'md-map',
  Settings:'md-settings'
}

const Settings=()=><SafeArea><Text>Settings</Text></SafeArea>
const Map=()=><SafeArea><Text>Map</Text></SafeArea>
 

const createScreenOptions=({route})=>{
  const iconName=TAB_ICON[route.name];
  return{
    tabBarIcon:({size,color})=>
    (<Ionicons name={iconName} size={size} color={color} />)
  };
}
export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if(!latoLoaded || !oswaldLoaded){
    return null
  }


  return (
    <>
    <ThemeProvider theme={theme}>
    <LocationContextProvider>
      <RestaurantsContextProvider>
      <NavigationContainer>
      <Tab.Navigator
       screenOptions={createScreenOptions}
       tabBarActiveTintColor= 'tomato'
      tabBarInactiveTintColor= 'gray'
      >
        <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Settings" component={Settings} />
        
      </Tab.Navigator>
      </NavigationContainer>
     </RestaurantsContextProvider>
     </LocationContextProvider>
      <ExpoStatusBar style='auto'/>
    </ThemeProvider>

    </>

  );
}


