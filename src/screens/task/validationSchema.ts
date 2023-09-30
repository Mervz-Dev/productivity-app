import * as yup from 'yup'

export default yup.object().shape({
  title: yup.string().required('Enter a nice title for your task'),
  description: yup.string().default(''),
  time: yup.string().required('Please add time of reminder'),
  finished: yup.bool().default(false).required(),
})
