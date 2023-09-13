import React from 'react'
import {View, Text} from 'react-native'
import {Icon} from '../../components'

const TaskScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Task Screen</Text>
      <Icon name='end-date' size={30} />
    </View>
  )
}

export default TaskScreen
