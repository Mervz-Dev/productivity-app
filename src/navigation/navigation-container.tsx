import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import RootStack from './stacks/root'
import {useNavigationContainerRef} from '@react-navigation/native'

export default () => {
  const navigationRef = useNavigationContainerRef()
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  )
}
