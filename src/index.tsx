import React, {Suspense} from 'react'
import NavigationContainer from './navigation/navigation-container'
import {TamaguiProvider} from 'tamagui'

import config from '../tamagui.config'

export default () => {
  return (
    <TamaguiProvider config={config}>
      <Suspense>
        <NavigationContainer />
      </Suspense>
    </TamaguiProvider>
  )
}
