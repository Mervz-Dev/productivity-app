import React from 'react'
import {Controller, Control, FieldValues, Path} from 'react-hook-form'
import {TextArea, TextAreaProps} from '../../TextArea'
import {Text} from '../../Text'

export interface TextAreaFieldProps<T extends FieldValues>
  extends TextAreaProps {
  control: Control<T, object>
  name: Path<T>
}

export const TextAreaField = <T extends FieldValues>({
  control,
  name,
  ...props
}: TextAreaFieldProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange, value}, formState: {errors}}) => {
        const errorMessage = errors[name]?.message
        return (
          <>
            <TextArea {...props} value={value} onChangeText={onChange} />
            {errorMessage && (
              <Text pt='$2' type='error'>
                {errorMessage}
              </Text>
            )}
          </>
        )
      }}
    />
  )
}
