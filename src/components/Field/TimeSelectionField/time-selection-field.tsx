import React from 'react'
import {Controller, Control, FieldValues, Path} from 'react-hook-form'
import {TimeSelection, TimeSelectionProps} from '../../Selection/TimeSelection'

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
      render={({field: {onChange, value}}) => {
        return <TimeSelection value={value} title={title} onSelect={onChange} />
      }}
    />
  )
}
