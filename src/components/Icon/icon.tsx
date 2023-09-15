import React from 'react'
import {createIconSetFromIcoMoon} from 'react-native-vector-icons'
import config from './selection.json'
import {IconName} from './types'
const IconComponent = createIconSetFromIcoMoon(config)

export type IconProps = {
  name: IconName
  size?: number
  color?: string
}

export const Icon = ({name, size = 12, color = '#000'}: IconProps) => {
  return <IconComponent name={name} size={size} color={color} />
}
