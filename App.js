import React from 'react';
import { Introscreen } from './src/screen/Introscreen';
import { Detailscreen } from './src/screen/Detailscreen';
import { ListScreen } from './src/screen/Listscreen';
import { CreditsScreen, creditsScreen } from './src/screen/CreditsScreen';
import { ThemesScreen } from './src/screen/ThemesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
const SideMenu = createDrawerNavigator();
const MainFlow = () => { 
  return (

    <Stack.Navigator initialRouteName="Intro">
      <Stack.Screen name="Intro" component={Introscreen} />
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Details" component={Detailscreen} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <SideMenu.Navigator initialRouteName="Main">
        <SideMenu.Screen name="Main" component={MainFlow} />
        <SideMenu.Screen name="Themes" component={ThemesScreen} />
        <SideMenu.Screen name="Credits" component={CreditsScreen} />
        
      </SideMenu.Navigator>



    </NavigationContainer>
  )
}


export default App


