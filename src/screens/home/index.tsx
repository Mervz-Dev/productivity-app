import React from 'react'
import {useNavigation} from '@react-navigation/native'
import {Stack, Button, YStack, Text} from 'tamagui'
import {useTaskStore} from '@/store/taskStore'

const HomeScreen = () => {
  const navigation = useNavigation()
  const {tasks} = useTaskStore()

  const navigateToTask = () => {
    navigation.navigate('Task')
  }

  return (
    <Stack borderRadius={10} flex={1}>
      <Button onPress={navigateToTask} size='$4'>
        Create Task
      </Button>
      {tasks.map(task => {
        return (
          <YStack key={task.time.toString()} marginHorizontal='$2'>
            <Text>{task.title}</Text>
            <Text>{task.description}</Text>
            <Text>{task.time}</Text>
          </YStack>
        )
      })}
    </Stack>
  )
}

export default HomeScreen
