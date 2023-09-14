import React from 'react'
import {createIconSetFromIcoMoon} from 'react-native-vector-icons'
import config from './selection.json'
import {IconName} from './types'
const Icon = createIconSetFromIcoMoon(config)

type IconProps = {
  name: IconName
  size?: number
  color?: string
}

export default ({name, size = 12, color = '#000'}: IconProps) => {
  return <Icon name={name} size={size} color={color} />
}
