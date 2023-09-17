import {config} from '@tamagui/config'
import {createTamagui} from 'tamagui'
// this makes typescript properly type everything based on the config
const tamaguiConfig = createTamagui(config)
type Conf = typeof tamaguiConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}
export default tamaguiConfig
// be sure the import and declare module lines both use that same name
