import * as Tama from 'tamagui'

export const TextArea = Tama.styled(Tama.TextArea, {
  name: 'AppTextArea',

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
        paddingBottom: '$5',
        focusStyle: {
          borderBottomColor: 'black',
        },
      },
    },
  } as const,
})

export type TextAreaProps = Tama.GetProps<typeof TextArea>
