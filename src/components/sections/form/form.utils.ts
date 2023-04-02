import { translateObjectKeys } from '@/components/Modals/BuyModal/BuyModal.utils'
import {
  cleanObject,
  convertToStringObject,
  objectToString,
} from '@/utils/helpers/transformObject'
import * as yup from 'yup'

export type FormContacts = {
  name: string
  phone: string
}

export type FormValues = {
  contacts: FormContacts
}

export const initialState = {
  contacts: {
    name: '',
    phone: '',
  },
}

export const schema = yup
  .object()
  .shape({
    contacts: yup.object().shape({
      name: yup
        .string()
        .required('Это поле обязательно')
        .min(5, 'Минимум 5 символов'),
      phone: yup
        .string()
        .required('Это поле обязательно')
        .min(13, 'Минимум 9 символов'),
    }),
  })
  .required()

export const getFormattedData = (data: any) => {
  const result = convertToStringObject(data)
  const cleared = cleanObject(result)
  const translated = translateObjectKeys(cleared)
  const array = objectToString(translated)
  return array
}
