import React, {useEffect} from 'react'
import {FlatList, ListRenderItem, Image} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Stack, H4, Paragraph, Text, Card, H3, XStack} from 'tamagui'
import {useTaskStore} from '@/store/taskStore'
import {Icon} from '@/components'
import {Task} from '@/types/task'
import QuotesAnimation from './components/QuotesAnimation'
import notifee, {AuthorizationStatus} from '@notifee/react-native'

const HomeScreen = () => {
  const navigation = useNavigation()
  const {tasks} = useTaskStore()

  const navigateToTask = () => {
    navigation.navigate('Task')
  }

  const requestUserPermission = async () => {
    const settings = await notifee.requestPermission()

    if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
      console.log('Permission settings:', settings)
    } else {
      console.log('User declined permissions')
    }
  }

  useEffect(() => {
    requestUserPermission()
  }, [])

  const renderItem: ListRenderItem<Task> = ({item}) => {
    return (
      <Card bordered marginVertical='$1.5' backgroundColor={'#FFFFFFB3'}>
        <Card.Header>
          <H4>{item.title}</H4>
          <Paragraph>{item.description}</Paragraph>
        </Card.Header>
        <Card.Footer padded paddingTop='$0'>
          <XStack alignItems='center' space='$1'>
            <Icon name='bell-alarm' size={18} color={'#000000'} />
            <Text>{item.time}</Text>
          </XStack>
        </Card.Footer>
      </Card>
    )
  }

  return (
    <Stack
      borderRadius={10}
      flex={1}
      backgroundColor={'white'}
      paddingHorizontal='$3'>
      <QuotesAnimation />
      <Image
        source={require('@/assets/image/mountain.jpg')}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          bottom: -260,
          right: 10,
          opacity: 0.5,
        }}
        resizeMode='contain'
      />

      {/* <Paragraph pt='$4' fontStyle='italic' alignSelf='center'>
        "You miss 100% of the shots you don’t take."
      </Paragraph> */}

      <FlatList
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => {
          return (
            <XStack
              alignItems='center'
              justifyContent='space-between'
              backgroundColor={'white'}
              paddingVertical='$2'
              paddingHorizontal='$1'>
              <H3>Quests for today</H3>
              <Icon
                name='plus'
                size={24}
                color={'#0096FF'}
                onPress={navigateToTask}
              />
            </XStack>
          )
        }}
        data={tasks}
        renderItem={renderItem}
        keyExtractor={item => item.time}
      />
    </Stack>
  )
}

export default HomeScreen
