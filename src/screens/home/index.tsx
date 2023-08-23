import React from 'react'
import {useNavigation} from '@react-navigation/native'
import {View, Text, Button} from 'react-native'

const HomeScreen = () => {
  const navigation = useNavigation()

  const navigateToTask = () => {
    navigation.navigate('Task')
  }

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Home Screen</Text>
      <Button title='Create Task' onPress={navigateToTask} />
    </View>
  )
}

export default HomeScreen
