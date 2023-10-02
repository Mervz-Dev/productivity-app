export const getMinHourValue = (value: string) => {
  const defaultTime = value
  const time = defaultTime.replace(':', ' ').split(' ')
  let hour = parseInt(time[0])
  const minute = parseInt(time[1])
  const amOrPM = time[2]

  if (amOrPM === 'PM') {
    hour = 12 + hour
  }

  return {hour, minute}
}
