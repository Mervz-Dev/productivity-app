import React from 'react'
import {Controller, Control, FieldValues, Path} from 'react-hook-form'
import {Input, InputProps} from '../../Input'

export interface InputFieldProps<T extends FieldValues> extends InputProps {
  control: Control<T, object>
  name: Path<T>
}

export const InputField = <T extends FieldValues>({
  control,
  name,
  ...props
}: InputFieldProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({field: {onChange, value}}) => {
        return <Input {...props} value={value} onChangeText={onChange} />
      }}
    />
  )
}
