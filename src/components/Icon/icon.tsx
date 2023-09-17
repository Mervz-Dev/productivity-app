import React from 'react'
import {createIconSetFromIcoMoon} from 'react-native-vector-icons'
import {} from 'react-native'
import config from './selection.json'
import {IconName} from './types'
const IconComponent = createIconSetFromIcoMoon(config)
import * as Tama from 'tamagui'

Tama.setupReactNative({IconComponent})
const AppIcon = Tama.styled(IconComponent, {
  name: 'AppIcon',
})

type IconProps = Tama.GetProps<typeof AppIcon> & {name: IconName}

export const Icon = (props: IconProps) => {
  return <AppIcon color={'#000'} {...props} />
}
