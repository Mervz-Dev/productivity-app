import React from 'react'
import {Icon} from '@/components'
import {TimeSelectionField, TextAreaField} from '@/components/Field'
import {ScrollView, Spacer, XStack, Button} from 'tamagui'
import {useForm} from 'react-hook-form'

type TaskForm = {
  title: string
  description: string
  time: string
}

const TaskScreen = () => {
  const {control, reset, handleSubmit} = useForm<TaskForm>({
    defaultValues: {
      title: '',
      description: '',
      time: '',
    },
  })

  const onSubmit = (values: TaskForm) => {
    console.log(values, 'values')
  }

  return (
    <ScrollView p='$4' backgroundColor={'white'} paddingTop='$6'>
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

      <XStack space={'$3'} flexDirection='row-reverse'>
        <Icon name='check' size={24} color={'#a6a6a6'} />
        <Icon name='end-date' size={24} color={'#a6a6a6'} />
      </XStack>

      <TimeSelectionField control={control} title='Time' name='time' />

      <Button onPress={() => reset()}>Clear</Button>

      <Spacer paddingBottom={'$2'} />

      <Button
        onPress={handleSubmit(onSubmit)}
        backgroundColor={'$green6'}
        color='white'>
        Submit
      </Button>
    </ScrollView>
  )
}

export default TaskScreen
