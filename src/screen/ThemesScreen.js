import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button'
export const ThemesScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>ThemesScreen.</Text>
            <Button 
            onPress={()=>navigation.navigate('List')} 
            buttonText={"Lets Begin!"}
            />
        </View>
    )
}



const styles = StyleSheet.create({
    
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
