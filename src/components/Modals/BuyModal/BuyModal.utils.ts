import * as yup from 'yup'
import {
  cleanObject,
  convertToStringObject,
  objectToString,
} from '@/utils/helpers/transformObject'

const defaultContacts = {
  name: '',
  phone: '',
}

export const defaultValues = {
  contacts: defaultContacts,
  objects: [],
  areas: [],
  preferences: [],
  cost: [],
}

const shemaContacts = yup.object().shape({
  name: yup
    .string()
    .required('Это поле обязательно')
    .min(5, 'Минимум 5 символов'),
  phone: yup
    .string()
    .required('Это поле обязательно')
    .min(13, 'Минимум 9 символов'),
})

export const schema = yup
  .object()
  .shape({
    contacts: shemaContacts,
    objects: yup.array().of(yup.string()),
    areas: yup.array().of(yup.string()),
    preferences: yup.array().of(yup.string()),
    cost: yup.array().of(yup.string()),
  })
  .required()

export const getFormattedData = (data: any) => {
  const result = convertToStringObject(data)
  const cleared = cleanObject(result)
  const translated = translateObjectKeys(cleared)
  const array = objectToString(translated)
  return array
}

export function translateObjectKeys(obj: { [key: string]: string }) {
  const result = {} as { [key: string]: string }
  Object.keys(obj).map((key) => {
    if (key === 'objects') result['Искомые объекты'] = obj[key]
    if (key === 'areas') result['Выбранные районы'] = obj[key]
    if (key === 'preferences') result['Пожелания'] = obj[key]
    if (key === 'cost') result['Стоимость'] = obj[key]
    if (key === 'name') result['Имя'] = obj[key]
    if (key === 'phone') result['Номер'] = obj[key]
  })

  return result
}
