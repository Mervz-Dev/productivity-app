import * as Tama from 'tamagui'

export const Input = Tama.styled(Tama.Input, {
  name: 'AppInput',

  variants: {
    type: {
      underlined: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '$color.gray8Light',
        borderRadius: 0,
        backgroundColor: '$backgroundTransparent',
        padding: '$1',
        includeFontPadding: true,
        focusStyle: {
          borderBottomColor: 'black',
        },
      },
    },
  } as const,
})
