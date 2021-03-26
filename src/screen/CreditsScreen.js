import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button'
export const CreditsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>CreditsScreen.</Text>
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
