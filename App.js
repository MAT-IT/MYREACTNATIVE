import React from 'react';
import { Introscreen, Detailscreen ,ListScreen,CreditsScreen,ThemesScreen} from './src/screen';
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


