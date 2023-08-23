export type RootStackParamList = {
  Home: undefined
  Task: undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
