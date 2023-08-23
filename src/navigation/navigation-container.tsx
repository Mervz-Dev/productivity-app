import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import RootStack from './stacks/root'

export default () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}
