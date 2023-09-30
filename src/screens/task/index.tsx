import React from 'react'
// import {Icon} from '@/components'
import {TimeSelectionField, TextAreaField} from '@/components/Field'
import {ScrollView, Spacer, Button, YStack} from 'tamagui'
import {useForm} from 'react-hook-form'
import {useTaskStore} from '@/store/taskStore'
import {Task} from '@/types/task'
import {useNavigation} from '@react-navigation/native'
import {yupResolver} from '@hookform/resolvers/yup'
import validationSchema from './validationSchema'

const TaskScreen = () => {
  const navigation = useNavigation()
  const {addTask} = useTaskStore()
  const {control, reset, handleSubmit} = useForm<Task>({
    defaultValues: {
      title: '',
      description: '',
      time: '',
      finished: false,
    },
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = (values: Task) => {
    navigation.goBack()
    addTask(values)
    reset()
  }

  return (
    <YStack backgroundColor={'white'} flex={1} p='$4' paddingBottom='$6'>
      <ScrollView paddingTop='$6'>
        <TextAreaField
          control={control}
          name='title'
          type='underlined'
          placeholder='i want to...'
          fontWeight={'bold'}
          fontSize={'$6'}
        />

        <Spacer paddingBottom={'$6'} />

        <TextAreaField
          control={control}
          name='description'
          type='underlined'
          placeholder='i want to add more details...'
          fontSize={'$6'}
        />

        <Spacer paddingBottom={'$1'} />

        {/* <XStack space={'$3'} flexDirection='row-reverse'>
        <Icon name='check' size={24} color={'#a6a6a6'} />
        <Icon name='end-date' size={24} color={'#a6a6a6'} />
      </XStack> */}

        <TimeSelectionField control={control} title='Time' name='time' />

        {/* <Button onPress={() => reset()}>Clear</Button> */}
      </ScrollView>
      <Button
        onPress={handleSubmit(onSubmit)}
        backgroundColor={'$green10'}
        color='white'>
        Submit
      </Button>
    </YStack>
  )
}

export default TaskScreen
