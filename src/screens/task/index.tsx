import React, {useEffect} from 'react'
// import {Icon} from '@/components'
import {TimeSelectionField, TextAreaField} from '@/components/Field'
import {ScrollView, Spacer, Button, YStack} from 'tamagui'
import {useForm} from 'react-hook-form'
import {useTaskStore} from '@/store/taskStore'
import {Task} from '@/types/task'
import {useNavigation} from '@react-navigation/native'
import {yupResolver} from '@hookform/resolvers/yup'
import validationSchema from './validationSchema'
import notifee, {TimestampTrigger, TriggerType} from '@notifee/react-native'
import {getMinHourValue} from '@/utils/time'

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

  useEffect(() => {
    notifee
      .getTriggerNotificationIds()
      .then(ids => console.log('All trigger notifications: ', ids))
  }, [])

  const createTriggerNotification = async (item: Task) => {
    const {hour, minute} = getMinHourValue(item.time)
    const date = new Date(Date.now())
    date.setHours(hour)
    date.setMinutes(minute)
    date.setSeconds(0)

    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(),
    }

    await notifee.createTriggerNotification(
      {
        id: '123',
        title: item.title,
        body: item.description,
      },
      trigger
    )
  }

  const onSubmit = async (values: Task) => {
    addTask(values)
    await createTriggerNotification(values)
    reset()

    navigation.goBack()
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
