import * as Tama from 'tamagui'

export const Text = Tama.styled(Tama.Text, {
  name: 'AppText',

  variants: {
    type: {
      success: {
        color: '$green9',
      },
      error: {
        color: '$red9',
      },
    },
  } as const,
})

export type TextProps = Tama.GetProps<typeof Text>
