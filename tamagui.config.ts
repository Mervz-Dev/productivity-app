import {config} from '@tamagui/config'
import {createTamagui} from 'tamagui'
const tamaguiConfig = createTamagui(config)
// this makes typescript properly type everything based on the config

type Conf = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
export default tamaguiConfig
// be sure the import and declare module lines both use that same name
