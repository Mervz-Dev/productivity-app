import React from 'react'
import {useNavigation} from '@react-navigation/native'
import {Stack, Button} from 'tamagui'

const HomeScreen = () => {
  const navigation = useNavigation()

  const navigateToTask = () => {
    navigation.navigate('Task')
  }

  return (
    <Stack
      borderRadius={10}
      flex={1}
      justifyContent='center'
      alignItems='center'>
      <Button onPress={navigateToTask} size='$4'>
        Create Task
      </Button>
    </Stack>
  )
}

export default HomeScreen
