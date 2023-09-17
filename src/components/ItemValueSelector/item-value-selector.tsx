import React from 'react'
import {Icon} from '@/components'
import {XStack, Text} from 'tamagui'
import {IconName} from '../Icon/types'

export type ItemValueSelectorProps = {
  leftIconName: IconName
  title: string
  value: string
  onPress?: () => void
}

export const ItemValueSelector = ({
  leftIconName,
  title,
  value,
  onPress,
}: ItemValueSelectorProps) => {
  return (
    <XStack
      onPress={onPress}
      alignItems='center'
      justifyContent='space-between'
      py={'$2'}>
      <XStack space={'$2'} alignItems='center'>
        <Icon name={leftIconName} size={20} color={'#a6a6a6'} />
        <Text>{title}</Text>
      </XStack>

      <XStack space={'$2'} alignItems='center'>
        <Text>{value}</Text>
        <Icon name='chevron-left' size={20} color={'#a6a6a6'} />
      </XStack>
    </XStack>
  )
}
