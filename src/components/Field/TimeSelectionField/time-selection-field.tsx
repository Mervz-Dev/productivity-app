import React from 'react'
import {Controller, Control, FieldValues, Path} from 'react-hook-form'
import {TimeSelection, TimeSelectionProps} from '../../Selection/TimeSelection'
import {Text} from '../../Text'

export interface TimeSelectionFieldProps<T extends FieldValues>
  extends TimeSelectionProps {
  title: string
  control: Control<T, object>
  name: Path<T>
}

export const TimeSelectionField = <T extends FieldValues>({
  title,
  ...props
}: TimeSelectionFieldProps<T>) => {
  return (
    <Controller
      {...props}
      render={({field: {onChange, value}, formState: {errors}}) => {
        const errorMessage = errors[props.name]?.message
        return (
          <>
            <TimeSelection value={value} title={title} onSelect={onChange} />
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
