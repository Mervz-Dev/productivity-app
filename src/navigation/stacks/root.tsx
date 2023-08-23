import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

// Stack screens
import HomeScreen from '../../screens/home'
import TaskScreen from '../../screens/task'

const Stack = createNativeStackNavigator()

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Task' component={TaskScreen} />
    </Stack.Navigator>
  )
}
