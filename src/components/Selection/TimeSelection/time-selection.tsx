import React, {useState, useEffect} from 'react'
import {YStack, Sheet, Text, XStack} from 'tamagui'
import {ItemValueSelector} from '../../ItemValueSelector'
import DatePicker from 'react-native-date-picker'

const DEFAULT_TIME = '10:00 PM'
const DEFAULT_DISPLAY_VALUE = 'None'

export type TimeSelectionProps = {
  title: string
  // 10:00 PM
  // Format: hh:mm A
  value?: string
  onSelect?: (string: string) => void
}
export const TimeSelection = ({title, value, onSelect}: TimeSelectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const defaultTime = value || DEFAULT_TIME
  const time = defaultTime.replace(':', ' ').split(' ')
  let hour = parseInt(time[0])
  const minute = parseInt(time[1])
  const amOrPM = time[2]

  if (amOrPM === 'PM') {
    hour = 12 + hour
  }

  const defaultDate = new Date()
  defaultDate.setHours(hour)
  defaultDate.setMinutes(minute)

  const [date, setDate] = useState(defaultDate)
  const snapPoints = ['fit']

  const handlePick = () => {
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    setDate(defaultDate)
    setIsModalOpen(false)
  }

  const handleSelect = () => {
    let _hour = date.getHours()
    const _minute = date.getMinutes()
    let _amOrPM = 'AM'

    if (_hour === 0) {
      _hour = 12
    }

    if (_hour > 12) {
      _amOrPM = 'PM'
      _hour = _hour - 12
    }

    const timeString = `${_hour.toString().padStart(2, '0')}:${_minute
      .toString()
      .padStart(2, '0')} ${_amOrPM}`

    onSelect?.(timeString)
    setIsModalOpen(false)
  }

  useEffect(() => {}, [isModalOpen])

  return (
    <YStack>
      <ItemValueSelector
        leftIconName='start-date'
        title={title}
        value={value || DEFAULT_DISPLAY_VALUE}
        onPress={handlePick}
      />
      <Sheet
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        modal
        animation={'quick'}
        snapPointsMode='fit'
        snapPoints={snapPoints}>
        <Sheet.Overlay />
        <Sheet.Handle />
        <Sheet.Frame w={'100%'} alignItems='center' p='$6' pt='$3'>
          <Text>Time Selection</Text>
          <DatePicker mode='time' date={date} onDateChange={setDate} />
          <XStack justifyContent='space-evenly' w='100%'>
            <Text onPress={handleCancel} color={'red'}>
              CANCEL
            </Text>
            <Text onPress={handleSelect} color={'blue'}>
              DONE
            </Text>
          </XStack>
        </Sheet.Frame>
      </Sheet>
    </YStack>
  )
}
